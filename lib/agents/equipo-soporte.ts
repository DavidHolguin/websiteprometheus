import type { Agent } from "./types";

export const equipoSoporte: Agent = {
  slug: "equipo-soporte",
  type: "team",
  name: "Equipo de Soporte",
  category: "Soporte al cliente",
  shortDescription:
    "Tres agentes coordinados: primer contacto + escalamiento técnico + síntesis de KB. Cobertura 24/7 sobre tu base de conocimiento.",
  catalogIcon: "LifeBuoy",

  hero: {
    headline: "Soporte 24/7 que conoce tu producto.",
    description:
      "Un equipo de tres agentes especializados que se coordinan: uno recibe, otro escala lo técnico, otro mantiene viva la base de conocimiento. Tu equipo humano atiende solo lo que de verdad necesita criterio humano.",
  },

  capabilities: [
    {
      icon: "MessageCircle",
      title: "Atención multicanal",
      description:
        "Chat en tu sitio, WhatsApp, Slack del cliente, email. Una conversación, sin importar por dónde entre.",
    },
    {
      icon: "LifeBuoy",
      title: "Resolución en primer contacto",
      description:
        "El 70% de tickets recurrentes se resuelven sin ticket. Solo se abre cuando hay algo que requiere acción humana.",
    },
    {
      icon: "Shuffle",
      title: "Escalamiento inteligente",
      description:
        "Cuando hay que pasar al humano, el ticket llega con resumen, contexto, intentos previos y un primer diagnóstico técnico.",
    },
    {
      icon: "BookOpen",
      title: "KB que se actualiza sola",
      description:
        "Cada resolución alimenta la base de conocimiento. El equipo aprende del propio histórico, no de manuales viejos.",
    },
    {
      icon: "Sparkles",
      title: "Tono de tu marca",
      description:
        "Configurable: formal, cercano, técnico, irónico. Tu cliente sigue sintiendo que habla con tu equipo, no con cualquier bot.",
    },
    {
      icon: "Headphones",
      title: "Métricas en vivo",
      description:
        "CSAT, FRT, deflection rate, casos por categoría — dashboard en tiempo real. Sabes cómo va el soporte sin esperar al lunes.",
    },
  ],

  teamMembers: [
    {
      name: "Triage",
      role: "Primer contacto",
      description:
        "Atiende el ingreso, identifica la intención y resuelve si hay respuesta clara en la KB. Si no, pasa el contexto a Escalator o al humano.",
    },
    {
      name: "Escalator",
      role: "Diagnóstico técnico",
      description:
        "Maneja consultas que requieren cruzar datos del cliente, logs o documentación técnica. Llega al diagnóstico antes de molestar a tu equipo.",
    },
    {
      name: "Curator",
      role: "Mantiene la KB",
      description:
        "Cada resolución pasada por Triage o Escalator la sintetiza en un artículo nuevo o actualiza uno existente. La KB nunca envejece.",
    },
  ],

  integrations: [
    {
      label: "Mensajería",
      items: [
        { slug: "whatsapp", name: "WhatsApp Business" },
        { slug: "slack", name: "Slack" },
        { slug: "microsoftteams", name: "Teams" },
        { slug: "intercom", name: "Intercom" },
      ],
    },
    {
      label: "Tickets",
      items: [
        { slug: "zendesk", name: "Zendesk" },
        { slug: "hubspot", name: "HubSpot Service" },
        { slug: "notion", name: "Notion" },
      ],
    },
    {
      label: "Conocimiento",
      items: [
        { slug: "notion", name: "Notion" },
        { slug: "googledrive", name: "Google Drive" },
        { slug: "github", name: "GitHub Wiki" },
      ],
    },
  ],

  workflow: [
    {
      mode: "autonomo",
      title: "Modo autónomo (sobre KB validada)",
      description:
        "Triage y Escalator resuelven solos cuando la KB cubre el caso. Configuras umbrales de confianza — por debajo, escala a humano.",
    },
    {
      mode: "copiloto",
      title: "Modo copiloto (durante onboarding)",
      description:
        "Las primeras semanas, el equipo prepara borrador de respuesta y tu agente humano lo valida. Aprendes y entrenas el tono.",
    },
    {
      mode: "on-demand",
      title: "On-demand (análisis y campañas)",
      description:
        '"¿Qué tickets se repiten esta semana?" "Notifica a todos los clientes afectados por X bug." El equipo lo ejecuta cuando lo pides.',
    },
  ],

  useCases: [
    {
      title: "Tickets repetitivos que saturan al equipo",
      before:
        "El 60% de los tickets son sobre las mismas 10 cosas (cómo cambiar contraseña, dónde está la factura, cómo cancelar). Tu equipo se quema en lo repetido.",
      after:
        "El 60% se resuelve sin tocar a tu equipo. Las consultas nuevas reciben atención humana de calidad.",
    },
    {
      title: "Soporte de madrugada que pierde clientes",
      before:
        "Un cliente enterprise tiene urgencia un sábado 2am. Tu primer rep responde el lunes 9am. El cliente ya escaló por LinkedIn.",
      after:
        "El equipo atiende, diagnostica, y si requiere humano, despierta a tu on-call con el diagnóstico hecho. El cliente no se entera de la diferencia.",
    },
    {
      title: "KB que nadie actualiza",
      before:
        'El artículo "Cómo configurar X" tiene 2 años y refleja una versión vieja del producto. Los clientes lo siguen y se confunden.',
      after:
        "Curator detecta el desfase desde los tickets reales y actualiza el artículo. La KB es la voz actual del producto.",
    },
    {
      title: "Sin visibilidad de qué genera fricción",
      before:
        "Sabes que llegan tickets pero no qué los genera. Aceptas el ruido como costo de hacer negocios.",
      after:
        "Dashboard semanal: los 3 puntos de fricción que más se repitieron, cuántos clientes los tuvieron, qué cambios en producto los matarían.",
    },
  ],

  metrics: [
    { value: "70%", label: "Tickets resueltos sin tocar a tu equipo" },
    { value: "<1 min", label: "Tiempo de primera respuesta, todos los canales" },
    { value: "24/7", label: "Cobertura sin contratar turnos nocturnos" },
    { value: "+40 pp", label: "CSAT promedio sobre baseline pre-implementación" },
  ],
};
