import { agenteFinanzas } from "./agente-finanzas";
import { agenteOperaciones } from "./agente-operaciones";
import { agenteVentas } from "./agente-ventas";
import { equipoSoporte } from "./equipo-soporte";
import type { Agent } from "./types";

/**
 * Registry de todos los agentes/equipos comercializables.
 *
 * Para agregar uno nuevo: crear un archivo `lib/agents/<slug>.ts` que
 * exporte un objeto `Agent`, importarlo arriba y agregarlo a este array.
 * El catálogo, las rutas dinámicas y el sitemap se actualizan automáticamente.
 *
 * El orden de este array es el orden en que aparecen en el catálogo `/agentes`.
 */
export const agents: Agent[] = [agenteVentas, agenteFinanzas, agenteOperaciones, equipoSoporte];

/**
 * Lookup por slug. Devuelve `undefined` si no existe.
 * Las rutas `/agentes/[slug]` usan esto en `generateStaticParams`.
 */
export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}

/** Lista de todos los slugs — útil para `generateStaticParams`. */
export function getAllSlugs(): string[] {
  return agents.map((a) => a.slug);
}

export type {
  Agent,
  AgentMetric,
  AgentType,
  Capability,
  IntegrationGroup,
  IntegrationItem,
  TeamMember,
  UseCase,
  WorkflowMode,
  WorkflowStep,
} from "./types";
