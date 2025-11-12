import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  const whatsappLink = "https://wa.me/5513974163806";

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 border-2 md:border-4 border-white rounded-lg"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 md:w-40 md:h-40 border-2 md:border-4 border-white rounded-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 md:w-24 md:h-24 border-2 md:border-4 border-white rounded-lg hidden sm:block"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white px-2">
            Pronto para transportar sua carga com segurança e confiança?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/95 mb-6 md:mb-10 px-4">
            Entre em contato agora e receba uma cotação personalizada para suas necessidades de transporte.
          </p>
          
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-10 py-5 md:py-7 h-auto shadow-xl md:hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5 md:h-6 md:w-6" />
              Solicitar Cotação Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
