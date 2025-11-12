import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-transport.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5513974163806";

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 text-white drop-shadow-lg">
            VTS TRANSPORTE
          </h1>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
          Transporte de cargas para<br />
          <span className="text-white drop-shadow-lg">todo o Brasil</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-white/95 font-light px-4">
          Serviço ágil, seguro e dedicado em cargas fracionadas ou completas.
        </p>

        <Button 
          size="lg"
          variant="hero"
          className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto shadow-xl w-full sm:w-auto"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Solicitar Cotação Agora
          </a>
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
