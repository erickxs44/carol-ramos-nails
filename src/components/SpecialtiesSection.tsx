import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gelTipImg from "@/assets/nails-gel-tip.jpg";
import moldeF1Img from "@/assets/nails-molde-f1.jpg";

const specialties = [
  {
    title: "Gel na Tip",
    description: "Alongamento natural com acabamento impecável. Leveza e resistência em cada detalhe.",
    image: gelTipImg,
  },
  {
    title: "Molde F1",
    description: "Técnica de escultura avançada para unhas perfeitas. Curvatura e anatomia respeitadas.",
    image: moldeF1Img,
  },
];

const SpecialtyCard = ({ item, index }: { item: typeof specialties[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-sm bg-card neon-border-hover jewel-glow cursor-pointer"
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:saturate-[1.3]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h3 className="font-display text-3xl sm:text-4xl font-light gold-text mb-2">
          {item.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const SpecialtiesSection = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase rose-text mb-4">Especialidades</p>
          <h2 className="font-display text-4xl sm:text-6xl font-light text-foreground">
            Técnicas de Elite
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {specialties.map((item, i) => (
            <SpecialtyCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
