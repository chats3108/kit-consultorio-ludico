import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dep1 from "@/assets/kit/dep1.webp";
import dep2 from "@/assets/kit/dep2.webp";
import dep4 from "@/assets/kit/dep4.webp";

const SocialProof = () => {
  const deps = [dep1, dep2, dep4];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + deps.length) % deps.length);
  const next = () => setIndex((i) => (i + 1) % deps.length);

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mt-4 font-bold">
            Psicólogas que já usaram o kit — e já sentem a diferença
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative flex items-center gap-4 md:gap-8">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="hidden sm:flex h-11 w-11 rounded-full bg-card border border-border items-center justify-center shadow hover:bg-primary hover:text-primary-foreground transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Phone frame */}
            <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[660px] bg-neutral-900 rounded-[3rem] p-3 shadow-2xl border-[6px] border-neutral-800">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-neutral-900 rounded-full z-10" />
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-white">
                {deps.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Depoimento ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={next}
              aria-label="Próximo"
              className="hidden sm:flex h-11 w-11 rounded-full bg-card border border-border items-center justify-center shadow hover:bg-primary hover:text-primary-foreground transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 mt-8">
            {deps.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-primary/25"
                }`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex sm:hidden gap-4 mt-4">
            <button onClick={prev} className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
