import { Package, BadgeCheck, Target, Ship, Heart } from "lucide-react";
import { Card } from "./components/ui/card";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

const reasons = [
  {
    icon: Package,
    title: "End-to-End Export Management",
    description: "From procurement to final shipping, we manage every step under one transparent process.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Sourcing Only",
    description: "We work exclusively with verified farms and registered Indian suppliers.",
  },
  {
    icon: Target,
    title: "Consistent Quality Control",
    description: "Multi-stage inspection ensures that each product batch meets export-grade quality.",
  },
  {
    icon: Ship,
    title: "Global Logistics Expertise",
    description: "Experienced in air, sea, and multimodal shipping to seven international regions.",
  },
  {
    icon: Heart,
    title: "Integrity at Core",
    description: "Every deal is backed by documented processes, clear pricing, and mutual trust.",
  },
];

export function WhyPartner() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="why" className="py-20 md:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-why-title">
            Why Businesses Choose Unity Commerce
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover-elevate transition-all duration-1000 ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
                data-testid={`card-reason-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground" data-testid={`text-reason-title-${index}`}>
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed font-body" data-testid={`text-reason-description-${index}`}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
