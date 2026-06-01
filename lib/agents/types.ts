import type { IconName } from "@/lib/icons";

/** Discriminator: un Agent puede ser individual o un equipo coordinado. */
export type AgentType = "agent" | "team";

/** Modo de inserción en el flujo de la empresa. */
export type WorkflowMode = "copiloto" | "autonomo" | "on-demand";

/** Capability: una cosa concreta que el agente hace. */
export interface Capability {
  /** Nombre PascalCase del icono — resuelto en cliente vía `getIcon`. */
  icon: IconName;
  title: string;
  description: string;
}

/** Una herramienta a la que el agente se conecta. */
export interface IntegrationItem {
  /**
   * Slug usado por `BrandLogo`. Puede ser:
   * - slug de Simple Icons (e.g. `slack`, `googledrive`)
   * - slug de los inlines locales (e.g. `openai`, `aws`, `siesa`)
   */
  slug: string;
  name: string;
}

export interface IntegrationGroup {
  /** Categoría visible: "ERP", "Productividad", "Comunicación"… */
  label: string;
  items: IntegrationItem[];
}

export interface WorkflowStep {
  mode: WorkflowMode;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  /** Lo que pasaba antes (fricción). */
  before: string;
  /** Lo que pasa ahora (con el agente). */
  after: string;
}

export interface AgentMetric {
  value: string;
  label: string;
}

export interface TeamMember {
  /** Nombre interno del agente del equipo (ej. "Triage", "Escalator"). */
  name: string;
  /** Rol dentro del equipo, una línea. */
  role: string;
  description: string;
}

/**
 * Un agente comercializable. Si `type === "team"` debe incluir `teamMembers`.
 * El sistema garantiza la consistencia visual: cada agente nuevo solo necesita
 * datos — los componentes de sección leen esto.
 */
export interface Agent {
  slug: string;
  type: AgentType;
  name: string;
  /** Eyebrow del hero ("Ventas", "Finanzas", "Soporte"). */
  category: string;
  /** 1-liner para el catálogo. */
  shortDescription: string;
  /** Icono Lucide para la card del catálogo (nombre PascalCase). */
  catalogIcon: IconName;
  hero: {
    /** Headline en 1-2 frases. La última palabra se realza en ember. */
    headline: string;
    /** Párrafo de apoyo. */
    description: string;
  };
  capabilities: Capability[];
  integrations: IntegrationGroup[];
  workflow: WorkflowStep[];
  useCases: UseCase[];
  metrics: AgentMetric[];
  /** Sólo para `type === "team"`. */
  teamMembers?: TeamMember[];
}
