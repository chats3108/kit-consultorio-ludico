import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/5513974075460";

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Lash Design</h3>
              <p className="text-secondary-foreground/80 text-sm">
                Realçando sua beleza natural com técnicas modernas e atendimento personalizado.
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
                  <span className="text-sm">(13) 97407-5460</span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3 text-lg">Redes Sociais</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>© 2025 Lash Design. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
