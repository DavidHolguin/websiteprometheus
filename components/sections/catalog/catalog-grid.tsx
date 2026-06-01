import { Container } from "@/components/layout/container";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { AgentCard } from "@/components/primitives/agent-card";
import { agents } from "@/lib/agents";

export function CatalogGrid() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24" aria-label="Agentes disponibles">
      <Container>
        <Stagger as="ul" className="grid gap-5 md:grid-cols-2 lg:gap-7">
          {agents.map((agent) => (
            <StaggerItem as="li" key={agent.slug} className="h-full">
              <AgentCard agent={agent} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
