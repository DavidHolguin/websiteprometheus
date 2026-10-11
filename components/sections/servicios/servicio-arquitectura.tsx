import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioArquitecturaProps {
  servicio: Servicio;
}

export function ServicioArquitectura({ servicio }: ServicioArquitecturaProps) {
  return (
    <section
      id="arquitectura"
      className="relative border-t border-border bg-card/30 py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicio-arquitectura-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cómo está construido"
            title={
              <span id="servicio-arquitectura-title">Las decisiones de fondo, dichas claro.</span>
            }
            description="Lo que sigue es para quien va a evaluar técnicamente la propuesta. Si algo de esto no te convence, es mejor discutirlo antes de firmar que después de desplegar."
          />
        </Reveal>

        <Stagger as="ul" className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {servicio.arquitectura.map((punto, i) => (
            <StaggerItem
              as="li"
              key={punto.title}
              className="flex gap-5 rounded-2xl border border-border bg-background/40 p-7"
            >
              <span
                aria-hidden
                className="mt-1 h-6 w-px shrink-0 bg-gradient-to-b from-ember to-transparent"
              />
              <div className="flex flex-col gap-2.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {punto.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                  {punto.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
