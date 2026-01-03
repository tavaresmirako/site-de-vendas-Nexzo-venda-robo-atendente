import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PHRASES = [
  { text: "Mais clientes, mais vendas", className: "text-foreground" },
  { text: "24 horas por você", className: "text-gradient" },
  { text: "Simples assim", className: "text-foreground/80" },
];

const variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export const AnimatedHeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3000); // Troca a frase a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 md:h-20 lg:h-24 flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`absolute text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${PHRASES[index].className}`}
        >
          {PHRASES[index].text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
