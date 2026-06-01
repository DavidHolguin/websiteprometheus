import type { LucideIcon } from "lucide-react";
import { Bot, Hand, MousePointerClick } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Agent, WorkflowMode } from "@/lib/agents";

interface AgentWorkflowProps {
  agent: Agent;
}

const MODE_ICON: Record<WorkflowMode, LucideIcon> = {
  autonomo: Bot,
  copiloto: Hand,
  "on-demand": MousePointerClick,
};

const MODE_LABEL: Record<WorkflowMode, string> = {
  autonomo: "Autónomo",
  copiloto: "Copiloto",
  "on-demand": "On-demand",
};

export function AgentWorkflow({ agent }: AgentWorkflowProps) {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="agent-workflow-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cómo se integra a tu equipo"
            title={
              <span id="agent-workflow-title">Tres formas de poner el agente a trabajar.</span>
            }
            description="Eliges cuánta autonomía le das. Empieza en copiloto, gradúalo a autónomo a medida que ves resultados."
          />
        </Reveal>

        <Stagger as="ul" className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-6">
          {agent.workflow.map((step) => {
            const Icon = MODE_ICON[step.mode];
            return (
              <StaggerItem
                as="li"
                key={step.mode}
                className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:border-ember/40 hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <div
                    aria-hidden
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-soft text-ember border border-ember/20"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember">
                    {MODE_LABEL[step.mode]}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
