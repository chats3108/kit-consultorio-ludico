import { Button } from "@/components/ui/button";
import { Zap, Printer, FolderOpen, Layers, Monitor } from "lucide-react";
import mockup from "@/assets/kit/mockuptudo.webp";

const Hero = () => {
  const features = [
    { icon: Zap, text: "Acesso imediato após a compra" },
    { icon: Printer, text: "Imprime e usa na mesma sessão" },
    { icon: FolderOpen, text: "Organizado por demanda clínica" },
    { icon: Layers, text: "+80 recursos prontos pra usar" },
    { icon: Monitor, text: "Funciona online e presencial" },
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />

      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground mb-6 animate-fade-up">
            Gastando com materiais terapêuticos que você quase não usa?
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-foreground leading-[1.1] mb-8 animate-fade-up stagger-1">
            A criança que <span className="text-primary">pede pra voltar</span> na terapia — é o pai que passa a <span className="text-primary">te indicar</span> depois da primeira sessão
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up stagger-2">
            Um kit completo de recursos lúdicos, criativos e profissionais para você atender crianças com segurança, leveza e resultado.
          </p>

          <div className="my-10 md:my-14 flex justify-center animate-scale-in stagger-3">
            <div className="relative">
              <div
                className="absolute inset-0 blur-3xl opacity-40 animate-float"
                style={{ background: 'var(--gradient-accent)' }}
              />
              <img
                src={mockup}
                alt="Kit Consultório Lúdico"
                className="relative w-full max-w-lg md:max-w-2xl h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 max-w-4xl mx-auto animate-fade-up stagger-4">
            {features.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                <Icon className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>

          <p className="italic text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up stagger-5">
            Chega de gastar horas procurando material.<br />
            Você vai ter a ferramenta certa pra cada criança.
          </p>

          <div className="animate-fade-up stagger-5">
            <Button
              size="lg"
              className="text-base px-10 py-7 h-auto rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
              asChild
            >
              <a href="#pricing">Quero meu kit agora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
