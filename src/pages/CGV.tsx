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
                entre le Cabinet Ostéopathique de Baillargues et ses patients pour la fourniture de 
                prestations de soins ostéopathiques.
              </p>
              <p>
                Toute prise de rendez-vous implique l'acceptation sans réserve des présentes CGV.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 2 - Prestations</h2>
              <p>
                Le cabinet propose des consultations d'ostéopathie réalisées par des praticiens 
                diplômés et enregistrés au Registre des Ostéopathes de France (ROF).
              </p>
              <p>Les prestations comprennent :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consultation initiale avec anamnèse et bilan complet</li>
                <li>Consultation de suivi</li>
                <li>Consultation d'urgence (selon disponibilité)</li>
                <li>Consultation à domicile (sur demande et selon secteur géographique)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 3 - Tarifs</h2>
              <p>
                Les tarifs en vigueur sont affichés au cabinet et communiqués lors de la prise de 
                rendez-vous. Ils sont susceptibles d'être modifiés sans préavis.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4">Tarifs indicatifs :</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Consultation adulte</span>
                    <span className="font-semibold text-foreground">[Tarif] €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Consultation nourrisson/enfant</span>
                    <span className="font-semibold text-foreground">[Tarif] €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Consultation à domicile</span>
                    <span className="font-semibold text-foreground">[Tarif] €</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm">
                L'ostéopathie n'étant pas conventionnée par la Sécurité Sociale, les consultations 
                ne sont pas remboursées par le régime obligatoire. Cependant, de nombreuses mutuelles 
                proposent une prise en charge partielle ou totale.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 4 - Prise de rendez-vous</h2>
              <p>
                Les rendez-vous peuvent être pris par téléphone, via le site internet ou directement 
                au cabinet. Toute prise de rendez-vous engage le patient.
              </p>
              <p>
                Un email ou SMS de rappel peut être envoyé 24 à 48 heures avant la consultation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 5 - Annulation et report</h2>
              <p>
                En cas d'empêchement, le patient doit prévenir le cabinet au moins 24 heures avant 
                l'heure du rendez-vous afin de permettre à un autre patient de bénéficier du créneau.
              </p>
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                <p className="text-foreground font-medium">
                  ⚠️ Tout rendez-vous non honoré ou annulé moins de 24 heures à l'avance pourra 
                  faire l'objet d'une facturation partielle ou totale.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 6 - Modalités de paiement</h2>
              <p>
                Le règlement s'effectue à la fin de chaque consultation. Les moyens de paiement 
                acceptés sont :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Espèces</li>
                <li>Chèque (à l'ordre du praticien)</li>
                <li>Carte bancaire</li>
              </ul>
              <p>
                Une facture détaillée sera remise sur demande pour transmission à votre mutuelle.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 7 - Responsabilité</h2>
              <p>
                Le praticien s'engage à prodiguer des soins consciencieux et conformes aux données 
                actuelles de la science ostéopathique. Il est soumis à une obligation de moyens et 
                non de résultat.
              </p>
              <p>
                Le praticien est couvert par une assurance responsabilité civile professionnelle.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 8 - Contre-indications</h2>
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
                Le praticien se réserve le droit de refuser ou d'interrompre une consultation s'il 
                estime que celle-ci n'est pas adaptée ou présente un risque pour le patient.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 9 - Confidentialité</h2>
              <p>
                Le praticien est soumis au secret professionnel. Toutes les informations recueillies 
                lors de la consultation sont strictement confidentielles et ne peuvent être divulguées 
                sans l'accord du patient, sauf obligation légale.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl text-foreground">Article 10 - Litiges</h2>
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
              <h2 className="font-display text-2xl text-foreground">Article 11 - Droit applicable</h2>
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
