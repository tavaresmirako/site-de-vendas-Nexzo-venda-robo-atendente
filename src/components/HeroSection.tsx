import { Button } from "@/components/ui/button";
import { AnimatedHeroText } from "./AnimatedHeroText";
import { PhoneMockup } from "./PhoneMockup";
import { Play, MessageCircle, Star } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521971366137?text=Olá!%20Gostei%20de%20do%20robo%20";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mx-auto">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-bold text-white">Vendas 24 horas por dia, 7 dias por semana, com WhatsApp</span>
            </div>

            <AnimatedHeroText />

	            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              O <span className="text-primary font-semibold">Nexzo Vendas</span> é um robô inteligente com <span className="text-white font-medium">áudio humanizado</span>, <span className="text-white font-medium">análise de sentimento</span>, <span className="text-white font-medium">agendamento de reuniões</span>, <span className="text-white font-medium">envio de mensagens em massa</span> e <span className="text-white font-medium">prospecção de clientes</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary to-emerald-500 rounded-full overflow-hidden shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 hover:from-emerald-400 hover:to-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contratar Agora
                  <Play className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 justify-center">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">+500</span>
                <span className="text-sm text-muted-foreground">empresas<br />ativas</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">4.9</span>
                <div className="flex flex-col">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">avaliação média</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
