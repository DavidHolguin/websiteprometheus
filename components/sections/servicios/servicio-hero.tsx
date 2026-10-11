import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/container";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { WaLink } from "@/components/primitives/wa-link";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { Button } from "@/components/ui/button";
import type { Servicio } from "@/lib/servicios";

interface ServicioHeroProps {
  servicio: Servicio;
}

/**
 * Portada de una landing de servicio.
 *
 * Orden pensado para convertir: resultado → de qué se trata → dos salidas
 * (WhatsApp y la prueba de lo que incluye) → para quién es → dónde ya opera.
 * Todo alineado a la izquierda para que el ojo baje por una sola columna, que
 * es como se lee en el móvil (donde aterriza la mayoría del tráfico pagado).
 * En escritorio la segunda columna lleva el filtro (para quién es) y la
 * evidencia (dónde ya opera) al lado del titular, no debajo.
 */
export function ServicioHero({ servicio }: ServicioHeroProps) {
  const palabras = servicio.hero.headline.trim().split(" ");
  const inicio = palabras.slice(0, -1).join(" ");
  const acento = palabras.at(-1) ?? "";
  const sectores = servicio.evidencia.slice(0, 3).map((caso) => caso.sector);

  return (
    <section
      className="relative isolate flex flex-col justify-center overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 lg:min-h-[84svh] lg:pb-24"
      aria-labelledby="servicio-hero-title"
    >
      <EmberGlow intensity="strong" position="center" className="-z-10" />
      <GrainOverlay />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16">
          <div className="flex max-w-3xl flex-col items-start">
            <h1
              id="servicio-hero-title"
              className="text-balance font-semibold tracking-tighter leading-[0.98] text-foreground"
              style={{ fontSize: "clamp(2.125rem, 6vw + 1rem, 4.5rem)" }}
            >
              {inicio} <span className="text-ember">{acento}</span>
            </h1>

            <p className="mt-5 max-w-[48ch] text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              {servicio.hero.description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <WaLink message={servicio.cta.whatsapp} origen="hero" servicio={servicio.slug}>
                  <WhatsAppIcon className="h-4 w-4" />
                  Hablar por WhatsApp
                </WaLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#capacidades">
                  Ver qué incluye
                  <ArrowDown />
                </a>
              </Button>
            </div>

            <p className="mt-6 max-w-[46ch] text-pretty text-sm leading-relaxed text-subtle lg:hidden">
              {servicio.paraQuien}
            </p>

            {sectores.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 lg:hidden">
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-subtle">
                  En producción
                </span>
                <ul className="flex flex-wrap gap-2">
                  {sectores.map((sector) => (
                    <li
                      key={sector}
                      className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="hidden flex-col gap-6 border-border lg:flex lg:border-l lg:pl-10">
            <p className="max-w-[38ch] text-pretty text-sm leading-relaxed text-subtle">
              {servicio.paraQuien}
            </p>

            {sectores.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-subtle">
                  En producción
                </span>
                <ul className="flex flex-col gap-2.5">
                  {sectores.map((sector) => (
                    <li
                      key={sector}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_10px_2px_rgba(26,115,232,0.5)]"
                      />
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
