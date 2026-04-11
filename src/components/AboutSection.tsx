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
              A Especialista
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-gray-900 mb-8">
              Gabi Nails
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Especialista em unhas e com 2 anos de experiência na área, Gabi traz técnicas apuradas e um olhar artístico único, garantindo naturalidade e durabilidade. 
              </p>
              <p>
                Seu trabalho é minucioso e dedicado, proporcionando a cada cliente um resultado impecável, que valoriza a beleza e realça o estilo individual de cada mulher.
              </p>
            </div>
            
            <div className="mt-10">
              <div className="inline-flex items-center gap-3 border-b-2 border-rose-500 pb-2">
                <span className="font-display text-3xl text-rose-500">2</span>
                <span className="font-body text-sm tracking-widest uppercase text-gray-500">Anos de<br/>Experiência</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
