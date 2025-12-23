import { motion } from "framer-motion";

export const Hero = () => {
  const clipReveal = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { clipPath: "inset(0 0% 0 0)" }
  };

  const lineReveal = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1 }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
        {/* Logo - Clip Path Reveal Animation */}
        <h1>
          <motion.span 
            className="block font-serif text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-normal tracking-[-0.02em] text-foreground"
            initial="hidden"
            animate="visible"
            variants={clipReveal}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
          >
            Le<span className="text-accent-foreground/40">.</span>kB
          </motion.span>
        </h1>

        {/* Decorative line */}
        <motion.div 
          className="mt-8 w-12 h-px bg-foreground/20 origin-center"
          initial="hidden"
          animate="visible"
          variants={lineReveal}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
        />

        {/* Baseline - Refined spacing */}
        <motion.p 
          className="mt-6 md:mt-8 font-sans text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
        >
          club santé & bien-être
        </motion.p>

        {/* Scroll indicator - Minimal */}
        <motion.div 
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-foreground/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};