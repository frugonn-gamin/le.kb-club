import { Variants } from "framer-motion";

// Shared animation variants for consistent scroll animations across the site
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export const lineGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1 }
};

export const lineGrowX: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 }
};

// Stagger container for children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Default transition settings
export const defaultTransition = {
  duration: 0.7,
  ease: "easeOut" as const
};

// Default viewport settings
export const defaultViewport = {
  once: true,
  margin: "-50px" as const
};
