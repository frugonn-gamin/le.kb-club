import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Manifeste } from "@/components/Manifeste";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation variant="transparent" />
      <Hero />
      <Manifeste />
      <Footer />
    </main>
  );
};

export default Index;