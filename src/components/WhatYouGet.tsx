import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import mockup from "@/assets/kit/mockupsembonus.webp";

const features = [
  "Mais de 200 recursos lúdicos prontos",
  "Atividades para diferentes idades (3-12 anos)",
  "Materiais para ansiedade, luto, autoestima",
  "Jogos terapêuticos imprimíveis",
  "Fichas de anamnese e evolução",
  "Recursos digitais para atendimento online",
];

const WhatYouGet = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
              O que você recebe
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mt-4 text-balance">
              Tudo que você vai <em className="italic">receber</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 blur-3xl opacity-20" style={{ background: 'var(--gradient-accent)' }} />
              <img src={mockup} alt="Kit completo" className="relative w-full h-auto drop-shadow-2xl" />
            </div>

            <div className="order-1 md:order-2">
              <div className="p-8 md:p-10 bg-card rounded-3xl shadow-xl border border-border/50">
                <ul className="space-y-4 mb-8">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="h-3.5 w-3.5 text-primary-foreground stroke-[3]" />
                      </div>
                      <span className="text-sm md:text-base text-foreground/85 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="accent" size="lg" className="w-full font-semibold h-14" asChild>
                  <a href="#pricing">Quero o kit agora →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
