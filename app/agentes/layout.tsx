import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";

/**
 * Layout compartido para `/agentes` y `/agentes/[slug]`.
 * El Nav y el Footer son los mismos que la home — mantenemos coherencia
 * de marca a lo largo de todo el sitio.
 */
export default function AgentesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}
