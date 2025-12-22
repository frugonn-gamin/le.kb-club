import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CGV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Conditions Générales de Vente
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-sm text-muted-foreground/70">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 1 - Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
                entre le Cabinet de Kinésithérapie Le.kB et ses patients pour la fourniture de 
                prestations de soins de kinésithérapie.
              </p>
              <p>
                Toute prise de rendez-vous implique l'acceptation sans réserve des présentes CGV.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 2 - Prestations</h2>
              <p>
                Le cabinet propose des séances de kinésithérapie réalisées par des masseurs-kinésithérapeutes 
                diplômés d'État et inscrits au tableau de l'Ordre des masseurs-kinésithérapeutes.
              </p>
              <p>Les prestations comprennent :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bilan kinésithérapique initial</li>
                <li>Séances de rééducation fonctionnelle</li>
                <li>Kinésithérapie respiratoire</li>
                <li>Kinésithérapie du sport</li>
                <li>Rééducation post-opératoire</li>
                <li>Massages thérapeutiques</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 3 - Tarifs et remboursement</h2>
              <p>
                Les actes de kinésithérapie sont conventionnés par la Sécurité Sociale lorsqu'ils sont 
                prescrits par un médecin. Le tiers payant est pratiqué avec la Sécurité Sociale.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4">Informations pratiques :</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Actes conventionnés</span>
                    <span className="font-semibold text-foreground">Tarif Sécurité Sociale</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dépassements éventuels</span>
                    <span className="font-semibold text-foreground">Selon acte</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm">
                La prise en charge par la Sécurité Sociale est de 60% du tarif conventionnel. 
                Le complément (40%) est généralement remboursé par votre mutuelle. Pensez à apporter 
                votre carte Vitale et votre attestation de mutuelle à chaque séance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 4 - Ordonnance</h2>
              <p>
                Pour bénéficier d'une prise en charge, une ordonnance médicale est nécessaire. 
                Elle doit être présentée lors de la première séance et préciser :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Le motif de la prescription</li>
                <li>Le nombre de séances prescrites</li>
                <li>La zone corporelle concernée</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 5 - Prise de rendez-vous</h2>
              <p>
                Les rendez-vous peuvent être pris par téléphone, via le site internet ou directement 
                au cabinet. Toute prise de rendez-vous engage le patient.
              </p>
              <p>
                Un email ou SMS de rappel peut être envoyé 24 à 48 heures avant la consultation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 6 - Annulation et report</h2>
              <p>
                En cas d'empêchement, le patient doit prévenir le cabinet au moins 24 heures avant 
                l'heure du rendez-vous afin de permettre à un autre patient de bénéficier du créneau.
              </p>
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                <p className="text-foreground font-medium">
                  ⚠️ Tout rendez-vous non honoré ou annulé moins de 24 heures à l'avance pourra 
                  faire l'objet d'une facturation (non remboursable par la Sécurité Sociale).
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 7 - Modalités de paiement</h2>
              <p>
                Le règlement de la part non prise en charge s'effectue à chaque séance ou en fin de 
                traitement. Les moyens de paiement acceptés sont :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Espèces</li>
                <li>Chèque (à l'ordre du praticien)</li>
                <li>Carte bancaire</li>
              </ul>
              <p>
                Une feuille de soins sera transmise à votre caisse d'assurance maladie et à votre 
                mutuelle pour remboursement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 8 - Responsabilité</h2>
              <p>
                Le praticien s'engage à prodiguer des soins consciencieux et conformes aux données 
                actuelles de la science et aux règles de l'art de la kinésithérapie. Il est soumis 
                à une obligation de moyens et non de résultat.
              </p>
              <p>
                Le praticien est couvert par une assurance responsabilité civile professionnelle 
                et est inscrit à l'Ordre des masseurs-kinésithérapeutes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 9 - Informations médicales</h2>
              <p>
                Le patient s'engage à communiquer au praticien toutes les informations nécessaires 
                à la bonne conduite du traitement, notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Antécédents médicaux et chirurgicaux</li>
                <li>Traitements en cours</li>
                <li>Grossesse</li>
                <li>Allergies connues</li>
                <li>Tout symptôme récent ou inhabituel</li>
              </ul>
              <p>
                Le praticien se réserve le droit de refuser ou d'interrompre une séance s'il 
                estime que celle-ci n'est pas adaptée ou présente un risque pour le patient.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 10 - Confidentialité</h2>
              <p>
                Le praticien est soumis au secret professionnel. Toutes les informations recueillies 
                lors des séances sont strictement confidentielles et ne peuvent être divulguées 
                sans l'accord du patient, sauf obligation légale.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 11 - Litiges</h2>
              <p>
                En cas de litige, les parties s'efforceront de trouver une solution amiable. 
                À défaut, le litige sera porté devant les tribunaux compétents du ressort du 
                siège du cabinet.
              </p>
              <p>
                Le patient peut également faire appel à un médiateur de la consommation conformément 
                aux articles L.611-1 et suivants du Code de la consommation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 12 - Droit applicable</h2>
              <p>
                Les présentes CGV sont soumises au droit français. Elles sont rédigées en langue 
                française. En cas de traduction, seule la version française fera foi.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGV;
