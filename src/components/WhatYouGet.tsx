import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import mockup from "@/assets/kit/mockupsembonus.webp";

const features = [
  "Jogos de emoções e baralhos de sentimentos para criar vínculo",
  "Atividades projetivas organizadas por demanda clínica",
  "Dinâmicas de vínculo para primeiras sessões e crianças resistentes",
  "Fichas de manejo comportamental prontas pra imprimir",
  "Materiais de psicoeducação para entregar aos pais",
];

const bonuses = [
  {
    n: "01",
    title: "Fichas de Anamnese Infantil Estruturadas",
    desc: "Modelos prontos para a primeira sessão com os pais. Chegue preparada desde o início.",
    price: "R$ 27,00",
  },
  {
    n: "02",
    title: "Roteiro de Devolutiva para Pais",
    desc: "Scripts prontos para dar feedback aos pais de forma clara e profissional. Sem travar na hora de falar.",
    price: "R$ 19,00",
  },
  {
    n: "03",
    title: "Checklist de Planejamento de Sessão",
    desc: "Passo a passo para organizar cada sessão antes de começar. Nada de improvisar.",
    price: "R$ 17,00",
  },
  {
    n: "04",
    title: "Guia de Manejo com Pais Difíceis",
    desc: "Estratégias práticas pra lidar com pais resistentes, cobradores ou ausentes. O que muita psicóloga precisava.",
    price: "R$ 17,00",
  },
  {
    n: "05",
    title: "Kit de Psicoeducação Visual para Pais",
    desc: "Materiais ilustrados para explicar ansiedade, TDAH, regulação emocional. Deixa os pais mais parceiros no processo.",
    price: "R$ 17,00",
  },
];

const WhatYouGet = () => {
  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto">
          {/* Top: mockup + main features */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-14 md:mb-20">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-20" style={{ background: 'var(--gradient-accent)' }} />
              <img src={mockup} alt="Kit Consultório Lúdico" loading="lazy" decoding="async" className="relative w-full h-auto rotate-tiny-l" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-2">
                <span className="text-foreground">Kit Consultório Lúdico</span>
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight mb-6">
                +80 recursos terapêuticos
              </h3>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary stroke-[3]" />
                    </div>
                    <span className="text-sm md:text-base text-foreground/85 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bonuses */}
          <div className="text-center md:text-left mb-6">
            <p className="text-sm md:text-base text-foreground/80 mb-4 max-w-3xl">
              E não para por aí. No <span className="font-bold">kit completo</span>, você ainda recebe 5 bônus que complementam o kit e resolvem as maiores dores do dia a dia clínico:
            </p>
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              5 Bônus Exclusivos
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {bonuses.map((b, i) => (
              <div
                key={i}
                className={`bg-card rounded-2xl p-5 flex gap-4 items-start border border-foreground/5 ${
                  i === 4 ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  {b.n}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm md:text-base text-foreground mb-1">{b.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2">{b.desc}</p>
                  <p className="text-xs md:text-sm font-bold">
                    <span className="text-destructive line-through mr-2">De {b.price}</span>
                    <span className="text-primary">GRÁTIS</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="accent" size="lg" className="font-bold h-12 px-8" asChild>
              <a href="#pricing">Quero o kit completo →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
