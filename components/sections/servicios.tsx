import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/primitives/section-heading";
import { ServicioCard } from "@/components/primitives/servicio-card";
import { Button } from "@/components/ui/button";
import { lineasEnPalabras, servicios } from "@/lib/servicios";

/**
 * Resumen del portafolio en el home: las líneas, cada una con su landing.
 * El detalle vive en `/servicios/<slug>`.
 */
export function Servicios() {
  const lineas = lineasEnPalabras();
  const titulo = `${lineas.charAt(0).toUpperCase()}${lineas.slice(1)} formas de trabajar con nosotros.`;

  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicios-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title={<span id="servicios-title">{titulo}</span>}
            description="Cada línea se contrata sola, arranca con un diagnóstico corto y se entrega por fases. No vendemos «inteligencia artificial»: vendemos el trabajo que deja de hacerse a mano."
          />
        </Reveal>

        <Stagger as="ul" className="mt-16 grid gap-5 md:grid-cols-2 lg:gap-7">
          {servicios.map((servicio) => (
            <StaggerItem as="li" key={servicio.slug} className="h-full">
              <ServicioCard servicio={servicio} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="/servicios">
              Ver el portafolio completo
              <ArrowRight className="ml-1" />
            </a>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
