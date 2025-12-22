import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-primary text-center">
            Mentions Légales
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Éditeur du site</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Le.kB - Cabinet de Kinésithérapie</strong><br />
                123 Avenue de la Santé<br />
                75014 Paris, France<br /><br />
                Téléphone : 01 23 45 67 89<br />
                Email : contact@lekb.fr
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Directeur de la publication</h2>
              <p className="text-muted-foreground leading-relaxed">
                [Nom du directeur de publication]<br />
                Masseur-kinésithérapeute diplômé d'État<br />
                N° ADELI : [Numéro ADELI]
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site est hébergé par :<br /><br />
                <strong>Lovable</strong><br />
                [Adresse de l'hébergeur]<br />
                [Contact de l'hébergeur]
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les informations contenues sur ce site sont aussi précises que possible et le site est 
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                ou des lacunes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Le.kB ne pourra être tenu responsable des dommages directs et indirects 
                causés au matériel de l'utilisateur, lors de l'accès au site.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Liens hypertextes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site peut contenir des liens hypertextes vers d'autres sites. Le.kB 
                n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le présent site est soumis au droit français. En cas de litige, les tribunaux français 
                seront seuls compétents.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
