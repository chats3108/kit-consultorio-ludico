import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import mockup from "@/assets/kit/mockuptudo.webp";

const Hero = () => {
  return (
    <>
      {/* Top banner */}
      <div className="bg-secondary text-secondary-foreground text-center py-2.5 px-4 text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-3 w-3 text-accent" />
          Oferta especial por tempo limitado
        </span>
      </div>

      <section className="relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />

        <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-foreground/70 tracking-wide">
                Mais de 2.000 psicólogas atendidas
              </span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-primary text-balance leading-[1.05] mb-8 animate-fade-up stagger-1">
              A criança que pede pra voltar<br className="hidden sm:block" />
              na terapia — é o pai que<br className="hidden sm:block" />
              passa a <em className="italic text-accent">te indicar</em> depois da<br className="hidden sm:block" />
              primeira sessão
            </h1>

            <div className="my-12 md:my-16 flex justify-center animate-scale-in stagger-2">
              <div className="relative">
                <div
                  className="absolute inset-0 blur-3xl opacity-40 animate-float"
                  style={{ background: 'var(--gradient-accent)' }}
                />
                <img
                  src={mockup}
                  alt="Kit Consultório Lúdico"
                  className="relative w-full max-w-md md:max-w-xl h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed text-pretty animate-fade-up stagger-3">
              Um kit completo de recursos lúdicos, criativos e profissionais para você
              atender crianças com <span className="text-foreground font-medium">segurança, leveza e resultado</span>.
            </p>

            <div className="space-y-3 max-w-sm mx-auto mb-10 text-left animate-fade-up stagger-4">
              {[
                "Mais de 200 recursos prontos para usar",
                "Materiais para diferentes idades e demandas",
                "Acesso imediato após a compra"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary stroke-[3]" />
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="animate-fade-up stagger-5">
              <Button
                size="lg"
                variant="accent"
                className="text-base px-10 py-7 h-auto w-full sm:w-auto font-semibold tracking-wide"
                asChild
              >
                <a href="#pricing">
                  Quero o kit agora
                  <span className="ml-1">→</span>
                </a>
              </Button>

              <p className="text-[11px] uppercase tracking-widest text-muted-foreground/70 mt-6 font-medium">
                Pagamento seguro • Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
