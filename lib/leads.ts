import "server-only";

/**
 * Alta de un lead del formulario del sitio.
 *
 * Dos destinos, los dos de la casa (Prometheus Labs):
 *   1. Twenty (`pipeline.prometheuslabs.com.co`) → persona + oportunidad, que es
 *      el registro comercial.
 *   2. Chatwoot (`bandeja.prometheuslabs.com.co`) → contacto + conversación en la
 *      bandeja de WhatsApp, para que quien atienda escriba desde ahí y el
 *      historial quede en el mismo hilo que usará el cliente cuando escriba.
 *
 * Reglas aprendidas en este ecosistema y que aquí se respetan:
 *   - El teléfono se manda a Twenty **en E.164** (prefijo y código de país
 *     aparte): con un número suelto, Twenty rechaza el alta entera.
 *   - El nombre de la oportunidad lleva el origen («<nombre> · <de dónde vino>»),
 *     que es lo que la hace legible en la lista del CRM.
 *   - Ningún destino puede tumbar a los demás: si uno falla, se registra y el
 *     lead se guarda con el que sí funcione.
 *
 * Variables de entorno (en Coolify, no en el repo):
 *   TWENTY_API_URL · TWENTY_API_KEY
 *   CHATWOOT_API_URL · CHATWOOT_API_TOKEN · CHATWOOT_ACCOUNT_ID · CHATWOOT_INBOX_ID
 */

const TWENTY_URL = (process.env.TWENTY_API_URL ?? "https://pipeline.prometheuslabs.com.co").replace(
  /\/$/,
  "",
);
const TWENTY_KEY = process.env.TWENTY_API_KEY ?? "";

const CHATWOOT_URL = (
  process.env.CHATWOOT_API_URL ?? "https://bandeja.prometheuslabs.com.co"
).replace(/\/$/, "");
const CHATWOOT_TOKEN = process.env.CHATWOOT_API_TOKEN ?? "";
const CHATWOOT_ACCOUNT = process.env.CHATWOOT_ACCOUNT_ID ?? "1";
const CHATWOOT_INBOX = Number(process.env.CHATWOOT_INBOX_ID ?? "2");

/** Primera etapa del embudo de servicios de la casa (`opportunity.stage`). */
const ETAPA_NUEVA = "NUEVO";

export interface Telefono {
  /** Número nacional sin prefijo (lo que espera Twenty). */
  nacional: string;
  /** Prefijo internacional, p. ej. "+57". */
  prefijo: string;
  /** Código ISO de país, p. ej. "CO". */
  pais: string;
  /** Número completo con "+", como lo guarda Chatwoot. */
  e164: string;
}

/**
 * Normaliza lo que escribió la persona. El sitio es colombiano, así que un
 * número de 10 dígitos (o de 12 que ya traiga el 57) es de Colombia; cualquier
 * otra cosa se deja como internacional y la valida Twenty.
 */
export function normalizarTelefono(crudo: string): Telefono | null {
  const digitos = crudo.replace(/\D/g, "");
  if (!digitos) return null;

  if (digitos.length === 12 && digitos.startsWith("57")) {
    const nacional = digitos.slice(2);
    return { nacional, prefijo: "+57", pais: "CO", e164: `+${digitos}` };
  }
  if (digitos.length === 10) {
    return { nacional: digitos, prefijo: "+57", pais: "CO", e164: `+57${digitos}` };
  }
  if (digitos.length > 10) {
    return { nacional: digitos, prefijo: "", pais: "", e164: `+${digitos}` };
  }
  return null;
}

export interface DatosLead {
  nombre: string;
  origen: string;
  telefono: Telefono | null;
  /** Lo que escribió la persona, por si no se pudo normalizar. */
  telefonoCrudo: string;
}

export interface Resultado {
  ok: boolean;
  /** Motivo legible cuando falla (nunca se muestra al visitante). */
  motivo?: string;
}

export function twentyConfigurado(): boolean {
  return Boolean(TWENTY_KEY);
}

export function chatwootConfigurado(): boolean {
  return Boolean(CHATWOOT_TOKEN);
}

async function graphql(
  query: string,
  variables: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const r = await fetch(`${TWENTY_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${TWENTY_KEY}` },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const json = (await r.json()) as {
    data?: Record<string, unknown>;
    errors?: { message: string }[];
  };
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join(" · "));
  }
  return json.data ?? {};
}

/**
 * Persona + oportunidad en el Twenty de la casa.
 * Devuelve el id de la persona y el de la oportunidad.
 */
