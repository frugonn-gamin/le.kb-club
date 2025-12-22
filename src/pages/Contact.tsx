import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les meilleurs délais.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation variant="solid" />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Contact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-foreground leading-[1.1]">
              Prenons<br />
              <span className="italic">contact</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            
            {/* Info Column */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="space-y-12">
                {/* Address */}
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Adresse
                  </h3>
                  <p className="font-serif text-lg text-foreground leading-relaxed">
                    Le.kB<br />
                    12 rue de la Santé<br />
                    33000 Bordeaux
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Horaires
                  </h3>
                  <div className="space-y-2 font-sans text-base text-foreground">
                    <p>Lundi – Vendredi : 9h – 19h</p>
                    <p>Samedi : 9h – 13h</p>
                    <p className="text-muted-foreground">Dimanche : Fermé</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Nous joindre
                  </h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:+33500000000" 
                      className="block font-sans text-base text-foreground hover:opacity-70 transition-opacity"
                    >
                      05 00 00 00 00
                    </a>
                    <a 
                      href="mailto:contact@lekb.club" 
                      className="block font-sans text-base text-foreground hover:opacity-70 transition-opacity"
                    >
                      contact@lekb.club
                    </a>
                  </div>
                </div>

                {/* Access */}
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Accès
                  </h3>
                  <div className="space-y-2 font-sans text-sm text-muted-foreground">
                    <p>Tram B – Arrêt Victoire</p>
                    <p>Parking à proximité</p>
                    <p>Accès PMR disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                      placeholder="06 00 00 00 00"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3"
                    >
                      Objet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-base text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Choisir un objet</option>
                      <option value="rdv">Prise de rendez-vous</option>
                      <option value="info">Demande d'information</option>
                      <option value="adhesion">Adhésion au club</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 font-sans text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center font-sans text-xs tracking-[0.2em] uppercase text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="aspect-[21/9] bg-muted/50 w-full" />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
