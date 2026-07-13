import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            A próxima criança pode sair da sua sala pedindo pra voltar
          </h2>
          <Button variant="accent" size="lg" className="text-base md:text-lg px-8 py-6 h-auto font-bold w-full sm:w-auto" asChild>
            <a href="#pricing">QUERO O KIT AGORA →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
