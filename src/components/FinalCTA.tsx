import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-14 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl mb-8 font-extrabold leading-tight">
            A próxima criança pode sair da sua sala <span className="text-accent-glow underline decoration-wavy decoration-2 underline-offset-4">pedindo pra voltar</span>.
          </h2>
          <Button variant="accent" size="lg" className="text-sm sm:text-base px-8 py-6 h-auto font-bold w-full sm:w-auto rounded-full" asChild>
            <a href="#pricing">Quero o kit agora →</a>
          </Button>
          <p className="text-[11px] uppercase tracking-widest text-secondary-foreground/60 mt-5 font-medium">
            Garantia 7 dias · Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
