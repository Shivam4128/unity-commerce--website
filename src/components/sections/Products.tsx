import { Sprout, Wheat, Droplets, Flower2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const products = [
  {
    icon: Sprout,
    title: "Raw Ayurvedic Herbs",
    description: "Whole dried herbs directly sourced from certified Indian farms.",
    examples: "Examples: Ashwagandha, Shatavari, Giloy, Tulsi.",
  },
  {
    icon: Wheat,
    title: "Herbal Powders",
    description: "Finely milled powders suitable for nutraceuticals, capsules, and formulations.",
    examples: "Processed under hygienic and moisture-controlled conditions.",
  },
  {
    icon: Droplets,
    title: "Extracts & Concentrates",
    description: "High-potency botanical extracts standardised for purity and consistency.",
    examples: "Ideal for health supplements and pharmaceutical use.",
  },
  {
    icon: Flower2,
    title: "Essential Oils & Natural Derivatives",
    description: "Steam-distilled and cold-pressed oils for aromatherapy, cosmetics, and wellness products.",
    examples: "Quality-checked for composition and export safety.",
  },
];

export function Products() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-products-title">
            Our Core Export Categories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body" data-testid="text-products-description">
            We export a curated selection of herbal and natural products, each processed and packaged to 
            international specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className={`p-6 md:p-8 flex flex-col items-center text-center hover-elevate transition-all duration-1000 ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-product-${index}`}
              >
                <div className="w-20 h-20 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4" data-testid={`text-product-title-${index}`}>
                  {product.title}
                </h3>
                <p className="text-base text-muted-foreground mb-3 leading-relaxed font-body" data-testid={`text-product-description-${index}`}>
                  {product.description}
                </p>
                <p className="text-sm text-muted-foreground/80 italic font-body" data-testid={`text-product-examples-${index}`}>
                  {product.examples}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="default"
            className="text-lg px-8 py-6 h-auto min-h-0"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-view-catalogue"
          >
            View Complete Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
}
