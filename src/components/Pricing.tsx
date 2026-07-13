import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import essentialImg from "@/assets/kit/mockupsembonus.webp";
import completeImg from "@/assets/kit/mockuptudo.webp";

const Pricing = () => {
  return (
    <section id="pricing" className="py-14 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="container mx-auto px-5 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="flex justify-center mb-4">
              <span className="tape">Oferta por tempo limitado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary font-extrabold leading-tight">
              Escolha o seu <span className="marker">kit</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Essential */}
            <div className="p-5 md:p-7 bg-card rounded-2xl sticker">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-4 flex items-center justify-center">
                <img src={essentialImg} alt="Kit Essencial" className="w-full h-full object-contain p-3" />
              </div>
              <h3 className="font-extrabold text-xl md:text-2xl text-primary mb-1">Kit Essencial</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-5">Recursos fundamentais</p>

              <div className="mb-5 pb-5 border-b border-dashed border-foreground/20">
                <div className="text-xs text-muted-foreground/60 line-through">De R$ 47,00</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black text-primary">R$ 19,90</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">ou 3x de R$ 6,90</p>
              </div>

              <ul className="space-y-2.5 mb-6 text-sm">
                {["Kit básico de atividades", "Recursos imprimíveis", "Acesso imediato"].map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="lg" className="w-full h-12 border-2 border-foreground" asChild>
                <a href="#">Comprar Essencial</a>
              </Button>
            </div>

            {/* Premium */}
            <div className="relative p-5 md:p-7 bg-secondary text-secondary-foreground rounded-2xl sticker-accent overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 mb-4 flex items-center justify-center">
                <img src={completeImg} alt="Kit Completo" className="w-full h-full object-contain p-3" />
                <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest rotate-tiny-l">
                  ⭐ Mais escolhido
                </span>
              </div>

              <h3 className="relative font-extrabold text-xl md:text-2xl mb-1">Kit Completo</h3>
              <p className="relative text-xs md:text-sm text-secondary-foreground/60 mb-5">Tudo que você precisa</p>

              <div className="relative mb-5 pb-5 border-b border-dashed border-white/20">
                <div className="text-xs text-secondary-foreground/50 line-through">De R$ 97,00</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black">R$ 37,90</span>
                </div>
                <p className="text-[11px] text-secondary-foreground/60 mt-1">ou 12x de R$ 3,90</p>
              </div>

              <ul className="relative space-y-2.5 mb-6 text-sm">
                {[
                  "+200 recursos completos",
                  "Todas as faixas etárias",
                  "Bônus exclusivos",
                  "Atualizações gratuitas",
                  "Suporte prioritário"
                ].map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <Check className="h-4 w-4 text-accent-glow shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-secondary-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant="accent" size="lg" className="relative w-full font-bold h-12" asChild>
                <a href="#">Quero o Completo →</a>
              </Button>
            </div>
          </div>

          <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground/70 mt-6 font-medium">
            🔒 Compra segura · Garantia 7 dias · Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
