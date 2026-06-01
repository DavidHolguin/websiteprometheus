import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AgentCapabilities } from "@/components/sections/agents/agent-capabilities";
import { AgentCta } from "@/components/sections/agents/agent-cta";
import { AgentHero } from "@/components/sections/agents/agent-hero";
import { AgentIntegrations } from "@/components/sections/agents/agent-integrations";
import { AgentMetrics } from "@/components/sections/agents/agent-metrics";
import { AgentTeamMembers } from "@/components/sections/agents/agent-team-members";
import { AgentUseCases } from "@/components/sections/agents/agent-use-cases";
import { AgentWorkflow } from "@/components/sections/agents/agent-workflow";
import { getAgentBySlug, getAllSlugs } from "@/lib/agents";
import { site } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-rendea las rutas de todos los agentes en build time.
 * Cuando agregas un nuevo agente al registry, la ruta nueva se genera
 * automáticamente en el próximo deploy.
 */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return {};

  const title = `${agent.name} · ${agent.category}`;
  const description = agent.shortDescription;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      locale: site.locale,
      url: `${site.url}/agentes/${agent.slug}`,
      title: `${title} — ${site.name}`,
      description,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
    },
    alternates: {
      canonical: `/agentes/${agent.slug}`,
    },
  };
}

export default async function AgentPage({ params }: PageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();

  return (
    <>
      <AgentHero agent={agent} />
      <AgentCapabilities agent={agent} />
      <AgentIntegrations agent={agent} />
      <AgentWorkflow agent={agent} />
      {agent.type === "team" && <AgentTeamMembers agent={agent} />}
      <AgentUseCases agent={agent} />
      <AgentMetrics agent={agent} />
      <AgentCta agent={agent} />
    </>
  );
}
