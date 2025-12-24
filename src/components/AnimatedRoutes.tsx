import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";
import Index from "@/pages/Index";
import LeLieu from "@/pages/LeLieu";
import Patients from "@/pages/Patients";
import Professionnels from "@/pages/Professionnels";
import Club from "@/pages/Club";
import Contact from "@/pages/Contact";
import MentionsLegales from "@/pages/MentionsLegales";
import Confidentialite from "@/pages/Confidentialite";
import CGV from "@/pages/CGV";
import NotFound from "@/pages/NotFound";
import OgImageGenerator from "@/pages/OgImageGenerator";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/lieu" element={<PageTransition><LeLieu /></PageTransition>} />
        <Route path="/patients" element={<PageTransition><Patients /></PageTransition>} />
        <Route path="/professionnels" element={<PageTransition><Professionnels /></PageTransition>} />
        <Route path="/club" element={<PageTransition><Club /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/mentions-legales" element={<PageTransition><MentionsLegales /></PageTransition>} />
        <Route path="/confidentialite" element={<PageTransition><Confidentialite /></PageTransition>} />
        <Route path="/cgv" element={<PageTransition><CGV /></PageTransition>} />
        <Route path="/og-generator" element={<OgImageGenerator />} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};
