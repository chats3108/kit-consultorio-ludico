import { Heart, Award, Sparkles, Clock } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada cliente é única e merece um design exclusivo para seu olhar"
  },
  {
    icon: Award,
    title: "Materiais de Qualidade",
    description: "Utilizo apenas produtos premium e certificados para garantir segurança"
  },
  {
    icon: Sparkles,
    title: "Resultado Natural",
    description: "Técnicas modernas para um efeito elegante e sofisticado"
  },
  {
    icon: Clock,
    title: "Longa Duração",
    description: "Cílios bonitos por mais tempo com a manutenção adequada"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Por Que Escolher?
          </h2>
          <p className="text-lg text-muted-foreground">
            Diferenciais que fazem toda a diferença
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <benefit.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
