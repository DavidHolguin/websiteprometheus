"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/content";

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
 * Recibe el lead del formulario:
 * 1. Valida con Zod
 * 2. Envía email al buzón comercial vía Resend
 * 3. Devuelve un link de WhatsApp para que el lead pueda continuar la
 *    conversación ahí mismo si quiere — opcional para él.
 *
 * Configurar: `RESEND_API_KEY` y opcionalmente `RESEND_FROM` en `.env.local`.
 * Si Resend no está configurado el form devuelve un mensaje claro y
 * sugiere usar WhatsApp directo.
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
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM ?? "Prometheus Labs <onboarding@resend.dev>";

  // Construimos un link de WhatsApp pre-llenado para el equipo —
  // se incluye en el email para que respondan con un click.
  const teamReplyMessage = `Hola ${name}, soy de Prometheus Labs. Vi que dejaste tu contacto interesándote por "${source}". ¿Cómo te ayudamos?`;
  const phoneDigits = phone.replace(/\D/g, "");
  const phoneWaUrl = `https://wa.me/${
    phoneDigits.startsWith("57") ? phoneDigits : `57${phoneDigits}`
  }?text=${encodeURIComponent(teamReplyMessage)}`;

  if (!apiKey) {
    // Fallback honesto: no inventamos un éxito que no existe.
    // El lead queda mejor servido yendo directo a WhatsApp.
    return {
      ok: false,
      error:
        "El buzón de leads aún no está configurado. Por favor escríbenos directamente por WhatsApp.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromAddress,
      to: site.contact.email,
      replyTo: undefined,
      subject: `Nuevo lead: ${name} — ${source}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 540px; padding: 24px; color: #111;">
          <div style="display: inline-flex; align-items: center; gap: 8px; padding: 4px 10px; border-radius: 999px; background: rgba(26,115,232,0.1); border: 1px solid rgba(26,115,232,0.3); color: #1a73e8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">
            Lead nuevo
          </div>
          <h2 style="margin: 0 0 18px 0; font-size: 22px;">${name}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; width: 110px;">Celular</td>
              <td style="padding: 8px 0; font-size: 15px;"><strong>${phone}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Interés en</td>
              <td style="padding: 8px 0; font-size: 15px;">${source}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #eee;">
            <a href="${phoneWaUrl}" style="display: inline-block; padding: 10px 18px; background: #25D366; color: white; text-decoration: none; border-radius: 999px; font-weight: 500;">
              Responder por WhatsApp
            </a>
          </div>
        </div>
      `,
    });
    return {
      ok: true,
      whatsappUrl: `https://wa.me/${site.contact.whatsappRaw}?text=${encodeURIComponent(
        `Hola Prometheus, soy ${name}. Acabo de dejar mi contacto para hablar sobre "${source}".`,
      )}`,
    };
  } catch (err) {
    console.error("[submitLead] Resend error:", err);
    return {
      ok: false,
      error: "No pudimos registrar tu contacto. Por favor escríbenos directamente por WhatsApp.",
    };
  }
}
