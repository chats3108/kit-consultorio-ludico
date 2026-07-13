import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o acesso ao kit?",
    a: "Assim que a compra for confirmada, você recebe por e-mail o link de acesso a todos os materiais em formato digital. Você pode baixar, imprimir e usar quantas vezes quiser."
  },
  {
    q: "Preciso ser psicóloga formada para usar?",
    a: "O kit foi desenvolvido para psicólogos e psicólogas, mas outros profissionais da área de saúde e educação infantil também podem se beneficiar dos materiais."
  },
  {
    q: "Os materiais são impressos ou digitais?",
    a: "Todos os recursos são digitais (PDF). Você pode imprimir os que preferir usar em papel ou usar digitalmente em atendimentos online via tablet."
  },
  {
    q: "Funciona para atendimento online?",
    a: "Sim! Os materiais são perfeitos tanto para atendimento presencial quanto online. Muitas atividades já foram pensadas para uso em telas."
  },
  {
    q: "Tem garantia?",
    a: "Sim, oferecemos garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro."
  },
  {
    q: "Vou receber atualizações?",
    a: "Sim! Todos os novos recursos adicionados ao kit são liberados gratuitamente para quem já é cliente do Kit Completo."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary mb-10">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-muted border-2 rounded-xl px-5 border-transparent data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline text-sm md:text-base py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4">
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
