import { Award, ShieldCheck, FileText, CheckCircle } from "lucide-react";
import { Card } from "./components/ui/card";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

const certifications = [
  {
    icon: Award,
    name: "APEDA",
    description: "Agricultural & Processed Food Products Export Development Authority",
  },
  {
    icon: ShieldCheck,
    name: "FSSAI",
    description: "Food Safety and Standards Authority of India",
  },
  {
    icon: FileText,
    name: "IEC License",
    description: "Directorate General of Foreign Trade",
  },
  {
    icon: CheckCircle,
    name: "ISO Quality Standards",
    description: "Verified process consistency",
  },
];

export function Certifications() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="certifications" className="py-20 md:py-32 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-certifications-title">
            Compliance That Builds Confidence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body" data-testid="text-certifications-description">
            Every export operation under Unity Commerce follows certified trade protocols. We are registered
            and compliant with all major Indian export authorities, ensuring every buyer receives authentic,
            legally verified products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className={`p-6 flex flex-col items-center text-center hover-elevate transition-all duration-1000 ${
                  isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-certification-${index}`}
              >
                <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-certification-name-${index}`}>
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body" data-testid={`text-certification-description-${index}`}>
                  {cert.description}
                </p>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground italic" data-testid="text-certifications-tagline">
          Our documentation is as transparent as our trade.
        </p>
      </div>
    </section>
  );
}
