import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/5513974163806";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary whitespace-nowrap">
              VTS TRANSPORTE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Depoimentos
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar Cotação
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <nav className="flex flex-col px-4 py-6 space-y-1">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary hover:bg-accent transition-colors font-medium text-left py-3 px-4 rounded-md"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-primary hover:bg-accent transition-colors font-medium text-left py-3 px-4 rounded-md"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-foreground hover:text-primary hover:bg-accent transition-colors font-medium text-left py-3 px-4 rounded-md"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="text-foreground hover:text-primary hover:bg-accent transition-colors font-medium text-left py-3 px-4 rounded-md"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-foreground hover:text-primary hover:bg-accent transition-colors font-medium text-left py-3 px-4 rounded-md"
              >
                Depoimentos
              </button>
              <div className="pt-4">
                <Button asChild className="w-full">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Solicitar Cotação
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
