import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, MapPin, Settings } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Carga Dedicada",
    description: "Veículo exclusivo para sua carga, garantindo agilidade e segurança no transporte"
  },
  {
    icon: Package,
    title: "Carga Fracionada",
    description: "Compartilhamento de espaço otimizado, ideal para cargas menores com melhor custo-benefício"
  },
  {
    icon: MapPin,
    title: "Coleta e Entrega Nacional",
    description: "Cobertura completa em todo o território brasileiro com rastreamento em tempo real"
  },
  {
    icon: Settings,
    title: "Logística Personalizada",
    description: "Soluções customizadas para atender às necessidades específicas do seu negócio"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas em transporte de cargas para todo o Brasil
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="animate-fade-in-up hover:shadow-soft transition-all duration-300 md:hover:scale-105 border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm md:text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
