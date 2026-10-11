"use client";

import type { ComponentPropsWithoutRef } from "react";
import { whatsappUrl } from "@/lib/content";
import { track } from "@/lib/track";

interface WaLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  /** Mensaje pre-llenado de WhatsApp (llega ya escrito al equipo). */
  message: string;
  /** Posición del botón en la página: hero, contacto, cabecera… */
  origen: string;
  /** Línea de servicio de la que viene el contacto. */
  servicio: string;
  children: React.ReactNode;
}

/**
 * Enlace a WhatsApp que deja registro del click antes de salir.
 *
 * El registro va por `sendBeacon`, así que no retrasa ni condiciona la
 * apertura de WhatsApp: si la medición falla, el enlace funciona igual.
 */
export function WaLink({ message, origen, servicio, children, onClick, ...props }: WaLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(evento) => {
        track("wa_click", { origen, servicio });
        onClick?.(evento);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
