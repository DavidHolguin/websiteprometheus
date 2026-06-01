"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/container";
import { EmberGlow } from "@/components/primitives/ember-glow";
import { GrainOverlay } from "@/components/primitives/grain-overlay";
import { heroContainer, heroLine } from "@/lib/motion-presets";

export function CatalogHero() {
  return (
    <section
      className="relative isolate flex items-center pt-36 sm:pt-40 pb-12 overflow-hidden"
      aria-labelledby="catalog-hero-title"
    >
      <EmberGlow intensity="medium" position="center" className="-z-10" />
      <GrainOverlay />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={heroLine} className="mb-7 inline-flex items-center gap-2.5">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_14px_3px_rgba(26,115,232,0.7)]"
            />
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
              Catálogo de agentes
            </span>
          </motion.div>

          <motion.h1
            id="catalog-hero-title"
            variants={heroLine}
            className="text-balance font-semibold tracking-tighter leading-[0.97] text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6.5vw + 0.5rem, 5.5rem)" }}
          >
            Una fuerza laboral de IA,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ember-bright via-ember to-ember-dim">
              lista para tu operación.
            </span>
          </motion.h1>

          <motion.p
            variants={heroLine}
            className="mt-7 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Contrata un agente especialista o un equipo entero. Se conectan a las herramientas que
            tu empresa ya usa — desde Siesa hasta Slack — y entran al flujo sin pedirle a tu equipo
            que cambie de stack.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
