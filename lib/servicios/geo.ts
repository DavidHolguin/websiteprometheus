import type { Servicio } from "./types";

/**
 * Línea 7 — visibilidad en buscadores y en los asistentes de IA (SEO + GEO).
 *
 * Encuadre deliberado: no se vende «posicionamiento en IA» como una posición
 * garantizada —eso no existe—, se vende **trabajo medido**: preguntas de
 * referencia fijas, informe mensual y corrección donde el motor describe mal la
 * empresa. Los logotipos de los motores son «dónde te buscan hoy», no alianzas.
 */
export const geo: Servicio = {
  slug: "geo",
  nombre: "Visibilidad en buscadores e IA",
  categoria: "Ser encontrado",
  entrada: false,
  resumen:
    "Que te encuentren y te citen cuando alguien pregunta por lo que haces, en Google y en los asistentes de IA. Se mide mes a mes.",
  iconoCatalogo: "Search",
  paraQuien:
    "Para empresas que ya tienen sitio y contenido, y no aparecen cuando su comprador busca, ni en Google ni preguntándole a un asistente.",
  hero: {
    headline: "Que te nombren cuando alguien pregunta por lo que haces.",
    description:
      "Trabajamos las dos búsquedas: la de Google y la de los asistentes (ChatGPT, Gemini, Claude, Perplexity, Meta AI). Datos estructurados, contenido que responde y presencia donde la IA busca sus fuentes. Con informe mensual y sin prometer posiciones.",
  },
  problema: [
    {
      title: "El comprador pregunta a una IA y le responden otros",
      before:
        "Su cliente potencial pregunta por ese servicio en un asistente, y la respuesta nombra a tres competidores con enlaces a otras páginas.",
      after:
        "La marca queda en el cuerpo de la respuesta: entidad clara, datos verificables y páginas que un motor puede citar.",
    },
    {
      title: "El sitio publicado y sin visitas",
      before:
        "El sitio existe y nadie llega desde una búsqueda, porque no hay una página que responda la pregunta que el comprador escribe.",
      after:
        "Cada pregunta de compra tiene su página, con el título y la estructura que el buscador necesita para mostrarla.",
    },
    {
      title: "Nadie sabe qué está diciendo la IA de la empresa",
      before:
        "No hay forma de saber si un asistente menciona la marca, con qué datos, ni si los datos son ciertos.",
      after:
        "Un informe mensual con las preguntas de referencia: en cuántas te nombran, con qué enlaces, qué se corrigió y qué falta.",
    },
  ],
  capacidades: [
    {
      icon: "Search",
      title: "Búsqueda clásica",
      description:
        "Estructura, títulos, enlazado y velocidad: lo que hace que Google entienda la página y la muestre a quien busca eso.",
    },
    {
      icon: "Bot",
      title: "Motores generativos",
      description:
        "Cómo describen los asistentes a tu empresa: nombre, servicios, ubicación y con qué fuentes lo están confirmando.",
    },
    {
      icon: "FileCode",
      title: "Datos estructurados y entidad",
      description:
        "Marcado que declara qué vendes, dónde y para quién, para que el motor no tenga que adivinarlo.",
    },
    {
      icon: "FileText",
      title: "Contenido que responde",
      description:
        "Páginas escritas para las preguntas que tu comprador realmente hace, no para llenar un blog.",
    },
    {
      icon: "Star",
      title: "Menciones y reseñas",
      description:
        "Presencia consistente en los directorios, mapas y fuentes que los motores citan al responder.",
    },
    {
      icon: "LineChart",
      title: "Informe con lo medido",
      description:
        "Las mismas preguntas, cada mes, en cada motor: en cuántas te nombran, con qué enlace y qué cambió respecto al mes anterior.",
    },
  ],
  pasos: [
    {
      numero: "01",
      title: "Diagnóstico de búsqueda",
      duration: "1 a 2 semanas",
      description:
        "Con qué palabras te buscan, qué dicen hoy los motores de ti y de tus competidores, y qué páginas faltan. Se fija la lista de preguntas de referencia.",
    },
    {
      numero: "02",
      title: "Montaje",
      duration: "2 a 6 semanas",
      description:
        "Datos estructurados, páginas nuevas, reescritura de las que existen, entidad y directorios. Se entrega por partes, empezando por lo que ya tiene demanda.",
    },
    {
      numero: "03",
      title: "Medición y contenido",
      duration: "mensual",
      description:
        "Informe de menciones y clics por motor, un bloque de contenido nuevo cada mes y correcciones donde el motor te describe mal.",
    },
  ],
  integraciones: [
    {
      label: "Buscadores",
      items: [
        { slug: "google", name: "Google" },
        { slug: "bing", name: "Bing" },
        { slug: "googlemaps", name: "Maps" },
      ],
    },
    {
      label: "Asistentes donde te buscan",
      items: [
        { slug: "openai", name: "ChatGPT" },
        { slug: "googlegemini", name: "Gemini" },
        { slug: "claude", name: "Claude" },
        { slug: "perplexity", name: "Perplexity" },
        { slug: "meta", name: "Meta AI" },
      ],
    },
    {
      label: "Medición y contenido",
      items: [
        { slug: "googlesearchconsole", name: "Search Console" },
        { slug: "googleanalytics", name: "Analytics" },
        { slug: "wordpress", name: "WordPress" },
        { slug: "nextdotjs", name: "Next.js" },
      ],
    },
  ],
  arquitectura: [
    {
      title: "La visibilidad en IA se mide con preguntas, no con posiciones",
      description:
        "Un asistente no devuelve un ranking. Se mide con un conjunto fijo de preguntas repetidas cada mes en cada motor, y comparando las respuestas entre sí.",
    },
    {
      title: "Nada de datos inventados en el marcado",
      description:
        "El marcado declara lo que la empresa realmente ofrece; los precios públicos solo si existen. Un dato falso en la ficha es el error más caro y el más difícil de deshacer.",
    },
    {
      title: "Tu marca en tus dominios",
      description:
        "El contenido se publica en tus páginas y tus perfiles, no en un blog ajeno que alquilas. Lo que se construye queda en tu activo.",
    },
    {
      title: "Los motores cambian cada mes",
      description:
        "Esto no se entrega y se olvida: los asistentes cambian de comportamiento y de fuentes, y el informe mensual existe para corregir el rumbo.",
    },
    {
      title: "Sin promesas de posición",
      description:
        "No se garantiza aparecer en un asistente ni una posición concreta en Google. Se garantiza el trabajo, la medición y el informe, mes a mes.",
    },
  ],
  evidencia: [
    {
      sector: "Tecnología y servicios B2B",
      situacion:
        "El sitio propio publicaba los servicios, pero nadie medía si los asistentes lo citaban ni con qué datos describían a la empresa.",
      resultado:
        "Se fijó una lista de preguntas de referencia y se mide cada mes qué motores nombran la marca, con qué páginas y con qué errores.",
    },
    {
      sector: "Comercialización inmobiliaria",
      situacion:
        "El inventario de lotes cambia todos los días, y las páginas que ve un buscador quedaban desactualizadas.",
      resultado:
        "El sitio público lee la disponibilidad en vivo desde la operación, así que el buscador no muestra inventario viejo.",
    },
  ],
  incluye: [
    "Diagnóstico de búsqueda y lista de preguntas de referencia",
    "Datos estructurados y definición de la entidad de la empresa",
    "Páginas nuevas para las preguntas de compra sin respuesta",
    "Reescritura de las páginas que ya existen (títulos, estructura, enlazado)",
    "Directorios, mapas y perfiles consistentes",
    "Un bloque de contenido nuevo cada mes, revisado contigo",
    "Informe mensual de menciones y clics por motor",
    "Correcciones donde el motor describe mal la empresa",
  ],
  faqs: [
    {
      q: "¿GEO reemplaza al SEO?",
      a: "No, es el mismo trabajo con otro destino. Entidad, contenido, datos y autoridad sirven para las dos búsquedas; lo que cambia es dónde se mide: la página de resultados frente a la respuesta de un asistente.",
    },
    {
      q: "¿Me garantizan que ChatGPT me va a mencionar?",
      a: "No. Nadie puede garantizarlo, y quien lo promete está adivinando. Lo que se garantiza es el trabajo, las preguntas fijas de referencia y un informe mensual con lo que sí cambió.",
    },
    {
      q: "¿En cuánto tiempo se ve algo?",
      a: "En Google, los cambios de estructura y contenido se empiezan a notar entre cuatro y ocho semanas. En los asistentes la respuesta puede moverse antes, porque se alimentan de fuentes más frescas, pero no es estable mes a mes.",
    },
    {
      q: "¿Sirve si ya tengo una agencia de SEO?",
      a: "Se puede montar sin quitarla: lo que suele faltar es la parte de asistentes, los datos estructurados y la medición por preguntas, que casi nadie está haciendo todavía.",
    },
    {
      q: "¿Quién escribe el contenido?",
      a: "Nosotros, con tu revisión antes de publicar. Cada mes entra un bloque nuevo que responde preguntas reales de tu comprador, no notas de prensa.",
    },
    {
      q: "¿Necesito rehacer mi sitio?",
      a: "No. Si el sitio carga bien y se puede leer, se trabaja sobre él. Si no carga o está atrapado en un constructor que no permite editar la estructura, eso se corrige primero y se cotiza aparte.",
    },
  ],
  cta: {
    titulo: "Veamos qué dicen los motores de tu empresa hoy.",
    descripcion:
      "Corremos tus preguntas de referencia en los principales buscadores y asistentes, y te mostramos qué responden hoy y qué hace falta para aparecer. El informe es tuyo, trabajes con nosotros o no.",
    whatsapp: "Hola Prometheus, quiero que me encuentren en Google y en la IA.",
  },
};
