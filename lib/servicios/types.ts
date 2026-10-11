import type { IconName } from "@/lib/icons";

/** Un problema concreto del negocio, contado como antes/después. */
export interface ProblemaServicio {
  title: string;
  /** Lo que pasa hoy (la fricción, en palabras del cliente). */
  before: string;
  /** Lo que pasa cuando el servicio está desplegado. */
  after: string;
}

/** Una cosa concreta que el servicio deja funcionando. */
export interface CapacidadServicio {
  icon: IconName;
  title: string;
  description: string;
}

/** Un paso del engagement (diagnóstico → despliegue → operación). */
export interface PasoServicio {
  numero: string;
  title: string;
  duration: string;
  description: string;
}

export interface IntegracionItem {
  /** Slug de Simple Icons o de los logotipos locales de `BrandLogo`. */
  slug: string;
  name: string;
}

export interface IntegracionGrupo {
  label: string;
  items: IntegracionItem[];
}

/** Una decisión de arquitectura explicada para quien evalúa técnicamente. */
export interface PuntoArquitectura {
  title: string;
  description: string;
}

/** Un caso real, sin el nombre del cliente salvo autorización. */
export interface EvidenciaServicio {
  sector: string;
  situacion: string;
  resultado: string;
}

export interface FaqServicio {
  q: string;
  a: string;
}

/**
 * Una línea de servicio comercializable.
 *
 * Igual que con los agentes: el componente no sabe de copy. Cada servicio nuevo
 * es un archivo `lib/servicios/<slug>.ts` que exporta este objeto; el índice,
 * las rutas y el sitemap se arman solos desde el registry.
 */
export interface Servicio {
  slug: string;
  /** Nombre comercial de la línea (no de la tecnología). */
  nombre: string;
  /** Eyebrow del hero y categoría en el índice. */
  categoria: string;
  /** ¿Es una de las líneas por las que conviene empezar? */
  entrada: boolean;
  /** 1-línea para el índice, el menú y los metadatos. */
  resumen: string;
  /** Icono Lucide (nombre PascalCase) para las tarjetas. */
  iconoCatalogo: IconName;
  /** Para quién es — en una línea, filtra al que no es. */
  paraQuien: string;
  hero: {
    /** La última palabra se realza en ember. */
    headline: string;
    description: string;
  };
  problema: ProblemaServicio[];
  capacidades: CapacidadServicio[];
  pasos: PasoServicio[];
  integraciones: IntegracionGrupo[];
  arquitectura: PuntoArquitectura[];
  evidencia: EvidenciaServicio[];
  /** Qué incluye el engagement (no es una lista de precios). */
  incluye: string[];
  faqs: FaqServicio[];
  cta: {
    titulo: string;
    descripcion: string;
    /** Mensaje pre-llenado del botón de WhatsApp. */
    whatsapp: string;
  };
}
