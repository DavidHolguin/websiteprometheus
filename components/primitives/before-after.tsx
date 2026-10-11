import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  title: string;
  before: string;
  after: string;
  className?: string;
}

/**
 * Un problema contado como antes / después.
 *
 * Antes esto eran dos tarjetas dentro de una tarjeta (y una flecha en medio):
 * mucho aire para cuatro líneas de texto. Ahora es una fila con las etiquetas
 * «Hoy» y «Después» alineadas a la izquierda, que se lee de un vistazo en
 * móvil y no obliga a scrollear para comparar.
 */
export function BeforeAfter({ title, before, after, className }: BeforeAfterProps) {
  return (
    <article className={cn("border-t border-border pt-6 first:border-t-0 first:pt-0", className)}>
      <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">{title}</h3>

      <div className="mt-3.5 flex flex-col gap-2.5">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 w-16 shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-subtle">
            Hoy
          </span>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{before}</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5 w-16 shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-ember">
            Después
          </span>
          <p className="text-pretty text-sm leading-relaxed text-foreground/90">{after}</p>
        </div>
      </div>
    </article>
  );
}
