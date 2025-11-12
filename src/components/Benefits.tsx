import { Zap, Shield, Map, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Resposta ágil e eficiente para suas necessidades de transporte"
  },
  {
    icon: Shield,
    title: "Frota Moderna e Segura",
    description: "Veículos equipados e rastreados para máxima segurança da sua carga"
  },
  {
    icon: Map,
    title: "Cobertura Nacional",
    description: "Atendemos todo o território brasileiro com excelência"
  },
  {
    icon: DollarSign,
    title: "Preço Justo",
    description: "Melhor custo-benefício sem comprometer a qualidade do serviço"
  }
];

const Benefits = () => {
  return (
    <section id="diferenciais" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            Por Que Escolher a VTS TRANSPORTE?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            Diferenciais que fazem toda a diferença no seu transporte
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <benefit.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
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
