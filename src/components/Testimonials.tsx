import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    text: "Simplesmente perfeito! O atendimento é maravilhoso e o resultado ficou exatamente como eu queria. Já recebi vários elogios!",
    rating: 5
  },
  {
    name: "Juliana Costa",
    text: "Profissionalismo e carinho em cada detalhe. Meus cílios ficaram lindos e naturais. Super recomendo!",
    rating: 5
  },
  {
    name: "Fernanda Oliveira",
    text: "Melhor investimento! Acordar já linda, sem precisar usar máscara de cílios, não tem preço. Ambiente aconchegante e resultado impecável.",
    rating: 5
  },
  {
    name: "Amanda Santos",
    text: "Atendimento personalizado e resultado que superou minhas expectativas. Voltarei com certeza!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O Que Dizem Minhas Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de quem confia no meu trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-2 border-border hover:shadow-soft transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
