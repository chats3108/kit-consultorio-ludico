import recurso2 from "@/assets/kit/recurso-2.webp";
import recurso3 from "@/assets/kit/recurso-3.webp";

const DarkSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent-glow font-semibold">
            Diferencial
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-balance leading-[1.1]">
            Cada sessão com vínculo é uma <em className="italic text-accent-glow">indicação</em> que você ganha
          </h2>
          <p className="text-base md:text-lg text-secondary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforme suas sessões em experiências memoráveis que as crianças
            pedem para voltar e os pais recomendam para outras famílias.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            {[recurso2, recurso3].map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img src={src} alt="Recurso" className="w-full transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
