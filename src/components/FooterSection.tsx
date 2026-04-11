const FooterSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-2xl sm:text-3xl font-light gold-text mb-4">
          Gabi Nails
        </p>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
          Nail Designer
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-body text-xs tracking-wider text-muted-foreground">
            &copy; {new Date().getFullYear()} Gabi Nails. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
