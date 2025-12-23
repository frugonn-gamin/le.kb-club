import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import logo from "@/assets/logo.jpg";

const navItemsLeft = [
  { label: "Le lieu", href: "/lieu" },
  { label: "Patients", href: "/patients" },
];

const navItemsRight = [
  { label: "Club", href: "/club" },
  { label: "Contact", href: "/contact" },
];

const allNavItems = [...navItemsLeft, ...navItemsRight];

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
          {/* Desktop Navigation - Balanced layout */}
          <ul className="hidden lg:flex items-center">
            {/* Left side */}
            <li className="flex items-center gap-12">
              {navItemsLeft.map((item) => (
                <NavLink 
                  key={item.href} 
                  to={item.href} 
                  className="nav-link text-foreground/70 hover:text-foreground transition-all duration-300"
                  activeClassName="text-foreground after:w-full"
                >
                  {item.label}
                </NavLink>
              ))}
            </li>
            
            {/* Logo - Center with equal spacing */}
            <li className="mx-16">
              <Link
                to="/"
                className="transition-opacity hover:opacity-70"
              >
                <img src={logo} alt="Le.kB" className="h-10 lg:h-12 w-auto" />
              </Link>
            </li>
            
            {/* Right side */}
            <li className="flex items-center gap-12">
              {navItemsRight.map((item) => (
                <NavLink 
                  key={item.href} 
                  to={item.href} 
                  className="nav-link text-foreground/70 hover:text-foreground transition-all duration-300"
                  activeClassName="text-foreground after:w-full"
                >
                  {item.label}
                </NavLink>
              ))}
            </li>
          </ul>

          {/* Mobile: Logo left, menu right */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link
              to="/"
              className="transition-opacity hover:opacity-70"
            >
              <img src={logo} alt="Le.kB" className="h-8 w-auto" />
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
          <ul className="py-6 space-y-6 border-t border-border/50 text-center">
            {allNavItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link inline-block text-foreground/80 hover:text-foreground transition-colors"
                  activeClassName="text-foreground after:w-full"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};