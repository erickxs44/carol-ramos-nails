import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useMemo, useCallback, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
}

const PARTICLE_COUNT = 40;

const ParticlesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const isInView = useInView(canvasRef);
  
  // Keep track of view state without re-triggering main effect
  const isVisible = useRef(isInView);
  useEffect(() => {
    isVisible.current = isInView;
  }, [isInView]);

  const createParticle = useCallback((w: number, h: number): Particle => ({
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 2 + 0.5,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: -Math.random() * 0.4 - 0.1,
    opacity: Math.random() * 0.5 + 0.1,
    fadeSpeed: Math.random() * 0.003 + 0.001,
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(canvas.width, canvas.height)
    );

    const animate = () => {
      // Only run CPU-heavy canvas calculations when inside viewport
      if (isVisible.current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const particles = particlesRef.current;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.speedX;
          p.y += p.speedY;
          p.opacity += p.fadeSpeed;
          if (p.opacity > 0.6 || p.opacity < 0.05) p.fadeSpeed *= -1;
          if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
            particles[i] = createParticle(canvas.width, canvas.height);
            particles[i].y = canvas.height + 10;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          
          // Ultra intense neon glow using shadow properties
          ctx.shadowBlur = 15;
          ctx.shadowColor = `hsla(340, 80%, 65%, ${p.opacity * 1.5})`;
          ctx.fillStyle = `hsla(340, 90%, 75%, ${p.opacity * 2})`;
          
          ctx.fill();
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
    />
  );
};

const words = [
  "Unhas de Gel", 
  "Alongamentos", 
  "Spa dos Pés", 
  "Blindagem", 
  "Autoestima"
];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster=""
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* White gradient overlay to balance video visibility and text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/10 via-white/30 to-background" />

      {/* Particles */}
      <ParticlesCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.p
          className="font-body text-sm tracking-[0.35em] uppercase text-rose-600 mb-6 drop-shadow-sm"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gabi Nails · Nail Designer
        </motion.p>

        <motion.h1
          className="font-display text-5xl sm:text-7xl md:text-8xl font-medium leading-[1.1] mb-8 drop-shadow-sm flex flex-col items-center"
          initial={{ opacity: 0, y: 50, filter: "blur(12px)", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <span className="text-gray-900 block mb-2 sm:mb-4">A Elite em</span>
          <div className="relative w-full h-[1.2em] overflow-visible">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.6 }}
                className="text-gradient-gold absolute left-0 right-0 mx-auto"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p
          className="font-body text-gray-700 font-medium text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-sm"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          O mais alto padrão em unhas e alongamentos de Santa Cruz do Sul, exclusivo para quem não aceita menos que a perfeição.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://wa.me/5551992834194?text=Olá! Gostaria de agendar um horário."
            target="_blank"
            rel="noopener noreferrer"
            className="border-shimmer inline-block px-10 py-4 bg-background/80 backdrop-blur-sm font-body text-sm tracking-[0.2em] uppercase text-primary transition-all duration-500 hover:bg-primary/10"
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
