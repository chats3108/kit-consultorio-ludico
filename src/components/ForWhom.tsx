const items = [
  { n: "01", title: "Psicóloga(o) infantil", text: "Precisa de recursos criativos e envolventes pras suas sessões." },
  { n: "02", title: "Começando na área", text: "Quer materiais prontos e profissionais pra atender com segurança." },
  { n: "03", title: "Atende há anos", text: "Quer renovar o repertório com atividades novas e testadas." },
  { n: "04", title: "Online ou presencial", text: "Precisa de recursos versáteis pra qualquer modalidade." }
];

const ForWhom = () => {
  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="tape">Pra quem é</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary mt-4 font-extrabold leading-tight">
            Se seu tempo é curto, o kit <span className="marker">é pra você</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative p-5 md:p-6 bg-card rounded-2xl border border-foreground/10 ${
                i % 2 === 0 ? "sm:mt-0 sm:mb-6" : "sm:mt-6"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-accent leading-none shrink-0">
                  {item.n}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base md:text-lg text-primary mb-1 leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
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
