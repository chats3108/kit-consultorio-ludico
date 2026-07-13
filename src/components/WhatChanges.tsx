import { Sparkles, Heart, Clock, Star } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Criança engajada", text: "Atividades lúdicas que capturam a atenção e criam conexão real desde a primeira sessão." },
  { icon: Heart, title: "Vínculo fortalecido", text: "Recursos pensados para construir confiança e uma relação terapêutica sólida." },
  { icon: Clock, title: "Menos tempo preparando", text: "Materiais prontos para imprimir ou usar digitalmente — mais tempo para o que importa." },
  { icon: Star, title: "Pais que indicam", text: "Resultados visíveis que fazem famílias recomendarem seu trabalho naturalmente." }
];

const WhatChanges = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            Benefícios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mt-4 text-balance">
            O que muda quando você tem o kit <em className="italic">em mãos</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="p-7 bg-card rounded-2xl card-premium border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5 shadow-lg">
                <item.icon className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-xl text-primary mb-2 leading-tight">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatChanges;
