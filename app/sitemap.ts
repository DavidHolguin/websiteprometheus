import type { MetadataRoute } from "next";
import { agents } from "@/lib/agents";
import { site } from "@/lib/content";

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
      url: `${site.url}/agentes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...agents.map((agent) => ({
      url: `${site.url}/agentes/${agent.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
