import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {
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
          <p className="font-body text-sm tracking-[0.3em] uppercase rose-text mb-4">Localização</p>
          <h2 className="font-display text-4xl sm:text-6xl font-light text-foreground">
            Onde Estamos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            className="rounded-sm overflow-hidden aspect-square md:aspect-auto md:h-[400px]"
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Santa%20Cruz%20do%20Sul,%20RS&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Carol Ramos"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="glass p-8 sm:p-12 rounded-sm"
            initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <p className="font-body text-foreground text-sm mb-1">Santa Cruz do Sul</p>
                <p className="font-body text-muted-foreground text-sm">Rio Grande do Sul - RS</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Horário</p>
                <p className="font-body text-sm text-foreground">Seg - Sáb · 9h às 20h</p>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Contato</p>
                <p className="font-body text-sm text-foreground">WhatsApp · (51) 99283-4194</p>
              </div>
            </div>

            <a
              href="https://wa.me/5551992834194?text=Olá! Gostaria de agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
              className="border-shimmer inline-block mt-10 px-8 py-3 bg-background font-body text-xs tracking-[0.2em] uppercase text-primary transition-all duration-500 hover:bg-primary/10"
            >
              Agendar Agora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
