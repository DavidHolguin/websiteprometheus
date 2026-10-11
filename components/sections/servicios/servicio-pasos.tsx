import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioPasosProps {
  servicio: Servicio;
}

export function ServicioPasos({ servicio }: ServicioPasosProps) {
  return (
    <section
      id="proceso"
      className="relative border-t border-border bg-card/30 py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicio-pasos-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cómo se trabaja"
            title={<span id="servicio-pasos-title">Tres pasos. Sin humo.</span>}
            description="Se empieza por el diagnóstico: una a dos semanas para mirar tu operación real y acordar la métrica. No se despliega nada sin eso."
          />
        </Reveal>

        <Stagger as="ol" className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {servicio.pasos.map((paso) => (
            <StaggerItem
              as="li"
              key={paso.numero}
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card/50 p-8 transition-all duration-300 hover:border-ember/40 hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-ember">{paso.numero}</span>
                <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-subtle">
                  {paso.duration}
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{paso.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                {paso.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
