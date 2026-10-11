import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { WaLink } from "@/components/primitives/wa-link";
import { WhatsAppFab } from "@/components/primitives/whatsapp-fab";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { PortafolioGrid } from "@/components/sections/servicios/portafolio-grid";
import { Button } from "@/components/ui/button";
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

const MENSAJE_INDEX =
  "Hola Prometheus, vengo del portafolio de servicios y quiero saber por dónde empezar.";

export default function ServiciosPage() {
  return (
    <>
      <section className="relative isolate pt-28 pb-8 sm:pt-36">
        <Container>
          <SectionHeading
            title={<span id="servicios-title">Cuatro líneas de trabajo.</span>}
            description="No vendemos «inteligencia artificial»: vendemos el trabajo que deja de hacerse a mano. Cada línea se contrata por su cuenta y se entrega por fases, con un diagnóstico corto antes de tocar nada."
          />
        </Container>
      </section>

      <PortafolioGrid />

      <section className="relative pb-16 sm:pb-20">
        <Container>
          <div className="flex flex-col items-start gap-5 border-t border-border pt-8">
            <p className="max-w-[58ch] text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              ¿No sabes por dónde empezar?{" "}
              <strong className="font-medium text-foreground">{servicios[0].nombre}</strong> y{" "}
              <strong className="font-medium text-foreground">{servicios[1].nombre}</strong> son las
              que resuelven más rápido y con menos riesgo. En una conversación de treinta minutos te
              decimos cuál aplica a tu operación, y si no aplica ninguna, también.
            </p>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <WaLink message={MENSAJE_INDEX} origen="index-servicios" servicio="portafolio">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                Conversemos
                <ArrowRight />
              </WaLink>
            </Button>
          </div>
        </Container>
      </section>

      <WhatsAppFab message={MENSAJE_INDEX} source="index-servicios" />
    </>
  );
}
