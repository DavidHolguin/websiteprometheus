"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { BrandLogo } from "@/components/primitives/brand-logo";
import type { Agent } from "@/lib/agents";
import { getIcon } from "@/lib/icons";
import { fadeInUp, viewportOnce } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
  className?: string;
}

export function AgentCard({ agent, className }: AgentCardProps) {
  const Icon = getIcon(agent.catalogIcon);

  // Tomamos las primeras 4 integraciones del primer grupo para "preview"
  const previewIntegrations = agent.integrations[0]?.items.slice(0, 4) ?? [];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className={cn("group h-full", className)}
    >
      <Link
        href={`/agentes/${agent.slug}`}
        className={cn(
          "relative flex h-full flex-col gap-7 rounded-2xl border border-border bg-card/60 p-8",
          "transition-all duration-300",
          "hover:border-ember/40 hover:bg-card hover:shadow-[0_0_70px_-20px_rgba(26,115,232,0.45)]",
        )}
      >
        {/* Soft hover glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 70% 0%, rgba(26,115,232,0.1) 0%, transparent 60%)",
          }}
        />

        <div className="relative flex items-start justify-between gap-6">
          <div
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember-soft text-ember border border-ember/20"
          >
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <span
            className={cn(
              "rounded-full border px-2.5 py-0.5 text-xs font-mono uppercase tracking-[0.16em]",
              agent.type === "team"
                ? "border-ember/40 bg-ember-soft text-ember"
                : "border-border-strong bg-card text-muted-foreground",
            )}
          >
            {agent.type === "team" ? "Equipo" : "Agente"}
          </span>
        </div>

        <div className="relative flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_10px_2px_rgba(26,115,232,0.5)]"
            />
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember">
              {agent.category}
            </span>
          </div>
          <h3 className="text-2xl sm:text-[1.75rem] font-semibold tracking-tight text-foreground leading-tight">
            {agent.name}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
            {agent.shortDescription}
          </p>
        </div>

        <div className="relative mt-auto flex items-center justify-between gap-4 pt-6 border-t border-border">
          <ul className="flex items-center gap-2 grayscale opacity-70">
            {previewIntegrations.map((it) => (
              <li key={it.slug} className="flex items-center">
                <BrandLogo slug={it.slug} name={it.name} size={18} color="A1A1AA" />
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground/85 group-hover:text-ember-bright transition-colors">
            Ver detalle
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
