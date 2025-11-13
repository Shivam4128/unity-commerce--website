import { MapPin, Globe2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const countries = [
  { name: "Canada", code: "CA" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "Italy", code: "IT" },
  { name: "UAE", code: "AE" },
  { name: "Russia", code: "RU" },
  { name: "Netherlands", code: "NL" },
];

export function GeographicReach() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="reach" className="py-20 md:py-32 bg-muted/30">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-reach-title">
            Where We Export
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body mb-8" data-testid="text-reach-intro">
            Our logistics network is structured to meet the import standards of multiple global regions. 
            We currently ship to:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {countries.map((country, index) => (
            <Card
              key={index}
              className={`p-6 flex flex-col items-center justify-center text-center hover-elevate transition-all duration-1000 ${
                isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              data-testid={`card-country-${index}`}
            >
              <div className="w-12 h-12 mb-3 rounded-full bg-primary/10 flex items-center justify-center" data-testid={`text-country-flag-${index}`}>
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <p className="text-base md:text-lg font-semibold text-foreground mb-1" data-testid={`text-country-name-${index}`}>
                {country.name}
              </p>
              <p className="text-xs text-muted-foreground font-mono">{country.code}</p>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-card-border rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-base md:text-lg text-foreground leading-relaxed font-body" data-testid="text-reach-description">
                Every region has a dedicated supply route, tailored packaging standards, and compliance 
                documentation — ensuring smooth customs clearance and consistent delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
