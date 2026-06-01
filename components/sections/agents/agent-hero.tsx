"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/layout/container";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { Button } from "@/components/ui/button";
import type { Agent } from "@/lib/agents";
import { heroContainer, heroLine } from "@/lib/motion-presets";

interface AgentHeroProps {
  agent: Agent;
}

export function AgentHero({ agent }: AgentHeroProps) {
  // Realza la última palabra del headline con gradiente ember
  const words = agent.hero.headline.trim().split(" ");
  const lead = words.slice(0, -1).join(" ");
  const accent = words.at(-1) ?? "";

  return (
    <section
      className="relative isolate flex min-h-[80vh] items-center pt-32 sm:pt-36 pb-16 overflow-hidden"
      aria-labelledby="agent-hero-title"
    >
      <EmberGlow intensity="strong" position="center" className="-z-10" />
      <GrainOverlay />

      {/* Grid sutil */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="flex flex-col items-center text-center"
        >
          {/* Badge tipo / categoría */}
          <motion.div variants={heroLine} className="mb-7 inline-flex items-center gap-3">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_14px_3px_rgba(26,115,232,0.7)]"
            />
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
              {agent.category}
            </span>
            <span aria-hidden className="h-3 w-px bg-border-strong" />
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-subtle">
              {agent.type === "team" ? "Equipo" : "Agente"}
            </span>
          </motion.div>

          <motion.h1
            id="agent-hero-title"
            variants={heroLine}
            className="text-balance font-semibold tracking-tighter leading-[0.97] text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5.5rem)" }}
          >
            {lead}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ember-bright via-ember to-ember-dim">
              {accent}
            </span>
          </motion.h1>

          <motion.p
            variants={heroLine}
            className="mt-7 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {agent.hero.description}
          </motion.p>

          <motion.div
            variants={heroLine}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contacto">
                Conversemos
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#capabilities">
                <ArrowDown className="mr-1" />
                Ver qué hace
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
