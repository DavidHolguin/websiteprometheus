import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BrandLogo } from "@/components/primitives/brand-logo";
import { SectionHeading } from "@/components/primitives/section-heading";
import { getIcon } from "@/lib/icons";
import type { Servicio } from "@/lib/servicios";

interface ServicioCapacidadesProps {
  servicio: Servicio;
}

/**
 * Qué queda funcionando, y sobre qué sistemas trabaja.
 *
 * La rejilla usa líneas de 1 px (no tarjetas dentro de tarjetas) para que las
 * capacidades se lean como una ficha técnica: seis puntos en una pantalla de
 * móvil en vez de seis pantallas. Los sistemas con los que se conecta van
 * justo debajo, en una sola línea, en vez de en su propia sección.
 */
export function ServicioCapacidades({ servicio }: ServicioCapacidadesProps) {
  const integraciones = Array.from(
    new Map(
      servicio.integraciones.flatMap((grupo) => grupo.items).map((item) => [item.slug, item]),
    ).values(),
  );

  return (
    <section
      id="capacidades"
      className="relative scroll-mt-24 border-t border-border bg-card/20 py-14 sm:py-20 lg:py-24"
      aria-labelledby="servicio-capacidades-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            title={<span id="servicio-capacidades-title">Qué queda funcionando.</span>}
            description="Cada punto es verificable en tu operación. Si al terminar el despliegue no se ejecuta, no se cobra el siguiente módulo."
          />
        </Reveal>

        <div className="reveal mt-9 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {servicio.capacidades.map((capacidad) => {
            const Icon = getIcon(capacidad.icon);
            return (
              <div key={capacidad.title} className="flex gap-4 bg-background p-5 sm:p-6">
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ember/20 bg-ember-soft text-ember"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">
                    {capacidad.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {capacidad.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {integraciones.length > 0 && (
          <div className="reveal mt-8 flex flex-col gap-3">
            <p className="max-w-[60ch] text-sm leading-relaxed text-subtle">
              Trabaja sobre los sistemas que ya tienes. Si hace falta reemplazar alguno, se dice en
              el diagnóstico y se justifica.
            </p>
            <ul className="flex flex-wrap gap-2">
              {integraciones.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5"
                >
                  <BrandLogo slug={item.slug} name={item.name} size={14} color="A1A1AA" />
                  <span className="text-xs font-medium text-muted-foreground">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
