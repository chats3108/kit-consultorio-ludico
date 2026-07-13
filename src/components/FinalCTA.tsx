import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10 text-balance leading-[1.1]">
            A próxima criança pode sair da sua sala <em className="italic text-accent-glow">pedindo pra voltar</em>
          </h2>
          <Button variant="accent" size="lg" className="text-base px-10 py-7 h-auto font-semibold w-full sm:w-auto" asChild>
            <a href="#pricing">Quero o kit agora →</a>
          </Button>
          <p className="text-[11px] uppercase tracking-widest text-secondary-foreground/60 mt-6 font-medium">
            Garantia de 7 dias • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
