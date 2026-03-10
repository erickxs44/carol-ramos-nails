import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-2xl sm:text-3xl font-light gold-text mb-4">
          Carol Ramos
        </p>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
          Nail Designer · Cerqueira César
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-body text-sm"
        >
          <Instagram size={16} />
          @carolramos
        </a>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-body text-xs text-muted-foreground">
            Desenvolvido por{" "}
            <span className="text-foreground">Erick Digital Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
