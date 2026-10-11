import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsAppFab } from "@/components/primitives/whatsapp-fab";
import { ServicioCapacidades } from "@/components/sections/servicios/servicio-capacidades";
import { ServicioCta } from "@/components/sections/servicios/servicio-cta";
import { ServicioFaqs } from "@/components/sections/servicios/servicio-faqs";
import { ServicioHero } from "@/components/sections/servicios/servicio-hero";
import { ServicioProblema } from "@/components/sections/servicios/servicio-problema";
import { ServicioPrueba } from "@/components/sections/servicios/servicio-prueba";
import { site } from "@/lib/content";
import { getServicioBySlug, getServicioSlugs } from "@/lib/servicios";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-rendea todas las líneas del portafolio en build time. */
export function generateStaticParams() {
  return getServicioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicioBySlug(slug);
  if (!servicio) return {};

  const title = `${servicio.nombre} · ${servicio.categoria}`;

  return {
    title,
    description: servicio.resumen,
    openGraph: {
      type: "article",
      locale: site.locale,
      url: `${site.url}/servicios/${servicio.slug}`,
      title: `${title} — ${site.name}`,
      description: servicio.resumen,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description: servicio.resumen,
    },
    alternates: {
      canonical: `/servicios/${servicio.slug}`,
    },
  };
}

export default async function ServicioPage({ params }: PageProps) {
  const { slug } = await params;
  const servicio = getServicioBySlug(slug);
  if (!servicio) notFound();

  /**
   * Datos estructurados: el servicio y las preguntas frecuentes.
   * Es lo que permite que un buscador (o un asistente) entienda qué se vende
   * aquí sin adivinar con el HTML.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: servicio.nombre,
        serviceType: servicio.categoria,
        description: servicio.resumen,
        url: `${site.url}/servicios/${servicio.slug}`,
        areaServed: "CO",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: servicio.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD generado en build, sin entrada de usuario
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServicioHero servicio={servicio} />
      <ServicioProblema servicio={servicio} />
      <ServicioCapacidades servicio={servicio} />
      <ServicioPrueba servicio={servicio} />
      <ServicioFaqs servicio={servicio} />
      <ServicioCta servicio={servicio} />

      <WhatsAppFab message={servicio.cta.whatsapp} source={servicio.slug} />
    </>
  );
}
