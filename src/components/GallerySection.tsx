import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface ServiceImage {
  src: string;
  title: string;
}

const services: ServiceImage[] = [
  { src: "/fotos/alongamento.jpg.jpeg", title: "Alongamento" },
  { src: "/fotos/spa.jpg.jpeg", title: "Spa dos Pés" },
  { src: "/fotos/pedicure.jpg.jpeg", title: "Pedicure" },
  { src: "/fotos/blindagem.jpg.jpeg", title: "Blindagem" },
  { src: "/fotos/banho-de-gel.jpg.jpeg", title: "Banho de Gel" },
  { src: "/fotos/esmaltação-em-gel.jpg.jpeg", title: "Esmaltação em Gel" }
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 sm:py-32 px-6 bg-secondary relative overflow-hidden" id="servicos">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase rose-text mb-4">Serviços</p>
          <h2 className="font-display text-4xl sm:text-6xl font-light text-foreground">
            Especialidades
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden px-4 py-8" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  onClick={() => setLightbox(i)}
                >
                  {/* Neon Wrapper */}
                  <div className="neon-card bg-background shadow-2xl h-96 group cursor-pointer">
                    <div className="neon-card-content relative">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                      <div className="relative h-full flex flex-col justify-end p-6 pb-8 transform transition-transform duration-300">
                        <h3 className="font-display text-3xl text-white text-center drop-shadow-lg tracking-wide shadow-black">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/90 shadow-xl rounded-full p-3 text-rose-500 hover:bg-rose-500 hover:text-white transition-all z-20 pointer-events-auto"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/90 shadow-xl rounded-full p-3 text-rose-500 hover:bg-rose-500 hover:text-white transition-all z-20 pointer-events-auto"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-6 flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              src={services[lightbox].src}
              alt={services[lightbox].title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.h3 
              className="mt-8 font-display text-4xl text-rose-300 font-light tracking-wide"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {services[lightbox].title}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
