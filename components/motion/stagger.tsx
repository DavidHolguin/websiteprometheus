import { cn } from "@/lib/utils";

interface StaggerProps {
  as?: "div" | "ul" | "ol" | "section";
  className?: string;
  children: React.ReactNode;
}

/**
 * Rejilla o lista que se revela al hacer scroll.
 *
 * El escalonado ya no lo produce un retardo por índice (eso era Motion): sale
 * del propio scroll, porque cada elemento entra cuando su posición cruza el
 * borde inferior de la ventana. Mismo gesto, sin JavaScript.
 */
export function Stagger({ as: Component = "div", className, children }: StaggerProps) {
  return <Component className={cn(className)}>{children}</Component>;
}

interface StaggerItemProps {
  as?: "div" | "li" | "section" | "article" | "p" | "span" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}

export function StaggerItem({ as: Component = "div", className, children }: StaggerItemProps) {
  return <Component className={cn("reveal", className)}>{children}</Component>;
}
