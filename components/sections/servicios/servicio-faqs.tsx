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

export function ServicioFaqs({ servicio }: ServicioFaqsProps) {
  return (
    <section
      id="preguntas"
      className="relative border-t border-border py-24 sm:py-32 lg:py-40"
      aria-labelledby="servicio-faqs-title"
    >
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title={<span id="servicio-faqs-title">Lo que nos preguntan antes de decidir.</span>}
            align="center"
          />
        </Reveal>

        <Reveal className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            {servicio.faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
