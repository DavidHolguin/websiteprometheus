import { Bot } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Agent } from "@/lib/agents";

interface AgentTeamMembersProps {
  agent: Agent;
}

export function AgentTeamMembers({ agent }: AgentTeamMembersProps) {
  if (!agent.teamMembers || agent.teamMembers.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="agent-team-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Composición del equipo"
            title={
              <span id="agent-team-title">
                {agent.teamMembers.length} agentes que colaboran como uno solo.
              </span>
            }
            description="Cada uno tiene un rol claro y se pasa el contexto al siguiente sin pérdida. No es chat de Slack — es protocolo."
          />
        </Reveal>

        <Stagger as="ul" className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-6">
          {agent.teamMembers.map((member, idx) => (
            <StaggerItem
              as="li"
              key={member.name}
              className="group relative flex flex-col gap-5 rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:border-ember/40 hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <div
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-soft text-ember border border-ember/20"
                >
                  <Bot className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-mono text-subtle">0{idx + 1}</span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {member.name}
                </h3>
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember">
                  {member.role}
                </span>
                <p className="mt-2 text-sm text-muted-foreground text-pretty leading-relaxed">
                  {member.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
