import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { LeadForm } from "@/components/primitives/lead-form";
import { WaLink } from "@/components/primitives/wa-link";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { Button } from "@/components/ui/button";
import type { Servicio } from "@/lib/servicios";

interface ServicioCtaProps {
  servicio: Servicio;
}

/**
 * Cierre: las dos formas de contactar, lado a lado.
 *
 * WhatsApp primero (es la vía rápida y ya está validada) y el formulario al
 * lado, visible sin scroll en escritorio. Debajo va el plan por fases en una
 * línea por etapa: es lo que se preguntaba en la sección de «tres pasos», sin
 * gastar una sección entera en explicarlo.
 */
export function ServicioCta({ servicio }: ServicioCtaProps) {
  const source = `${servicio.nombre} (${servicio.categoria})`;

  return (
    <section
      id="contacto"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-border"
      aria-labelledby="servicio-cta-title"
    >
      <EmberGlow intensity="strong" position="center" className="-z-10" />
      <GrainOverlay />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="reveal flex flex-col items-start gap-5">
            <h2
              id="servicio-cta-title"
              className="text-balance font-semibold tracking-tighter leading-[1.02] text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw + 0.75rem, 3.5rem)" }}
            >
              {servicio.cta.titulo}
            </h2>

            <p className="max-w-[46ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {servicio.cta.descripcion}
            </p>

            <Button asChild size="lg" className="mt-1 w-full sm:w-auto">
              <WaLink message={servicio.cta.whatsapp} origen="contacto" servicio={servicio.slug}>
                <WhatsAppIcon className="h-4 w-4" />
                Escribir por WhatsApp
              </WaLink>
            </Button>

            <ul className="mt-3 w-full max-w-md divide-y divide-border border-t border-border">
              {servicio.pasos.map((paso) => (
                <li key={paso.numero} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-pretty text-sm text-foreground/85">{paso.title}</span>
                  <span className="shrink-0 text-xs text-subtle">{paso.duration}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal>
            <LeadForm source={source} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
