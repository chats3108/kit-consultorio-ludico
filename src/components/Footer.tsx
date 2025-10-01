import { MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/5513974163806";

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-3">VTS TRANSPORTE</h3>
              <p className="text-secondary-foreground/80 text-sm">
                Transporte de cargas para todo o Brasil com segurança, agilidade e profissionalismo.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 text-lg">Contato</h4>
              <div className="space-y-2">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start text-secondary-foreground/80 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">(13) 97416-3806</span>
                </a>
                <a 
                  href="mailto:contato@vtstransporte.com.br"
                  className="flex items-center justify-center md:justify-start text-secondary-foreground/80 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">contato@vtstransporte.com.br</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3 text-lg">Serviços</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Carga Dedicada</li>
                <li>Carga Fracionada</li>
                <li>Cobertura Nacional</li>
                <li>Logística Personalizada</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>© 2025 VTS TRANSPORTE. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
