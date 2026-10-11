import type { Servicio } from "./types";

/**
 * Línea 6 — el producto de compra en línea.
 *
 * Encuadre deliberado: no se vende «montamos su Shopify», se vende que **el
 * pedido deja de armarse a mano**: catálogo, pago, envío y estado cayendo en la
 * misma base donde ya vive la venta por WhatsApp. La comisión de la pasarela no
 * es nuestra y se dice: el negocio cobra directo a su cuenta.
 */
export const tiendasVirtuales: Servicio = {
  slug: "tiendas-virtuales",
  nombre: "Tiendas virtuales",
  categoria: "Venta en línea",
  entrada: false,
  resumen:
    "Tienda con catálogo, pago y envío, y el pedido entrando a tu operación: el cobro se confirma solo y el estado sale por la conversación.",
  iconoCatalogo: "ShoppingCart",
  paraQuien:
    "Para negocios con producto o servicios que ya venden por WhatsApp y quieren cobrar en línea sin contratar a alguien para perseguir pedidos.",
  hero: {
    headline: "Una tienda que cobra, despacha e informa sin perseguir el pedido.",
    description:
      "Montamos la tienda, el cobro en línea y los envíos, con el pedido bajando a tu operación. El cliente compra solo, y el estado de su pedido sale por el mismo WhatsApp donde pregunta.",
  },
  problema: [
    {
      title: "El pedido que se arma a mano",
      before:
        "El cliente pregunta precio, disponibilidad y envío por chat; alguien arma el pedido, confirma el pago y avisa cuando sale.",
      after:
        "El pedido se arma en la tienda, el pago se confirma solo y el estado se consulta en la conversación, sin que nadie transcriba nada.",
    },
    {
      title: "La cartera que se persigue",
      before:
        "El que dijo que pagaba y no pagó se descubre días después, revisando extractos y conversaciones.",
      after:
        "Cada pedido tiene su estado: pagado, despachado, entregado. El que no pagó aparece en su columna, sin perseguir a nadie.",
    },
    {
      title: "La venta que se cae en el último paso",
      before:
        "El comprador llena el carrito y abandona justo al llegar al pago o al formulario de envío.",
      after:
        "El recorrido tiene pocos pasos, el envío se calcula antes de pagar y el carrito que no cerró queda registrado con a quién volver.",
    },
  ],
  capacidades: [
    {
      icon: "Package",
      title: "Catálogo con reglas",
      description:
        "Productos, variantes, precios con impuesto, stock y categorías. Se carga una vez y se mantiene por archivo o desde el panel.",
    },
    {
      icon: "CreditCard",
      title: "Pago en línea y en la conversación",
      description:
        "Pasarela con tarjeta y transferencia, y cobro en el mismo hilo de WhatsApp cuando el comprador prefiere hablar con alguien.",
    },
    {
      icon: "Truck",
      title: "Envío con reglas y estado",
      description:
        "Tarifas por zona, recogida en tienda y guía de despacho: el estado del envío se informa dentro del pedido.",
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp dentro de la compra",
      description:
        "Recordatorio del carrito sin cerrar, confirmación del pago y aviso del despacho en el mismo hilo, con el pedido a la vista.",
    },
    {
      icon: "Database",
      title: "El pedido baja a tu operación",
      description:
        "El pedido no se queda en el panel de la tienda: llega a inventario, a facturación o al despacho que ya usas.",
    },
    {
      icon: "LineChart",
      title: "Qué se vende y qué no",
      description:
        "Ventas por producto, ticket promedio, carritos sin cerrar y de dónde vino cada comprador. Con eso se decide qué empujar.",
    },
  ],
  pasos: [
    {
      numero: "01",
      title: "Diagnóstico y catálogo",
      duration: "1 semana",
      description:
        "Revisamos producto, precios, impuestos, envíos y cómo cobras hoy. De ahí salen el alcance y la lista de lo que hay que cargar.",
    },
    {
      numero: "02",
      title: "Montaje de la tienda",
      duration: "2 a 4 semanas",
      description:
        "Catálogo, pasarela, envíos, facturación y la conexión con WhatsApp. Se prueba el ciclo completo con una compra real antes de abrir.",
    },
    {
      numero: "03",
      title: "Operación y ajuste",
      duration: "mensual",
      description:
        "Monitoreo de pagos, revisión de carritos que no cierran y ajustes de catálogo y contenido. El cobro se concilia, no se supone.",
    },
  ],
  integraciones: [
    {
      label: "La tienda",
      items: [
        { slug: "woocommerce", name: "WooCommerce" },
        { slug: "wordpress", name: "WordPress" },
        { slug: "shopify", name: "Shopify" },
        { slug: "mercadopago", name: "Mercado Pago" },
        { slug: "stripe", name: "Stripe" },
      ],
    },
    {
      label: "Tus sistemas",
      items: [
        { slug: "whatsapp", name: "WhatsApp" },
        { slug: "siesa", name: "Siesa" },
        { slug: "siigo", name: "Siigo" },
        { slug: "postgresql", name: "Postgres" },
        { slug: "microsoftexcel", name: "Excel" },
      ],
    },
    {
      label: "Medición y despacho",
      items: [
        { slug: "googleanalytics", name: "Analytics" },
        { slug: "googletagmanager", name: "Tag Manager" },
        { slug: "googlemaps", name: "Maps" },
        { slug: "gmail", name: "Gmail" },
      ],
    },
  ],
  arquitectura: [
    {
      title: "El motor se elige por operación, no por moda",
      description:
        "Catálogo corto y pago con tarjeta: motor estándar, listo en semanas. Catálogo grande, varias bodegas o reglas de precio propias: tienda sobre código propio. Se decide en el diagnóstico.",
    },
    {
      title: "La pasarela se prueba antes de abrir",
      description:
        "Compra real, devolución real y conciliación contra el extracto antes de publicar. Un cobro que no se puede conciliar no sirve.",
    },
    {
      title: "El pedido vive en un solo lugar",
      description:
        "Una venta de la tienda y una venta por WhatsApp caen en la misma base, con el mismo estado y el mismo informe.",
    },
    {
      title: "Tus cuentas y tus datos",
      description:
        "Dominio, pasarela y base quedan a nombre de tu empresa; nosotros operamos con permisos, no con propiedad.",
    },
    {
      title: "Interruptor humano",
      description:
        "Cuando el comprador quiere hablar con alguien, una persona entra al hilo con el pedido delante y el flujo se calla en esa conversación.",
    },
  ],
  evidencia: [
    {
      sector: "Servicios con cobro en línea",
      situacion:
        "El cobro se hacía por transferencia y se confirmaba a mano, con la cartera llevada en un archivo aparte.",
      resultado:
        "El cobro entra por la pasarela con su confirmación y su registro, y el que no pagó queda visible sin perseguirlo.",
    },
    {
      sector: "Distribución y pedidos",
      situacion:
        "El pedido se armaba en el chat y terminaba en una hoja que solo una persona entendía.",
      resultado:
        "El pedido entra estructurado a la operación y el estado sale por la misma conversación donde se pidió.",
    },
  ],
  incluye: [
    "Diagnóstico de catálogo, precios, impuestos y envíos",
    "Alcance por escrito y recomendación del motor",
    "Montaje de la tienda y carga del catálogo acordado",
    "Pasarela de pago configurada a nombre de tu empresa",
    "Reglas de envío y estados del pedido",
    "Conexión con WhatsApp para cobro, confirmación y despacho",
    "Analítica de ventas y carritos sin cerrar",
    "Prueba de compra real antes de abrir al público",
    "Capacitación del equipo y acompañamiento del primer mes",
  ],
  faqs: [
    {
      q: "¿WooCommerce o una tienda propia?",
      a: "Depende del catálogo y del cobro. Con catálogo corto y pago con tarjeta, un motor estándar sale más rápido y más barato; con catálogo grande, varias bodegas o reglas de precio propias, conviene la tienda sobre código propio. Se decide en el diagnóstico, no antes.",
    },
    {
      q: "¿Quién paga la comisión de la pasarela?",
      a: "La pasarela cobra por transacción y ese costo lo asume el negocio, directo desde su propia cuenta. Nosotros no intermediamos el dinero de tus ventas.",
    },
    {
      q: "¿Puedo seguir vendiendo por WhatsApp?",
      a: "Es lo que recomendamos: la tienda para el catálogo y el pago, WhatsApp para la conversación. Los dos escriben en la misma base, así que el pedido no se duplica ni se pierde.",
    },
    {
      q: "¿Y los envíos y las devoluciones?",
      a: "Se configuran las tarifas por zona y la política de devolución, y el estado del despacho se informa dentro del pedido. La entrega sigue siendo tuya o de tu transportadora.",
    },
    {
      q: "¿Cambian mi facturación o mi contabilidad?",
      a: "No. La tienda entrega los datos listos para el sistema que ya usas, o se conecta con tu proveedor de facturación electrónica si tiene API.",
    },
    {
      q: "¿Cuánto tarda en estar cobrando?",
      a: "Una tienda de catálogo corto queda cobrando en tres o cuatro semanas; con integración a inventario o a facturación, cinco o seis.",
    },
  ],
  cta: {
    titulo: "Pongamos la tienda a vender sin perseguir pedidos.",
    descripcion:
      "Revisamos tu catálogo, cómo cobras hoy y cuánto despachas. Sales con el alcance por escrito, el motor recomendado y el costo real de la pasarela.",
    whatsapp: "Hola Prometheus, quiero una tienda virtual que cobre en línea.",
  },
};
