import { getIcon, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  icon: IconName;
  title: string;
  description: string;
  className?: string;
}

/**
 * Una capacidad concreta del servicio.
 *
 * Versión compacta: el icono y el texto caben en la misma fila visual y el
 * bloque baja a la mitad de alto. Se usa en rejillas, no como estructura
 * de página.
 */
export function CapabilityCard({ icon, title, description, className }: CapabilityCardProps) {
  const Icon = getIcon(icon);
  return (
    <article
      className={cn(
        "group flex gap-4 rounded-xl border border-border bg-card/40 p-5 transition-colors duration-300 hover:border-ember/40 hover:bg-card",
        className,
      )}
    >
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ember/20 bg-ember-soft text-ember transition-colors group-hover:bg-ember/15"
      >
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
