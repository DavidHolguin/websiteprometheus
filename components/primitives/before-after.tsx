"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  title: string;
  before: string;
  after: string;
  className?: string;
}

export function BeforeAfter({ title, before, after, className }: BeforeAfterProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={cn(
        "group flex flex-col gap-6 rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:border-ember/30",
        className,
      )}
    >
      <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">{title}</h3>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-start">
        {/* Antes */}
        <div className="flex flex-col gap-2.5 rounded-xl bg-background/60 p-5 border border-border/60">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-subtle">
            Antes
          </span>
          <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{before}</p>
        </div>

        {/* Flecha — visible solo en desktop */}
        <div
          aria-hidden
          className="hidden md:flex h-full items-center justify-center text-ember/60"
        >
          <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
        </div>

        {/* Después */}
        <div className="flex flex-col gap-2.5 rounded-xl bg-ember-soft/40 p-5 border border-ember/20">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ember">
            Después
          </span>
          <p className="text-sm text-foreground/90 text-pretty leading-relaxed">{after}</p>
        </div>
      </div>
    </motion.article>
  );
}
