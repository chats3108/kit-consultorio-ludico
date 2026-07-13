import dep1 from "@/assets/kit/dep1.webp";
import dep2 from "@/assets/kit/dep2.webp";
import dep4 from "@/assets/kit/dep4.webp";

const SocialProof = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mt-4 text-balance">
            Psicólogas que já usaram o kit — e já sentem a <em className="italic">diferença</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[dep1, dep2, dep4].map((src, i) => (
            <div key={i} className="bg-card rounded-2xl overflow-hidden card-premium border border-border/50">
              <img src={src} alt={`Depoimento ${i + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
