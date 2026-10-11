import type { Servicio } from "./types";

/**
 * Línea 3 — sistemas operativos a medida.
 *
 * Regla de la casa: esto NO se vende como «desarrollo de CRM a medida» genérico.
 * Se vende cuando la operación tiene reglas con estado (cupos, rutas, turnos,
 * colas) que un CRM estándar no modela, y el sistema se construye por fases con
 * un entregable utilizable desde la cuarta semana.
 */
export const plataformasOperacion: Servicio = {
  slug: "plataformas-operacion",
  nombre: "Plataformas de operación",
  categoria: "Sistemas a medida",
  entrada: false,
  resumen:
    "La plataforma que tu operación necesita cuando la hoja de cálculo ya no aguanta y el CRM del mercado no modela tu negocio.",
  iconoCatalogo: "Workflow",
  paraQuien:
    "Para operaciones con reglas propias —rutas, cupos, turnos, colas, evidencias en campo— que hoy viven en hojas de cálculo y en la cabeza de alguien.",
  hero: {
    headline: "Un sistema que opera, no un formulario que se llena.",
    description:
      "Construimos la plataforma donde tu operación trabaja: el estado de cada viaje, cupo, turno o caso, la evidencia desde el celular, los avisos automáticos y la IA donde ya hay datos.",
  },
  problema: [
    {
      title: "La hoja que ya no aguanta",
      before:
        "Todos miran la misma hoja, pero nadie sabe cuál es la última versión ni quién cambió el dato.",
      after:
        "Un solo lugar, un solo dueño del dato, con permisos por rol y una sola verdad para todos.",
    },
    {
      title: "El CRM que nadie llena",
      before: "Se compró un CRM que exige digitar todo y en tres meses lo usa una sola persona.",
      after:
        "El sistema captura el dato donde se produce —el celular del operario, el mensaje del cliente, la factura— y la ficha se arma sola.",
    },
    {
      title: "El reporte que llega tarde",
      before:
        "Los números del mes se piden por WhatsApp y llegan cuando ya no se puede corregir nada.",
      after:
        "Los tableros se leen en vivo y los avisos salen cuando el problema ocurre, no una semana después.",
    },
  ],
  capacidades: [
    {
      icon: "CalendarCheck",
      title: "Programación y cupos",
      description:
        "Agenda rutas, turnos o visitas con cupo real: impide sobrevender y avisa si algo se sale del plan.",
    },
    {
      icon: "ListTodo",
      title: "Tableros operativos",
      description:
        "Estado de cada frente en vivo: qué está pendiente, qué va en camino, qué se atrasó y quién responde.",
    },
    {
      icon: "BookOpen",
      title: "Evidencia desde el móvil",
      description:
        "Fotos, firmas, novedades y confirmación del cliente desde el teléfono, sin volver a la oficina.",
    },
    {
      icon: "Send",
      title: "Avisos automáticos",
      description:
        "Cliente y equipo reciben lo que necesitan por WhatsApp o correo cuando el estado cambia.",
    },
    {
      icon: "Sparkles",
      title: "Sugerencia con datos",
      description:
        "La IA entra donde aporta: ordenar rutas, priorizar casos, anticipar demanda. Se apaga si no mejora.",
    },
    {
      icon: "BadgeDollarSign",
      title: "Cartera y cobro",
      description:
        "Cuánto se facturó, cuánto se debe y desde cuándo, visible para el área comercial y el cliente.",
    },
  ],
  pasos: [
    {
      numero: "01",
      title: "Diagnóstico de operación",
      duration: "2 semanas",
      description:
        "Modelamos el negocio con las personas que lo operan: entidades, reglas, excepciones y dolores. Definimos qué se resuelve en la primera fase y con qué métrica.",
    },
    {
      numero: "02",
      title: "Construcción por fases",
      duration: "4 a 12 semanas",
      description:
        "Semana 4 ya hay un módulo utilizable en la operación real. A partir de ahí se amplía por fases cortas, con el equipo usándolo desde el principio.",
    },
    {
      numero: "03",
      title: "Operación y evolución",
      duration: "mensual",
      description:
        "Infraestructura, respaldo, monitoreo y mejoras continuas. La plataforma evoluciona con la operación, con un responsable claro.",
    },
  ],
  integraciones: [
    {
      label: "Base técnica",
      items: [
        { slug: "nextdotjs", name: "Next.js" },
        { slug: "react", name: "React" },
        { slug: "typescript", name: "TypeScript" },
        { slug: "tailwindcss", name: "Tailwind" },
        { slug: "postgresql", name: "Postgres" },
        { slug: "supabase", name: "Supabase" },
      ],
    },
    {
      label: "Comunicación con el cliente",
      items: [
        { slug: "whatsapp", name: "WhatsApp Business" },
        { slug: "gmail", name: "Gmail" },
        { slug: "microsoftoutlook", name: "Outlook" },
      ],
    },
    {
      label: "Infraestructura",
      items: [
        { slug: "docker", name: "Docker" },
        { slug: "aws", name: "AWS" },
        { slug: "n8n", name: "n8n" },
      ],
    },
  ],
  arquitectura: [
    {
      title: "Una entidad, un dueño",
      description:
        "Antes de escribir código decidimos dónde vive cada dato. Un sistema que copia la verdad de otro termina desincronizado; preferimos una fuente y varias lecturas.",
    },
    {
      title: "El dato entra donde se produce",
      description:
        "La interfaz se diseña para el operario en el celular, no para el reporte del gerente. Si digitar cuesta, el sistema se abandona.",
    },
    {
      title: "Reglas con estado en la base",
      description:
        "Cupos, secuencias y ventanas se resuelven con transacciones en la base de datos, no en el navegador: es lo que evita que dos personas asignen lo mismo.",
    },
    {
      title: "IA sobre datos que ya existen",
      description:
        "El modelo propone rutas, prioriza casos o anticipa demanda a partir de lo registrado. Si no hay dato, no hay promesa: se registra primero y se aprende después.",
    },
    {
      title: "Se entrega operable",
      description:
        "El equipo recibe su sistema funcionando, con manuales, respaldo y monitoreo. La propiedad intelectual del código se pacta desde el inicio, en el contrato.",
    },
  ],
  evidencia: [
    {
      sector: "Logística de última milla",
      situacion:
        "El despacho vivía en hojas, el conductor dependía de llamadas y la evidencia de entrega se perdía en fotos de WhatsApp.",
      resultado:
        "Despacho, ruta y evidencia funcionan desde el celular, y la operación ve el estado del día en un tablero.",
    },
    {
      sector: "Comercialización inmobiliaria",
      situacion:
        "Disponibilidad de unidades, separaciones y financiación se llevaban en varias hojas con versiones distintas.",
      resultado:
        "La disponibilidad es una sola, el portal del cliente muestra su estado y el equipo comercial sigue cada caso en un solo lugar.",
    },
    {
      sector: "Servicios con registro operativo",
      situacion:
        "Los casos de cada jornada se anotaban en papel y se transcribían al día siguiente.",
      resultado:
        "El registro nace en el punto de servicio, con evidencia, y los reportes del día salen solos.",
    },
  ],
  incluye: [
    "Modelado de la operación con el equipo que la ejecuta",
    "Diseño de la experiencia para el operario y para el cliente",
    "Desarrollo por fases con entregable usable en la semana 4",
    "Base de datos con permisos por rol y respaldo automático",
    "Aplicación móvil de uso interno cuando la operación lo exige",
    "Integración con facturación, CRM o ERP existentes",
    "Tableros de operación y alertas",
    "Capacitación, manuales y monitoreo durante la operación",
  ],
  faqs: [
    {
      q: "¿Esto es un CRM?",
      a: "No. Un CRM administra relaciones y oportunidades; esto administra la operación: rutas, cupos, turnos, casos, evidencias. Cuando hace falta la capa comercial, se integra con el CRM en vez de duplicarlo.",
    },
    {
      q: "¿Por qué no usar un sistema del mercado?",
      a: "Si ya existe uno que resuelva tu operación sin forzarla, ese es el camino y te lo decimos. Construimos cuando las reglas del negocio son propias y un software estándar obliga a cambiar la operación para que quepa.",
    },
    {
      q: "¿Quién es dueño del código?",
      a: "Se define en el contrato desde el primer día. El cliente recibe el sistema funcionando, los manuales y la operación; si además quiere la propiedad intelectual del código, se pacta como parte del alcance y se refleja en el valor del proyecto.",
    },
    {
      q: "¿Cuánto tarda?",
      a: "La primera fase utilizable sale en la semana 4 y el alcance completo entre 8 y 12 semanas, según cuántos frentes entren.",
    },
    {
      q: "¿Y si la operación cambia?",
      a: "Para eso es la operación mensual. La plataforma queda lista para cambiar reglas sin reescribir el sistema: el modelo del negocio y la interfaz están separados.",
    },
  ],
  cta: {
    titulo: "Cuéntanos cómo opera tu negocio hoy.",
    descripcion:
      "Nos sentamos a entender la operación real con quienes la hacen, y salimos con un modelo, una primera fase y una métrica. Si algo que ya existe lo resuelve, te lo decimos ahí mismo.",
    whatsapp: "Hola Prometheus, necesito una plataforma para mi operación.",
  },
};
