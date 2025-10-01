import professionalPhoto from "@/assets/professional-photo.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl"></div>
              <img 
                src={professionalPhoto}
                alt="Lash Designer Profissional"
                className="relative rounded-3xl shadow-card w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sobre Mim
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Olá! Sou especialista em Lash Design com anos de experiência em transformar olhares 
                e elevar a autoestima das minhas clientes.
              </p>
              
              <p>
                Minha paixão é criar designs personalizados que realçam a beleza natural de cada pessoa, 
                sempre com atenção aos mínimos detalhes e utilizando produtos de alta qualidade.
              </p>
              
              <p className="font-semibold text-primary">
                Meu compromisso é fazer você se sentir ainda mais confiante e radiante!
              </p>
            </div>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Clientes Felizes</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
