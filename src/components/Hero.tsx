import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-transport.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5513974163806";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            VTS TRANSPORTE
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Transporte de cargas para<br />
          <span className="text-white drop-shadow-lg">todo o Brasil</span>
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/95 font-light">
          Serviço ágil, seguro e dedicado em cargas fracionadas ou completas.
        </p>

        <Button 
          size="lg"
          variant="hero"
          className="text-lg px-8 py-6 h-auto shadow-xl"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
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
