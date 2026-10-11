import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Servicio } from "@/lib/servicios";

interface ServicioFaqsProps {
  servicio: Servicio;
}

/**
 * Objeciones y decisiones técnicas, en acordeón.
 *
 * Las cinco preguntas que frenan la decisión están abiertas a un toque, y el
 * bloque de arquitectura —que le importa a quien evalúa, no a quien decide—
 * vive plegado aquí dentro en vez de ocupar su propia sección de mil píxeles.
 */
export function ServicioFaqs({ servicio }: ServicioFaqsProps) {
  return (
    <section
      id="preguntas"
      className="relative scroll-mt-24 border-t border-border bg-card/20 py-14 sm:py-20 lg:py-24"
      aria-labelledby="servicio-faqs-title"
    >
      <Container>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              title={<span id="servicio-faqs-title">Lo que nos preguntan antes de decidir.</span>}
              description="Si tu duda no está aquí, pregúntala por WhatsApp: se contesta sin compromiso."
            />
          </Reveal>

          <div className="reveal flex flex-col gap-10">
            <Accordion type="single" collapsible className="border-t border-border">
              {servicio.faqs.map((item, idx) => (
                <AccordionItem key={item.q} value={`faq-${idx}`}>
                  <AccordionTrigger className="py-5 text-base">{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="rounded-2xl border border-border bg-background/40 p-5 sm:p-7">
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                Cómo está construido
              </h3>
              <p className="mt-2 max-w-[52ch] text-pretty text-sm leading-relaxed text-subtle">
                Para quien va a evaluar la propuesta técnicamente. Es mejor discutirlo antes de
                firmar que después de desplegar.
              </p>

              <Accordion type="single" collapsible className="mt-3">
                {servicio.arquitectura.map((punto, idx) => (
                  <AccordionItem key={punto.title} value={`tec-${idx}`}>
                    <AccordionTrigger className="py-4 text-sm sm:text-base">
                      {punto.title}
                    </AccordionTrigger>
                    <AccordionContent className="pr-8 text-sm">
                      {punto.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
