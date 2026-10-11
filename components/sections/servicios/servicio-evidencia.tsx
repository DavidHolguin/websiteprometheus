import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioEvidenciaProps {
  servicio: Servicio;
}

export function ServicioEvidencia({ servicio }: ServicioEvidenciaProps) {
  return (
    <section
      id="evidencia"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicio-evidencia-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Dónde ya funciona"
            title={<span id="servicio-evidencia-title">Casos reales, sin adornos.</span>}
            description="Son operaciones nuestras en producción. El detalle con nombre y cifras se comparte en la conversación, cuando el cliente autoriza publicarlo."
          />
        </Reveal>

        <Stagger as="ul" className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {servicio.evidencia.map((caso) => (
            <StaggerItem
              as="li"
              key={caso.sector}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card/50 p-8"
            >
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember">
                {caso.sector}
              </span>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-subtle">
                    El punto de partida
                  </span>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {caso.situacion}
                  </p>
                </div>
                <span aria-hidden className="h-px w-full bg-border" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ember/80">
                    Qué cambió
                  </span>
                  <p className="text-sm text-foreground/85 text-pretty leading-relaxed">
                    {caso.resultado}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
