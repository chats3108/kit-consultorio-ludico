import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-primary items-center justify-center mb-8 shadow-xl">
            <ShieldCheck className="h-10 w-10 text-primary-foreground" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl text-primary mb-4 text-balance">
            Garantia incondicional de <em className="italic">7 dias</em>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Se por qualquer motivo você não ficar satisfeita com o kit, basta enviar
            um e-mail em até 7 dias e devolvemos 100% do seu investimento. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
