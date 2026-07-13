import atv1 from "@/assets/kit/atv-psi-1.webp";
import atv2 from "@/assets/kit/atv-psi-2.webp";
import atv3 from "@/assets/kit/atv-psi-3.webp";
import atv4 from "@/assets/kit/atv-psi-4.webp";
import atv5 from "@/assets/kit/atv-psi-5.webp";

const Preview = () => {
  const items = [atv1, atv2, atv3, atv4, atv5];

  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
          Veja o kit por dentro
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 max-w-6xl mx-auto">
          {items.map((src, i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`Atividade psicológica ${i + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preview;
