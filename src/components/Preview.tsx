import atv1 from "@/assets/kit/atv-psi-1.webp";
import atv2 from "@/assets/kit/atv-psi-2.webp";
import atv3 from "@/assets/kit/atv-psi-3.webp";
import atv4 from "@/assets/kit/atv-psi-4.webp";
import atv5 from "@/assets/kit/atv-psi-5.webp";

const Preview = () => {
  const items = [atv1, atv2, atv3, atv4, atv5];
  const loop = [...items, ...items];

  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            O Conteúdo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mt-4 font-bold">
            Veja o kit por dentro
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((src, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl overflow-hidden shadow-lg shrink-0 w-[220px] md:w-[280px]"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={src}
                  alt={`Atividade ${(i % items.length) + 1}`}
                  className="w-full h-full object-cover"
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
