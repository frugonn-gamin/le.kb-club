import { motion } from "framer-motion";
import { fadeInUp, fadeIn, lineGrow } from "@/lib/animations";

export const Manifeste = () => {

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-8 lg:px-16 max-w-4xl">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeInUp}
        >
          <span className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Notre vision
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Manifeste
          </h2>
          <motion.div 
            className="mt-6 mx-auto w-12 h-px bg-foreground/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Manifesto content */}
        <div className="space-y-8 md:space-y-10 text-center">
          <motion.p 
            className="font-serif text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/90"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={fadeInUp}
          >
            Nous croyons que la santé est un art de vivre.
          </motion.p>

          <motion.p 
            className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            variants={fadeInUp}
          >
            Le.kB est né d'une conviction profonde : celle que le bien-être ne devrait jamais être un luxe inaccessible, 
            mais un espace où chacun peut se reconnecter à l'essentiel — son corps, son esprit, son équilibre.
          </motion.p>

          <motion.div 
            className="py-6 md:py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeIn}
          >
            <motion.div 
              className="w-px h-12 bg-foreground/10 mx-auto origin-top"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={lineGrow}
            />
          </motion.div>

          <motion.p 
            className="font-serif text-lg md:text-xl italic text-foreground/80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={fadeInUp}
          >
            "Un lieu où le temps ralentit, où l'excellence rencontre la bienveillance."
          </motion.p>

          <motion.div 
            className="py-6 md:py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeIn}
          >
            <motion.div 
              className="w-px h-12 bg-foreground/10 mx-auto origin-top"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={lineGrow}
            />
          </motion.div>

          <motion.div 
            className="space-y-6 text-left md:text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, staggerChildren: 0.15, ease: "easeOut" }}
          >
            <motion.p 
              className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Ici, nous rassemblons les meilleurs praticiens, les approches les plus innovantes et une communauté 
              engagée dans une quête commune : celle d'une vie plus saine, plus consciente, plus épanouie.
            </motion.p>

            <motion.p 
              className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Le.kB n'est pas qu'un lieu. C'est un mouvement. Une invitation à prendre soin de soi autrement — 
              avec exigence et douceur, dans un cadre pensé pour inspirer et ressourcer.
            </motion.p>
          </motion.div>

          <motion.div 
            className="pt-8 md:pt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            variants={fadeInUp}
          >
            <p className="font-serif text-2xl md:text-3xl font-light text-foreground">
              Bienvenue chez vous.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
