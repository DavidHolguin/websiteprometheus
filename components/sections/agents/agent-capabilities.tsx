import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { CapabilityCard } from "@/components/primitives/capability-card";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Agent } from "@/lib/agents";

interface AgentCapabilitiesProps {
  agent: Agent;
}

export function AgentCapabilities({ agent }: AgentCapabilitiesProps) {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-24 py-14 sm:py-20 lg:py-24"
      aria-labelledby="agent-capabilities-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Qué hace"
            title={<span id="agent-capabilities-title">Capacidades concretas, no promesas.</span>}
            description="Cada capacidad es una tarea verificable. Si la encuentras pero no se ejecuta en tu flujo, no se cobra."
          />
        </Reveal>

        <Stagger
          as="div"
          className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {agent.capabilities.map((cap) => (
            <CapabilityCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
            />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
