import type { Agent } from "./types";

export const agenteVentas: Agent = {
  slug: "agente-ventas",
  type: "agent",
  name: "Agente de Ventas",
  category: "Ventas",
  shortDescription:
    "Califica leads, agenda demos y mueve oportunidades sin que tu equipo de ventas pierda foco.",
  catalogIcon: "Send",

  hero: {
    headline: "Tu equipo de ventas, sin el trabajo de oficina.",
    description:
      "Atiende inbounds 24/7, califica leads contra tu ICP, agenda demos en el calendario de la persona correcta y deja todo registrado en el CRM. Tus vendedores hablan con quien ya está listo para hablar.",
  },

  capabilities: [
    {
      icon: "MessageSquare",
      title: "Atención inbound 24/7",
      description:
        "Responde por WhatsApp, correo y formularios de tu sitio en segundos. Conversación natural, sin sonar a bot.",
    },
    {
      icon: "ClipboardCheck",
      title: "Calificación contra tu ICP",
      description:
        "Aplica tu definición de cliente ideal sobre cada lead. Marca como caliente, tibio o frío y enruta al rep correcto.",
    },
    {
      icon: "CalendarCheck",
      title: "Agenda demos automáticamente",
      description:
        "Sincroniza con Google Calendar / Outlook y agenda en la franja del rep, considerando zonas horarias y conflictos.",
    },
    {
      icon: "Mail",
      title: "Cadencias de seguimiento",
      description:
        "Construye y ejecuta secuencias multicanal: correo + WhatsApp + recordatorios. Se ajusta si el lead responde.",
    },
    {
      icon: "Workflow",
      title: "Sincroniza con tu CRM",
      description:
        "Cada interacción se registra en HubSpot o Salesforce. Notas, etapa, próxima acción — sin doble digitación.",
    },
    {
      icon: "Send",
      title: "Handoff transparente",
      description:
        "Cuando entrega al vendedor humano, le pasa el contexto completo de la conversación y la calificación.",
    },
  ],

  integrations: [
    {
      label: "Comunicación",
      items: [
        { slug: "whatsapp", name: "WhatsApp Business" },
        { slug: "gmail", name: "Gmail" },
        { slug: "microsoftoutlook", name: "Outlook" },
        { slug: "slack", name: "Slack" },
      ],
    },
    {
      label: "CRM",
      items: [
        { slug: "hubspot", name: "HubSpot" },
        { slug: "salesforce", name: "Salesforce" },
        { slug: "zoho", name: "Zoho CRM" },
      ],
    },
    {
      label: "Productividad",
      items: [
        { slug: "googlecalendar", name: "Google Calendar" },
        { slug: "googlesheets", name: "Google Sheets" },
        { slug: "notion", name: "Notion" },
      ],
    },
  ],

  workflow: [
    {
      mode: "autonomo",
      title: "Modo autónomo",
      description:
        "El agente atiende inbounds, califica y agenda sin intervención humana. Tu rep ve solo demos confirmadas en su agenda.",
    },
    {
      mode: "copiloto",
      title: "Modo copiloto",
      description:
        "El agente prepara borradores de respuesta y sugiere próximos pasos. Tu rep aprueba con un click. Útil para cuentas grandes.",
    },
    {
      mode: "on-demand",
      title: "On-demand",
      description:
        'Tu rep le pide tareas puntuales: "escríbele al lead X resumiendo la propuesta", "agenda 3 follow-ups este mes". Responde y ejecuta.',
    },
  ],

  useCases: [
    {
      title: "Inbound nocturno que no se enfría",
      before:
        "Un lead llena un formulario a las 11pm. Tu primer rep lo ve a las 9am del día siguiente. El lead ya habló con tu competencia.",
      after:
        "El agente responde en 2 minutos, califica con 3 preguntas inteligentes y, si pasa el filtro, agenda demo para el día siguiente.",
    },
    {
      title: "Cadencias que mueren a la tercera",
      before:
        "Tu rep arranca una cadencia de 7 toques. Por carga, a la tercera deja de seguir. El 60% de oportunidades se enfrían silenciosas.",
      after:
        "El agente sigue la cadencia hasta el final, ajustándose al comportamiento del lead. Pasa al humano solo cuando hay señal de compra.",
    },
    {
      title: "Datos del CRM siempre desfasados",
      before:
        "Las notas en el CRM están incompletas, las etapas mal puestas. El forecast del CEO se hace sobre data ruidosa.",
      after:
        "Cada conversación se registra automáticamente con resumen, sentiment y próxima acción. El pipeline refleja la realidad.",
    },
    {
      title: "Demos que no llegan",
      before:
        "Confirmas demo por WhatsApp, no entra al calendario, el cliente no llega. Pierdes el slot y la oportunidad.",
      after:
        "El agente confirma vía WhatsApp y crea el evento de calendario con link de Meet/Zoom. Envía recordatorio 24h y 1h antes.",
    },
  ],

  metrics: [
    { value: "<2 min", label: "Tiempo de primera respuesta a inbounds" },
    { value: "3×", label: "Más demos calificadas agendadas por semana" },
    { value: "100%", label: "Cobertura 24/7 sin contratar SDRs nocturnos" },
    { value: "0", label: "Leads perdidos por demora de respuesta" },
  ],
};
