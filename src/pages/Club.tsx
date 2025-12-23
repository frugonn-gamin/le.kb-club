import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, defaultViewport } from "@/lib/animations";

const Club = () => {
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
              Adhésion
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-foreground leading-[1.1] mb-8">
              Rejoindre<br />
              <span className="italic">Le.kB</span>
            </h1>
            <p className="font-sans text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Plus qu'un lieu de soin, Le.kB est une communauté de personnes 
              partageant les mêmes valeurs : l'exigence, la bienveillance et le temps long.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
            variants={fadeInUp}
          >
            <div className="border-l border-border pl-8 lg:pl-12">
              <p className="font-serif text-xl lg:text-2xl text-foreground leading-relaxed italic">
                "Devenir membre, c'est choisir de s'inscrire dans une démarche 
                de bien-être global, accompagné par des praticiens d'excellence, 
                dans un cadre pensé pour durer."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div 
            className="max-w-xl mx-auto text-center mb-16 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
            variants={fadeInUp}
          >
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Avantages
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground">
              Ce que l'adhésion vous offre
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {[
              {
                title: "Accès prioritaire",
                description: "Réservez vos consultations en priorité et bénéficiez de créneaux dédiés aux membres."
              },
              {
                title: "Tarifs préférentiels",
                description: "Profitez de tarifs avantageux sur l'ensemble des prestations et des forfaits exclusifs."
              },
              {
                title: "Suivi personnalisé",
                description: "Un interlocuteur dédié pour coordonner votre parcours de soin et répondre à vos questions."
              },
              {
                title: "Événements privés",
                description: "Invitations à des ateliers, conférences et rencontres réservés aux membres du club."
              },
              {
                title: "Espace bien-être",
                description: "Accès libre aux espaces de détente : salon, jardin, bibliothèque santé."
              },
              {
                title: "Communauté",
                description: "Rejoignez un cercle de personnes partageant vos valeurs et votre vision du bien-être."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex gap-6"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-foreground/30 mt-3" />
                <div>
                  <h3 className="font-serif text-lg lg:text-xl font-normal text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div 
            className="max-w-xl mx-auto text-center mb-16 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
            variants={fadeInUp}
          >
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Formules
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground">
              Choisir son engagement
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {/* Individual */}
            <motion.div 
              className="border border-border p-8 lg:p-12"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Individuel
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-normal text-foreground mt-4 mb-6">
                Adhésion<br />personnelle
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                L'accès complet à tous les avantages du club pour vous accompagner 
                dans votre parcours de bien-être personnel.
              </p>
              <div className="border-t border-border pt-6">
                <span className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  Sur demande
                </span>
              </div>
            </motion.div>

            {/* Family */}
            <motion.div 
              className="border border-border p-8 lg:p-12 bg-secondary/20"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Famille
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-normal text-foreground mt-4 mb-6">
                Adhésion<br />familiale
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                Étendez les bénéfices de l'adhésion à l'ensemble de votre foyer 
                pour un accompagnement familial harmonieux.
              </p>
              <div className="border-t border-border pt-6">
                <span className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  Sur demande
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div 
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              transition={defaultTransition}
              variants={fadeInUp}
            >
              <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Processus
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground">
                Comment adhérer ?
              </h2>
            </motion.div>
            <motion.div 
              className="lg:col-span-7 lg:col-start-6"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              <div className="space-y-8">
                {[
                  {
                    step: "Prise de contact",
                    detail: "Envoyez-nous votre demande via le formulaire de contact ou par téléphone."
                  },
                  {
                    step: "Entretien découverte",
                    detail: "Un échange pour faire connaissance, comprendre vos attentes et vous présenter le club."
                  },
                  {
                    step: "Visite des lieux",
                    detail: "Découvrez nos espaces et rencontrez l'équipe lors d'une visite personnalisée."
                  },
                  {
                    step: "Bienvenue",
                    detail: "Finalisez votre adhésion et commencez votre parcours au sein du Le.kB."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-6"
                    variants={fadeInUp}
                    transition={defaultTransition}
                  >
                    <div className="flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 border-t border-border">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-normal text-foreground mb-4">
              Intéressé par l'adhésion ?
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-8 max-w-lg mx-auto">
              Contactez-nous pour en savoir plus et planifier votre visite découverte.
            </p>
            <a 
              href="/contact" 
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Club;