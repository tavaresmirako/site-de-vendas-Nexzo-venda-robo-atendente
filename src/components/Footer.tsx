import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 Nexzo. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvedor: <a href="https://www.linkedin.com/in/thiago-tavares-6328936a/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Thiago Tavares</a></p>
        </div>
      </div>
    </footer>
  );
};
