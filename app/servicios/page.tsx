import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { PortafolioGrid } from "@/components/sections/servicios/portafolio-grid";
import { site } from "@/lib/content";
import { servicios } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Qué hacemos: ventas por WhatsApp, automatización documental, plataformas de operación y generación de demanda. Cuatro líneas, un mismo principio — se entrega funcionando.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: `${site.url}/servicios`,
    title: `Servicios — ${site.name}`,
    description:
      "Ventas por WhatsApp, automatización documental, plataformas de operación y generación de demanda conectada a la operación.",
    siteName: site.name,
  },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="relative isolate pt-32 sm:pt-40 pb-8">
        <Container>
          <SectionHeading
            eyebrow="Portafolio"
            title={<span id="servicios-title">Cuatro líneas de trabajo.</span>}
            description="No vendemos «inteligencia artificial»: vendemos el trabajo que deja de hacerse a mano. Cada línea se contrata por su cuenta y se entrega por fases, con un diagnóstico corto antes de tocar nada."
          />
        </Container>
      </section>

      <PortafolioGrid />

      <section className="relative pb-24">
        <Container>
          <p className="max-w-2xl text-sm text-subtle leading-relaxed">
            ¿No sabes por dónde empezar? Las dos primeras —{servicios[0].nombre} y{" "}
            {servicios[1].nombre}— son las que resuelven más rápido y con menos riesgo. En una
            conversación de treinta minutos te decimos cuál aplica a tu operación, y si no aplica
            ninguna, también.
          </p>
        </Container>
      </section>
    </>
  );
}
