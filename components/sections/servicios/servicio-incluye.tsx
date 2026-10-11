import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioIncluyeProps {
  servicio: Servicio;
}

export function ServicioIncluye({ servicio }: ServicioIncluyeProps) {
  return (
    <section
      id="incluye"
      className="relative border-t border-border bg-card/30 py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicio-incluye-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Qué incluye el engagement"
            title={<span id="servicio-incluye-title">Todo lo que se entrega.</span>}
            description="El alcance se cierra en la propuesta, con el detalle de cada entregable y sus fechas. Esta es la forma típica; lo que no aplique a tu caso, se quita."
          />
        </Reveal>

        <Stagger as="ul" className="mt-16 grid gap-4 md:grid-cols-2 lg:gap-5">
          {servicio.incluye.map((item) => (
            <StaggerItem
              as="li"
              key={item}
              className="flex items-start gap-3.5 rounded-xl border border-border bg-background/40 px-5 py-4"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ember/40 bg-ember/10">
                <Check className="h-3 w-3 text-ember" strokeWidth={2.5} />
              </span>
              <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
