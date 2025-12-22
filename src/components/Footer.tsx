import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-light tracking-wider">
              Le.kB
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Cabinet de kinésithérapie dédié à votre bien-être et à votre santé.
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
                <Link to="/club" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Club
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Informations légales
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
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">
                  123 Avenue de la Santé<br />
                  75014 Paris
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/70" />
                <a href="tel:+33123456789" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/70" />
                <a href="mailto:contact@lekb.fr" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  contact@lekb.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Le.kB — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};
