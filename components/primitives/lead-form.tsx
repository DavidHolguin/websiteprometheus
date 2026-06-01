"use client";

import { ArrowRight, Loader2, MessageCircle } from "lucide-react";
import { useActionState } from "react";
import { type LeadState, submitLead } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/content";

interface LeadFormProps {
  /**
   * Texto que indica de qué agente/página viene el lead.
   * Se envía como metadata al email y se incluye en el WhatsApp.
   */
  source: string;
  /** Texto del botón principal. Por defecto: "Quiero que me contacten". */
  submitLabel?: string;
  className?: string;
}

const initialState: LeadState = { ok: false };

export function LeadForm({
  source,
  submitLabel = "Quiero que me contacten",
  className,
}: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);

  // Mientras tanto, siempre damos una salida directa a WhatsApp
  const directWaUrl = whatsappUrl(`Hola Prometheus, me interesa "${source}". ¿Cómo arrancamos?`);

  if (state.ok) {
    return (
      <div
        className={`rounded-2xl border border-ember/40 bg-ember-soft/40 p-7 text-center ${className ?? ""}`}
        role="status"
      >
        <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ember/20 text-ember">
          <MessageCircle className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Recibimos tu contacto.</h3>
        <p className="mt-2 text-sm text-muted-foreground text-pretty leading-relaxed">
          Te escribimos por WhatsApp en menos de 24 horas. ¿Prefieres adelantarte?
        </p>
        <a
          href={state.whatsappUrl ?? directWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ember-bright hover:text-ember transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Abrir conversación en WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={`flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-6 sm:p-7 ${className ?? ""}`}
      aria-label="Déjanos tu contacto"
    >
      <div className="flex flex-col gap-1.5 text-left">
        <span className="text-xs font-mono uppercase tracking-[0.18em] text-ember">
          Déjanos tu contacto
        </span>
        <span className="text-sm text-muted-foreground">
          Te llamamos o escribimos por WhatsApp en menos de 24 horas. Sin spam.
        </span>
      </div>

      <input type="hidden" name="source" value={source} />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="lead-name">
          Nombre
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Tu nombre"
          required
          minLength={2}
          maxLength={80}
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-subtle focus:border-ember/60 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-colors"
        />
        <label className="sr-only" htmlFor="lead-phone">
          Celular
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="Tu celular"
          required
          minLength={7}
          maxLength={20}
          pattern="[\d+\s()\-]+"
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-subtle focus:border-ember/60 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              {submitLabel}
              <ArrowRight />
            </>
          )}
        </Button>

        <a
          href={directWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          o escríbenos a {site.contact.whatsappDisplay}
        </a>
      </div>

      {state.error && (
        <p className="text-xs text-destructive" role="alert">
          {state.error}
        </p>
      )}

      <p className="text-[11px] text-subtle leading-relaxed">
        Al enviar, aceptas que te contactemos por WhatsApp o llamada. Tu información no se comparte
        con terceros.
      </p>
    </form>
  );
}
