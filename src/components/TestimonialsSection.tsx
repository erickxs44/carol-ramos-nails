import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amanda Silva",
    text: "Mudei para a Gabi e não largo mais! Minha blindagem dura semanas e continua intacta, além do acabamento ser o mais natural que já vi.",
  },
  {
    name: "Carolina Mendes",
    text: "O spa dos pés é uma experiência maravilhosa. Fiquei muito relaxada e a esmaltação em gel ficou absolutamente perfeita.",
  },
  {
    name: "Fernanda Costa",
    text: "Melhor alongamento de Santa Cruz do Sul. Super recomendo, a Gabi é muito caprichosa e usa produtos de altíssima qualidade.",
  },
  {
    name: "Beatriz Oliveira",
    text: "Atendimento impecável! O ambiente é super agradável e as minhas unhas nunca estiveram tão saudáveis e bonitas.",
  },
  {
    name: "Juliana Santos",
    text: "Simplesmente a melhor. A técnica de banho de gel dela me salvou, minhas unhas naturais finalmente conseguiram crescer sem quebrar.",
  }
];

// Duplicate the array to ensure seamless infinite looping
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden" id="feedbacks">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-rose-200/20 rounded-full blur-[100px] -z-10" />

      <div className="w-full">
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-rose-600 mb-4 font-semibold">
            Experiência
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-medium text-gray-900">
            O Que Elas Dizem
          </h2>
        </motion.div>

        {/* Infinite Marquee Container */}
        <div className="relative flex overflow-hidden mask-horizontal py-4">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-stretch">
            {duplicatedTestimonials.map((t, i) => (
              <div
                key={i}
                className="w-[350px] sm:w-[400px] mx-4 bg-white rounded-2xl p-8 shadow-xl shadow-rose-900/5 flex flex-col relative shrink-0 transition-transform duration-300 hover:-translate-y-2"
                style={{ border: "1px solid rgba(0, 0, 0, 0.04)" }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-rose-500 text-rose-500" />
                  ))}
                </div>
                <p className="font-body text-gray-600 leading-relaxed italic mb-8 grow">
                  &quot;{t.text}&quot;
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="font-display font-medium text-xl text-gray-900">
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
