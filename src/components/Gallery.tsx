import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const Gallery = () => {
  const images = [beforeAfter1, beforeAfter2, beforeAfter3];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Resultados Reais
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja a transformação que posso fazer por você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3]">
                <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur"></div>
                <img 
                  src={image}
                  alt={`Resultado ${index + 1}`}
                  className="relative w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                <span className="text-white font-semibold text-lg">Antes e Depois</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
