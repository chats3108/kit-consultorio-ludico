import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
            Garantia incondicional de 7 dias
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Se por qualquer motivo você não ficar satisfeita com o kit, basta enviar
            um e-mail em até 7 dias e devolvemos 100% do seu investimento. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
