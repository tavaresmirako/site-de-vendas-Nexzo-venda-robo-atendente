import { useState, useEffect } from "react";
import { Mic, Calendar, MessageCircle, Send, Wifi, Signal, Battery } from "lucide-react";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
  isAudio?: boolean;
  hasSchedule?: boolean;
  delay: number;
}

const messages: Message[] = [
  {
    id: 1,
    type: "user",
    content: "Olá! Quero saber sobre o produto",
    delay: 0,
  },
  {
    id: 2,
    type: "bot",
    content: "Claro! Deixa eu te explicar tudo sobre nosso produto...",
    isAudio: true,
    delay: 1500,
  },
  {
    id: 3,
    type: "bot",
    content: "Posso agendar uma demonstração para você. Qual o melhor dia?",
    hasSchedule: true,
    delay: 3500,
  },
  {
    id: 4,
    type: "user",
    content: "Pode ser amanhã às 14h?",
    delay: 5500,
  },
  {
    id: 5,
    type: "bot",
    content: "Perfeito! Agendado para amanhã às 14h. Te envio um lembrete!",
    delay: 7000,
  },
];

const AudioWave = () => (
  <div className="flex items-center gap-1 bg-primary/20 rounded-lg px-2 py-1.5 mb-1">
    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
      <Mic className="h-3 w-3 text-primary-foreground" />
    </div>
    <div className="flex items-end gap-0.5 h-5 mx-1">
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-primary rounded-full animate-pulse"
          style={{
            height: `${Math.random() * 14 + 6}px`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
    <span className="text-xs text-primary font-medium ml-1">0:15</span>
  </div>
);

export const PhoneMockup = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const showMessages = () => {
      messages.forEach((msg) => {
        if (msg.type === "bot") {
          setTimeout(() => {
            setIsTyping(true);
          }, msg.delay - 800);
        }

        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
        }, msg.delay);
      });

      setTimeout(() => {
        setVisibleMessages([]);
        showMessages();
      }, 10000);
    };

    showMessages();
  }, []);

  return (
    <div className="relative flex items-center gap-6">
      {/* Floating badge - Audio (left side) */}
      <div className="hidden lg:flex flex-col items-end -mt-[400px]">
        <div className="bg-card border border-primary/30 text-foreground rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg animate-pulse">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Mic className="h-4 w-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold">Envia & Recebe Áudio</span>
            <span className="text-[10px] text-muted-foreground">Comunicação natural</span>
          </div>
        </div>
      </div>

      {/* Phone container */}
      <div className="relative">
        {/* Mobile badges - shown on sides for small screens */}
        <div className="lg:hidden absolute -left-2 top-1/3 z-20">
          <div className="bg-card border border-primary/30 text-foreground rounded-lg px-2 py-1.5 flex items-center gap-1.5 shadow-lg animate-pulse text-[10px]">
            <Mic className="h-3 w-3 text-primary" />
            <span className="font-semibold">Áudio</span>
          </div>
        </div>

        {/* Mobile badge - schedule on right side */}
        <div className="lg:hidden absolute -right-2 top-1/2 z-20">
          <div className="bg-card border border-primary/30 text-foreground rounded-lg px-2 py-1.5 flex items-center gap-1.5 shadow-lg animate-fade-in text-[10px]" style={{ animationDelay: "0.3s" }}>
            <Calendar className="h-3 w-3 text-primary" />
            <span className="font-semibold">Agenda</span>
          </div>
        </div>

        {/* Glow effect behind phone */}
        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl scale-90" />

        {/* Phone frame */}
        <div className="relative w-[300px] md:w-[340px] h-[520px] md:h-[600px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[2.5rem] p-1 shadow-2xl">
          {/* Inner frame */}
          <div className="relative w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-7 bg-zinc-900 z-10 flex items-center justify-between px-6">
              <span className="text-[10px] text-white font-medium">9:41</span>
              <div className="absolute left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-900 rounded-b-2xl flex items-center justify-center">
                <div className="w-12 h-1.5 bg-zinc-700 rounded-full" />
              </div>
              <div className="flex items-center gap-1">
                <Signal className="h-3 w-3 text-white" />
                <Wifi className="h-3 w-3 text-white" />
                <Battery className="h-3.5 w-3.5 text-white" />
              </div>
            </div>
            
            {/* Screen content */}
            <div className="h-full pt-9 pb-4 px-3 flex flex-col bg-white">
              {/* Chat header */}
              <div className="bg-primary/10 rounded-lg p-2 mb-3 flex items-center gap-2 border border-primary/20">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md shadow-primary/20">
                  <MessageCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xs text-zinc-800">Nexzo Vendas</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-[10px] text-primary">Online agora</p>
                  </div>
                </div>
              </div>

              {/* Messages area */}
              <div className="flex-1 overflow-hidden space-y-3 pr-1">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`transition-all duration-500 ${
                      visibleMessages.includes(msg.id)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    } ${msg.type === "user" ? "flex justify-end" : "flex justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                        msg.type === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm shadow-lg shadow-primary/20"
                          : "bg-zinc-100 text-zinc-800 rounded-bl-sm border border-zinc-200"
                      }`}
                    >
                      {msg.isAudio && <AudioWave />}
                      {msg.hasSchedule && (
                        <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-2 py-1.5 mb-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-xs font-medium text-primary">Agendar reunião</span>
                        </div>
                      )}
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-zinc-100 rounded-2xl rounded-bl-sm px-4 py-3 border border-zinc-200">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input area */}
              <div className="mt-3 flex items-center gap-2 bg-zinc-100 rounded-full px-3 py-1.5 border border-zinc-200">
                <Mic className="h-4 w-4 text-primary" />
                <span className="flex-1 text-xs text-zinc-500 font-bold">Digite ou envie áudio...</span>
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Send className="h-3 w-3 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge - Schedule (right side) */}
      <div className="hidden lg:flex flex-col items-start">
        <div className="bg-card border border-primary/30 text-foreground rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Calendar className="h-4 w-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold">Agendamento Automático</span>
            <span className="text-[10px] text-muted-foreground">Reuniões e serviços</span>
          </div>
        </div>
      </div>
    </div>
  );
};
