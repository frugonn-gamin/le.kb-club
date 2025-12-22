import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-light tracking-wider">
              Le.kB
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Un lieu dédié à la santé durable, au mouvement et à la prévention, 
              pensé comme un espace d'accompagnement dans le temps long.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/lieu" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Le lieu
                </Link>
              </li>
              <li>
                <Link to="/patients" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Patients
                </Link>
              </li>
              <li>
                <Link to="/professionnels" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Professionnels
                </Link>
              </li>
              <li>
                <Link to="/club" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Le Club
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Informations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/mentions-legales" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Coordonnées
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/70 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/70">
                  <strong className="text-primary-foreground">Le.kB</strong><br />
                  5 rue des Bains<br />
                  02400 Château-Thierry
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/70" />
                <a href="tel:+33375050012" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  03 75 05 00 12
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-primary-foreground/70" />
                <a href="https://lekb.club" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  lekb.club
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary-foreground/70" />
                <div className="text-sm text-primary-foreground/70 space-y-1">
                  <a href="mailto:info@lekb.club" className="block hover:text-primary-foreground transition-colors">
                    info@lekb.club
                  </a>
                  <a href="mailto:info@lekb.pro" className="block hover:text-primary-foreground transition-colors">
                    info@lekb.pro <span className="text-xs">(professionnels)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} <strong>Le.kB</strong> — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};
