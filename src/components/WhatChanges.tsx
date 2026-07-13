import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Clock, Star } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Criança engajada",
    text: "Atividades lúdicas que capturam a atenção e criam conexão real desde a primeira sessão."
  },
  {
    icon: Heart,
    title: "Vínculo fortalecido",
    text: "Recursos pensados para construir confiança e uma relação terapêutica sólida."
  },
  {
    icon: Clock,
    title: "Menos tempo preparando",
    text: "Materiais prontos para imprimir ou usar digitalmente — mais tempo para o que importa."
  },
  {
    icon: Star,
    title: "Pais que indicam",
    text: "Resultados visíveis que fazem famílias recomendarem seu trabalho naturalmente."
  }
];

const WhatChanges = () => {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            O que muda quando você tem o kit em mãos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <Card key={i} className="p-6 bg-card border-2 hover:border-primary/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatChanges;
