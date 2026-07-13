import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block bg-accent text-accent-foreground text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-4">
              OFERTA POR TEMPO LIMITADO
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              Escolha seu Kit
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Basic */}
            <Card className="p-6 md:p-8 bg-card border-2">
              <h3 className="text-xl font-bold text-primary mb-1">Kit Essencial</h3>
              <p className="text-sm text-muted-foreground mb-4">Recursos fundamentais</p>

              <div className="mb-6">
                <div className="text-sm text-muted-foreground line-through">De R$ 47,00</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-black text-primary">R$ 19,90</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">ou 3x de R$ 6,90</p>
              </div>

              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Kit básico de atividades</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Recursos imprimíveis</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />Acesso imediato</li>
              </ul>

              <Button variant="outline" className="w-full" asChild>
                <a href="#">Comprar Essencial</a>
              </Button>
            </Card>

            {/* Premium */}
            <Card className="p-6 md:p-8 bg-secondary text-secondary-foreground border-2 border-accent relative shadow-xl">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                MAIS ESCOLHIDO
              </span>

              <h3 className="text-xl font-bold mb-1">Kit Completo</h3>
              <p className="text-sm text-secondary-foreground/70 mb-4">Tudo que você precisa</p>

              <div className="mb-6">
                <div className="text-sm text-secondary-foreground/60 line-through">De R$ 97,00</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-black">R$ 37,90</span>
                </div>
                <p className="text-xs text-secondary-foreground/70 mt-1">ou 12x de R$ 3,90</p>
              </div>

              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />+200 recursos completos</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />Todas as faixas etárias</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />Bônus exclusivos</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />Atualizações gratuitas</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />Suporte prioritário</li>
              </ul>

              <Button variant="accent" className="w-full font-bold" asChild>
                <a href="#">QUERO O COMPLETO →</a>
              </Button>
            </Card>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            🔒 Compra 100% segura • Garantia de 7 dias • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
