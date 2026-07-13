import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary mb-10 md:mb-12">
            Tudo que você vai receber
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={mockup} alt="Kit completo" className="w-full h-auto" />
            </div>

            <div className="order-1 md:order-2">
              <Card className="p-6 md:p-8 bg-card border-2 border-primary/20">
                <ul className="space-y-3 mb-6">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm md:text-base text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="accent" size="lg" className="w-full font-bold" asChild>
                  <a href="#pricing">QUERO O KIT AGORA →</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
