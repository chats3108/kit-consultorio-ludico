import { Sparkles, Eye, Star, Wand2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Eye,
    title: "Alongamento Clássico",
    description: "Resultado natural e elegante, perfeito para o dia a dia. Uma extensão por fio natural.",
    features: ["Efeito natural", "Longa duração", "Ideal para iniciantes"]
  },
  {
    icon: Sparkles,
    title: "Volume Russo",
    description: "Máximo volume e glamour! Múltiplas extensões ultra finas por fio natural.",
    features: ["Efeito dramático", "Máximo volume", "Look deslumbrante"]
  },
  {
    icon: Star,
    title: "Volume Híbrido",
    description: "O melhor dos dois mundos: naturalidade e volume na medida certa.",
    features: ["Equilíbrio perfeito", "Versátil", "Resultado sofisticado"]
  },
  {
    icon: Wand2,
    title: "Manutenção",
    description: "Mantenha seus cílios sempre perfeitos com sessões de preenchimento regulares.",
    features: ["Manutenção regular", "Preserva resultado", "Economia"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Técnicas modernas e personalizadas para realçar seu olhar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in-up border-2 border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
