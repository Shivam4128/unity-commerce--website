import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
    Phone,
    Mail,
    Globe,
    MapPin,
    Clock,
    MessageCircle,
    FileText,
    Package,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        title: "Address",
        content: "Shree Ram Bazar, Shimla Bahadur, Rudrapur (U.S. Nagar), Uttarakhand – 263153, India",
        color: "primary",
    },
    {
        icon: Phone,
        title: "Phone / WhatsApp",
        content: "+91 74249 04388",
        href: "https://wa.me/917424904388",
        color: "green",
    },
    {
        icon: Mail,
        title: "Email",
        content: "unitycommerceindia@gmail.com",
        href: "mailto:unitycommerceindia@gmail.com",
        color: "blue",
    },
    {
        icon: Globe,
        title: "Website",
        content: "www.unitycommerce.in",
        href: "http://www.unitycommerce.in",
        color: "purple",
    },
];

const enquiryFeatures = [
    {
        icon: Clock,
        title: "24 Hour Response",
        description: "Responses are provided within 24 hours with relevant specifications, pricing, and shipping options.",
    },
    {
        icon: FileText,
        title: "Complete Documentation",
        description: "Country-specific paperwork—phytosanitary certificates, fumigation reports, or commercial documentation formats—can be requested during initial enquiry.",
    },
    {
        icon: Package,
        title: "Consistent Supply",
        description: "For ongoing arrangements, we maintain internal references for past consignments, ensuring consistent batch characteristics and preferred packaging.",
    },
    {
        icon: MessageCircle,
        title: "Direct Communication",
        description: "All queries related to logistics, compliance formats, and product suitability are addressed through direct communication.",
    },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
    primary: { bg: "bg-primary/20", text: "text-primary" },
    green: { bg: "bg-green-500/20", text: "text-green-600" },
    blue: { bg: "bg-blue-500/20", text: "text-blue-600" },
    purple: { bg: "bg-purple-500/20", text: "text-purple-600" },
};

export function ContactContent() {
    const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: contactRef, isIntersecting: contactVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: featuresRef, isIntersecting: featuresVisible } = useIntersectionObserver({
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
                        <MessageCircle className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Contact Us
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Get in Touch with
                        <span className="block text-primary">Unity Commerce</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Unity Commerce is available for all enquiries related to bulk orders, export documentation, and product specifications. Buyers can connect with us directly through the details below.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div
                    ref={contactRef}
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {contactDetails.map((detail, index) => {
                        const colors = colorClasses[detail.color];
                        const Icon = detail.icon;
                        return (
                            <Card
                                key={index}
                                className="p-6 hover:shadow-lg transition-all duration-300 group"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-6 h-6 ${colors.text}`} />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">{detail.title}</h3>
                                {detail.href ? (
                                    <a
                                        href={detail.href}
                                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className={`${colors.text} hover:underline transition-colors text-sm leading-relaxed`}
                                    >
                                        {detail.content}
                                    </a>
                                ) : (
                                    <p className="text-muted-foreground text-sm leading-relaxed">{detail.content}</p>
                                )}
                            </Card>
                        );
                    })}
                </div>

                {/* Enquiry Features */}
                <div
                    ref={featuresRef}
                    className={`mb-16 transition-all duration-1000 ${featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            What to Expect When You Reach Out
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our export coordination team records each enquiry and links it to the requested product type, destination country, and required specifications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {enquiryFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Card
                                    key={index}
                                    className="p-6 hover:shadow-lg transition-all duration-300"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Additional Info */}
                <Card className="p-8 mb-16 bg-gradient-to-br from-muted/50 via-background to-muted/50">
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Continuity in Multi-Order Relationships</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                For ongoing supply arrangements, Unity Commerce maintains an internal reference for past consignments, allowing the team to provide consistent batch characteristics, preferred packaging weights, and shipping modes used previously by the same buyer. This helps maintain continuity in multi-order relationships and reduces clarification cycles.
                            </p>
                        </div>
                    </div>
                </Card>

                {/* CTA Section */}
                <div className="text-center">
                    <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-background to-primary/5 border-primary/20">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Ready to Submit Your Enquiry?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Use our enquiry form for quotation requests and detailed product requirements. Our team will respond with specifications, pricing, and shipping options within 24 hours.
                        </p>
                        <Button
                            size="lg"
                            className="text-lg px-8 py-6 h-auto min-h-0 gap-2"
                            onClick={() => (window.location.href = "/enquiry")}
                        >
                            Submit Enquiry
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
}
