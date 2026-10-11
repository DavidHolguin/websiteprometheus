import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { CapabilityCard } from "@/components/primitives/capability-card";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Servicio } from "@/lib/servicios";

interface ServicioCapacidadesProps {
  servicio: Servicio;
}

export function ServicioCapacidades({ servicio }: ServicioCapacidadesProps) {
  return (
    <section
      id="capacidades"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicio-capacidades-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Qué queda funcionando"
            title={<span id="servicio-capacidades-title">Capacidades concretas, no promesas.</span>}
            description="Cada punto es algo verificable en tu operación. Si al terminar el despliegue no se ejecuta, no se cobra el siguiente módulo."
          />
        </Reveal>

        <Stagger as="div" className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {servicio.capacidades.map((cap) => (
            <CapabilityCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
            />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
