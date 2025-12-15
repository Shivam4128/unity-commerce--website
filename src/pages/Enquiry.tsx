import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Enquiry() {
  return (
    <div className="min-h-screen bg-background">
      <div></div>
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
