import { motion } from "framer-motion";
import carolPortrait from "@/assets/carol-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full background portrait */}
      <motion.img
        src={carolPortrait}
        alt="Carol Ramos - Nail Designer"
        className="absolute inset-0 w-full h-full object-cover object-top"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Glassmorphism text overlay */}
      <motion.div
        className="relative z-10 w-full p-6 sm:p-10 pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="glass-strong rounded-sm p-8 sm:p-12 max-w-2xl">
          <p className="font-body text-sm tracking-[0.3em] uppercase rose-text mb-4">
            A Especialista
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-foreground mb-6">
            Carol Ramos
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
            Referência em unhas de gel em Cerqueira César, Carol Ramos combina técnica apurada 
            com um olhar artístico único. Cada trabalho é tratado como uma peça exclusiva, 
            utilizando materiais europeus de primeira linha.
          </p>
          <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
            Com anos de especialização e centenas de clientes satisfeitas, sua técnica diferenciada 
            garante naturalidade, durabilidade e um acabamento que é impossível de ignorar.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
