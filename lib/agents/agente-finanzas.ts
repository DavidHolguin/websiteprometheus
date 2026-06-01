import type { Agent } from "./types";

export const agenteFinanzas: Agent = {
  slug: "agente-finanzas",
  type: "agent",
  name: "Agente de Finanzas",
  category: "Finanzas",
  shortDescription:
    "Procesa facturas, reconcilia movimientos y genera reportes desde Siesa o Siigo en lenguaje contable colombiano.",
  catalogIcon: "Calculator",

  hero: {
    headline: "El contador junior que nunca se cansa.",
    description:
      "Lee facturas en PDF e imagen, las captura en Siesa o Siigo, reconcilia movimientos bancarios y arma los reportes que te pide gerencia. Tu equipo de finanzas se libera para decisiones, no captura.",
  },

  capabilities: [
    {
      icon: "ScanLine",
      title: "Captura de facturas (OCR)",
      description:
        "Lee facturas en PDF, imagen o correo. Extrae NIT, valor, IVA, retenciones, fecha y conceptos con precisión auditable.",
    },
    {
      icon: "Receipt",
      title: "Registro en Siesa/Siigo",
      description:
        "Crea el documento contable en el módulo correcto con la cuenta PUC apropiada. Marca para aprobación si la regla no es clara.",
    },
    {
      icon: "Wallet",
      title: "Reconciliación bancaria",
      description:
        "Cruza extractos bancarios con asientos contables. Identifica diferencias, propone ajustes y los deja listos para aprobación.",
    },
    {
      icon: "FileSpreadsheet",
      title: "Reportes a la medida",
      description:
        "Genera P&G, flujo de caja, antigüedad de cartera y reportes ad-hoc. Exporta a Excel con formato listo para presentar.",
    },
    {
      icon: "BadgeDollarSign",
      title: "Control de cartera",
      description:
        "Monitorea vencimientos, envía recordatorios de pago automáticos y escala a tu cobrador humano cuando hay riesgo.",
    },
    {
      icon: "Calculator",
      title: "Cierres asistidos",
      description:
        "Prepara el cierre mensual: provisiones, depreciaciones, conciliaciones intercompañía. Entrega checklist con pendientes.",
    },
  ],

  integrations: [
    {
      label: "ERP",
      items: [
        { slug: "siesa", name: "Siesa" },
        { slug: "siigo", name: "Siigo" },
        { slug: "worldoffice", name: "World Office" },
      ],
    },
    {
      label: "Productividad",
      items: [
        { slug: "microsoftexcel", name: "Excel" },
        { slug: "googlesheets", name: "Google Sheets" },
        { slug: "googledrive", name: "Google Drive" },
      ],
    },
    {
      label: "Comunicación",
      items: [
        { slug: "gmail", name: "Gmail" },
        { slug: "microsoftoutlook", name: "Outlook" },
        { slug: "whatsapp", name: "WhatsApp" },
      ],
    },
  ],

  workflow: [
    {
      mode: "copiloto",
      title: "Modo copiloto (recomendado al inicio)",
      description:
        "El agente prepara el registro contable y te pide aprobación. Tu equipo confirma con un click. Aprendes a confiar antes de soltar autonomía.",
    },
    {
      mode: "autonomo",
      title: "Modo autónomo (cuando ya hay confianza)",
      description:
        "El agente captura, registra y reconcilia sin intervención. Solo escala lo que excede umbrales que tú definas (montos, conceptos nuevos).",
    },
    {
      mode: "on-demand",
      title: "On-demand (reportes y consultas)",
      description:
        '"Sácame el estado de cartera de la regional Cali al cierre de junio". Responde con el reporte y la fuente exacta.',
    },
  ],

  useCases: [
    {
      title: "Captura manual de facturas que come horas",
      before:
        "Tu auxiliar contable digita 200+ facturas al mes. Errores en NIT y conceptos generan ajustes posteriores. Tareas de mayor valor quedan en lista de espera.",
      after:
        "El agente captura las 200 facturas en Siesa con 99% de precisión. Tu auxiliar valida lo que el agente marca dudoso (5-10%) y se enfoca en análisis.",
    },
    {
      title: "Conciliación bancaria al cierre",
      before:
        "Al cierre de mes, conciliar el banco principal toma 2 días. Diferencias menores se quedan sin resolver porque no hay tiempo.",
      after:
        "El agente entrega la conciliación lista en horas, marca las 5-10 diferencias reales que requieren juicio humano. Cierre en 1 día.",
    },
    {
      title: "Reportes para gerencia que llegan tarde",
      before:
        'Gerencia pide "el P&G comparado YTD por unidad de negocio". Toma 4 horas armarlo cada vez. Llega el viernes en vez del lunes.',
      after:
        "El agente lo prepara en 10 minutos cuando lo pides. Lunes 8am en el correo de gerencia, con explicaciones de las variaciones clave.",
    },
    {
      title: "Cartera vencida que se enfría",
      before:
        "El cobrador humano contacta a los 30 días vencidos. Las facturas de $200-500k no las llama nadie. Suman millones al cierre.",
      after:
        "El agente envía recordatorio en día 1, 7, 15 vía email y WhatsApp. Escala al cobrador solo los casos con resistencia real.",
    },
  ],

  metrics: [
    { value: "99%", label: "Precisión en captura de facturas con OCR" },
    { value: "20×", label: "Más rápido para preparar reportes recurrentes" },
    { value: "1 día", label: "Conciliación bancaria mensual (antes: 2 días)" },
    { value: "0", label: "Pérdida de cartera por demora en cobro" },
  ],
};
