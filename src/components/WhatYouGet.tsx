import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import mockup from "@/assets/kit/mockupsembonus.webp";

const features = [
  "+200 recursos lúdicos prontos",
  "Atividades pra 3-12 anos",
  "Materiais pra ansiedade, luto, autoestima",
  "Jogos terapêuticos imprimíveis",
  "Fichas de anamnese e evolução",
  "Recursos digitais pro online",
];

const WhatYouGet = () => {
  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14 max-w-2xl">
            <span className="tape">O que você recebe</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary mt-4 font-extrabold leading-tight">
              Tudo que vai <span className="marker">chegar pra você</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 blur-3xl opacity-20" style={{ background: 'var(--gradient-accent)' }} />
              <img src={mockup} alt="Kit completo" className="relative w-full h-auto rotate-tiny-l" />
            </div>

            <div className="order-1 md:order-2">
              <div className="p-6 md:p-8 bg-card rounded-2xl sticker">
                <ul className="space-y-3 mb-6">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary-foreground stroke-[3]" />
                      </div>
                      <span className="text-sm text-foreground/85 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="accent" size="lg" className="w-full font-bold h-12" asChild>
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
