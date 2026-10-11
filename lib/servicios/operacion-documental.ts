import type { Servicio } from "./types";

/**
 * Línea 2 — el trabajo aburrido y caro.
 *
 * Es el producto de entrada recomendado: dolor evidente, demostrable con los
 * papeles del propio cliente en una semana, y sin prometer magia — lo dudoso va
 * a revisión humana.
 */
export const operacionDocumental: Servicio = {
  slug: "operacion-documental",
  nombre: "Operación documental",
  categoria: "Automatización documental",
  entrada: true,
  resumen:
    "Facturas, contratos y soportes que se leen, se validan contra tus reglas y llegan limpios a tu base.",
  iconoCatalogo: "FileText",
  paraQuien:
    "Para operaciones que procesan documentos todos los días y cuyo cierre depende de que alguien los digite bien.",
  hero: {
    headline: "Facturas y contratos que se procesan solos.",
    description:
      "Un flujo que recibe los documentos, extrae los datos que importan, los valida contra tus reglas y los deja estructurados en tu base. Lo que no cuadra no se adivina: cae en una bandeja de revisión con el motivo escrito.",
  },
  problema: [
    {
      title: "El dato que se digita tres veces",
      before:
        "El documento llega por correo, alguien lo lee, lo pasa a una hoja y después lo vuelve a escribir en el sistema.",
      after:
        "Se lee una vez, se valida contra las reglas y entra a la base. El mismo dato, en un solo lugar y con su origen.",
    },
    {
      title: "El soporte que nadie encuentra",
      before:
        "Cuando alguien pregunta por un contrato o una factura de hace ocho meses, la respuesta es «déjame buscar».",
      after:
        "Cada documento queda indexado por sus datos clave, con su archivo y su historial de quién lo procesó.",
    },
    {
      title: "El cierre de mes que se arma a mano",
      before:
        "El cierre depende de la memoria de una persona y de un archivo que nadie más entiende.",
      after:
        "El reporte sale de la base, con las excepciones separadas: lo que está pendiente se ve, no se descubre a última hora.",
    },
  ],
  capacidades: [
    {
      icon: "ScanLine",
      title: "Lectura de documentos",
      description:
        "Recibe PDF, foto o escaneo, y extrae los campos que el negocio definió: proveedor, número, fechas, valores, impuestos, cláusulas.",
    },
    {
      icon: "ClipboardCheck",
      title: "Validación con reglas",
      description:
        "Comprueba contra política y contra el sistema de origen: valores que no cuadran, proveedores inexistentes, duplicados, retenciones.",
    },
    {
      icon: "FolderTree",
      title: "Bandeja de excepciones",
      description:
        "Todo lo dudoso llega a una cola con el motivo y el documento al lado. Es donde debe estar el criterio humano, no en lo repetitivo.",
    },
    {
      icon: "FileSpreadsheet",
      title: "Datos limpios y consultables",
      description:
        "Lo procesado queda en tablas listas para reportar, no en archivos sueltos ni en carpetas compartidas.",
    },
    {
      icon: "ListTodo",
      title: "Trazabilidad para auditoría",
      description:
        "Cada documento tiene su bitácora: qué se leyó, qué se creyó, quién lo aprobó y cuándo. Escrito para que un auditor lo pueda seguir.",
    },
    {
      icon: "Repeat2",
      title: "Reintentos y reproceso",
      description:
        "Un documento que falla se reintenta solo y, cuando se corrige, se reprocesa sin volver a empezar de cero.",
    },
  ],
  pasos: [
    {
      numero: "01",
      title: "Diagnóstico documental",
      duration: "1 semana",
      description:
        "Contamos qué documentos se procesan al mes, cuántos campos importan, qué excepciones existen y cuánto cuesta hoy hacerlo a mano. Con sus papeles, no con teoría.",
    },
    {
      numero: "02",
      title: "Pipeline en producción",
      duration: "2 a 5 semanas",
      description:
        "Los flujos se montan por tipo de documento, empezando por el de mayor volumen. Cada tipo se entrega funcionando y con su bandeja de excepciones.",
    },
    {
      numero: "03",
      title: "Operación y ampliación",
      duration: "mensual",
      description:
        "Monitoreo de aciertos y excepciones, ajuste de reglas y ampliación a nuevos documentos. La métrica que manda es cuánto se reduce la revisión manual.",
    },
  ],
  integraciones: [
    {
      label: "Documentos",
      items: [
        { slug: "googledrive", name: "Google Drive" },
        { slug: "microsoftexcel", name: "Excel" },
        { slug: "gmail", name: "Gmail" },
        { slug: "microsoftoutlook", name: "Outlook" },
        { slug: "adobeacrobatreader", name: "PDF" },
      ],
    },
    {
      label: "Tu sistema de registro",
      items: [
        { slug: "siesa", name: "Siesa" },
        { slug: "siigo", name: "Siigo" },
        { slug: "worldoffice", name: "World Office" },
        { slug: "postgresql", name: "Postgres" },
        { slug: "supabase", name: "Supabase" },
      ],
    },
    {
      label: "Infraestructura",
      items: [
        { slug: "n8n", name: "n8n" },
        { slug: "docker", name: "Docker" },
        { slug: "aws", name: "AWS" },
      ],
    },
  ],
  arquitectura: [
    {
      title: "Corre en tu infraestructura",
      description:
        "Los flujos y los documentos viven en contenedores propios — servidor dedicado o nube tuya. El papel no se va a una herramienta ajena sin control.",
    },
    {
      title: "Flujos versionados, no scripts sueltos",
      description:
        "Cada automatización queda en un workflow con su versión y su bitácora: se puede revisar, revertir y explicar seis meses después.",
    },
    {
      title: "El modelo es una pieza, no el sistema",
      description:
        "La IA extrae y propone; las reglas de negocio validan; la persona decide en la excepción. Si mañana cambia el modelo, el flujo sigue.",
    },
    {
      title: "Seguridad por diseño",
      description:
        "Accesos con roles, cifrado en tránsito y reposo, y registro de cada lectura. Los documentos sensibles no circulan fuera del entorno del cliente.",
    },
  ],
  evidencia: [
    {
      sector: "Gestión humana y contratación",
      situacion:
        "Los contratos firmados llegaban por correo en distintos formatos y se transcribían a un archivo maestro.",
      resultado:
        "Los contratos entran por una bandeja, se leen sus datos y alimentan la base central; lo que falta se reclama solo.",
    },
    {
      sector: "Comercio con facturación electrónica",
      situacion:
        "Las facturas de proveedor se validaban a mano contra el sistema contable antes de autorizar el pago.",
      resultado:
        "La validación ocurre en el flujo, y solo las excepciones llegan a una persona, con el motivo escrito.",
    },
    {
      sector: "Servicios con soportes de auditoría",
      situacion:
        "Cada revisión exigía armar una carpeta con evidencias dispersas en correos y carpetas compartidas.",
      resultado:
        "Los soportes quedan indexados por caso y la carpeta de auditoría se genera desde la base.",
    },
  ],
  incluye: [
    "Diagnóstico documental con conteo real de volumen y excepciones",
    "Diseño del pipeline por tipo de documento",
    "Extracción de datos y reglas de validación",
    "Bandeja de excepciones con motivo y documento adjunto",
    "Integración con el sistema contable u operativo que ya usas",
    "Bitácora para auditoría y control interno",
    "Tablero de volumen, aciertos y pendientes",
    "Capacitación del equipo y manuales de operación",
  ],
  faqs: [
    {
      q: "¿Tengo que cambiar mi sistema contable?",
      a: "No. El flujo se conecta al que ya usas —Siesa, Siigo, World Office, una base propia— y le entrega los datos ya validados.",
    },
    {
      q: "¿Qué pasa con los documentos que no se entienden?",
      a: "Van a la bandeja de excepciones con el motivo. El sistema no inventa valores: si no puede leer con confianza, lo dice.",
    },
    {
      q: "¿Esto es «IA» o es OCR?",
      a: "Las dos cosas, y da igual el nombre: se combinan lectura de documentos, modelos de lenguaje y reglas de negocio. Lo importante es que el resultado sea verificable y reproducible.",
    },
    {
      q: "¿Dónde corre y quién puede ver los documentos?",
      a: "En tu infraestructura o en la nuestra, con accesos por rol y registro de cada lectura. Los documentos sensibles no salen del entorno sin autorización explícita.",
    },
    {
      q: "¿Cuánto se reduce el trabajo manual?",
      a: "Depende del tipo de documento y de la calidad de los originales. Por eso el diagnóstico se hace con tu volumen real: la cifra se estima antes de firmar, y se mide en la operación.",
    },
  ],
  cta: {
    titulo: "Mándanos cien documentos.",
    descripcion:
      "Elige el tipo de documento que más te cuesta (facturas, contratos, soportes) y hacemos el diagnóstico con ellos: qué se puede extraer, qué queda en revisión y cuánto trabajo manual se quita. Con tus papeles, no con una demostración preparada.",
    whatsapp: "Hola Prometheus, quiero automatizar el procesamiento de documentos.",
  },
};
