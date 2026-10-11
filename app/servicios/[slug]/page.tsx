import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicioArquitectura } from "@/components/sections/servicios/servicio-arquitectura";
import { ServicioCapacidades } from "@/components/sections/servicios/servicio-capacidades";
import { ServicioCta } from "@/components/sections/servicios/servicio-cta";
import { ServicioEvidencia } from "@/components/sections/servicios/servicio-evidencia";
import { ServicioFaqs } from "@/components/sections/servicios/servicio-faqs";
import { ServicioHero } from "@/components/sections/servicios/servicio-hero";
import { ServicioIncluye } from "@/components/sections/servicios/servicio-incluye";
import { ServicioIntegraciones } from "@/components/sections/servicios/servicio-integraciones";
import { ServicioPasos } from "@/components/sections/servicios/servicio-pasos";
import { ServicioProblema } from "@/components/sections/servicios/servicio-problema";
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

  return (
    <>
      <ServicioHero servicio={servicio} />
      <ServicioProblema servicio={servicio} />
      <ServicioCapacidades servicio={servicio} />
      <ServicioPasos servicio={servicio} />
      <ServicioIntegraciones servicio={servicio} />
      <ServicioArquitectura servicio={servicio} />
      <ServicioEvidencia servicio={servicio} />
      <ServicioIncluye servicio={servicio} />
      <ServicioFaqs servicio={servicio} />
      <ServicioCta servicio={servicio} />
    </>
  );
}
