import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-primary text-center">
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'Orée du Bien-Être s'engage à protéger la vie privée des utilisateurs de son site. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et 
                protégeons vos données personnelles conformément au Règlement Général sur la Protection 
                des Données (RGPD).
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Données collectées</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous collectons les données suivantes lorsque vous utilisez notre site :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Messages envoyés via le formulaire de contact</li>
                <li>Données de navigation (cookies)</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Finalités du traitement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Gérer les adhésions au club</li>
                <li>Vous informer sur nos activités et événements</li>
                <li>Améliorer notre site et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Base légale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Votre consentement explicite</li>
                <li>L'exécution d'un contrat (adhésion)</li>
                <li>Notre intérêt légitime à améliorer nos services</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Durée de conservation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données personnelles sont conservées pendant une durée n'excédant pas celle 
                nécessaire aux finalités pour lesquelles elles sont collectées :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Données de contact : 3 ans après le dernier contact</li>
                <li>Données d'adhésion : durée de l'adhésion + 5 ans</li>
                <li>Cookies : 13 mois maximum</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@oree-bien-etre.fr</strong>
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez à tout moment modifier vos préférences en matière de cookies via 
                les paramètres de votre navigateur.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Types de cookies utilisés :
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour comprendre l'utilisation du site</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Sécurité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou pour exercer 
                vos droits, vous pouvez nous contacter :
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>L'Orée du Bien-Être</strong><br />
                123 Avenue de la Forêt<br />
                75016 Paris, France<br />
                Email : contact@oree-bien-etre.fr<br />
                Téléphone : 01 23 45 67 89
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-serif text-primary mb-4">Réclamation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une 
                réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>CNIL</strong><br />
                3 Place de Fontenoy<br />
                TSA 80715<br />
                75334 Paris Cedex 07<br />
                Site : <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Confidentialite;
