import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Le lieu", href: "/lieu" },
  { label: "Patients", href: "/patients" },
  { label: "Professionnels", href: "/professionnels" },
  { label: "Club", href: "/club" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

interface NavigationProps {
  variant?: "transparent" | "solid";
}

export const Navigation = ({ variant = "transparent" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        variant === "transparent"
          ? "bg-transparent"
          : "bg-background/80 backdrop-blur-md border-b border-border"
      }`}
    >
      <nav className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-center h-20 lg:h-28">
          {/* Desktop Navigation - Centered */}
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.slice(0, 3).map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="nav-link text-foreground/70 hover:text-foreground transition-all duration-300">
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Logo - Center */}
            <li className="mx-8">
              <Link
                to="/"
                className="font-serif text-xl lg:text-2xl font-normal tracking-[-0.01em] transition-opacity hover:opacity-70"
              >
                Le<span className="text-muted-foreground/50">.</span>kB
              </Link>
            </li>
            
            {navItems.slice(3).map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="nav-link text-foreground/70 hover:text-foreground transition-all duration-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile: Logo left, menu right */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link
              to="/"
              className="font-serif text-xl font-normal tracking-[-0.01em] transition-opacity hover:opacity-70"
            >
              Le<span className="text-muted-foreground/50">.</span>kB
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-6 space-y-6 border-t border-border/50">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link block text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};