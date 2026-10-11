"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { getIcon } from "@/lib/icons";
import { fadeInUp, viewportOnce } from "@/lib/motion-presets";
import type { Servicio } from "@/lib/servicios";
import { cn } from "@/lib/utils";

interface ServicioCardProps {
  servicio: Servicio;
  className?: string;
}

export function ServicioCard({ servicio, className }: ServicioCardProps) {
  const Icon = getIcon(servicio.iconoCatalogo);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={cn(
        "group relative flex h-full flex-col gap-6 rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300",
        "hover:border-ember/40 hover:bg-card hover:shadow-[0_0_60px_-20px_rgba(26,115,232,0.4)]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          aria-hidden
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-soft text-ember border border-ember/20 group-hover:bg-ember/15 transition-colors"
        >
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        {servicio.entrada && (
          <span className="rounded-full border border-ember/30 bg-ember-soft px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-ember">
            Por aquí se empieza
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <span className="text-xs font-mono uppercase tracking-[0.18em] text-subtle">
          {servicio.categoria}
        </span>
        <h3 className="text-xl font-semibold tracking-tight text-foreground">{servicio.nombre}</h3>
        <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
          {servicio.resumen}
        </p>
      </div>

      <Link
        href={`/servicios/${servicio.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-ember-bright transition-colors hover:text-ember"
      >
        Ver el servicio
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}
