import { ImageResponse } from "next/og";
import { getAgentBySlug, getAllSlugs } from "@/lib/agents";
import { site } from "@/lib/content";

export const alt = "Agente — Prometheus Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return getAllSlugs().map((slug) => ({
    id: slug,
    alt: `${slug} — ${site.name}`,
    size,
    contentType,
  }));
}

interface OGProps {
  params: { slug: string };
}

export default async function OG({ params }: OGProps) {
  const agent = getAgentBySlug(params.slug);
  if (!agent) {
    return new ImageResponse(<div style={{ fontSize: 40, color: "white" }}>Not found</div>, size);
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "radial-gradient(circle at 75% 60%, rgba(26,115,232,0.45) 0%, rgba(26,115,232,0) 55%), #000000",
        padding: "64px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 22,
          color: "#FAFAFA",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: "rgba(26,115,232,0.18)",
            border: "1px solid rgba(26,115,232,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#5697FF",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          P
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ fontWeight: 700 }}>Prometheus</span>
          <span style={{ color: "#A1A1AA" }}>Labs</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            color: "#1A73E8",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 4, background: "#1A73E8" }} />
          {agent.category} · {agent.type === "team" ? "Equipo" : "Agente"}
        </div>

        <div
          style={{
            display: "flex",
            color: "#FAFAFA",
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: -2.5,
            lineHeight: 1,
            maxWidth: 1040,
          }}
        >
          {agent.name}
        </div>

        <div
          style={{
            color: "#A1A1AA",
            fontSize: 26,
            lineHeight: 1.45,
            maxWidth: 920,
            marginTop: 8,
          }}
        >
          {agent.shortDescription}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
