export const Manifeste = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-8 lg:px-16 max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Notre vision
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Manifeste
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-foreground/20" />
        </div>

        {/* Manifesto content */}
        <div className="space-y-8 md:space-y-10 text-center">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/90">
            Nous croyons que la santé est un art de vivre.
          </p>

          <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Le.kB est né d'une conviction profonde : celle que le bien-être ne devrait jamais être un luxe inaccessible, 
            mais un espace où chacun peut se reconnecter à l'essentiel — son corps, son esprit, son équilibre.
          </p>

          <div className="py-6 md:py-8">
            <div className="w-px h-12 bg-foreground/10 mx-auto" />
          </div>

          <p className="font-serif text-lg md:text-xl italic text-foreground/80">
            "Un lieu où le temps ralentit, où l'excellence rencontre la bienveillance."
          </p>

          <div className="py-6 md:py-8">
            <div className="w-px h-12 bg-foreground/10 mx-auto" />
          </div>

          <div className="space-y-6 text-left md:text-center max-w-2xl mx-auto">
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
              Ici, nous rassemblons les meilleurs praticiens, les approches les plus innovantes et une communauté 
              engagée dans une quête commune : celle d'une vie plus saine, plus consciente, plus épanouie.
            </p>

            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
              Le.kB n'est pas qu'un lieu. C'est un mouvement. Une invitation à prendre soin de soi autrement — 
              avec exigence et douceur, dans un cadre pensé pour inspirer et ressourcer.
            </p>
          </div>

          <div className="pt-8 md:pt-12">
            <p className="font-serif text-2xl md:text-3xl font-light text-foreground">
              Bienvenue chez vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
