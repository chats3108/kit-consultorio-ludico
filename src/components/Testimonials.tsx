import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Oliveira",
    company: "Distribuidora SP",
    comment: "Excelente serviço! Pontualidade e cuidado com a carga. Transportamos mensalmente com a VTS e nunca tivemos problemas.",
    rating: 5
  },
  {
    name: "Carla Mendes",
    company: "Indústria RJ",
    comment: "Profissionais sérios e comprometidos. A carga sempre chega no prazo e em perfeito estado. Recomendo!",
    rating: 5
  },
  {
    name: "Roberto Santos",
    company: "Comércio MG",
    comment: "Melhor custo-benefício da região. Atendimento rápido e eficiente. Nossa parceria já dura anos.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Confiança conquistada através de entregas bem-sucedidas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="animate-fade-in-up hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
