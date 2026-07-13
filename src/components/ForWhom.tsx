const items = [
  { n: "01", title: "Você é psicóloga(o) infantil", text: "e sente que precisa de recursos mais criativos e envolventes para suas sessões." },
  { n: "02", title: "Está começando na área", text: "e quer materiais prontos e profissionais para atender com mais segurança." },
  { n: "03", title: "Já atende há anos", text: "e quer renovar seu repertório com atividades novas e testadas." },
  { n: "04", title: "Trabalha online ou presencial", text: "e precisa de recursos versáteis que funcionem em qualquer modalidade." }
];

const ForWhom = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            Para quem é
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mt-4 text-balance">
            Se o seu tempo é curto e você sabe que o
            <em className="italic"> kit é pra você</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 md:p-10 bg-card rounded-2xl card-premium border border-border/50"
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl font-serif italic text-accent/80 leading-none">
                  {item.n}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-primary mb-2 leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
