import recurso2 from "@/assets/kit/recurso-2.webp";
import recurso3 from "@/assets/kit/recurso-3.webp";

const DarkSection = () => {
  return (
    <section className="py-14 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/25 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 relative">
        <div className="max-w-4xl mx-auto">
          <span className="tape">Diferencial</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl mt-4 mb-4 font-extrabold leading-tight">
            Cada sessão com vínculo é uma <span className="text-accent-glow underline decoration-wavy decoration-2 underline-offset-4">indicação</span> que você ganha.
          </h2>
          <p className="text-sm md:text-base text-secondary-foreground/70 mb-8 md:mb-10 max-w-2xl leading-relaxed">
            Transforme sessões em experiências memoráveis: as crianças pedem pra voltar, os pais recomendam pra outras famílias.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {[recurso2, recurso3].map((src, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden sticker-accent ${i === 0 ? "rotate-tiny-l" : "rotate-tiny-r"}`}>
                <img src={src} alt="Recurso" className="w-full block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
