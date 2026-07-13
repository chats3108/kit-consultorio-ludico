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
    <section className="py-14 md:py-24 bg-muted">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto mb-10 md:mb-14 text-center">
          <div className="flex justify-center mb-4">
            <span className="tape">Depoimentos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary font-extrabold leading-tight">
            Psicólogas usando o kit — e sentindo a <span className="marker">diferença</span>.
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 md:gap-6">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="hidden sm:flex h-10 w-10 rounded-full bg-card border-2 border-foreground items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Phone frame */}
            <div className="relative w-[260px] sm:w-[300px] bg-neutral-900 rounded-[2.5rem] p-2.5 shadow-xl border-4 border-neutral-800">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-900 rounded-full z-10" />
              <div className="relative w-full rounded-[2rem] overflow-hidden bg-white aspect-[9/19]">
                {deps.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Depoimento ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain bg-white transition-opacity duration-500 ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={next}
              aria-label="Próximo"
              className="hidden sm:flex h-10 w-10 rounded-full bg-card border-2 border-foreground items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 mt-6">
            {deps.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-primary/25"
                }`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex sm:hidden gap-3 mt-4">
            <button onClick={prev} aria-label="Anterior" className="h-10 w-10 rounded-full bg-card border-2 border-foreground flex items-center justify-center">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} aria-label="Próximo" className="h-10 w-10 rounded-full bg-card border-2 border-foreground flex items-center justify-center">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
