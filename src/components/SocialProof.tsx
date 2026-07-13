import dep1 from "@/assets/kit/dep1.webp";
import dep2 from "@/assets/kit/dep2.webp";
import dep4 from "@/assets/kit/dep4.webp";

const SocialProof = () => {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            Psicólogas que já usaram o kit — e já
            <span className="text-accent"> sentem a diferença</span> nos seus atendimentos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[dep1, dep2, dep4].map((src, i) => (
            <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-card">
              <img src={src} alt={`Depoimento ${i + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
