import type { MetadataRoute } from "next";
import { agents } from "@/lib/agents";
import { site } from "@/lib/content";
import { servicios } from "@/lib/servicios";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/servicios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicios.map((servicio) => ({
      url: `${site.url}/servicios/${servicio.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: servicio.entrada ? 0.9 : 0.8,
    })),
    {
      url: `${site.url}/agentes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...agents.map((agent) => ({
      url: `${site.url}/agentes/${agent.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
