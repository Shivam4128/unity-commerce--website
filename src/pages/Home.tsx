import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Products } from "./components/sections/Products";
import { Certifications } from "./components/sections/Certifications";
import { GeographicReach } from "./components/sections/GeographicReach";
import { WhyPartner } from "./components/sections/WhyPartner";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Certifications />
        <GeographicReach />
        <WhyPartner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
