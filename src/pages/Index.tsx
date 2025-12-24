import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Manifeste } from "@/components/Manifeste";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Le.kB — Club Santé & Bien-être à Château-Thierry"
        description="Le.kB, club santé et bien-être à Château-Thierry (02). Kinésithérapie, ostéopathie, naturopathie, réflexologie. Un lieu dédié au corps, à l'esprit et à l'équilibre."
        url="https://lekb.club/"
      />
      <Navigation variant="transparent" />
      <Hero />
      <Manifeste />
      <Footer />
    </main>
  );
};

export default Index;