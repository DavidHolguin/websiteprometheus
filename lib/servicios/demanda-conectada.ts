import type { Servicio } from "./types";

/**
 * Línea 4 — demanda que termina en la operación.
 *
 * No se vende como agencia: se vende como la capa de captación de lo que ya
 * construimos. La diferencia con una agencia es que el lead no termina en una
 * hoja: entra a la base y dispara el flujo de contacto.
 */
export const demandaConectada: Servicio = {
  slug: "demanda-conectada",
  nombre: "Demanda conectada",
  categoria: "Generación de demanda",
  entrada: false,
  resumen:
    "Campañas en Meta, Google y TikTok que terminan en tu operación: el lead entra a la base y la conversación arranca en minutos.",
  iconoCatalogo: "Sparkles",
  paraQuien:
    "Para empresas que ya invierten en pauta y cuya queja no es el anuncio, sino lo que pasa después: el lead se enfría y nadie sabe qué pasó con la plata.",
  hero: {
    headline: "Pauta que termina en tu operación, no en una hoja.",
    description:
      "Diseñamos la demanda para lo que ya vendes y conectamos el anuncio con la conversación: el contacto entra a la base, recibe respuesta en minutos y queda medido desde el clic hasta la venta.",
  },
  problema: [
    {
      title: "El lead que se enfría",
      before:
        "Entran mensajes de cuatro plataformas distintas, cada uno con su bandeja, y quien contesta primero gana. Muchos nunca reciben respuesta.",
      after:
        "Todo contacto cae en un mismo lugar, con su origen, y recibe respuesta rápido. Lo que no se atiende queda visible, con responsable.",
    },
    {
      title: "El anuncio que nadie mide de verdad",
      before:
        "Se sabe cuánto se gastó y cuántos mensajes llegaron, pero no cuántos se convirtieron ni cuánto costó cada venta.",
      after:
        "El gasto se cruza con la conversación y con la venta: costo por contacto y por venta, campaña por campaña.",
    },
    {
      title: "Las piezas que nunca alcanzan",
      before:
        "Se produce un video al mes y se espera que rinda; cuando no rinde, no hay plan B ni tiempo para rehacerlo.",
      after:
        "Se producen varias versiones por ciclo, con el mismo mensaje y distinto gancho, y las que rinden se escalan.",
    },
  ],
  capacidades: [
    {
      icon: "MessageSquare",
      title: "Captación hacia la base",
      description:
        "Los contactos de Meta, Google y TikTok entran a tus tablas, no a un archivo suelto ni al teléfono de un vendedor.",
    },
    {
      icon: "Send",
      title: "Respuesta en minutos",
      description:
        "El primer contacto se atiende de inmediato, por WhatsApp, con lo que la persona buscaba a la vista del asesor.",
    },
    {
      icon: "BadgeDollarSign",
      title: "Medición hasta la venta",
      description:
        "Inversión, contactos, conversaciones y cierres en un tablero. Si una campaña no cierra, se dice y se apaga.",
    },
    {
      icon: "Sparkles",
      title: "Piezas en serie",
      description:
        "Producción de versiones por ciclo —guion, video y pieza estática— para que la iteración no dependa de una sola creación.",
    },
    {
      icon: "Shuffle",
      title: "Reparto por responsable",
      description:
        "Los contactos se reparten por reglas (ciudad, producto, turno) y las conversaciones sin atender escalan solas.",
    },
    {
      icon: "Database",
      title: "Datos para decidir",
      description:
        "Qué anuncio trae a quién, qué preguntan y dónde se cae la conversación. Es la información con la que se ajusta la pauta y la oferta.",
    },
  ],
  pasos: [
    {
      numero: "01",
      title: "Diagnóstico de demanda",
      duration: "1 a 2 semanas",
      description:
        "Qué vendes, a quién, con qué margen y qué está pasando hoy con los contactos que llegan. Salimos con la propuesta de oferta y el embudo medible.",
    },
    {
      numero: "02",
      title: "Montaje",
      duration: "2 a 3 semanas",
      description:
        "Campañas, captación a la base, respuesta automática inicial y tablero de medición. Se arranca con presupuesto acotado y se escala con datos.",
    },
    {
      numero: "03",
      title: "Operación y optimización",
      duration: "mensual",
      description:
        "Iteración de piezas, ajuste de segmentos y presupuesto, y revisión de resultados con el equipo comercial. La inversión se acuerda con un tope claro.",
    },
  ],
  integraciones: [
    {
      label: "Plataformas de pauta",
      items: [
        { slug: "meta", name: "Meta Ads" },
        { slug: "instagram", name: "Instagram" },
        { slug: "facebook", name: "Facebook" },
        { slug: "googleads", name: "Google Ads" },
        { slug: "tiktok", name: "TikTok Ads" },
      ],
    },
    {
      label: "Destino del contacto",
      items: [
        { slug: "whatsapp", name: "WhatsApp Business" },
        { slug: "supabase", name: "Supabase" },
        { slug: "postgresql", name: "Postgres" },
        { slug: "n8n", name: "n8n" },
      ],
    },
    {
      label: "Medición",
      items: [
        { slug: "googleanalytics", name: "Analytics" },
        { slug: "googletagmanager", name: "Tag Manager" },
        { slug: "googlesearchconsole", name: "Search Console" },
      ],
    },
  ],
  arquitectura: [
    {
      title: "La inversión es del cliente, directa a la plataforma",
      description:
        "El presupuesto se paga a Meta, Google o TikTok. Nosotros administramos las campañas y reportamos; no intermediamos el gasto ni cobramos por encima de la pauta.",
    },
    {
      title: "Un solo destino para todos los contactos",
      description:
        "Meta, Google y TikTok entregan al mismo lugar: la base y la bandeja de la empresa. Sin cinco pestañas abiertas ni leads huérfanos.",
    },
    {
      title: "Medición de punta a punta",
      description:
        "Identificadores de campaña que viajan con el contacto hasta la conversación y la venta. Sin eso, cualquier promesa de rendimiento es una opinión.",
    },
    {
      title: "Tope de inversión acordado",
      description:
        "El contrato fija el tope mensual de pauta y de consumo. Si hay que pasarlo, se pide antes, no se descubre en la factura.",
    },
  ],
  evidencia: [
    {
      sector: "Comercialización inmobiliaria",
      situacion:
        "La pauta traía mensajes y comentarios que se contestaban desde el teléfono de cada asesor, sin registro.",
      resultado:
        "Los contactos de anuncios entran al CRM con su campaña de origen y se convierten en oportunidades con seguimiento.",
    },
    {
      sector: "Movilidad y servicios",
      situacion:
        "El interés llegaba por varios canales y no había forma de saber cuál traía clientes reales.",
      resultado:
        "Un solo tablero de inversión, contactos y conversaciones por canal, con el costo por contacto a la vista.",
    },
    {
      sector: "Servicios profesionales",
      situacion: "La inversión se evaluaba por número de mensajes, sin cruzar con ventas cerradas.",
      resultado:
        "El reporte llega hasta la venta, y las campañas que no cierran se apagan o se corrigen.",
    },
  ],
  incluye: [
    "Diagnóstico de oferta, audiencia y competencia",
    "Diseño del embudo y de la propuesta comercial",
    "Montaje de campañas en Meta, Google y TikTok",
    "Captación de contactos directo a tu base",
    "Respuesta inicial automatizada por WhatsApp",
    "Tablero de inversión, contactos, conversaciones y cierres",
    "Producción de piezas por ciclo para iterar",
    "Reunión mensual de resultados con el equipo comercial",
  ],
  faqs: [
    {
      q: "¿Manejan nuestras cuentas publicitarias?",
      a: "Sí, se administran con permisos de socio sobre tus cuentas, o se trabaja desde las de la casa cuando el cliente lo prefiere. En cualquier caso, la facturación de la pauta es tuya y va directa a la plataforma.",
    },
    {
      q: "¿Garantizan ventas?",
      a: "No. Garantizamos un proceso medible: campañas conectadas, respuesta rápida y un tablero que muestra hasta dónde llega cada peso. El resultado depende también de la oferta, el precio y la operación comercial, y eso se revisa desde el diagnóstico.",
    },
    {
      q: "¿En cuánto tiempo se ve algo?",
      a: "Los primeros contactos llegan en la primera semana de campaña; el tiempo para juzgar qué funciona es de uno a dos meses, porque hay que dejar que las plataformas aprendan y comparar piezas.",
    },
    {
      q: "¿Esto sirve si ya tengo quien maneje la pauta?",
      a: "En ese caso lo útil es la segunda mitad: captación a la base, respuesta en minutos y medición hasta la venta. Se puede montar sin tocar quién maneja las campañas.",
    },
  ],
  cta: {
    titulo: "Hablemos de lo que pasa después del clic.",
    descripcion:
      "Revisamos tu inversión actual y qué ocurre con los contactos que llegan. Te llevas el diagnóstico del embudo y la propuesta de medición, aunque la pauta la sigas manejando tú.",
    whatsapp: "Hola Prometheus, quiero revisar mi generación de demanda.",
  },
};
