import { demandaConectada } from "./demanda-conectada";
import { operacionDocumental } from "./operacion-documental";
import { plataformasOperacion } from "./plataformas-operacion";
import type { Servicio } from "./types";
import { ventasWhatsapp } from "./ventas-whatsapp";

/**
 * Registry de las líneas de servicio de Prometheus Labs.
 *
 * Para agregar una: crear `lib/servicios/<slug>.ts` exportando un `Servicio`,
 * importarlo aquí y sumarlo al array. El índice `/servicios`, las rutas
 * `/servicios/<slug>`, el sitemap y la sección del home se arman solos.
 *
 * El orden de este array es el orden del portafolio: primero las líneas por las
 * que la casa recomienda empezar (`entrada: true`).
 */
export const servicios: Servicio[] = [
  ventasWhatsapp,
  operacionDocumental,
  plataformasOperacion,
  demandaConectada,
];

export function getServicioBySlug(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}

export function getServicioSlugs(): string[] {
  return servicios.map((s) => s.slug);
}

/** Las líneas por las que conviene empezar. */
export function getServiciosDeEntrada(): Servicio[] {
  return servicios.filter((s) => s.entrada);
}

export type {
  CapacidadServicio,
  EvidenciaServicio,
  FaqServicio,
  IntegracionGrupo,
  IntegracionItem,
  PasoServicio,
  ProblemaServicio,
  PuntoArquitectura,
  Servicio,
} from "./types";
