import warehouseImage from "@/assets/logistics-warehouse.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src={warehouseImage}
                alt="VTS Transporte - Logística Profissional"
                className="relative rounded-2xl shadow-card w-full object-cover aspect-video"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Sobre a VTS TRANSPORTE
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-muted-foreground text-base md:text-lg">
              <p>
                A <strong className="text-foreground">VTS TRANSPORTE</strong> é especializada em transporte de cargas 
                fracionadas e dedicadas, atendendo todo o território brasileiro com excelência e compromisso.
              </p>
              
              <p>
                Nossa missão é oferecer soluções logísticas eficientes, garantindo pontualidade, segurança 
                e agilidade em cada entrega. Com uma frota moderna e equipe experiente, cuidamos da sua carga 
                do início ao fim.
              </p>
              
              <p className="font-semibold text-primary">
                Confiança e profissionalismo em cada transporte!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 md:mt-8">
              <div className="text-center p-3 sm:p-4 bg-accent rounded-lg md:rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Entregas Realizadas</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-accent rounded-lg md:rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Brasil</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-accent rounded-lg md:rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Atendimento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
