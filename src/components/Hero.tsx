import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import mockup from "@/assets/kit/mockuptudo.webp";

const Hero = () => {
  return (
    <>
      {/* Top banner */}
      <div className="bg-accent text-accent-foreground text-center py-2 px-4 text-xs sm:text-sm font-semibold">
        🎁 OFERTA ESPECIAL POR TEMPO LIMITADO
      </div>

      <section className="bg-background py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6">
              A criança que pede pra voltar<br className="hidden sm:block" />
              na terapia — é o pai que<br className="hidden sm:block" />
              passa a te indicar depois da<br className="hidden sm:block" />
              primeira sessão
            </h1>

            <div className="my-8 md:my-10 flex justify-center">
              <img
                src={mockup}
                alt="Kit Consultório Lúdico - Materiais Completos"
                className="w-full max-w-md md:max-w-lg h-auto drop-shadow-2xl"
              />
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Um kit completo de recursos lúdicos, criativos e profissionais para você
              atender crianças com <strong className="text-foreground">segurança, leveza e resultado</strong> —
              e transformar sessões em experiências que os pais recomendam.
            </p>

            <div className="space-y-2 max-w-md mx-auto mb-8 text-left">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm md:text-base text-foreground">Mais de 200 recursos prontos para usar</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm md:text-base text-foreground">Materiais para diferentes idades e demandas</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm md:text-base text-foreground">Acesso imediato após a compra</span>
              </div>
            </div>

            <Button
              size="lg"
              variant="accent"
              className="text-base md:text-lg px-8 py-6 h-auto w-full sm:w-auto font-bold"
              asChild
            >
              <a href="#pricing">QUERO O KIT AGORA →</a>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              ✓ Pagamento 100% seguro  ✓ Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
