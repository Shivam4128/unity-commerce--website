import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
    Award,
    CheckCircle2,
    FileCheck,
    Globe,
    Package,
    Truck,
    ArrowRight,
    Shield,
    Leaf,
} from "lucide-react";

const whyUsReasons = [
    {
        title: "End-to-End Export Handling",
        icon: Package,
        color: "primary",
        description: "We manage the complete export workflow — sourcing, cleaning, grading, packing, documentation, and coordination with authorised logistics partners. Buyers receive a streamlined process handled under one accountable system.",
        details: "Beyond this operational chain, each stage is tracked internally so that specifications, weight accuracy, and packaging requirements are followed without deviation. This reduces back-and-forth during procurement and ensures that the final shipment reflects the exact agreement made at the time of order confirmation. All communication regarding timelines and dispatch readiness is shared before the shipment formally moves to the logistics stage."
    },
    {
        title: "Verified Sourcing Network",
        icon: Leaf,
        color: "green",
        description: "All materials are procured from registered farms and recognised processors. Each batch is selected for botanical authenticity, proper drying, and standardised grading to meet export usage requirements.",
        details: "This sourcing structure ensures that raw material origin, drying method, and lot consistency are known in advance, which is critical for buyers who work with regulated or process-sensitive applications. Farms and processors in the network operate with predictable harvest cycles, allowing us to state availability timelines more accurately. This stability helps international buyers plan their procurement schedules without facing sudden shortages or quality variations."
    },
    {
        title: "Quality Checks for Every Batch",
        icon: CheckCircle2,
        color: "blue",
        description: "Each product undergoes multi-stage checks for moisture levels, foreign matter, mesh consistency (for powders), and overall uniformity within natural variation. This ensures a consistent supply across repeated orders.",
        details: "These checks are performed before packing, not after, so corrective actions—such as re-sieving, re-drying, or re-sorting—can be taken in the same facility. Batch notes are maintained for internal reference, allowing us to compare repeat orders and ensure that the specifications align with what the buyer previously received. This disciplined evaluation reduces the risk of a mismatch in colour, texture, or particle size, which is essential for formulation-based buyers."
    },
    {
        title: "Logistics Adapted for Global Shipments",
        icon: Truck,
        color: "amber",
        description: "We coordinate air, sea, and multimodal freight to multiple regions, including Canada, Europe, and the Middle East. Freight mode, packing weight, and dispatch timing are planned based on product type and destination.",
        details: "Heat-sensitive or aroma-sensitive products are packed to reduce external exposure during transit, while bulk shipments are structured to optimise container space and minimise handling. Country-specific requirements—such as fumigation, palletisation, or label formatting—are followed so that the shipment can clear customs without delays. Each freight plan is supported by documentation timelines, allowing the buyer to sync onward distribution or storage in their region."
    },
    {
        title: "Documentation and Transparency",
        icon: FileCheck,
        color: "purple",
        description: "Every shipment is backed by clear paperwork, upfront pricing, batch details, and pre-dispatch confirmations. Communication is factual and traceable, reducing uncertainty for international buyers.",
        details: "All documents—including invoice, packing list, Certificate of Origin (when applicable), and any buyer-requested certifications—are shared before the shipment departs. This allows the buyer to verify details while the goods are still in the dispatch stage. Status updates are issued at key milestones, ensuring that the buyer is not dependent on assumptions during the shipping process. This approach supports predictable planning on the buyer’s side and fosters clarity in long-term partnerships."
    },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: "bg-primary/20", text: "text-primary", border: "border-primary/20" },
    green: { bg: "bg-green-500/20", text: "text-green-600", border: "border-green-500/20" },
    blue: { bg: "bg-blue-500/20", text: "text-blue-600", border: "border-blue-500/20" },
    amber: { bg: "bg-amber-500/20", text: "text-amber-600", border: "border-amber-500/20" },
    purple: { bg: "bg-purple-500/20", text: "text-purple-600", border: "border-purple-500/20" },
};

export function WhyUsContent() {
    const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
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
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Why Choose Us
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Why Businesses Choose
                        <span className="block text-primary">Unity Commerce</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Unity Commerce is built for international buyers who require clarity, consistency, and disciplined handling of Ayurvedic herbs and natural raw materials. Our processes are structured to minimise uncertainty, reduce operational friction, and ensure that every shipment meets the standards buyers expect from a long-term supply partner.
                    </p>
                </div>

                {/* Trust Indicators */}
                <div className={`mb-16 transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { icon: Globe, label: "Global Reach", value: "30+ Countries" },
                            { icon: Shield, label: "Quality Assured", value: "100% Verified" },
                            // { icon: Package, label: "Products", value: "500+ SKUs" },
                            { icon: CheckCircle2, label: "Client Satisfaction", value: "98%+" },
                        ].map((stat, index) => (
                            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Why Us Reasons */}
                <div className="space-y-8 mb-16">
                    {whyUsReasons.map((reason, index) => {
                        const colors = colorClasses[reason.color];
                        const Icon = reason.icon;
                        return (
                            <WhyUsCard
                                key={index}
                                index={index}
                                title={reason.title}
                                description={reason.description}
                                details={reason.details}
                                Icon={Icon}
                                colors={colors}
                            />
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-background to-primary/5 border-primary/20">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Ready to Partner with Unity Commerce?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Connect with our export coordination team for quotations, product specifications, and shipping details tailored to your requirements.
                        </p>
                        <Button
                            size="lg"
                            className="text-lg px-8 py-6 h-auto min-h-0 gap-2"
                            onClick={() => (window.location.href = "/enquiry")}
                        >
                            Get in Touch
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
}

interface WhyUsCardProps {
    index: number;
    title: string;
    description: string;
    details: string;
    Icon: React.ComponentType<{ className?: string }>;
    colors: { bg: string; text: string; border: string };
}

function WhyUsCard({ index, title, description, details, Icon, colors }: WhyUsCardProps) {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <Card
            ref={ref}
            className={`p-8 transition-all duration-700 ${colors.border} ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
                    <p className="text-foreground/80 leading-relaxed bg-muted/30 p-4 rounded-lg">{details}</p>
                </div>
            </div>
        </Card>
    );
}
