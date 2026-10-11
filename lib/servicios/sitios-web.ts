import type { Servicio } from "./types";

/**
 * Línea 5 — la puerta más universal del portafolio.
 *
 * Encuadre deliberado: no se vende «diseño de alto nivel» (eso compite con
 * cualquier freelancer y se pierde en rondas de cambios), se vende el sitio que
 * **deja el contacto y lo mide**. El alcance cerrado no es letra pequeña: es lo
 * que protege el margen y lo que el cliente necesita saber antes de firmar.
 */
export const sitiosWeb: Servicio = {
  slug: "sitios-web",
  nombre: "Sitios web",
  categoria: "Presencia que captura",
  entrada: true,
  resumen:
    "Sitios rápidos, medidos y conectados a tu CRM: el que llega deja su dato y queda en tu base con el canal del que vino.",
  iconoCatalogo: "Globe",
  paraQuien:
    "Para empresas que ya tienen un sitio que no les deja nada (ni un contacto, ni una medición) o que van a hacerlo y no quieren otro folleto.",
  hero: {
    headline: "Tu sitio deja de ser un folleto y se vuelve vendedor.",
    description:
      "Diseñamos y desarrollamos el sitio con alcance cerrado: rápido, medido y conectado a tu CRM y a tu WhatsApp. Cada formulario entra a tu base con el canal de origen, y tú ves qué trajo qué.",
  },
  problema: [
    {
      title: "El sitio que nadie convierte",
      before:
        "Entran visitas y no pasa nada: el que quería comprar no encuentra por dónde, y de los que pasaron no queda rastro.",
      after:
        "Cada página tiene su salida (WhatsApp, formulario o llamada) y el que deja el dato entra a tu CRM con el canal del que vino.",
    },
    {
      title: "El proyecto que no termina",
      before:
        "Se aprueba el diseño en reuniones y cada área pide su cambio; pasan las semanas y el sitio sigue sin publicarse.",
      after:
        "Antes de empezar queda por escrito el alcance: secciones, revisiones, quién entrega textos e imágenes y la fecha de salida.",
    },
    {
      title: "Nadie sabe si sirvió",
      before:
        "Se pagó el sitio, se puso el logo y nunca se supo cuántos contactos trajo ni qué página los trajo.",
      after:
        "Medición instalada y verificada: visitas, origen, qué páginas convierten y cuántos contactos entraron al CRM este mes.",
    },
  ],
  capacidades: [
    {
      icon: "MousePointerClick",
      title: "Un recorrido que lleva al contacto",
      description:
        "Jerarquía, textos y llamados por página: cada bloque existe para que el visitante dé el siguiente paso, no para llenar la pantalla.",
    },
    {
      icon: "Gauge",
      title: "Rápido donde importa",
      description:
        "El sitio carga en el tiempo de un mensaje de WhatsApp: sin constructor pesado ni plugins que frenen la primera visita.",
    },
    {
      icon: "Smartphone",
      title: "Se revisa en el celular",
      description:
        "Se diseña y se aprueba en 390 px, que es donde entra la mayoría del tráfico. El escritorio se ajusta después, no al revés.",
    },
    {
      icon: "LineChart",
      title: "Medición que sí registra",
      description:
        "Analítica, Tag Manager y Search Console instalados y comprobados; además, los eventos de contacto quedan en el servidor del sitio.",
    },
    {
      icon: "Plug",
      title: "Cada contacto a tu CRM",
      description:
        "Formularios, WhatsApp y agenda escriben en tu base o en la nuestra: nombre, teléfono, interés y canal de origen.",
    },
    {
      icon: "LayoutDashboard",
      title: "Tablero para decidir",
      description:
        "Un panel con los contactos por canal, las páginas que convierten y lo que quedó sin responder.",
    },
  ],
  pasos: [
    {
      numero: "01",
      title: "Diagnóstico y alcance",
      duration: "1 semana",
      description:
        "Miramos qué tiene hoy, qué busca su comprador y qué tiene que lograr el sitio. Se entrega el alcance por escrito y el mapa de páginas.",
    },
    {
      numero: "02",
      title: "Diseño y desarrollo",
      duration: "2 a 4 semanas",
      description:
        "Diseño, textos de trabajo, desarrollo y publicación. Cada entrega se revisa en el celular, no al final del proyecto.",
    },
    {
      numero: "03",
      title: "Medición y ajuste",
      duration: "mensual",
      description:
        "Analítica, informe de contactos por canal y ajustes de contenido y velocidad. El sitio no se abandona el día que se publica.",
    },
  ],
  integraciones: [
    {
      label: "Publicación",
      items: [
        { slug: "nextdotjs", name: "Next.js" },
        { slug: "vercel", name: "Vercel" },
        { slug: "cloudflare", name: "Cloudflare" },
        { slug: "docker", name: "Docker" },
        { slug: "github", name: "GitHub" },
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
    {
      label: "Tus sistemas",
      items: [
        { slug: "whatsapp", name: "WhatsApp" },
        { slug: "gmail", name: "Gmail" },
        { slug: "googlecalendar", name: "Google Calendar" },
        { slug: "postgresql", name: "Postgres" },
        { slug: "supabase", name: "Supabase" },
        { slug: "microsoftexcel", name: "Excel" },
      ],
    },
  ],
  arquitectura: [
    {
      title: "Código propio, sin plataforma que te encierre",
      description:
        "El sitio se construye sobre código propio y se puede mover de servidor. No queda atado al constructor de un proveedor ni a su cuota mensual.",
    },
    {
      title: "Los datos del visitante son tuyos",
      description:
        "Los contactos viven en tu CRM o en tu base, no en el panel del proveedor del sitio. Se exportan completos cuando quieras.",
    },
    {
      title: "Medición de primera parte",
      description:
        "Los eventos clave (click de WhatsApp y envío de formulario) se registran también en el servidor del sitio, además de la analítica estándar.",
    },
    {
      title: "Se revisa, no se asume",
      description:
        "Contraste, foco, navegación por teclado y etiquetas: el sitio se audita antes de publicar, también en el celular.",
    },
    {
      title: "Preparado para lo que sigue",
      description:
        "La misma estructura acepta catálogo, pagos, portal de clientes o visibilidad en motores de IA sin rehacer el sitio.",
    },
  ],
  evidencia: [
    {
      sector: "Tecnología y servicios B2B",
      situacion:
        "El sitio propio de la casa se rehizo con este patrón: una página por línea de servicio y un solo camino hacia el contacto.",
      resultado:
        "Cada contacto entra al CRM y a la bandeja con su canal de origen, y los clics de WhatsApp quedan medidos por landing.",
    },
    {
      sector: "Comercialización inmobiliaria",
      situacion:
        "El sitio de proyectos mostraba la oferta, pero la disponibilidad de cada lote se actualizaba a mano en la operación.",
      resultado:
        "El sitio público lee la disponibilidad en vivo desde la operación y el interesado que deja sus datos entra a la bandeja de la marca.",
    },
    {
      sector: "Movilidad y servicios",
      situacion:
        "Varias verticales de servicio se atendían desde un mismo formulario, sin saber qué pedía cada quien.",
      resultado:
        "El sitio separa el pipeline por vertical y cada solicitud entra al CRM identificada con su marca y su interés.",
    },
  ],
  incluye: [
    "Diagnóstico, mapa de páginas y alcance por escrito",
    "Diseño de las páginas acordadas (una página, sitio completo o rediseño sobre lo que ya tienes)",
    "Textos de trabajo y estructura de contenido",
    "Desarrollo, publicación y dominio apuntando al sitio",
    "Formularios conectados al CRM y al WhatsApp de la empresa",
    "Analítica, Tag Manager y Search Console instalados y verificados",
    "Tablero de contactos por canal",
    "Capacitación del equipo y acompañamiento del primer mes",
  ],
  faqs: [
    {
      q: "¿Cuánto tarda?",
      a: "Entre tres y cinco semanas desde que hay alcance aprobado y contenidos, según el tamaño del sitio. La fecha se fija antes de empezar, y en el alcance queda escrito qué la puede mover.",
    },
    {
      q: "¿Quién escribe los textos y consigue las fotos?",
      a: "Nosotros dejamos los textos de trabajo y la estructura de cada página; tú aportas los datos del negocio y las fotos. Si no tienes material, la producción de contenido se cotiza aparte para que no se mezcle con el precio del sitio.",
    },
    {
      q: "¿Qué no está incluido?",
      a: "La pauta, la fotografía y el video, la redacción de contenido largo y el mantenimiento de sistemas de terceros. El dominio y el hosting se cotizan por su costo real; si ya los tienes, se aprovechan.",
    },
    {
      q: "¿Me entregan el código fuente?",
      a: "En el esquema estándar se entrega el sitio publicado, con sus accesos, contenidos y manuales; el código queda de la casa. Si tu empresa necesita la propiedad del código, se cotiza como condición aparte.",
    },
    {
      q: "¿Puedo editarlo yo después?",
      a: "Sí: textos, imágenes y precios se cambian sin tocar código, y te dejamos el manual y la capacitación para hacerlo. Los cambios de estructura los hacemos nosotros.",
    },
    {
      q: "¿Qué pasa con el sitio que ya tengo?",
      a: "Si sirve, se aprovecha: contenidos, dominio, correo y posicionamiento existente se conservan. El rediseño se cotiza distinto a un sitio nuevo, porque parte de otra base.",
    },
  ],
  cta: {
    titulo: "Hablemos de qué tiene que lograr tu sitio.",
    descripcion:
      "Treinta minutos mirando el sitio actual (o el que quieres) y el camino del visitante. Te llevas el diagnóstico, el mapa de páginas y el alcance por escrito, trabajes o no con nosotros.",
    whatsapp: "Hola Prometheus, quiero un sitio web que me deje contactos.",
  },
};
