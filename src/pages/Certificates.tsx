import { Navigation } from "@/components/Navigation";
import { CertificatesContent } from "@/components/CertificatesContent";
import { Footer } from "@/components/sections/Footer";

export default function Certificates() {
    return (
        <div className="min-h-screen bg-background relative">
            <button
                onClick={() => (window.location.href = "/enquiry")}
                className="fixed right-0 z-20 top-[40%] bg-green-500 hover:pr-12 p-4 max-sm:p-3 hover:bg-green-600 rounded-l-lg transition-all duration-300 ease-out flex items-center justify-center text-white font-semibold max-sm:text-[12px]"
            >
                Enquire now
            </button>
            <Navigation />
            <main className="pt-20">
                <CertificatesContent />
            </main>
            <Footer />
        </div>
    );
}
