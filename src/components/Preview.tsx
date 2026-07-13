import atv1 from "@/assets/kit/atv-psi-1.webp";
import atv2 from "@/assets/kit/atv-psi-2.webp";
import atv3 from "@/assets/kit/atv-psi-3.webp";
import atv4 from "@/assets/kit/atv-psi-4.webp";
import atv5 from "@/assets/kit/atv-psi-5.webp";

const Preview = () => {
  const items = [atv1, atv2, atv3, atv4, atv5];
  const loop = [...items, ...items];

  return (
    <section className="py-14 md:py-24 bg-muted relative overflow-hidden border-y-2 border-foreground/10">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="tape">O conteúdo</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary mt-4 font-extrabold leading-tight">
            Veja o kit <span className="marker">por dentro</span> →
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex gap-4 md:gap-6 animate-marquee w-max">
          {loop.map((src, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl overflow-hidden shrink-0 w-[150px] sm:w-[200px] md:w-[260px] sticker ${
                i % 2 === 0 ? "rotate-tiny-l" : "rotate-tiny-r"
              }`}
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
