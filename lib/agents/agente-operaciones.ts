import type { Agent } from "./types";

export const agenteOperaciones: Agent = {
  slug: "agente-operaciones",
  type: "agent",
  name: "Agente de Operaciones",
  category: "Operaciones",
  shortDescription:
    "Automatiza los flujos repetitivos que viven en Drive, Sheets, Notion y correo. Ahorra horas que tu equipo invierte en pensar, no en pegar.",
  catalogIcon: "Repeat2",

  hero: {
    headline: "Mata los flujos repetitivos.",
    description:
      "Esos procesos que viven en hojas de cálculo, carpetas de Drive y cadenas de correos — los que todos odian pero alguien tiene que hacer. El agente los identifica, los automatiza y deja a tu equipo con el trabajo que vale la pena.",
  },

  capabilities: [
    {
      icon: "FolderTree",
      title: "Organización en Drive",
      description:
        "Mueve, renombra y archiva documentos siguiendo tus convenciones. Detecta duplicados y propone limpieza.",
    },
    {
      icon: "ListTodo",
      title: "Pipelines en Sheets",
      description:
        "Actualiza hojas de cálculo desde múltiples fuentes, valida campos, marca anomalías. Tu equipo abre el sheet y todo está al día.",
    },
    {
      icon: "Mail",
      title: "Comunicación recurrente",
      description:
        "Envía emails de seguimiento, recordatorios y reportes a stakeholders en la cadencia que definas. Personalizados, no genéricos.",
    },
    {
      icon: "FileText",
      title: "Plantillas dinámicas",
      description:
        "Genera contratos, propuestas y documentos administrativos desde plantillas con los datos correctos de cada caso.",
    },
    {
      icon: "Database",
      title: "Sincronización entre herramientas",
      description:
        "Mantiene la verdad consistente entre Sheets, Notion, Slack y tu CRM. Sin migraciones — el agente es el puente.",
    },
    {
      icon: "Repeat2",
      title: "Workflows agendados",
      description:
        "Reportes diarios, cierres semanales, cargues mensuales. Lo que hoy alguien pone alarma para hacer, el agente lo ejecuta solo.",
    },
  ],

  integrations: [
    {
      label: "Productividad",
      items: [
        { slug: "googledrive", name: "Google Drive" },
        { slug: "googlesheets", name: "Google Sheets" },
        { slug: "googlecalendar", name: "Google Calendar" },
        { slug: "notion", name: "Notion" },
      ],
    },
    {
      label: "Comunicación",
      items: [
        { slug: "gmail", name: "Gmail" },
        { slug: "slack", name: "Slack" },
        { slug: "microsoftteams", name: "Teams" },
        { slug: "whatsapp", name: "WhatsApp" },
      ],
    },
    {
      label: "Datos",
      items: [
        { slug: "postgresql", name: "Postgres" },
        { slug: "supabase", name: "Supabase" },
        { slug: "microsoftexcel", name: "Excel" },
      ],
    },
  ],

  workflow: [
    {
      mode: "autonomo",
      title: "Modo autónomo",
      description:
        "El agente ejecuta los flujos en su agenda — actualiza sheets a las 7am, manda reporte a las 9, archiva al cierre del día. Tu equipo solo recibe lo finalizado.",
    },
    {
      mode: "on-demand",
      title: "On-demand",
      description:
        '"Saca de Drive todas las facturas del proveedor X de este trimestre y organízalas". El agente lo ejecuta y reporta cuando termina.',
    },
    {
      mode: "copiloto",
      title: "Modo copiloto",
      description:
        "Para procesos sensibles, el agente prepara la acción y espera tu OK. Útil cuando hay impacto sobre terceros (clientes, proveedores).",
    },
  ],

  useCases: [
    {
      title: "El sheet maestro que nadie actualiza a tiempo",
      before:
        "Un Google Sheet consolida data de 4 fuentes. Alguien tiene que copiar/pegar cada lunes. Cuando esa persona está enferma, gerencia se queda sin reporte.",
      after:
        "El agente lo actualiza cada hora desde las 4 fuentes, marca celdas con conflicto. El sheet está vivo y nadie depende de un humano.",
    },
    {
      title: "Carpetas de Drive convertidas en pantano",
      before:
        "/Documentos/Clientes/ tiene 14,000 archivos sin convención. Encontrar el contrato de un cliente toma 15 minutos buscando en 3 sub-carpetas.",
      after:
        "El agente reorganiza siguiendo tu nomenclatura, archiva lo viejo, marca duplicados. Cada contrato encontrable en 5 segundos.",
    },
    {
      title: "Reporte semanal que vive en bandeja de entrada",
      before:
        "Cada lunes alguien arma un reporte de cierre, lo pega en Slack y Teams. Si está de vacaciones, no hay reporte. Es 1 hora semanal por humano.",
      after:
        "El agente lo arma desde la data fresca, lo posta en los canales correctos, agrega comentarios sobre las variaciones notables. Imparable.",
    },
    {
      title: "Onboarding de proveedor sin proceso",
      before:
        "Un proveedor nuevo: pedir RUT por correo, crear carpeta en Drive, crear ficha en Notion, agregar al sheet de proveedores, notificar al área. 30 minutos cada vez.",
      after:
        "El agente recibe los datos por formulario, ejecuta los 5 pasos en paralelo, notifica a las áreas correctas. 2 minutos sin humano involucrado.",
    },
  ],

  metrics: [
    { value: "8 h", label: "Horas/semana liberadas en operaciones típicas" },
    { value: "100%", label: "Cobertura de procesos sin depender de personas" },
    { value: "10 min", label: "Onboarding de proveedor (antes: 30 min)" },
    { value: "0", label: "Reportes recurrentes con retraso" },
  ],
};
