import { cn } from "@/lib/utils";

interface RevealProps {
  as?: "div" | "section" | "article" | "header" | "h1" | "h2" | "h3" | "p" | "li" | "span";
  className?: string;
  children: React.ReactNode;
  /** Sin efecto: se conserva para no romper las páginas que ya lo pasaban. */
  delay?: number;
}

/**
 * Entrada al hacer scroll, sin JavaScript.
 *
 * La animación la ejecuta el navegador con la línea de tiempo de scroll nativa
 * (`animation-timeline: view()`, ver `app/globals.css`). Antes esto era un
 * componente cliente con Motion: pesaba en cada landing y, si el JavaScript
 * fallaba, el contenido se quedaba invisible. Ahora el HTML sale visible y la
 * animación es una mejora progresiva: donde no hay soporte, no hay animación
 * pero se lee igual.
 */
export function Reveal({ as: Component = "div", className, children }: RevealProps) {
  return <Component className={cn("reveal", className)}>{children}</Component>;
}
