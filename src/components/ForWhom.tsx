import { Card } from "@/components/ui/card";

const items = [
  {
    title: "Você é psicóloga(o) infantil",
    text: "e sente que precisa de recursos mais criativos e envolventes para suas sessões."
  },
  {
    title: "Está começando na área",
    text: "e quer materiais prontos e profissionais para atender com mais segurança."
  },
  {
    title: "Já atende há anos",
    text: "e quer renovar seu repertório com atividades novas e testadas."
  },
  {
    title: "Trabalha online ou presencial",
    text: "e precisa de recursos versáteis que funcionem em qualquer modalidade."
  }
];

const ForWhom = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            Se o seu tempo é curto e você sabe que o
            <span className="text-accent"> kit é pra você</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <Card key={i} className="p-6 border-2 hover:border-primary/30 transition-colors bg-card">
              <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
