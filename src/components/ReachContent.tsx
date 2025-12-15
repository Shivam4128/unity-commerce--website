import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
    Globe,
    MapPin,
    Plane,
    Ship,
    Package,
    FileCheck,
    CheckCircle2,
    RefreshCw,
    TrendingUp,
    ArrowRight,
    Image as ImageIcon,
} from "lucide-react";

const countries = [
    { name: "Canada", flag: "🇨🇦" },
    { name: "France", flag: "🇫🇷" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Russia", flag: "🇷🇺" },
    { name: "The Netherlands", flag: "🇳🇱" },
];

const complianceItems = [
    { text: "Packaging specifications", icon: Package },
    { text: "Moisture-control requirements", icon: CheckCircle2 },
    { text: "Legally accepted documentation for customs clearance", icon: FileCheck },
];

const operationalStandards = [
    "Market demand",
    "Regulatory feasibility",
    "Long-term buyer relationships",
];

const workflowItems = [
    "Product suitability",
    "Buyer preferences",
    "Expected transit duration",
    "Required certifications",
];

const marketExpansionSteps = [
    "Pilot shipments are aligned with destination-specific documentation and customs expectations",
    "Import pathways are validated for stability",
    "Approved routes are integrated into Unity Commerce's regular export map",
];

export function ReachContent() {
    const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: countriesRef, isIntersecting: countriesVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: complianceRef, isIntersecting: complianceVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: operationalRef, isIntersecting: operationalVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: repeatRef, isIntersecting: repeatVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: expansionRef, isIntersecting: expansionVisible } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <Globe className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Our Global Reach
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Connecting India's Finest
                        <span className="block text-primary">To The World</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Unity Commerce supplies Ayurvedic herbs, botanical ingredients, and natural raw
                        materials to buyers across multiple international markets. Our export routes are
                        structured to meet region-specific import standards, packaging norms, and
                        documentation requirements.
                    </p>
                </div>

                {/* Image Placeholder Section */}
                <div
                    className={`mb-16 transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Image Placeholder 1 - World Map */}
                        <Card className="overflow-hidden">
                            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 flex items-center justify-center min-h-[280px]">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                                        <Globe className="w-10 h-10 text-primary" />
                                    </div>
                                    <p className="text-sm font-medium text-muted-foreground mb-2">
                                        World Export Map
                                    </p>
                                    <p className="text-xs text-muted-foreground/70">
                                        Add your global reach visualization here
                                    </p>
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <div className="flex items-center gap-1 px-2 py-1 bg-background/80 rounded text-xs text-muted-foreground">
                                        <ImageIcon className="w-3 h-3" />
                                        <span>Image placeholder</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Image Placeholder 2 - Logistics */}
                        <Card className="overflow-hidden">
                            <div className="relative bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-background p-8 flex items-center justify-center min-h-[280px]">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                        <Ship className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <p className="text-sm font-medium text-muted-foreground mb-2">
                                        Logistics Network
                                    </p>
                                    <p className="text-xs text-muted-foreground/70">
                                        Add your shipping/logistics image here
                                    </p>
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <div className="flex items-center gap-1 px-2 py-1 bg-background/80 rounded text-xs text-muted-foreground">
                                        <ImageIcon className="w-3 h-3" />
                                        <span>Image placeholder</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Global Export Destinations */}
                <div
                    ref={countriesRef}
                    className={`mb-16 transition-all duration-1000 ${countriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Global Export Destinations
                            </h2>
                        </div>
                        <p className="text-muted-foreground mb-8">
                            We currently ship to global buyers across regions such as:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                            {countries.map((country, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-2xl">{country.flag}</span>
                                    <span className="font-medium text-foreground">{country.name}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                <span className="text-2xl">🌍</span>
                                <span className="text-sm text-muted-foreground">+ Several other countries</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Compliance & Logistics */}
                <div
                    ref={complianceRef}
                    className={`mb-16 transition-all duration-1000 ${complianceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10 bg-gradient-to-br from-blue-500/5 via-background to-blue-500/5 border-blue-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                <Plane className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Compliance & Logistics
                            </h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Every shipment follows country-specific compliance formats, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {complianceItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 bg-background rounded-lg border"
                                    >
                                        <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                        <span className="text-foreground">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="p-4 bg-blue-500/10 rounded-lg flex items-start gap-3">
                            <Ship className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <p className="text-foreground">
                                Our logistics network is coordinated through <strong>air and sea freight partners</strong> to ensure stable transit timelines for bulk orders.
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Operational Standards */}
                <div
                    ref={operationalRef}
                    className={`mb-16 transition-all duration-1000 ${operationalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Operational Standards</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Unity Commerce continues to expand its reach based on:
                            </p>
                            <div className="space-y-3 mb-4">
                                {operationalStandards.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span className="text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground italic p-3 bg-muted/30 rounded-lg">
                                All export destinations are supported with consistent quality standards and verified sourcing.
                            </p>
                        </Card>

                        <Card className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <FileCheck className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Documented Workflow</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Each destination operates under a documented workflow that defines:
                            </p>
                            <div className="space-y-3">
                                {workflowItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span className="text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Repeat Orders */}
                <div
                    ref={repeatRef}
                    className={`mb-16 transition-all duration-1000 ${repeatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10 bg-gradient-to-br from-green-500/5 via-background to-green-500/5 border-green-500/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                <RefreshCw className="w-6 h-6 text-green-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Repeat Orders & Consistency
                            </h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Repeat orders are supported by internal references to previously shipped batches, ensuring consistency across consignments.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-background rounded-lg border flex items-center gap-3">
                                <Package className="w-5 h-5 text-green-600" />
                                <span className="text-foreground">Predefined packing formats</span>
                            </div>
                            <div className="p-4 bg-background rounded-lg border flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <span className="text-foreground">Fixed dispatch timelines</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4 italic">
                            These are aligned with buyer's internal processing or manufacturing cycles.
                        </p>
                    </Card>
                </div>

                {/* Market Expansion */}
                <div
                    ref={expansionRef}
                    className={`mb-16 transition-all duration-1000 ${expansionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Market Expansion Approach
                            </h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            As new markets are added:
                        </p>
                        <div className="space-y-4 mb-6">
                            {marketExpansionSteps.map((step, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                                    </div>
                                    <span className="text-foreground">{step}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-primary/10 rounded-lg">
                            <p className="text-foreground font-medium">
                                This incremental approach enables expansion while maintaining <span className="text-primary font-semibold">compliance, quality, and reliability</span>.
                            </p>
                        </div>
                    </Card>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Contact us to explore export opportunities for your region or discuss your specific requirements.
                        </p>
                        <Button
                            size="lg"
                            className="text-lg px-8 py-2 h-auto min-h-0 gap-2"
                            onClick={() => (window.location.href = "/enquiry")}
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
}
