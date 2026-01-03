import { Mic, Calendar, MessageSquare, Bot, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Agente Inteligente",
    description: "IA humanizada que conversa naturalmente e converte visitantes em clientes.",
  },
  {
    icon: Mic,
    title: "Áudio Inteligente",
    description: "Entende e responde em áudio, oferecendo uma experiência mais próxima e pessoal.",
  },
  {
    icon: Calendar,
    title: "Agendamento Automático",
    description: "Agenda reuniões e serviços automaticamente, sem você precisar fazer nada.",
  },
  {
    icon: TrendingUp,
    title: "Vendas no Automático",
    description: "Converte leads em vendas 24/7, mesmo enquanto você dorme.",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Atende seus clientes a qualquer hora, todos os dias da semana.",
  },
  {
    icon: MessageSquare,
    title: "Conversas Humanizadas",
    description: "Respostas naturais que seus clientes não percebem que é um robô.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que você precisa para{" "}
            <span className="text-gradient">vender mais</span>
          </h2>
          <p className="text-foreground text-lg md:text-xl font-semibold max-w-2xl mx-auto">
            Recursos poderosos que transformam seu WhatsApp em uma <span className="text-primary font-bold">máquina de vendas automatizada.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border-2 border-border rounded-2xl p-4 md:p-6 transition-all duration-300 group animate-fade-in hover:border-primary hover:shadow-[0_0_30px_rgba(16,185,129,0.6),0_0_60px_rgba(16,185,129,0.4),0_0_90px_rgba(16,185,129,0.2)] cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground font-medium text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
