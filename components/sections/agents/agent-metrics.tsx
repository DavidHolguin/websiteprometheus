import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Metric } from "@/components/primitives/metric";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Agent } from "@/lib/agents";

interface AgentMetricsProps {
  agent: Agent;
}

export function AgentMetrics({ agent }: AgentMetricsProps) {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="agent-metrics-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Lo que esperar"
            title={
              <span id="agent-metrics-title">Orden de magnitud, no promesa de marketing.</span>
            }
            description="Estas cifras dependen del contexto, pero el orden de magnitud se sostiene. Si en 4 semanas no las vemos moverse, ajustamos sin facturar el siguiente módulo."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-border bg-card/40 overflow-hidden">
          {agent.metrics.map((metric) => (
            <Metric key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
