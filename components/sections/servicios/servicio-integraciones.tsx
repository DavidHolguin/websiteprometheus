import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { BrandLogo } from "@/components/primitives/brand-logo";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioIntegracionesProps {
  servicio: Servicio;
}

export function ServicioIntegraciones({ servicio }: ServicioIntegracionesProps) {
  return (
    <section
      id="integraciones"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicio-integraciones-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Con qué se conecta"
            title={
              <span id="servicio-integraciones-title">
                Trabaja sobre lo que ya tienes, no en lugar de eso.
              </span>
            }
            description="El servicio se enchufa a tus sistemas actuales. Si hace falta reemplazar alguno, se dice en el diagnóstico y se justifica."
          />
        </Reveal>

        <Stagger as="ul" className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {servicio.integraciones.map((grupo) => (
            <StaggerItem
              as="li"
              key={grupo.label}
              className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-card/60 p-8 transition-all duration-300 hover:border-ember/40 hover:bg-card"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 80% 0%, rgba(26,115,232,0.08) 0%, transparent 60%)",
                }}
              />

              <div className="relative flex items-center justify-between gap-6">
                <div className="inline-flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_10px_2px_rgba(26,115,232,0.5)]"
                  />
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember">
                    {grupo.label}
                  </span>
                </div>
              </div>

              <ul className="relative flex flex-wrap gap-2">
                {grupo.items.map((item) => (
                  <li
                    key={item.slug}
                    className="group/chip flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-2 transition-all duration-300 hover:border-ember/50 hover:bg-background hover:shadow-[0_0_24px_-8px_rgba(26,115,232,0.4)]"
                  >
                    <span className="grayscale opacity-65 transition-all duration-300 group-hover/chip:grayscale-0 group-hover/chip:opacity-100">
                      <BrandLogo slug={item.slug} name={item.name} size={16} color="A1A1AA" />
                    </span>
                    <span className="text-sm font-medium text-foreground/85 group-hover/chip:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
