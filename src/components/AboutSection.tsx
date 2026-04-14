import { motion } from "framer-motion";
import { FloatingPaths } from "@/components/ui/background-paths";

const AboutSection = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden" id="sobre">
      {/* Animated Background Paths */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Photos side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl">
              <img 
                src="/gabi.jpg.jpeg" 
                alt="Gabi Nails" 
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              {/* Leve gradiente sobre a foto */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-transparent mix-blend-overlay" />
            </div>
            
            {/* Decorative background element behind photo */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-tl-[80px] rounded-br-[80px]" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col justify-center bg-white/70 backdrop-blur-sm p-8 rounded-3xl"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-rose-600 font-semibold mb-4">
              Sobre mim
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-gray-900 mb-8">
              Gabriela
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Sou Gabriela, Nail Designer. Iniciei minha trajetória em 2025 e, desde então, venho me aperfeiçoando para oferecer não apenas unhas bonitas, mas uma experiência de cuidado, leveza e autoestima.
              </p>
              <p>
                Meu trabalho é feito com atenção aos detalhes, buscando sempre naturalidade, durabilidade e um resultado que valorize o estilo de cada cliente.
              </p>
              <p className="font-medium text-rose-600">
                Seja bem-vinda, será um prazer cuidar de você.
              </p>
            </div>
            
            <div className="mt-10">
              <div className="inline-flex items-center gap-3 border-b-2 border-rose-500 pb-2">
                <span className="font-display text-3xl text-rose-500">2025</span>
                <span className="font-body text-sm tracking-widest uppercase text-gray-500">Início da<br/>Trajetória</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
