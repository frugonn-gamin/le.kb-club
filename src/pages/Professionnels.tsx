import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Building2, Users, Calendar, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, defaultViewport } from "@/lib/animations";
import professionnelsHero from "@/assets/professionnels-hero.png";

const Professionnels = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation variant="solid" />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={fadeInUp}
          >
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Espace Professionnels
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-foreground leading-[1.1] mb-8">
              Un lieu pensé pour<br />
              <span className="italic">exercer autrement</span>
            </h1>
            <p className="font-sans text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Le.kB accueille les professionnels de santé et du bien-être 
              qui partagent notre vision d'un accompagnement global, humain et durable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div 
            className="grid lg:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {[
              {
                number: "01",
                title: "Collaboration",
                description: "Un écosystème de praticiens complémentaires qui travaillent ensemble pour le bénéfice des patients."
              },
              {
                number: "02",
                title: "Indépendance",
                description: "Conservez votre liberté d'exercice tout en bénéficiant d'un cadre structurant et bienveillant."
              },
              {
                number: "03",
                title: "Qualité de vie",
                description: "Un espace de travail pensé pour votre confort et celui de vos patients, sans contraintes administratives."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="border-t border-border pt-8"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground/60 mb-4 block">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Section with Parallax */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <OptimizedImage
            src={professionnelsHero}
            alt="Praticiens de santé et bien-être au travail - psychologue, ostéopathe, aromathérapeute et thérapeute"
            className="w-full aspect-[16/7]"
          />
        </div>
      </section>

      {/* Our offer */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div 
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              transition={defaultTransition}
              variants={fadeInUp}
            >
              <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Notre offre
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground mb-6">
                Ce que nous proposons
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Le.kB met à disposition des professionnels de santé un environnement 
                de travail complet, adapté aux besoins de chacun.
              </p>
            </motion.div>
            <motion.div 
              className="lg:col-span-6 lg:col-start-7"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: Building2,
                    title: "Cabinets équipés",
                    description: "Des espaces de consultation entièrement équipés, lumineux et calmes."
                  },
                  {
                    icon: Users,
                    title: "Réseau pluridisciplinaire",
                    description: "Intégrez un collectif de praticiens aux compétences complémentaires."
                  },
                  {
                    icon: Calendar,
                    title: "Flexibilité",
                    description: "Formules adaptées : temps plein, temps partiel ou vacation ponctuelle."
                  },
                  {
                    icon: Lightbulb,
                    title: "Accompagnement",
                    description: "Soutien administratif et accès à des formations continues."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-3"
                    variants={fadeInUp}
                    transition={defaultTransition}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-serif text-lg font-normal text-foreground">
                      {item.title}
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div 
            className="max-w-xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
            variants={fadeInUp}
          >
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Profils recherchés
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground">
              Qui peut rejoindre Le.kB ?
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {[
              "Kinésithérapeutes",
              "Ostéopathes",
              "Diététiciens & Nutritionnistes",
              "Psychologues & Psychomotriciens",
              "Sophrologues & Relaxologues",
              "Coaches sportifs certifiés",
              "Ergothérapeutes",
              "Podologues",
              "Praticiens en médecines douces"
            ].map((profession, index) => (
              <motion.div 
                key={index} 
                className="bg-background border border-border rounded-lg px-6 py-4 text-center hover:border-primary/50 transition-colors"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <span className="font-sans text-sm text-foreground">{profession}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div 
            className="max-w-xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
            variants={fadeInUp}
          >
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Comment nous rejoindre
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground">
              Un processus simple et humain
            </h2>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <div className="space-y-8">
              {[
                {
                  step: "Prise de contact",
                  detail: "Envoyez-nous un email à info@lekb.pro pour nous présenter votre parcours et votre projet professionnel."
                },
                {
                  step: "Échange & visite",
                  detail: "Nous organisons une rencontre pour faire connaissance, visiter les locaux et comprendre vos attentes."
                },
                {
                  step: "Période d'essai",
                  detail: "Une période d'essai vous permet de découvrir notre fonctionnement et de vous intégrer à l'équipe."
                },
                {
                  step: "Intégration",
                  detail: "Bienvenue dans la communauté Le.kB ! Vous exercez en toute autonomie au sein de notre collectif."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-6"
                  variants={fadeInUp}
                  transition={defaultTransition}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center">
                    <span className="font-sans text-xs text-muted-foreground">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-normal text-foreground mb-2">
                      {item.step}
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-4">
              Envie de nous rejoindre ?
            </h2>
            <p className="font-sans text-base text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Nous sommes toujours à l'écoute de nouveaux profils passionnés par leur métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:info@lekb.pro" 
                className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase bg-primary-foreground text-primary px-6 py-3 hover:opacity-90 transition-opacity"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link 
                to="/contact" 
                className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground border-b border-primary-foreground/50 pb-1 hover:border-primary-foreground transition-colors"
              >
                Voir nos coordonnées
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Professionnels;