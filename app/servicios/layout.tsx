import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";

/**
 * Layout de `/servicios` y `/servicios/[slug]`.
 *
 * Faltaba: las landings del portafolio se servían sin encabezado ni pie, así
 * que el logo de la marca desaparecía justo en las páginas donde aterrizan los
 * anuncios. El Nav detecta que está en una landing y cambia el menú por los
 * anclajes de esa misma página (ver `components/layout/nav.tsx`).
 */
export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}
