import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(Ayurvedic_herbs_hero_image_e08becb2.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
          Global Standards. <br />Indian Integrity.
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-body" data-testid="text-hero-subtitle">
          Certified exports of Ayurvedic herbs, botanical extracts, and natural ingredients —
          delivered from India to trusted partners across the world.
        </p>

        <p className="text-base md:text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-body hidden lg:block" data-testid="text-hero-description">
          Unity Commerce bridges India's rich agricultural roots with modern global trade. We specialise in
          sourcing, processing, and exporting high-quality Ayurvedic herbs and natural commodities to
          certified importers across North America, Europe, and the Middle East.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="default"
            className="text-lg px-8 py-6 h-auto min-h-0"
            onClick={() => scrollToSection("#products")}
            data-testid="button-hero-explore"
          >
            Explore Our Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 h-auto min-h-0 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            onClick={() => scrollToSection("#contact")}
            data-testid="button-hero-partner"
          >
            Partner With Us
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
