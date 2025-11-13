import { Globe, Shield, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const highlights = [
  {
    icon: Globe,
    title: "Established Export Network",
    description: "Active exports to Canada, France, Germany, Italy, UAE, Russia, and the Netherlands.",
  },
  {
    icon: Shield,
    title: "Certified Processes",
    description: "Compliant with APEDA, FSSAI, and IEC regulations.",
  },
  {
    icon: FileCheck,
    title: "End-to-End Transparency",
    description: "From sourcing and testing to documentation and shipment.",
  },
];

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body" data-testid="text-about-description">
            Unity Commerce is a registered Indian export house dedicated to transparent, compliant, and 
            quality-driven international trade. We connect verified Indian producers with global buyers seeking 
            reliable access to Ayurvedic herbs, botanical extracts, and natural raw materials — ensuring every 
            shipment meets international export and certification standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className={`p-8 text-center hover-elevate transition-all duration-1000 ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`card-highlight-${index}`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4" data-testid={`text-highlight-title-${index}`}>
                  {highlight.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-body" data-testid={`text-highlight-description-${index}`}>
                  {highlight.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
