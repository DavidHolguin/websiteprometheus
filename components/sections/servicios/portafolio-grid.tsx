import { Container } from "@/components/layout/container";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ServicioCard } from "@/components/primitives/servicio-card";
import { servicios } from "@/lib/servicios";

export function PortafolioGrid() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24" aria-label="Servicios disponibles">
      <Container>
        <Stagger as="ul" className="grid gap-5 md:grid-cols-2 lg:gap-7">
          {servicios.map((servicio) => (
            <StaggerItem as="li" key={servicio.slug} className="h-full">
              <ServicioCard servicio={servicio} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
