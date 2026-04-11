import { motion } from "framer-motion";

const differentials = [
  "Durabilidade Extrema",
  "Naturalidade Absoluta",
  "Matéria-Prima Européia",
  "Técnica Exclusiva",
  "Atendimento Premium",
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase rose-text mb-4">Compromisso</p>
          <h2 className="font-display text-4xl sm:text-6xl font-light text-foreground">
            Diferenciais
          </h2>
        </motion.div>

        <div className="space-y-0">
          {differentials.map((text, i) => (
            <motion.div
              key={text}
              className="border-b border-border py-8 sm:py-10"
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            >
              <h3 className="font-display text-2xl sm:text-4xl font-light gold-text text-center">
                {text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
