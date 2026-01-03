import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o Nexzo";

export const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Enquanto você descansa,{" "}
              <span className="text-gradient">seu WhatsApp vende</span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-8">
              <span className="text-primary">+500 empresas</span> já faturam no automático com o Nexzo.{" "}
              <span className="underline decoration-primary decoration-2">Seja a próxima!</span>
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary to-emerald-500 rounded-full overflow-hidden shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 hover:from-emerald-400 hover:to-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contratar Agora
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
