import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Leaf, ChevronDown, ChevronUp, Sparkles, Package, CheckCircle2, Box } from "lucide-react";

interface ProductSpec {
    attribute: string;
    details: string;
}

interface Product {
    id: number;
    name: string;
    botanicalName?: string;
    composition?: string;
    description: string;
    typicalUses: string;
    specifications?: ProductSpec[];
}

const products: Product[] = [
    {
        id: 1,
        name: "Ashwagandha Root",
        botanicalName: "Withania somnifera (L.) Dunal",
        description:
            "Whole or cut dried roots used as raw material for powders, extracts, capsules, and traditional preparations. Roots are cleaned, shade-dried, and size-graded to maintain uniformity.",
        typicalUses: "Extraction, powder milling, herbal formulations, nutraceutical blends.",
        specifications: [
            { attribute: "Packaging Size", details: "25 kg bulk HDPE / PP woven bags (customisable 1–50 kg)" },
            { attribute: "Part Used", details: "Mature dried roots" },
            { attribute: "Form", details: "Whole roots / cut roots" },
            { attribute: "Processing Type", details: "Shade-dried, cleaned, size-graded" },
            { attribute: "Color", details: "Light beige to pale brown" },
            { attribute: "Is It Organic", details: "Available as conventional or certified organic" },
            { attribute: "Shelf Life", details: "2–3 years in cool, dry storage" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 2,
        name: "Ashwagandha Powder",
        botanicalName: "Withania somnifera (L.) Dunal",
        description:
            "Finely milled powder (60–100 mesh) produced from dried roots. Processed under controlled drying conditions.",
        typicalUses: "Capsules, tablets, instant mixes, wellness blends, functional foods.",
        specifications: [
            { attribute: "Packaging Size", details: "1 kg food-grade pouches, 25 kg bulk bags" },
            { attribute: "Part Used", details: "Roots (root-only, leaf-free)" },
            { attribute: "Form", details: "Fine powder (60–100 mesh)" },
            { attribute: "Color", details: "Light cream to yellowish-brown" },
            { attribute: "Is It Organic", details: "Available" },
            { attribute: "Shelf Life", details: "2 years (airtight, away from light)" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 3,
        name: "Shatavari Powder",
        botanicalName: "Asparagus racemosus Willd.",
        description:
            "Prepared from dried tuberous roots. Washed, shade-dried, and milled to a stable mesh.",
        typicalUses: "Granules, capsules, syrups, ghee-based formulations.",
        specifications: [
            { attribute: "Packaging Size", details: "25 kg root slices or powder bags" },
            { attribute: "Part Used", details: "Tuberous roots" },
            { attribute: "Form", details: "Sliced roots or powder" },
            { attribute: "Color", details: "Cream to pale brown" },
            { attribute: "Shelf Life", details: "2–3 years" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 4,
        name: "Giloy Powder",
        botanicalName: "Tinospora cordifolia (Willd.) Hook. f. & Thomson",
        description:
            "Obtained from dried stems. Stems are cut, cleaned, shade-dried, and pulverised.",
        typicalUses: "Powders, tablets, kadha blends, immunity formulations.",
        specifications: [
            { attribute: "Packaging Size", details: "25 kg powder bags" },
            { attribute: "Part Used", details: "Mature stems" },
            { attribute: "Form", details: "Coarse or fine powder" },
            { attribute: "Color", details: "Brownish-green" },
            { attribute: "Shelf Life", details: "2 years" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 5,
        name: "Amla Powder",
        botanicalName: "Phyllanthus emblica L.",
        description:
            "Prepared from deseeded, dried fruits milled into a stable powder.",
        typicalUses: "Triphala, hair oils, chyawanprash, functional food mixes.",
        specifications: [
            { attribute: "Packaging Size", details: "25–50 kg whole fruit bags; 25 kg powder bags" },
            { attribute: "Part Used", details: "Dried fruit" },
            { attribute: "Form", details: "Whole, deseeded pieces or powder" },
            { attribute: "Color", details: "Yellowish-brown" },
            { attribute: "Shelf Life", details: "2 years" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 6,
        name: "Triphala Powder",
        composition: "Amla, Haritaki, Bibhitaki",
        description:
            "A balanced blend of three classical Ayurvedic fruits.",
        typicalUses: "Powders, tablets, decoction mixes, traditional formulations.",
    },
    {
        id: 7,
        name: "Tulsi Powder",
        botanicalName: "Ocimum tenuiflorum",
        description:
            "Produced from shade-dried leaves and tender stems to retain chlorophyll and aroma.",
        typicalUses: "Tea blends, respiratory formulas, cosmetics, extracts.",
        specifications: [
            { attribute: "Packaging Size", details: "20–25 kg dried herb; 25 kg powder bags" },
            { attribute: "Part Used", details: "Aerial parts" },
            { attribute: "Form", details: "Cut-sifted herb or powder" },
            { attribute: "Color", details: "Green to olive green" },
            { attribute: "Shelf Life", details: "1–2 years" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 8,
        name: "Neem Powder",
        botanicalName: "Azadirachta indica A. Juss.",
        description:
            "Processed from shade-dried neem leaves. Packed in moisture-secure bags.",
        typicalUses: "Skin & hair products, soaps, personal care, internal blends.",
        specifications: [
            { attribute: "Packaging Size", details: "25 kg bulk bags; 100 g–1 kg pouches" },
            { attribute: "Part Used", details: "Mature leaves" },
            { attribute: "Form", details: "Fine powder" },
            { attribute: "Color", details: "Deep green to olive green" },
            { attribute: "Shelf Life", details: "1–2 years" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
];

const qualityStandards = [
    "Controlled cleaning, drying, grading, and milling practices",
    "Stabilised mesh size, colour profile, and moisture levels",
    "Food-grade and export-compliant packaging formats",
    "Batch-wise documentation including specifications and moisture reports",
];

const packagingFactors = [
    "Product form (roots, powders, cut pieces)",
    "Moisture sensitivity",
    "Shipment route (air or sea)",
    "Destination-country regulations",
];

function ProductCard({ product, index }: { product: Product; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <Card
            ref={ref}
            className={`overflow-hidden transition-all duration-700 hover:shadow-xl ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{ transitionDelay: `${(index % 4) * 100}ms` }}
        >
            <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                            {product.name}
                        </h3>
                        {product.botanicalName && (
                            <p className="text-sm text-primary/80 italic font-medium">
                                {product.botanicalName}
                            </p>
                        )}
                        {product.composition && (
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Composition:</span> {product.composition}
                            </p>
                        )}
                    </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                </p>

                <div className="flex items-center gap-2 mb-4 p-3 bg-primary/5 rounded-lg">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground">
                        <span className="font-semibold">Typical Uses:</span> {product.typicalUses}
                    </p>
                </div>

                {product.specifications && product.specifications.length > 0 && (
                    <>
                        <Button
                            variant="ghost"
                            className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <span className="font-medium">
                                {isExpanded ? "Hide Specifications" : "View Specifications"}
                            </span>
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </Button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="rounded-lg border overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-muted/50">
                                            <TableHead className="font-semibold text-foreground w-1/3">Attribute</TableHead>
                                            <TableHead className="font-semibold text-foreground">Details</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {product.specifications.map((spec, specIndex) => (
                                            <TableRow key={specIndex} className="hover:bg-muted/30 transition-colors">
                                                <TableCell className="font-medium text-foreground">{spec.attribute}</TableCell>
                                                <TableCell className="text-muted-foreground">{spec.details}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Card>
    );
}

export function ProductsCatalogue() {
    const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: qualityRef, isIntersecting: qualityVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: packagingRef, isIntersecting: packagingVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: additionalRef, isIntersecting: additionalVisible } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <Leaf className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Products</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Export-Grade Ayurvedic
                        <span className="block text-primary">Herbs & Botanicals</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Unity Commerce supplies export-grade Ayurvedic herbs and botanical powders processed under documented, hygienic, and moisture-controlled conditions.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-20">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* Additional Products */}
                <div
                    ref={additionalRef}
                    className={`mb-20 transition-all duration-1000 ${additionalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Package className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Additional Products</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Unity Commerce can supply multiple other herbal powders and plant-based raw materials on request.
                                </p>
                                <Button className="mt-6" onClick={() => (window.location.href = "/enquiry")}>
                                    Request Custom Products
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Quality Standards */}
                <div
                    ref={qualityRef}
                    className={`mb-16 transition-all duration-1000 ${qualityVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Quality & Processing Standards</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {qualityStandards.map((standard, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-foreground">{standard}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Export Packaging */}
                <div
                    ref={packagingRef}
                    className={`transition-all duration-1000 ${packagingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Card className="p-8 md:p-10">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Box className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Export Packaging</h2>
                                <p className="text-muted-foreground">Packaging is selected based on:</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {packagingFactors.map((factor, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-foreground">{factor}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-primary/10 rounded-lg">
                            <p className="text-foreground font-medium">
                                Standard pack sizes range from <span className="text-primary font-bold">1 kg retail packs</span> to{" "}
                                <span className="text-primary font-bold">25–50 kg bulk bags</span>, as per buyer requirements.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