export async function altaEnTwenty(
  datos: DatosLead,
): Promise<Resultado & { personaId?: string; oportunidadId?: string }> {
  if (!TWENTY_KEY) return { ok: false, motivo: "sin llave de Twenty configurada" };

  try {
    let persona: { id?: string } | undefined;
    if (datos.telefono) {
      const conTelefono = await graphql(
        `mutation($nombre:String!,$tel:String!,$prefijo:String!,$pais:String){
           createPerson(data:{
             name:{firstName:$nombre},
             phones:{primaryPhoneNumber:$tel,primaryPhoneCallingCode:$prefijo,primaryPhoneCountryCode:$pais}
           }){ id } }`,
        {
          nombre: datos.nombre,
          tel: datos.telefono.nacional,
          prefijo: datos.telefono.prefijo,
          pais: datos.telefono.pais,
        },
      ).catch(() => null);
      persona = conTelefono?.createPerson as { id?: string } | undefined;
    }
    if (!persona) {
      // Sin teléfono válido para Twenty: la persona entra igual y el número
      // queda en el nombre de la oportunidad para no perderlo.
      const sinTelefono = await graphql(
        `mutation($nombre:String!){ createPerson(data:{ name:{firstName:$nombre} }){ id } }`,
        { nombre: datos.nombre },
      );
      persona = sinTelefono.createPerson as { id?: string } | undefined;
    }
    if (!persona?.id) return { ok: false, motivo: "Twenty no devolvió la persona" };

    const telefonoTexto = datos.telefono?.e164 ?? datos.telefonoCrudo;
    const con = await graphql(
      `mutation($nombre:String!,$etapa:String!,$contacto:UUID){
         createOpportunity(data:{
           name:$nombre, stage:$etapa, pointOfContactId:$contacto
         }){ id } }`,
      {
        nombre: `${datos.nombre} · ${datos.origen}${datos.telefono ? "" : ` (${telefonoTexto})`}`,
        etapa: ETAPA_NUEVA,
        contacto: persona.id,
      },
    );
    const oportunidad = con.createOpportunity as { id?: string } | undefined;

    return { ok: true, personaId: persona.id, oportunidadId: oportunidad?.id };
  } catch (e) {
    return { ok: false, motivo: `Twenty: ${e instanceof Error ? e.message : String(e)}` };
  }
}

/**
 * Contacto + conversación en la bandeja de WhatsApp de la casa, con una nota
 * privada que dice de dónde salió el lead. La conversación nace «pendiente»
 * para que aparezca sin atender, que es lo que hay que hacer con ella.
 */
export async function avisoEnChatwoot(
  datos: DatosLead,
): Promise<Resultado & { conversacionId?: number }> {
  if (!CHATWOOT_TOKEN) return { ok: false, motivo: "sin token de Chatwoot configurado" };

  const api = async (ruta: string, cuerpo: unknown) => {
    const r = await fetch(`${CHATWOOT_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT}${ruta}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", api_access_token: CHATWOOT_TOKEN },
      body: JSON.stringify(cuerpo),
      cache: "no-store",
    });
    if (!r.ok) throw new Error(`Chatwoot ${r.status} en ${ruta}`);
    return (await r.json()) as Record<string, unknown>;
  };

  try {
    const telefono = datos.telefono?.e164 ?? datos.telefonoCrudo;
    const contacto = (await api("/contacts", {
      inbox_id: CHATWOOT_INBOX,
      name: datos.nombre,
      phone_number: telefono,
    })) as {
      payload?: { contact?: { id: number }; contact_inbox?: { source_id: string } };
    };
    const contactId = contacto.payload?.contact?.id;
    const sourceId = contacto.payload?.contact_inbox?.source_id ?? telefono.replace(/\D/g, "");
    if (!contactId) return { ok: false, motivo: "Chatwoot no devolvió el contacto" };

    const conversacion = (await api("/conversations", {
      source_id: sourceId,
      inbox_id: CHATWOOT_INBOX,
      contact_id: contactId,
      status: "pending",
    })) as { id?: number };
    if (!conversacion?.id) return { ok: false, motivo: "Chatwoot no devolvió la conversación" };

    await api(`/conversations/${conversacion.id}/messages`, {
      content: `Lead del sitio web (prometheuslabs.com.co) · interés: ${datos.origen} · contacto: ${telefono}`,
      message_type: "outgoing",
      private: true,
    });

    return { ok: true, conversacionId: conversacion.id };
  } catch (e) {
    return { ok: false, motivo: `Chatwoot: ${e instanceof Error ? e.message : String(e)}` };
  }
}
