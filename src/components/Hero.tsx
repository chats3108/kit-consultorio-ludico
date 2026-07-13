import { Button } from "@/components/ui/button";
import { Zap, Printer, FolderOpen, Layers, Monitor } from "lucide-react";
import mockupAsset from "@/assets/kit/mockuptudo.webp.asset.json";
const mockup = mockupAsset.url;

const Hero = () => {
  const features = [
    { icon: Zap, text: "Acesso imediato" },
    { icon: Printer, text: "Imprime e usa" },
    { icon: FolderOpen, text: "Por demanda clínica" },
    { icon: Layers, text: "+80 recursos" },
    { icon: Monitor, text: "Online e presencial" },
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* dotted backdrop */}
      <div className="absolute inset-0 bg-dots opacity-60" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-5 pt-10 pb-14 md:py-24 relative">
        <div className="max-w-5xl mx-auto">
          {/* eyebrow tape */}
          <div className="flex justify-center mb-5">
            <span className="tape">Só hoje · Oferta</span>
          </div>

          <p className="text-center text-xs md:text-sm font-medium text-muted-foreground mb-4 max-w-md mx-auto">
            Gastando com materiais que você quase não usa?
          </p>

          <h1 className="text-center text-[1.55rem] leading-[1.3] sm:text-4xl sm:leading-[1.15] md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-5 max-w-3xl mx-auto text-balance">
            <span className="text-primary">+80 recursos terapêuticos</span> prontos pra você nunca mais <span className="text-accent">travar</span> numa sessão infantil.
          </h1>

          <p className="text-center text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Um kit de recursos lúdicos, criativos e profissionais pra você atender crianças com <span className="text-foreground font-semibold">segurança, leveza e resultado</span>.
          </p>

          {/* Mockup with sticker frame */}
          <div className="my-8 md:my-12 flex justify-center">
            <div className="relative rotate-tiny-l">
              <div className="absolute inset-0 blur-2xl opacity-40" style={{ background: 'var(--gradient-accent)' }} />
              <img
                src={mockup}
                alt="Kit Consultório Lúdico"
                width={720}
                height={720}
                fetchPriority="high"
                decoding="async"
                className="relative w-full max-w-[320px] sm:max-w-md md:max-w-xl h-auto"
              />
              {/* pinned label */}
              <span className="absolute -top-3 -right-3 sm:-top-4 sm:-right-6 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full rotate-tiny-r shadow-lg">
                +80 recursos
              </span>
            </div>
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl mx-auto">
            {features.map(({ icon: Icon, text }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs bg-card border border-border rounded-full px-3 py-1.5 text-foreground/80"
              >
                <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="font-medium">{text}</span>
              </span>
            ))}
          </div>

          {/* handwritten italic quote */}
          <p className="text-center italic text-sm text-muted-foreground max-w-md mx-auto mb-6">
            "Chega de gastar horas procurando material. Você vai ter a ferramenta certa pra cada criança."
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="text-sm sm:text-base px-8 py-6 h-auto rounded-full bg-accent hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto max-w-xs sticker-accent"
              asChild
            >
              <a href="#pricing">Quero meu kit agora →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
