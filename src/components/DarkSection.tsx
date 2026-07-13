import recurso2 from "@/assets/kit/recurso-2.webp";
import recurso3 from "@/assets/kit/recurso-3.webp";

const DarkSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Cada sessão com vínculo é uma indicação que você ganha
          </h2>
          <p className="text-base md:text-lg text-secondary-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto">
            Transforme suas sessões em experiências memoráveis que as crianças
            pedem para voltar e os pais recomendam para outras famílias.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            <img src={recurso2} alt="Recurso lúdico" className="w-full rounded-xl shadow-lg" />
            <img src={recurso3} alt="Recurso lúdico" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
