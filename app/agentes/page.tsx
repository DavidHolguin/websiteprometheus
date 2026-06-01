import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { CatalogGrid } from "@/components/sections/catalog/catalog-grid";
import { CatalogHero } from "@/components/sections/catalog/catalog-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agentes IA",
  description:
    "Contrata agentes IA especialistas o equipos completos para tu operación. Conectan con Siesa, Siigo, Google Workspace, WhatsApp y más.",
  alternates: { canonical: "/agentes" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: `${site.url}/agentes`,
    title: `Catálogo de agentes — ${site.name}`,
    description:
      "Agentes IA especializados que se conectan a las herramientas que tu empresa ya usa todos los días.",
    siteName: site.name,
  },
};

export default function CatalogPage() {
  return (
    <>
      <CatalogHero />
      <CatalogGrid />

      <section className="relative border-t border-border py-20 sm:py-24 lg:py-32">
        <Container size="narrow">
          <Reveal>
            <div className="flex flex-col items-center gap-7 text-center">
              <h2 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                ¿No ves tu caso?
              </h2>
              <p className="max-w-xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
                Diseñamos agentes a medida para flujos que aún no están en este catálogo. Cuéntanos
                qué quitarle al equipo y vemos si tiene sentido.
              </p>
              <Button asChild size="lg">
                <a href="/#contacto">
                  Diseñar un agente a medida
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
