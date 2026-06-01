"use client";

import { motion } from "motion/react";
import { getIcon, type IconName } from "@/lib/icons";
import { fadeInUp, viewportOnce } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  icon: IconName;
  title: string;
  description: string;
  className?: string;
}

export function CapabilityCard({ icon, title, description, className }: CapabilityCardProps) {
  const Icon = getIcon(icon);
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={cn(
        "group relative flex flex-col gap-5 rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300",
        "hover:border-ember/40 hover:bg-card hover:shadow-[0_0_60px_-20px_rgba(26,115,232,0.4)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-soft text-ember border border-ember/20 group-hover:bg-ember/15 transition-colors"
      >
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{description}</p>
      </div>
    </motion.article>
  );
}
