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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
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
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Depoimentos
              </button>
              <Button asChild className="mt-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Solicitar Cotação
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
