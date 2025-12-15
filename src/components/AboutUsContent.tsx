import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
    Building2,
    Leaf,
    Sparkles,
    Package,
    FileCheck,
    Truck,
    Globe,
    ShoppingBag,
    Users,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const unityCommerceHandles = [
    { text: "Sourcing", icon: Leaf },
    { text: "Quality control", icon: CheckCircle2 },
    { text: "Bulk supply", icon: Package },
    { text: "Export documentation", icon: FileCheck },
    { text: "International shipments", icon: Truck },
];

const ashwayuHandles = [
    { text: "Consumer packaging", icon: ShoppingBag },
    { text: "Retail-ready product development", icon: Package },
    { text: "Domestic and global brand identity", icon: Globe },
    { text: "D2C product availability", icon: Users },
];

export function AboutUsContent() {
    const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: ashwayuRef, isIntersecting: ashwayuVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: herbalRef, isIntersecting: herbalVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: naturalsRef, isIntersecting: naturalsVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: togetherRef, isIntersecting: togetherVisible } = useIntersectionObserver({
        threshold: 0.2,
    });

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
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            About Us
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        India's Trusted Export House for
                        <span className="block text-primary">Ayurvedic Herbs & Natural Raw Materials</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
                        Unity Commerce is an Indian export house focused on supplying Ayurvedic herbs,
                        botanical ingredients, and natural raw materials to international buyers who require
                        consistency, clarity, and compliance. The company works with verified producers and
                        processing units across India, ensuring that each batch of material is sourced
                        responsibly, cleaned, graded, and packed in alignment with international quality
                        expectations.
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="text-lg font-semibold text-foreground">
                            Our operations are built on one principle — <span className="text-primary">Trade Meets Trust</span>
                        </span>
                    </div>
                </div>

                {/* Core Values Section */}
                <div
                    className={`mb-20 transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10 bg-gradient-to-br from-muted/50 via-background to-muted/50">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            We focus on supplying the exact raw materials that buyers request, without altering,
                            modifying, or overstating their properties. Every product is supplied in the form
                            used by the industry—whether whole roots, powders, dried leaves, extracts, or cut
                            pieces—based strictly on the buyer's specifications and intended application.
                        </p>
                        <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
                            <p className="text-foreground">
                                Unity Commerce does <strong className="text-primary">not</strong> deal in finished
                                medicines or therapeutic products. We specialize exclusively in raw herbs and
                                natural ingredients, prepared in forms suitable for further processing,
                                formulation, and packaging by the buyer. By maintaining clear standards for drying,
                                grading, and packing, we ensure materials are suitable for powders, capsules,
                                tablets, decoctions, extracts, cosmetics, and functional blends, depending on
                                manufacturing requirements.
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Ashwayu Introduction */}
                <div
                    ref={ashwayuRef}
                    className={`mb-16 transition-all duration-1000 ${ashwayuVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Introducing <span className="text-primary">Ashwayu</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            The Consumer Brand of Unity Commerce
                        </p>
                    </div>

                    <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Leaf className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    Premium Ayurvedic Wellness, Backed by Export-Grade Quality
                                </h3>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Ashwayu is the consumer-facing Ayurvedic brand launched under Unity Commerce. While
                            Unity Commerce focuses on supplying raw herbs and bulk botanical ingredients to
                            international buyers, Ashwayu brings the same export-grade quality directly to
                            consumers through packaged powders, herbal blends, and natural wellness products.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Ashwayu products include single-herb powders, plant-based ingredients, and natural
                            raw materials intended for home consumption, personal use, and general-purpose
                            applications such as herbal drinks, paste preparations, cosmetic mixtures, and
                            dietary blends. Each product is sourced through the same network used for exports,
                            ensuring consistency in raw material quality.
                        </p>
                        <p className="text-foreground font-medium">
                            To maintain clarity of identity, Ashwayu operates through two structured product
                            lines:
                        </p>
                    </Card>
                </div>

                {/* Product Lines Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {/* Ashwayu Herbal */}
                    <Card
                        ref={herbalRef}
                        className={`p-8 transition-all duration-1000 ${herbalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Ashwayu Herbal</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            This category includes traditional Ayurvedic single-herb powders such as
                            Ashwagandha, Neem, Moringa, Giloy, Shatavari, Triphala ingredients, and similar raw
                            herbal materials. These products are intended for mixing, decoction preparation,
                            blending, and other household or formulation-related uses.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {["Ashwagandha", "Neem", "Moringa", "Giloy", "Shatavari", "Triphala"].map((herb) => (
                                <span
                                    key={herb}
                                    className="px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-sm font-medium"
                                >
                                    {herb}
                                </span>
                            ))}
                        </div>
                    </Card>

                    {/* Ashwayu Naturals */}
                    <Card
                        ref={naturalsRef}
                        className={`p-8 transition-all duration-1000 delay-100 ${naturalsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Ashwayu Naturals</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            This line includes natural, plant-based ingredients commonly used for cosmetic,
                            personal-care, and functional household purposes, such as aloe-based powders, herbal
                            flakes, and other plant-derived materials. These products are positioned for general
                            natural-use applications without making medicinal claims.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {["Aloe Powders", "Herbal Flakes", "Plant Extracts", "Natural Care"].map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* How They Work Together */}
                <div
                    ref={togetherRef}
                    className={`transition-all duration-1000 ${togetherVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            How Unity Commerce and Ashwayu Work Together
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Unity Commerce Handles */}
                        <Card className="p-8 border-primary/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Unity Commerce Handles</h3>
                            </div>
                            <div className="space-y-3">
                                {unityCommerceHandles.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-foreground">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </Card>

                        {/* Ashwayu Handles */}
                        <Card className="p-8 border-green-500/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <Leaf className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Ashwayu Handles</h3>
                            </div>
                            <div className="space-y-3">
                                {ashwayuHandles.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <Icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                                            <span className="text-foreground">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </Card>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            className="text-lg px-8 py-6 h-auto min-h-0 gap-2"
                            onClick={() => (window.location.href = "/enquiry")}
                        >
                            Get in Touch
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
