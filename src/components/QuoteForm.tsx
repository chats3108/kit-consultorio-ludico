import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

const QuoteForm = () => {
  const [message, setMessage] = useState("");
  const whatsappNumber = "5513974163806";

  const handleQuoteRequest = () => {
    const defaultMessage = message.trim() 
      ? `Olá! Gostaria de solicitar uma cotação: ${message}`
      : "Olá! Gostaria de solicitar uma cotação de transporte.";
    
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Solicite sua Cotação
            </h2>
            <p className="text-lg text-muted-foreground">
              Conte-nos sobre sua necessidade de transporte e retornaremos rapidamente
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-card">
            <div className="space-y-4">
              <div>
                <label htmlFor="quote-message" className="block text-sm font-medium text-foreground mb-2">
                  Descreva sua carga ou necessidade de transporte
                </label>
                <Textarea
                  id="quote-message"
                  placeholder="Ex: Preciso transportar 5 paletes de São Paulo para Rio de Janeiro..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button 
                size="lg"
                className="w-full text-lg py-6 h-auto"
                onClick={handleQuoteRequest}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Pedir Cotação no WhatsApp
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Você será redirecionado para o WhatsApp para finalizar sua solicitação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
