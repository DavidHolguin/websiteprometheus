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
      className="relative scroll-mt-24 border-t border-border bg-card/30 py-14 sm:py-20 lg:py-24"
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

        <Stagger as="div" className="mt-9 flex flex-col gap-5 sm:mt-12">
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
