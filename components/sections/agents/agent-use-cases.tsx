import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { BeforeAfter } from "@/components/primitives/before-after";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Agent } from "@/lib/agents";

interface AgentUseCasesProps {
  agent: Agent;
}

export function AgentUseCases({ agent }: AgentUseCasesProps) {
  return (
    <section
      className="relative border-t border-border bg-card/30 py-24 sm:py-32 lg:py-40"
      aria-labelledby="agent-use-cases-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Casos reales"
            title={<span id="agent-use-cases-title">Lo que cambia en tu operación.</span>}
            description="Cada caso es una fricción concreta que el agente quita. Si tu equipo no reconoce el dolor, probablemente no lo necesitas todavía."
          />
        </Reveal>

        <Stagger as="div" className="mt-16 flex flex-col gap-5">
          {agent.useCases.map((useCase) => (
            <BeforeAfter
              key={useCase.title}
              title={useCase.title}
              before={useCase.before}
              after={useCase.after}
            />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
