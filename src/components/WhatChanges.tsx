import { Sparkles, Heart, Clock, Star } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Criança engajada", text: "Atividades que capturam atenção e criam conexão real desde a 1ª sessão." },
  { icon: Heart, title: "Vínculo fortalecido", text: "Recursos que constroem confiança e uma relação terapêutica sólida." },
  { icon: Clock, title: "Menos tempo preparando", text: "Materiais prontos pra imprimir ou usar digitalmente." },
  { icon: Star, title: "Pais que indicam", text: "Resultados que fazem famílias recomendarem seu trabalho." }
];

const WhatChanges = () => {
  return (
    <section className="py-14 md:py-24 bg-muted">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="tape">Benefícios</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary mt-4 font-extrabold leading-tight">
            O que muda quando o kit está <span className="marker">em mãos</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="p-4 md:p-6 bg-card rounded-2xl border border-foreground/10 hover:border-primary/40 transition">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center mb-3 md:mb-4">
                <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-sm md:text-lg text-primary mb-1 leading-tight">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatChanges;
