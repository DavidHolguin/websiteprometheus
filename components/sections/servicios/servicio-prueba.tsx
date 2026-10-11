import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioPruebaProps {
  servicio: Servicio;
}

/**
 * Prueba y alcance en un solo bloque.
 *
 * Antes eran dos secciones (casos reales y «todo lo que se entrega»), cada una
 * con su encabezado y 900 px de aire. Aquí la evidencia va arriba —que es lo
 * que decide— y el alcance queda justo debajo como detalle, sin cambiar de
 * página ni de discurso.
 */
export function ServicioPrueba({ servicio }: ServicioPruebaProps) {
  return (
    <section
      id="prueba"
      className="relative scroll-mt-24 border-t border-border py-14 sm:py-20 lg:py-24"
      aria-labelledby="servicio-prueba-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            title={<span id="servicio-prueba-title">Dónde ya funciona.</span>}
            description="Son operaciones nuestras en producción. El detalle con nombre y cifras se comparte en la conversación, cuando el cliente autoriza publicarlo."
          />
        </Reveal>

        <ul className="mt-9 grid gap-7 sm:mt-12 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {servicio.evidencia.map((caso) => (
            <li
              key={caso.sector}
              className="reveal flex flex-col gap-3 border-t border-border pt-6"
            >
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {caso.sector}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {caso.situacion}
              </p>
              <p className="flex items-start gap-2.5 text-pretty text-sm leading-relaxed text-foreground/90">
                <ArrowRight
                  aria-hidden
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-ember"
                  strokeWidth={2}
                />
                {caso.resultado}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-8 sm:mt-14">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Qué se entrega</h3>
            <p className="max-w-[52ch] text-pretty text-sm leading-relaxed text-subtle">
              El alcance se cierra en la propuesta, con cada entregable y sus fechas. Lo que no
              aplique a tu caso, se quita.
            </p>
          </div>

          <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {servicio.incluye.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-pretty text-sm leading-relaxed text-foreground/85"
              >
                <Check
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-ember"
                  strokeWidth={2.5}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
