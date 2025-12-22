export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated gradient background (placeholder for video) */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-hero-overlay/5" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <h1 className="animate-fade-in-slow">
          <span className="block font-serif text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-tight text-foreground">
            Le<span className="text-muted-foreground">.</span>kB
          </span>
        </h1>

        {/* Baseline */}
        <p className="animate-fade-in-delayed mt-6 md:mt-8 font-sans text-sm md:text-base font-light tracking-ultra-wide uppercase text-muted-foreground">
          club santé & bien-être
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in-delayed">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};