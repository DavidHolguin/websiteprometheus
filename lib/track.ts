/**
 * Medición de conversiones del sitio.
 *
 * Cada click en WhatsApp y cada envío del formulario dejan una línea en el
 * registro del contenedor (`docker logs <app> | grep '[evento]'`). Sirve para
 * lo único que hay que medir aquí: cuántos contactos entra por landing y por
 * posición de botón. No manda nada a terceros y no puede romper la navegación:
 * si el envío falla, se ignora.
 */
export type Evento = "wa_click" | "lead_creado" | "lead_fallido" | "servicio_visto";

export interface DatosEvento {
  /** De dónde salió el click: hero, contacto, fab, cabecera… */
  origen?: string;
  /** Slug o nombre de la línea de servicio. */
  servicio?: string;
  [clave: string]: string | undefined;
}

export function track(tipo: Evento, datos: DatosEvento = {}): void {
  if (typeof window === "undefined") return;

  const cuerpo = JSON.stringify({
    tipo,
    ...datos,
    ruta: window.location.pathname,
  });

  try {
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon("/api/evento", new Blob([cuerpo], { type: "application/json" }));
      return;
    }
    void fetch("/api/evento", {
      method: "POST",
      body: cuerpo,
      headers: { "content-type": "application/json" },
      keepalive: true,
    });
  } catch {
    // Medir es opcional; navegar no.
  }
}
