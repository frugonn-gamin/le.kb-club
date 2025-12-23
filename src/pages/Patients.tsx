import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import therapistImage from "@/assets/therapist-consultation.png";
const Patients = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation variant="solid" />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Patients
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-foreground leading-[1.1] mb-8">
              Un accompagnement<br />
              <span className="italic">en toute confiance</span>
            </h1>
            <p className="font-sans text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Chez Le.kB, nous croyons que le soin commence par l'écoute. 
              Prenez le temps qu'il vous faut, nous sommes là pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                number: "01",
                title: "Écoute attentive",
                description: "Chaque consultation débute par un temps d'échange approfondi pour comprendre vos besoins, votre histoire et vos attentes."
              },
              {
                number: "02",
                title: "Approche globale",
                description: "Nous considérons la personne dans sa globalité : corps, esprit et environnement, pour un accompagnement personnalisé."
              },
              {
                number: "03",
                title: "Temps respecté",
                description: "Pas de précipitation. Nous prenons le temps nécessaire pour chaque consultation, chaque soin, chaque étape."
              }
            ].map((item, index) => (
              <div key={index} className="border-t border-border pt-8">
                <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground/60 mb-4 block">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <img 
            src={therapistImage} 
            alt="Consultation avec un thérapeute" 
            className="w-full aspect-[16/7] object-cover"
          />
        </div>
      </section>

      {/* What to expect */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Votre parcours
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground mb-6">
                À quoi s'attendre ?
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Votre première visite est un moment de découverte mutuelle. 
                Voici comment se déroule généralement votre parcours chez nous.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-8">
                {[
                  {
                    step: "Premier contact",
                    detail: "Un échange téléphonique ou par email pour comprendre votre demande et vous orienter vers le praticien adapté."
                  },
                  {
                    step: "Consultation initiale",
                    detail: "Une première rencontre approfondie pour établir un bilan complet et définir ensemble les objectifs de votre accompagnement."
                  },
                  {
                    step: "Plan personnalisé",
                    detail: "Élaboration d'un parcours de soin adapté à vos besoins, votre rythme et vos contraintes."
                  },
                  {
                    step: "Suivi régulier",
                    detail: "Des rendez-vous de suivi pour ajuster, accompagner et mesurer votre progression dans la durée."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Questions fréquentes
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground">
              Vos interrogations
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-border">
            {[
              {
                question: "Comment prendre rendez-vous ?",
                answer: "Vous pouvez nous contacter par téléphone ou via notre formulaire de contact. Nous vous répondrons dans les 24 heures pour convenir d'un créneau."
              },
              {
                question: "Les consultations sont-elles remboursées ?",
                answer: "Certaines prestations peuvent être prises en charge par votre mutuelle. Nous vous fournirons les documents nécessaires pour vos démarches."
              },
              {
                question: "Combien de temps dure une consultation ?",
                answer: "La durée varie selon le type de consultation. Comptez généralement entre 45 minutes et 1h30 pour une première visite."
              },
              {
                question: "Puis-je annuler ou reporter un rendez-vous ?",
                answer: "Oui, nous vous demandons simplement de nous prévenir au moins 48 heures à l'avance pour permettre à d'autres patients de bénéficier du créneau."
              }
            ].map((item, index) => (
              <div key={index} className="py-8">
                <h3 className="font-serif text-lg lg:text-xl font-normal text-foreground mb-3">
                  {item.question}
                </h3>
                <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-normal text-foreground mb-4">
            Prêt à nous rencontrer ?
          </h2>
          <p className="font-sans text-base text-muted-foreground mb-8 max-w-lg mx-auto">
            Faites le premier pas vers un accompagnement bienveillant et personnalisé.
          </p>
          <a 
            href="/contact" 
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Patients;
