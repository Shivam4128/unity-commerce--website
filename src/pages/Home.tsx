import { Navigation } from "@/components/Navigation";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Footer } from "@/components/sections/Footer";
import { GeographicReach } from "@/components/sections/GeographicReach";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { WhyPartner } from "@/components/sections/WhyPartner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <div></div>
      <button onClick={() => window.location.href = '/enquiry'} className="fixed right-0 z-20 top-[40%] bg-green-500 hover:pr-12 p-4 max-sm:p-3 hover:bg-green-600 rounded-l-lg transition-all duration-300 ease-out flex items-center justify-center text-white font-semibold max-sm:text-[12px]">
        Enquire now
      </button>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Certifications />
        <GeographicReach />
        <WhyPartner />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
