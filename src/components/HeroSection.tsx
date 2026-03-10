import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroTexture from "@/assets/hero-texture.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={heroTexture}
          alt=""
          className="w-full h-[115%] object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-body text-sm tracking-[0.35em] uppercase rose-text mb-6"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Carol Ramos · Nail Designer
        </motion.p>

        <motion.h1
          className="font-display text-5xl sm:text-7xl md:text-8xl font-light leading-[0.95] mb-8"
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-foreground">A Elite das</span>
          <br />
          <span className="text-gradient-gold">Unhas de Gel</span>
        </motion.h1>

        <motion.p
          className="font-body text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Técnica exclusiva em Cerqueira César para quem não aceita menos que a perfeição.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário."
            target="_blank"
            rel="noopener noreferrer"
            className="border-shimmer inline-block px-10 py-4 bg-background font-body text-sm tracking-[0.2em] uppercase text-primary transition-all duration-500 hover:bg-primary/10"
          >
            Agende sua Transformação
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
