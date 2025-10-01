import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  const whatsappLink = "https://wa.me/5513974075460";

  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronta para transformar o seu olhar?
          </h2>
          <p className="text-xl text-white/95 mb-10">
            Agende agora mesmo e descubra como o Lash Design pode realçar sua beleza natural.
          </p>
          
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 h-auto shadow-xl hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Agendar agora pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
