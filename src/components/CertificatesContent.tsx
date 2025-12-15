import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
    Award,
    ShieldCheck,
    FileCheck,
    ClipboardCheck,
    Leaf,
    CheckCircle2,
    ZoomIn,
    X,
} from "lucide-react";

interface Certification {
    id: number;
    title: string;
    authority: string;
    icon: typeof Award;
    description: string;
    ensures: string[];
    note?: string;
    imagePlaceholder: string;
}

const certifications: Certification[] = [
    {
        id: 1,
        title: "APEDA Registration",
        authority: "Agricultural & Processed Food Products Export Development Authority",
        icon: Leaf,
        description:
            "Unity Commerce is registered under APEDA, the statutory authority responsible for regulating and promoting the export of agricultural and processed food products from India.",
        ensures: [
            "Is recognised as a legitimate exporter of plant-based raw materials",
            "Can participate in export activities related to agricultural commodities",
            "Operates within guidelines specified by the Ministry of Commerce & Industry",
        ],
        note: "This registration is essential for exporting products such as dried herbs, plant powders, roots, seeds, and similar natural materials.",
        imagePlaceholder: "APEDA Certificate",
    },
    {
        id: 2,
        title: "FSSAI Compliance",
        authority: "Food Safety and Standards Authority of India",
        icon: ShieldCheck,
        description:
            "Unity Commerce complies with FSSAI requirements for products that fall under food-grade or consumable raw material categories.",
        ensures: [
            "Materials supplied for ingestion-based manufacturing meet basic Indian food safety parameters",
            "Products are sourced, handled, and packed according to recognised safety standards",
            "Buyers receive materials aligned with India's regulatory framework for edible plant-based ingredients",
        ],
        note: "FSSAI compliance applies to items such as herbal powders, dried leaves, roots intended for tea blends, nutraceutical inputs, and similar raw materials.",
        imagePlaceholder: "FSSAI Certificate",
    },
    {
        id: 3,
        title: "IEC License (Import Export Code)",
        authority: "Directorate General of Foreign Trade (DGFT)",
        icon: FileCheck,
        description:
            "Unity Commerce holds a valid IEC (Import Export Code), which is mandatory for conducting export and import activities in India.",
        ensures: [
            "All export transactions are legally recorded with Indian customs",
            "Shipments can be processed through ports, airports, and ICD facilities",
            "Buyers receive consignments supported by proper statutory documentation",
        ],
        note: "Without an IEC, international trade is not legally permitted. Our IEC registration confirms that every transaction complies with India's foreign trade regulations.",
        imagePlaceholder: "IEC Certificate",
    },
    {
        id: 4,
        title: "ISO Quality Standards",
        authority: "Process Structure for Consistency",
        icon: ClipboardCheck,
        description:
            "Unity Commerce works with processing facilities that follow ISO-aligned quality management practices, particularly for cleaning, drying, grading, and packing operations.",
        ensures: [
            "Each batch is handled according to defined procedures",
            "Hygienic processing conditions are consistently maintained",
            "Clear specifications are followed for moisture control, grading, and packaging",
        ],
        note: "This structured approach supports supply consistency for global buyers who rely on repeatable quality standards.",
        imagePlaceholder: "ISO Certificate",
    },
];

// Image Modal Component
function ImageModal({
    isOpen,
    onClose,
    imageSrc,
    title,
}: {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string | null;
    title: string;
}) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl max-h-[90vh] w-full mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>
                <div className="bg-background rounded-lg overflow-hidden shadow-2xl">
                    <div className="p-4 border-b">
                        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                    </div>
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-auto max-h-[70vh] object-contain"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-96 bg-muted">
                            <div className="text-center text-muted-foreground">
                                <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium">Certificate Image Coming Soon</p>
                                <p className="text-sm mt-2">Upload your certificate image here</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Certificate Card Component
function CertificationCard({
    certification,
    index,
    onImageClick,
}: {
    certification: Certification;
    index: number;
    onImageClick: (cert: Certification) => void;
}) {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const Icon = certification.icon;

    return (
        <Card
            ref={ref}
            className={`overflow-hidden transition-all duration-700 hover:shadow-xl ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Certificate Image Placeholder */}
                <div
                    className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 flex items-center justify-center min-h-[200px] lg:min-h-[300px] cursor-pointer group"
                    onClick={() => onImageClick(certification)}
                >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-white/90 dark:bg-black/90 rounded-full p-3 shadow-lg">
                                <ZoomIn className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                            <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Click to view certificate
                        </p>
                    </div>
                </div>

                {/* Certificate Details */}
                <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                {certification.title}
                            </h3>
                            <p className="text-sm text-primary/80 font-medium">
                                {certification.authority}
                            </p>
                        </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {certification.description}
                    </p>

                    <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">
                            This {certification.id === 2 ? "compliance" : "registration"} ensures that Unity Commerce:
                        </p>
                        <div className="space-y-2">
                            {certification.ensures.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {certification.note && (
                        <div className="p-3 bg-muted/30 rounded-lg">
                            <p className="text-sm text-muted-foreground italic">{certification.note}</p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}

export function CertificatesContent() {
    const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    const handleImageClick = (cert: Certification) => {
        setSelectedCert(cert);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedCert(null);
    };

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
                            Our Certifications
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Compliance That Supports
                        <span className="block text-primary">Buyer Confidence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
                        Unity Commerce operates within the regulatory framework required for exporting
                        Ayurvedic herbs, botanical ingredients, and natural raw materials from India.
                        Each certification represents a governing authority or statutory requirement
                        applicable to the products we supply or the export processes we follow.
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">
                            Every shipment is{" "}
                            <span className="text-primary font-semibold">
                                legally valid, accurately documented, and compliant
                            </span>
                        </span>
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="space-y-8 mb-16">
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={cert.id}
                            certification={cert}
                            index={index}
                            onImageClick={handleImageClick}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div
                    className={`text-center transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Need More Information?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Contact us for detailed compliance documentation, certificate copies, or
                            specific regulatory information for your destination country.
                        </p>
                        <Button
                            size="lg"
                            className="text-lg px-8 py-2 h-auto min-h-0"
                            onClick={() => (window.location.href = "/enquiry")}
                        >
                            Enquire
                        </Button>
                    </Card>
                </div>
            </div>

            {/* Image Modal */}
            <ImageModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                imageSrc={null}
                title={selectedCert?.imagePlaceholder || "Certificate"}
            />
        </section>
    );
}
