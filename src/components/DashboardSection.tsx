import { BarChart3, Users, MessageSquare } from "lucide-react";

const dashboardFeatures = [
  {
    icon: BarChart3,
    title: "Análise em Tempo Real",
    description: "Acompanhe todas as métricas de atendimento em tempo real.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Visualize o número de atendimentos, agendamentos e probabilidade de leads.",
  },
  {
    icon: MessageSquare,
    title: "Vendas",
    description: "Probabilidade e desempenho de vendas mensal.",
  },
];

export const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Dashboard de Atendimento</span>
          </h2>
          <p className="text-foreground text-lg md:text-xl font-semibold max-w-2xl mx-auto">
            Controle total sobre suas vendas e atendimento com um dashboard intuitivo e poderoso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Features */}
          <div className="space-y-4">
            {dashboardFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - CTA */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-full aspect-video bg-gradient-to-br from-primary/20 via-card to-background rounded-2xl border-2 border-border flex items-center justify-center group hover:border-primary transition-all duration-300">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-primary/60 mx-auto mb-4 group-hover:text-primary transition-colors" />
                <p className="text-muted-foreground font-semibold">Seu dashboard aqui</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[
            { label: "Conversas", value: "+10.000" },
            { label: "Taxa de Conversão", value: "45%" },
            { label: "Clientes Ativos", value: "+500" },
            { label: "Tempo Médio", value: "2min" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
