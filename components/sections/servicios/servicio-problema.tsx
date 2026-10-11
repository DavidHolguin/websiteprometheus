import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BeforeAfter } from "@/components/primitives/before-after";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioProblemaProps {
  servicio: Servicio;
}

/**
 * Lo que deja de pasar: el dolor, contado antes / después.
 *
 * Es el bloque que sostiene la conversación de venta, así que va primero —
 * antes de las capacidades— y en formato de filas comparables: en móvil se
 * lee cada problema completo sin scrollear para comparar el antes con el
 * después.
 */
export function ServicioProblema({ servicio }: ServicioProblemaProps) {
  return (
    <section
      id="problema"
      className="relative scroll-mt-24 border-t border-border py-14 sm:py-20 lg:py-24"
      aria-labelledby="servicio-problema-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            title={<span id="servicio-problema-title">Lo que deja de pasar.</span>}
            description="Escrito como se vive en la operación, y como queda cuando el servicio está desplegado. Si nada de esto te suena, este servicio no es para ti — y te lo decimos."
          />
        </Reveal>

        <div className="mt-9 grid gap-7 sm:mt-12 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {servicio.problema.map((item) => (
            <BeforeAfter
              key={item.title}
              className="reveal"
              title={item.title}
              before={item.before}
              after={item.after}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
