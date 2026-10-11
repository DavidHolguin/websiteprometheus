import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { BeforeAfter } from "@/components/primitives/before-after";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioProblemaProps {
  servicio: Servicio;
}

export function ServicioProblema({ servicio }: ServicioProblemaProps) {
  return (
    <section
      id="problema"
      className="relative border-t border-border bg-card/30 py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicio-problema-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Qué deja de pasar"
            title={
              <span id="servicio-problema-title">
                El problema no es la tecnología: es el trabajo que nadie debería estar haciendo.
              </span>
            }
            description="Cada punto está escrito como se vive en la operación, y como queda cuando el servicio está desplegado. Si algo de esto no te suena, este servicio no es para ti — y te lo decimos."
          />
        </Reveal>

        <Stagger as="div" className="mt-16 grid gap-5 lg:gap-6">
          {servicio.problema.map((item) => (
            <BeforeAfter
              key={item.title}
              title={item.title}
              before={item.before}
              after={item.after}
            />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
