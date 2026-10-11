"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/content";
import { altaEnTwenty, avisoEnChatwoot, normalizarTelefono } from "@/lib/leads";

const LeadSchema = z.object({
  name: z
    .string({ error: "Cuéntanos tu nombre." })
    .trim()
    .min(2, "Cuéntanos tu nombre.")
    .max(80, "Eso es muy largo."),
  phone: z
    .string({ error: "Necesitamos tu celular para contactarte." })
    .trim()
    .min(7, "El número parece incompleto.")
    .max(20, "El número parece demasiado largo.")
    .regex(/^[\d+\s()-]+$/, "Solo dígitos, espacios o + ( ) -"),
  /** Página o agente de origen — preservado como metadata. */
  source: z.string().trim().max(120).optional().default("Sin contexto"),
});

export type LeadState = {
  ok: boolean;
  error?: string;
  /** Mensaje de éxito personalizado (incluye link a WhatsApp). */
  whatsappUrl?: string;
};

/**
 * Recibe el lead del formulario y lo registra en los dos sistemas de la casa:
 *
 * 1. **Twenty** → persona + oportunidad (el registro comercial).
 * 2. **Chatwoot** → contacto + conversación en la bandeja de WhatsApp, con nota
 *    privada del origen, para contestarle desde ahí.
 *
 * El correo por Resend es opcional: si hay `RESEND_API_KEY` se manda además. Si
 * ningún destino acepta el lead, se dice la verdad y se ofrece WhatsApp — nunca
 * se simula un éxito que no existió.
 */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const parsed = LeadSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    source: formData.get("source"),
  });

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Revisa los campos.";
    return { ok: false, error: firstError };
  }

  const { name, phone, source } = parsed.data;
  const telefono = normalizarTelefono(phone);
  const datos = { nombre: name, origen: source, telefono, telefonoCrudo: phone };

  // Los dos destinos corren en paralelo: que uno falle no bloquea al otro.
  const [twenty, chatwoot, correo] = await Promise.all([
    altaEnTwenty(datos),
    avisoEnChatwoot(datos),
    enviarCorreo(datos),
  ]);

  const guardado = twenty.ok || chatwoot.ok || correo.ok;
  console.log(
    `[lead] ${name} · ${source} · twenty=${twenty.ok ? (twenty.personaId ?? "sí") : `no (${twenty.motivo})`}` +
      ` · chatwoot=${chatwoot.ok ? (chatwoot.conversacionId ?? "sí") : `no (${chatwoot.motivo})`}` +
      ` · correo=${correo.ok ? "sí" : `no (${correo.motivo})`}`,
  );

  if (!guardado) {
    return {
      ok: false,
      error: "No pudimos registrar tu contacto. Por favor escríbenos directamente por WhatsApp.",
    };
  }

  return {
    ok: true,
    whatsappUrl: `https://wa.me/${site.contact.whatsappRaw}?text=${encodeURIComponent(
      `Hola Prometheus, soy ${name}. Acabo de dejar mi contacto para hablar sobre "${source}".`,
    )}`,
  };
}

/**
 * Correo al buzón comercial. Es el camino viejo (`RESEND_API_KEY`): se mantiene
 * como respaldo mientras no haya SMTP propio, pero ya no es el único destino.
 */
async function enviarCorreo(datos: {
  nombre: string;
  origen: string;
  telefonoCrudo: string;
}): Promise<{ ok: boolean; motivo?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, motivo: "sin RESEND_API_KEY" };

  const fromAddress = process.env.RESEND_FROM ?? "Prometheus Labs <onboarding@resend.dev>";
  const digits = datos.telefonoCrudo.replace(/\D/g, "");
  const waUrl = `https://wa.me/${digits.startsWith("57") ? digits : `57${digits}`}?text=${encodeURIComponent(
    `Hola ${datos.nombre}, soy de Prometheus Labs. Vi que dejaste tu contacto interesándote por "${datos.origen}". ¿Cómo te ayudamos?`,
  )}`;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromAddress,
      to: site.contact.email,
      subject: `Nuevo lead: ${datos.nombre} — ${datos.origen}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 540px; padding: 24px; color: #111;">
          <div style="display: inline-flex; align-items: center; gap: 8px; padding: 4px 10px; border-radius: 999px; background: rgba(26,115,232,0.1); border: 1px solid rgba(26,115,232,0.3); color: #1a73e8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">
            Lead nuevo
          </div>
          <h2 style="margin: 0 0 18px 0; font-size: 22px;">${datos.nombre}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; width: 110px;">Celular</td>
              <td style="padding: 8px 0; font-size: 15px;"><strong>${datos.telefonoCrudo}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Interés en</td>
              <td style="padding: 8px 0; font-size: 15px;">${datos.origen}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #eee;">
            <a href="${waUrl}" style="display: inline-block; padding: 10px 18px; background: #25D366; color: white; text-decoration: none; border-radius: 999px; font-weight: 500;">
              Responder por WhatsApp
            </a>
          </div>
        </div>
      `,
    });
    return { ok: true };
  } catch (err) {
    console.error("[submitLead] Resend error:", err);
    return { ok: false, motivo: "Resend rechazó el envío" };
  }
}
