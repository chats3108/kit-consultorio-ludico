import atv1 from "@/assets/kit/atv-psi-1.webp";
import atv2 from "@/assets/kit/atv-psi-2.webp";
import atv3 from "@/assets/kit/atv-psi-3.webp";
import atv4 from "@/assets/kit/atv-psi-4.webp";
import atv5 from "@/assets/kit/atv-psi-5.webp";

const Preview = () => {
  const items = [atv1, atv2, atv3, atv4, atv5];

  return (
    <section className="py-20 md:py-32 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            O Conteúdo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mt-4 text-balance">
            Veja o kit <em className="italic">por dentro</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {items.map((src, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl overflow-hidden card-premium"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={src}
                  alt={`Atividade ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preview;
