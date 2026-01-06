import { Button } from "@/components/ui/button";
import { MessageCircle, BarChart3 } from "lucide-react";
import { SupportModal } from "@/components/SupportModal";
import { DashboardModal } from "@/components/DashboardModal";

const WHATSAPP_LINK = "https://wa.me/5521971366137?text=Olá!%20Gostei%20de%20do%20robo%20";

// Webhook URL for support form
const WEBHOOK_URL = "https://n8n.mirako.org/webhook/ab926d42-90ab-4b22-949b-70081535ca7f";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          <span className="text-foreground">Nexzo</span>
          <span className="text-primary"> Vendas</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <a 
            href="#funcionalidades" 
            className="px-4 py-2 rounded-full text-foreground font-bold hover:bg-foreground/10 transition-all duration-300"
          >
            Funcionalidades
          </a>
          <a 
            href="#depoimentos" 
            className="px-4 py-2 rounded-full text-foreground font-bold hover:bg-foreground/10 transition-all duration-300"
          >
            Depoimentos
          </a>
          <SupportModal webhookUrl={WEBHOOK_URL}>
            <button 
              className="px-4 py-2 rounded-full text-foreground font-bold hover:bg-foreground/10 transition-all duration-300"
            >
              Suporte
            </button>
          </SupportModal>
          <DashboardModal>
            <button 
              className="px-4 py-2 rounded-full text-foreground font-bold hover:bg-foreground/10 transition-all duration-300 flex items-center gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </button>
          </DashboardModal>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            className="text-white font-bold"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};
