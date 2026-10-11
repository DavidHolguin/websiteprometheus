import { demandaConectada } from "./demanda-conectada";
import { geo } from "./geo";
import { operacionDocumental } from "./operacion-documental";
import { plataformasOperacion } from "./plataformas-operacion";
import { sitiosWeb } from "./sitios-web";
import { tiendasVirtuales } from "./tiendas-virtuales";
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
  sitiosWeb,
  operacionDocumental,
  geo,
  tiendasVirtuales,
  plataformasOperacion,
  demandaConectada,
];

/**
 * El número de líneas escrito en palabras («siete»), para los titulares que
 * las cuentan. Se calcula del registry: si mañana entra una línea nueva, el
 * texto del home y del índice no mienten.
 */
const EN_PALABRAS = [
  "cero",
  "una",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
  "diez",
];

export function lineasEnPalabras(): string {
  return EN_PALABRAS[servicios.length] ?? String(servicios.length);
}

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
