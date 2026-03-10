import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/nails-gel-tip.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 sm:py-32 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase rose-text mb-4">Portfólio</p>
          <h2 className="font-display text-4xl sm:text-6xl font-light text-foreground">
            Galeria de Luxo
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div ref={ref} className="columns-2 sm:columns-3 gap-3 space-y-3">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-sm group"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`Nail art ${i + 1}`}
                className="w-full h-auto object-cover transition-all duration-500 group-hover:saturate-[1.3] group-hover:scale-[1.02]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              src={images[lightbox]}
              alt={`Nail art ${lightbox + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
