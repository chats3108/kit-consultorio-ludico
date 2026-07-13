import { Button } from "@/components/ui/button";
import { Check, Gift, ChevronDown } from "lucide-react";
import { useState } from "react";
import essentialImg from "@/assets/kit/mockupsembonus.webp";
import completeImg from "@/assets/kit/mockuptudo.webp";

const bonusItems = [
  { title: "Fichas de Anamnese Infantil", price: "R$ 27,00" },
  { title: "Roteiro de Devolutiva para Pais", price: "R$ 19,00" },
  { title: "Checklist de Planejamento de Sessão", price: "R$ 17,00" },
  { title: "Guia de Manejo com Pais Difíceis", price: "R$ 17,00" },
  { title: "Kit de Psicoeducação Visual", price: "R$ 17,00" },
];

const Pricing = () => {
  const [expanded, setExpanded] = useState(false);

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

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto items-start">
            {/* Basic */}
            <div className="p-6 md:p-7 bg-card rounded-2xl border border-foreground/5 shadow-sm">
              <p className="text-center text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4">
                Kit Básico
              </p>
              <div className="aspect-[4/3] mb-4 flex items-center justify-center">
                <img src={essentialImg} alt="Kit Básico" loading="lazy" decoding="async" className="w-full h-full object-contain" />
              </div>

              <div className="text-center mb-5">
                <div className="text-sm text-destructive line-through mb-1">De R$ 47,90</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg font-bold text-foreground">R$</span>
                  <span className="text-5xl md:text-6xl font-black text-foreground leading-none">19</span>
                  <span className="text-2xl font-black text-foreground">,90</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Pagamento único</p>
              </div>

              <Button
                size="lg"
                className="w-full h-12 font-bold rounded-full bg-muted-foreground/70 hover:bg-muted-foreground text-white mb-5"
                asChild
              >
                <a href="https://pay.wiapy.com/ma6vmDYA9Y9W" target="_blank" rel="noopener noreferrer">Quero o kit básico</a>
              </Button>

              <ul className="space-y-2.5 text-sm mb-5">
                {["+80 recursos terapêuticos lúdicos", "Organizados por demanda clínica", "Acesso imediato em PDF"].map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full border-2 border-foreground/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-foreground/60 stroke-[3]" />
                    </div>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setExpanded(!expanded)}
                className="w-full border border-primary/40 rounded-xl p-3 text-xs md:text-sm text-primary font-medium flex items-center justify-between gap-2 hover:bg-primary/5 transition"
              >
                <span className="text-left">92% escolhem o kit completo — +160 recursos e +5 bônus exclusivos</span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Complete */}
            <div className="relative p-6 md:p-7 bg-secondary text-secondary-foreground rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-56 h-56 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <p className="relative text-center text-xs font-bold tracking-[0.2em] text-secondary-foreground uppercase mb-3">
                Kit Completo
              </p>

              <div className="relative flex justify-center mb-3">
                <span className="bg-accent text-accent-foreground text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  +160 recursos inclusos
                </span>
              </div>

              <div className="relative aspect-[4/3] mb-4 flex items-center justify-center">
                <img src={completeImg} alt="Kit Completo" loading="lazy" decoding="async" className="w-full h-full object-contain" />
              </div>

              <p className="relative text-center font-bold text-sm md:text-base mb-3">
                O kit completo para transformar suas sessões
              </p>

              <div className="relative text-center mb-4">
                <div className="text-sm text-destructive line-through mb-1">De R$ 114,90</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg font-bold text-accent">R$</span>
                  <span className="text-5xl md:text-6xl font-black text-accent leading-none">37</span>
                  <span className="text-2xl font-black text-accent">,90</span>
                </div>
                <p className="text-xs text-secondary-foreground/80 mt-1">Ou 6x de R$ 7,45</p>
                <p className="text-[11px] text-secondary-foreground/70">pagamento único · acesso imediato</p>
                <p className="text-xs font-bold text-accent mt-2">Você economiza R$ 77,00</p>
              </div>

              <Button
                size="lg"
                className="relative w-full h-12 font-bold rounded-full bg-accent hover:bg-accent/90 text-accent-foreground mb-5"
                asChild
              >
                <a href="https://pay.wiapy.com/_d6UG-wqonnq" target="_blank" rel="noopener noreferrer">Quero o kit completo</a>
              </Button>

              <ul className="relative space-y-2.5 text-sm mb-4">
                {["+160 recursos terapêuticos lúdicos", "Organizados por demanda clínica", "Acesso imediato em PDF"].map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full border-2 border-secondary-foreground/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-secondary-foreground stroke-[3]" />
                    </div>
                    <span className="text-secondary-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <ul className="relative space-y-2.5 text-sm">
                {bonusItems.map((b, i) => (
                  <li key={i} className="flex gap-2.5 items-start justify-between">
                    <div className="flex gap-2.5 items-start flex-1 min-w-0">
                      <Gift className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="font-semibold text-secondary-foreground">{b.title}</span>
                    </div>
                    <span className="text-xs text-destructive line-through shrink-0 mt-0.5">{b.price}</span>
                  </li>
                ))}
              </ul>
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
