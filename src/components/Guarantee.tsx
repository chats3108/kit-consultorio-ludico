import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-6 md:p-10 sticker">
          <div className="inline-flex w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary items-center justify-center mb-5">
            <ShieldCheck className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-primary mb-3 font-extrabold">
            Garantia incondicional de <span className="marker">7 dias</span>.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Se não ficar satisfeita, envia um e-mail em até 7 dias e devolvemos 100% do investimento. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
