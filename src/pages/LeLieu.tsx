import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import lieuHeroImage from "@/assets/lieu-hero.png";
import lieuAttenteImage from "@/assets/lieu-attente.png";
import lieuConsultationImage from "@/assets/lieu-consultation.jpeg";

const LeLieu = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation variant="solid" />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Notre espace
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-foreground leading-[1.1]">
              Un lieu pensé pour<br />
              <span className="italic">le temps long</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <img 
            src={lieuHeroImage} 
            alt="Consultation dans l'espace Le.kB" 
            className="w-full aspect-[16/9] lg:aspect-[21/9] object-cover"
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Philosophie
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground">
                Sobriété & exigence
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-6 text-foreground/80 font-sans text-base lg:text-lg leading-relaxed">
                <p>
                  Le.kB est né d'une conviction simple : le soin véritable demande du temps, 
                  de l'espace et de la confiance. Nous avons créé un lieu où chaque détail 
                  a été pensé pour favoriser l'équilibre et le bien-être global.
                </p>
                <p>
                  Ici, pas de promesses spectaculaires ni de solutions miracles. 
                  Seulement une approche humaine, patiente et rigoureuse, 
                  où la prévention prime sur l'urgence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="pb-20 lg:pb-32 bg-secondary/30">
        <div className="container mx-auto px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-xl mx-auto text-center mb-16 lg:mb-24">
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nos valeurs
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-[-0.01em] text-foreground">
              Ce qui nous guide
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "Calme",
                description: "Un environnement apaisant où le silence et la sérénité permettent une vraie reconnexion à soi."
              },
              {
                title: "Prévention",
                description: "Anticiper plutôt que guérir. Nous privilégions une approche préventive pour un bien-être durable."
              },
              {
                title: "Lien humain",
                description: "Au cœur de notre approche, la relation de confiance entre praticiens et patients."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-8 lg:px-16">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal italic text-foreground leading-[1.4] mb-8">
              "Un lieu de confiance où le corps, l'esprit et le temps retrouvent leur juste place."
            </p>
            <footer className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
              — L'équipe Le.kB
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Image Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            <img 
              src={lieuAttenteImage} 
              alt="Salle d'attente Le.kB" 
              className="aspect-[4/5] object-cover w-full"
            />
            <img 
              src={lieuConsultationImage} 
              alt="Consultation pédiatrique Le.kB" 
              className="aspect-[4/5] object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 lg:py-32 border-t border-border">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-normal text-foreground mb-6">
            Envie de nous rencontrer ?
          </h2>
          <a 
            href="/contact" 
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            Prendre contact
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LeLieu;
