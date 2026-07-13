import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Como funciona o acesso ao kit?", a: "Confirmada a compra, você recebe por e-mail o link de acesso a todos os materiais em formato digital. Baixe, imprima e use quantas vezes quiser." },
  { q: "Preciso ser psicóloga formada pra usar?", a: "O kit foi feito pra psicólogos(as), mas outros profissionais da saúde e educação infantil também se beneficiam." },
  { q: "Os materiais são impressos ou digitais?", a: "Todos os recursos são digitais (PDF). Imprima os que preferir ou use digitalmente no tablet em atendimentos online." },
  { q: "Funciona pro online?", a: "Sim. Muitas atividades já foram pensadas pra uso em telas." },
  { q: "Tem garantia?", a: "Sim, garantia incondicional de 7 dias. Se não gostar, devolvemos 100%." },
  { q: "Vou receber atualizações?", a: "Sim. Todos os novos recursos do Kit Completo são liberados de graça pra quem já é cliente." }
];

const FAQ = () => {
  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 md:mb-12">
            <span className="tape">Dúvidas</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary mt-4 font-extrabold leading-tight">
              Perguntas <span className="marker">frequentes</span>.
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2.5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border-2 border-foreground/10 rounded-xl px-4 md:px-5 data-[state=open]:border-primary/60"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline text-sm md:text-base py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
