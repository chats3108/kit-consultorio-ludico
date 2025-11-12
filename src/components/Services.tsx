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
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em transporte de cargas para todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="animate-fade-in-up hover:shadow-soft transition-all duration-300 hover:scale-105 border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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
