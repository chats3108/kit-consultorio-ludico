import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Oferta por tempo limitado
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary text-balance">
              Escolha seu <em className="italic">Kit</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Essential */}
            <div className="p-8 md:p-10 bg-card rounded-3xl border border-border shadow-lg card-premium">
              <h3 className="font-serif text-2xl text-primary mb-1">Kit Essencial</h3>
              <p className="text-sm text-muted-foreground mb-8">Recursos fundamentais</p>

              <div className="mb-8 pb-8 border-b border-border">
                <div className="text-sm text-muted-foreground/60 line-through mb-1">De R$ 47,00</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-serif text-primary">R$ 19,90</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">ou 3x de R$ 6,90</p>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                {["Kit básico de atividades", "Recursos imprimíveis", "Acesso imediato"].map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="lg" className="w-full h-13" asChild>
                <a href="#">Comprar Essencial</a>
              </Button>
            </div>

            {/* Premium */}
            <div className="relative p-8 md:p-10 bg-secondary text-secondary-foreground rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <span className="relative inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
                ⭐ Mais Escolhido
              </span>

              <h3 className="relative font-serif text-2xl mb-1">Kit Completo</h3>
              <p className="relative text-sm text-secondary-foreground/60 mb-8">Tudo que você precisa</p>

              <div className="relative mb-8 pb-8 border-b border-white/10">
                <div className="text-sm text-secondary-foreground/50 line-through mb-1">De R$ 97,00</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-serif">R$ 37,90</span>
                </div>
                <p className="text-xs text-secondary-foreground/60 mt-2">ou 12x de R$ 3,90</p>
              </div>

              <ul className="relative space-y-3 mb-8 text-sm">
                {[
                  "+200 recursos completos",
                  "Todas as faixas etárias",
                  "Bônus exclusivos",
                  "Atualizações gratuitas",
                  "Suporte prioritário"
                ].map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="h-4 w-4 text-accent-glow shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-secondary-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant="accent" size="lg" className="relative w-full font-semibold h-13" asChild>
                <a href="#">Quero o Completo →</a>
              </Button>
            </div>
          </div>

          <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground/70 mt-8 font-medium">
            🔒 Compra segura • Garantia de 7 dias • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
