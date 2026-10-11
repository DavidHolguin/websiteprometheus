"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/primitives/whatsapp-icon";
import { whatsappUrl } from "@/lib/content";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

interface WhatsAppFabProps {
  /** Mensaje pre-llenado; sale distinto según la landing. */
  message: string;
  /** Línea de servicio, para el registro de conversiones. */
  source: string;
}

/**
 * Botón flotante de WhatsApp.
 *
 * Aparece al pasar el hero (así no compite con el botón de la portada) y se
 * mantiene al alcance del pulgar en móvil, separado del borde por el área
 * segura del teléfono. En escritorio se estira y muestra «Escríbenos».
 */
export function WhatsAppFab({ message, source }: WhatsAppFabProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const revisar = () => setVisible(window.scrollY > 420);
    revisar();
    window.addEventListener("scroll", revisar, { passive: true });
    return () => window.removeEventListener("scroll", revisar);
  }, []);

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("wa_click", { origen: "fab", servicio: source })}
      aria-label="Escribir por WhatsApp"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      className={cn(
        "group fixed right-4 z-40 inline-flex h-14 items-center rounded-full border px-3.5 sm:right-6",
        "border-[#25D366]/30 bg-[#0b100e]/85 text-foreground backdrop-blur-xl",
        "shadow-[0_18px_44px_-16px_rgba(0,0,0,0.95)]",
        "transition-[transform,opacity,background-color,border-color] duration-500 ease-out",
        "hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:bg-[#111815]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0 text-[#25D366]" />
      <span
        className={cn(
          "hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0",
          "transition-[max-width,margin,opacity] duration-300 ease-out sm:block",
          "group-hover:ml-2.5 group-hover:max-w-24 group-hover:opacity-100",
          "group-focus-visible:ml-2.5 group-focus-visible:max-w-24 group-focus-visible:opacity-100",
        )}
      >
        Escríbenos
      </span>
    </a>
  );
}
