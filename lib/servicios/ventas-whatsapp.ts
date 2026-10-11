import type { Servicio } from "./types";

/**
 * Línea 1 — el canal donde Colombia ya vende.
 *
 * Encuadre deliberado: no se vende «un agente autónomo que atiende todo», se
 * vende el **trabajo transaccional** (cotizar, cobrar, informar estado, agendar)
 * con métrica y con salida a una persona. Lo demás es lo que se cae solo.
 */
export const ventasWhatsapp: Servicio = {
  slug: "ventas-whatsapp",
  nombre: "Ventas por WhatsApp",
  categoria: "Canal transaccional",
  entrada: true,
  resumen:
    "El WhatsApp de la empresa cotiza, cobra y responde el estado de cada pedido sin que nadie copie y pegue.",
  iconoCatalogo: "MessageCircle",
  paraQuien:
    "Para negocios que ya venden por WhatsApp y cuyo equipo comercial responde a mano lo mismo cien veces al día.",
  hero: {
    headline: "Tu WhatsApp deja de ser un chat y se vuelve mostrador.",
    description:
      "Conectamos el número de la empresa a la API oficial de WhatsApp y al sistema donde vive tu información: precios, inventario, cartera, agenda. La conversación cotiza, cobra y responde el estado de un pedido; el equipo entra cuando la conversación lo merece, con todo el contexto.",
  },
  problema: [
    {
      title: "El pedido que se pierde en el chat",
      before:
        "El cliente escribe a las 8 de la noche, nadie contesta, y a la mañana siguiente el mensaje quedó debajo de otros cuarenta.",
      after:
        "La conversación arranca sola, cotiza con los precios reales y queda registrada con su origen y su responsable.",
    },
    {
      title: "La pregunta que interrumpe todo",
      before:
        "«¿Tienen disponible?», «¿cuánto vale?», «¿ya salió mi pedido?»: la misma respuesta, escrita a mano, por tres personas distintas.",
      after:
        "Disponibilidad, precio y estado se consultan en el sistema en tiempo real. La respuesta sale sola y siempre coincide con la operación.",
    },
    {
      title: "El cobro que se persigue a mano",
      before:
        "Se cierra la venta y después alguien pasa el dato de pago, confirma el abono y anota en una hoja quién pagó y quién no.",
      after:
        "El cobro sale en la misma conversación, con su confirmación, su comprobante y su registro. El que no pagó queda visible, sin perseguir a nadie.",
    },
  ],
  capacidades: [
    {
      icon: "Calculator",
      title: "Cotización con precios reales",
      description:
        "Consulta tu catálogo, tus reglas de descuento y tu inventario; no inventa precios ni promete disponibilidad que no existe.",
    },
    {
      icon: "Wallet",
      title: "Cobro y confirmación",
      description:
        "Enlace de pago o instrucciones de transferencia en el mismo hilo, con confirmación del abono y comprobante.",
    },
    {
      icon: "Repeat2",
      title: "Estado del pedido",
      description:
        "El cliente pregunta y recibe el estado que está en el sistema: en producción, despachado, en ruta, entregado.",
    },
    {
      icon: "CalendarCheck",
      title: "Agenda de visitas y turnos",
      description:
        "Agenda sobre el calendario del equipo, con recordatorio y confirmación, sin doble reserva.",
    },
    {
      icon: "Headphones",
      title: "Paso a una persona",
      description:
        "Cuando la conversación sale del libreto, entra una persona con el historial completo y el bot se calla en ese hilo.",
    },
    {
      icon: "Database",
      title: "Cada conversación, dato",
      description:
        "Los mensajes quedan estructurados y consultables: qué se preguntó, qué se cotizó, qué se cerró y dónde se cayó.",
    },
  ],
  pasos: [
    {
      numero: "01",
      title: "Diagnóstico del canal",
      duration: "1 semana",
      description:
        "Leemos la conversación real: cuántos mensajes entran, qué se responde hoy, en qué punto se pierde el cliente y qué sistemas hay que consultar. Salimos con un alcance y una métrica de éxito acordada.",
    },
    {
      numero: "02",
      title: "Despliegue del flujo",
      duration: "2 a 5 semanas",
      description:
        "Número en la API oficial, flujo de conversación, conexión a tu catálogo/inventario/cartera, cobro y agenda. Todo entra en producción por partes: lo primero que se enciende es lo que más duele.",
    },
    {
      numero: "03",
      title: "Operación y mejora",
      duration: "mensual",
      description:
        "Tablero de conversaciones, conversión y tiempos de respuesta; ajustes de guion y de reglas; monitoreo del canal. Aquí vive la mejora continua.",
    },
  ],
  integraciones: [
    {
      label: "Canal",
      items: [
        { slug: "whatsapp", name: "WhatsApp Business" },
        { slug: "meta", name: "Meta" },
        { slug: "instagram", name: "Instagram" },
        { slug: "messenger", name: "Messenger" },
      ],
    },
    {
      label: "Tus sistemas",
      items: [
        { slug: "siesa", name: "Siesa" },
        { slug: "siigo", name: "Siigo" },
        { slug: "worldoffice", name: "World Office" },
        { slug: "postgresql", name: "Postgres" },
        { slug: "supabase", name: "Supabase" },
        { slug: "microsoftexcel", name: "Excel" },
      ],
    },
    {
      label: "Operación y salida",
      items: [
        { slug: "n8n", name: "n8n" },
        { slug: "docker", name: "Docker" },
        { slug: "googlecalendar", name: "Google Calendar" },
        { slug: "gmail", name: "Gmail" },
      ],
    },
  ],
  arquitectura: [
    {
      title: "API oficial, no un celular colgado",
      description:
        "El número se conecta a WhatsApp Business Cloud API. Deja de depender de un teléfono encendido en una oficina y de las reglas de un celular.",
    },
    {
      title: "El agente consulta, no adivina",
      description:
        "Precios, inventario y estado se piden a tus sistemas en el momento (vía MCP o RPC). Si el dato no llega, el flujo lo dice en vez de inventar.",
    },
    {
      title: "Una base con reglas por cliente",
      description:
        "La información vive en Postgres con aislamiento por fila y roles. Cada quien ve lo suyo, y queda registro de quién consultó qué.",
    },
    {
      title: "Trazabilidad de cada decisión",
      description:
        "Se guarda qué se respondió, con qué dato y en qué paso del flujo. Un cliente que reclama se resuelve mirando la conversación, no discutiendo.",
    },
    {
      title: "Interruptor humano",
      description:
        "El equipo puede tomar cualquier conversación desde la bandeja; el flujo se apaga en ese hilo y vuelve a encenderse cuando lo sueltan.",
    },
  ],
  evidencia: [
    {
      sector: "Distribución y última milla",
      situacion:
        "La operación recibía por WhatsApp la misma pregunta sobre el estado de cada pedido, y el dato estaba en la hoja de despacho.",
      resultado:
        "El estado del pedido se consulta en la operación y sale por la conversación; el equipo dejó de copiar y pegar y ahora atiende excepciones.",
    },
    {
      sector: "Comercialización inmobiliaria",
      situacion:
        "Los mensajes de campañas llegaban al teléfono del asesor y desaparecían entre conversaciones personales.",
      resultado:
        "Cada contacto entra a una bandeja con su origen, su responsable y su siguiente acción; los mensajes de anuncios se cruzan con el CRM.",
    },
    {
      sector: "Servicios con cobro recurrente",
      situacion: "El cobro mensual se perseguía por chat y se llevaba en una hoja paralela.",
      resultado:
        "Recordatorio, cobro y confirmación salen del mismo sistema que factura, con el estado de cada cliente a la vista.",
    },
  ],
  incluye: [
    "Diagnóstico del canal y métrica de éxito acordada",
    "Número de la empresa en la API oficial de WhatsApp",
    "Diseño del flujo y del guion de conversación",
    "Conexión a los sistemas que hay que consultar (ERP, inventario, cartera, agenda)",
    "Cobro en línea o instrucciones de pago, con confirmación",
    "Bandeja para el equipo, con toma de conversación y avisos",
    "Tablero de conversaciones, conversión y tiempos de respuesta",
    "Capacitación del equipo y manuales de operación",
    "Acompañamiento del primer mes y monitoreo continuo",
  ],
  faqs: [
    {
      q: "¿Esto reemplaza a mi equipo comercial?",
      a: "No. Le quita el copiar y pegar. El flujo resuelve lo repetitivo —disponibilidad, precio, estado, cobro— y pasa a una persona todo lo que requiere criterio, con el historial completo a la vista.",
    },
    {
      q: "¿Puedo seguir usando mi número de WhatsApp de siempre?",
      a: "Sí, pero hay que saber una cosa antes de decidir: un número que se conecta a la API oficial deja de funcionar en la aplicación normal de WhatsApp. Si es el número personal de alguien, se usa otro número para el negocio.",
    },
    {
      q: "¿Qué pasa cuando el flujo no sabe qué responder?",
      a: "Lo dice y pasa la conversación a una persona. La regla del despliegue es nunca inventar un dato que no esté en tus sistemas.",
    },
    {
      q: "¿Cuánto tarda en estar funcionando?",
      a: "El diagnóstico toma una semana y el primer flujo productivo sale entre la segunda y la quinta, según cuántos sistemas haya que conectar.",
    },
    {
      q: "¿Dónde quedan los datos de mis clientes?",
      a: "En infraestructura tuya o en la nuestra, nunca en un servicio ajeno sin control. Las conversaciones y las fichas se guardan en bases con aislamiento por cliente y reglas de acceso.",
    },
  ],
  cta: {
    titulo: "Pongamos tu WhatsApp a trabajar.",
    descripcion:
      "Una conversación de treinta minutos sobre cómo vendes hoy y qué se puede automatizar sin romper nada. Te llevas el diagnóstico de viabilidad y el plan por fases, entres o no con nosotros.",
    whatsapp: "Hola Prometheus, quiero saber cómo automatizar mi venta por WhatsApp.",
  },
};
