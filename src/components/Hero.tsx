export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated gradient background (placeholder for video) */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Subtle texture overlay for luxury feel */}
      <div className="absolute inset-0 bg-hero-overlay/[0.02]" />
      
      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--hero-overlay)/0.03)_100%)]" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Logo - Premium typography */}
        <h1 className="animate-fade-in-slow">
          <span className="block font-serif text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-normal tracking-[-0.02em] text-foreground">
            Le<span className="text-accent-foreground/40">.</span>kB
          </span>
        </h1>

        {/* Decorative line */}
        <div className="animate-fade-in-delayed mt-8 w-12 h-px bg-foreground/20" />

        {/* Baseline - Refined spacing */}
        <p className="animate-fade-in-delayed mt-6 md:mt-8 font-sans text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
          club santé & bien-être
        </p>

        {/* Scroll indicator - More elegant */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-fade-in-delayed flex flex-col items-center gap-3">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60">Découvrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};