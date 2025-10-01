import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-lashes.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5513974075460";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Realce sua beleza com o<br />
          <span className="text-white drop-shadow-lg">Lash Design dos seus sonhos</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/95 font-light">
          Atendimento personalizado e resultado impecável para valorizar ainda mais o seu olhar.
        </p>

        <Button 
          size="lg"
          variant="hero"
          className="text-lg px-8 py-6 h-auto shadow-xl"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicitar Cotação
          </a>
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
