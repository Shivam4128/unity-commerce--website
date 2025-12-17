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
    image?: {
        src: string;
        alt: string;
    };
}

const products: Product[] = [
    {
        id: 1,
        name: "Ashwagandha",
        botanicalName: "Withania somnifera (L.) Dunal",
        description:
            "Whole or cut dried roots used as raw material for powders, extracts, capsules, and traditional Ayurvedic preparations. Roots are cleaned, shade-dried, and size-graded to maintain uniformity and quality.",
        typicalUses:
            "Extraction, powder milling, herbal formulations, capsules, tablets, and nutraceutical blends.",
        image: {
            src: "/images/products/1. Ashwagandha.jpg",
            alt: "Ashwagandha powder in a dark wooden bowl with roots beside it",
        },
        specifications: [
            { attribute: "Botanical Name", details: "Withania somnifera (L.) Dunal" },
            { attribute: "Part Used", details: "Mature dried roots" },
            { attribute: "Form", details: "Whole / cut roots and fine powder (50-100 mesh)" },
            {
                attribute: "Processing Type",
                details: "Shade-dried, cleaned, size-graded; powder mechanically milled & sieved",
            },
            {
                attribute: "Packaging Type",
                details: "Food-grade moisture-barrier pouches; HDPE/PP bags with inner liner; drums for powder",
            },
            { attribute: "Packaging Size", details: "Retail 1 kg pouches; bulk 20-25 kg bags (customizable)" },
            { attribute: "Color", details: "Roots light beige to pale brown; powder light cream to yellowish-brown" },
            { attribute: "Is It Organic", details: "Available in certified organic and conventional grades" },
            { attribute: "Is It Dried", details: "Yes (moisture typically 10-12%)" },
            { attribute: "Product Type", details: "Herbal raw root & nutraceutical powder ingredient" },
            {
                attribute: "Grade Standard",
                details: "Roots: herbal/medicine grade; powder: food/supplement grade",
            },
            { attribute: "Shelf Life", details: "Typically 24+ months when stored cool and dry" },
            {
                attribute: "Usage/Application",
                details: "Capsules, tablets, instant drinks, tinctures, herbal blends, teas, functional foods, extracts",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 2,
        name: "Giloy",
        botanicalName: "Tinospora cordifolia (Willd.) Hook. f. & Thomson",
        description:
            "Whole or cut dried stems used as raw material for powders, extracts, capsules, and traditional herbal decoctions. Stems are cleaned, shade-dried, and size-graded to maintain uniformity.",
        typicalUses:
            "Extraction, powder milling, herbal formulations, nutraceutical blends, capsules, tablets, and decoctions.",
        image: {
            src: "/images/products/3. Giloy.jpg",
            alt: "Giloy stem powder in a bowl with fresh stems beside it",
        },
        specifications: [
            { attribute: "Packaging Size", details: "1 kg, 25 kg, 50 kg bags (customizable bulk packaging)" },
            { attribute: "Part Used", details: "Mature stems" },
            { attribute: "Form", details: "Dried cut pieces and coarse/fine powder (80-100 mesh)" },
            { attribute: "Botanical Name", details: "Tinospora cordifolia (Willd.) Hook. f. & Thomson" },
            {
                attribute: "Processing Type",
                details: "Fresh stems cleaned, cut, shade-dried; pulverised and sieved for powder",
            },
            {
                attribute: "Packaging Type",
                details: "HDPE / multi-layer moisture-barrier bags with inner liner; paper/PP bags for powder",
            },
            { attribute: "Color", details: "Cut pieces greyish-green to brown; powder brownish to light brown" },
            { attribute: "Is It Organic", details: "Available in conventional and certified organic grades" },
            { attribute: "Is It Dried", details: "Yes - shade-dried" },
            { attribute: "Product Type", details: "Herbal decoction raw material & nutraceutical powder" },
            { attribute: "Grade Standard", details: "Herbal / export / food grade" },
            { attribute: "Shelf Life", details: "Typically up to 24 months" },
            {
                attribute: "Usage/Application",
                details: "Kadha, extraction for supplements, powders for tablets/capsules, teas, beverages",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 3,
        name: "Moringa",
        botanicalName: "Moringa oleifera Lam.",
        description:
            "Whole or cut dried leaves used for powders, capsules, extracts, and functional food blends. Leaves are cleaned and low-temperature dried to preserve nutrients before milling.",
        typicalUses:
            "Smoothies, green blends, herbal teas, capsules, tablets, nutrition bars, functional foods, fortification.",
        image: {
            src: "/images/products/5. Moringa.jpg",
            alt: "Moringa leaf powder in a wooden bowl with leaves around",
        },
        specifications: [
            { attribute: "Packaging Size", details: "10-25 kg bulk cartons or bags; retail pouches 100 g-1 kg" },
            { attribute: "Part Used", details: "Young dried leaves" },
            { attribute: "Form", details: "Fine powder or dehydrated flakes/granules" },
            { attribute: "Botanical Name", details: "Moringa oleifera Lam." },
            { attribute: "Processing Type", details: "Shade-dried at low temperature, milled and sieved; dehydrated flakes" },
            {
                attribute: "Packaging Type",
                details: "Oxygen-barrier, moisture-proof bags or cartons with food-grade liners",
            },
            { attribute: "Color", details: "Bright green to deep green" },
            { attribute: "Is It Organic", details: "Available in certified organic and conventional grades" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Superfood / herbal powder / functional food ingredient" },
            { attribute: "Grade Standard", details: "Food / nutraceutical grade" },
            { attribute: "Shelf Life", details: "Typically 1-2 years" },
            { attribute: "Usage/Application", details: "Smoothies, capsules, nutrition bars, herbal teas, functional foods" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 4,
        name: "Triphala",
        composition: "Amla, Haritaki, Bibhitaki",
        description:
            "Powder prepared from three dried fruits used as raw material for powders, capsules, tablets, and traditional Ayurvedic blends. Fruits are cleaned, dried, and milled before blending in classical proportions.",
        typicalUses: "Herbal formulations, powders for capsules and tablets, traditional decoctions, digestive blends.",
        image: {
            src: "/images/products/7. Triphala.jpg",
            alt: "Triphala powder in a bowl with the three fruits around it",
        },
        specifications: [
            { attribute: "Packaging Size", details: "25-50 kg bulk bags; 25 kg powder bags" },
            { attribute: "Part Used", details: "Dried fruits of Amalaki, Haritaki, Bibhitaki" },
            { attribute: "Form", details: "Whole fruit, cut pieces, or fine powder" },
            { attribute: "Botanical Name", details: "Phyllanthus emblica, Terminalia chebula, Terminalia bellirica" },
            { attribute: "Processing Type", details: "Cleaned, shade-dried, pulverised" },
            { attribute: "Packaging Type", details: "HDPE / PP woven bags with liners" },
            { attribute: "Color", details: "Light brown to yellowish-brown" },
            { attribute: "Is It Organic", details: "Available in certified organic and conventional grades" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Ayurvedic Triphala ingredient" },
            { attribute: "Grade Standard", details: "Herbal / food grade" },
            { attribute: "Shelf Life", details: "Typically 2-3 years" },
            { attribute: "Usage/Application", details: "Triphala powder, capsules, tablets, teas" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 5,
        name: "Tulsi",
        botanicalName: "Ocimum tenuiflorum (L.)",
        description:
            "Whole or cut dried leaves used for powders, extracts, capsules, and herbal teas. Widely regarded as a sacred and medicinal herb in Ayurveda.",
        typicalUses: "Herbal teas, respiratory and immune support blends.",
        image: {
            src: "/images/products/9. Tulsi.jpg",
            alt: "Tulsi leaf powder in a wooden bowl with fresh leaves around",
        },
        specifications: [
            { attribute: "Packaging Size", details: "20-25 kg bulk bags; retail pouches 100 g-1 kg" },
            { attribute: "Part Used", details: "Aerial parts" },
            { attribute: "Form", details: "Cut dried herb or fine powder" },
            { attribute: "Botanical Name", details: "Ocimum tenuiflorum (L.)" },
            { attribute: "Processing Type", details: "Shade-dried or low-temperature dried" },
            { attribute: "Packaging Type", details: "Paper / PP / HDPE bags with liner" },
            { attribute: "Color", details: "Green to olive green" },
            { attribute: "Is It Organic", details: "Available in certified organic and conventional grades" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Herbal tea ingredient" },
            { attribute: "Grade Standard", details: "Herbal / tea grade" },
            { attribute: "Shelf Life", details: "Typically 1-2 years" },
            { attribute: "Usage/Application", details: "Teas, capsules, wellness blends" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 6,
        name: "Aloe Vera",
        botanicalName: "Aloe barbadensis Miller",
        description:
            "Whole or cut dried inner leaf gel used for powders, extracts, cosmetics, and functional health products.",
        typicalUses: "Supplements, beverages, cosmetics, topical formulations.",
        image: {
            src: "/images/products/2. Aloe Vera.jpg",
            alt: "Aloe vera powder in a bowl with aloe leaf sections beside it",
        },
        specifications: [
            { attribute: "Packaging Size", details: "100 g-1 kg retail; 20-25 kg bulk" },
            { attribute: "Part Used", details: "Inner leaf gel" },
            { attribute: "Form", details: "Spray-dried or freeze-dried powder; flakes" },
            { attribute: "Botanical Name", details: "Aloe barbadensis Miller" },
            { attribute: "Processing Type", details: "Gel extraction, drying, milling" },
            { attribute: "Packaging Type", details: "Moisture-proof containers" },
            { attribute: "Color", details: "Off-white to pale yellow" },
            { attribute: "Is It Organic", details: "Available in organic and conventional grades" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Functional food and cosmetic ingredient" },
            { attribute: "Shelf Life", details: "2-3 years" },
            { attribute: "Usage/Application", details: "Supplements, skin and hair care" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 7,
        name: "Neem",
        botanicalName: "Azadirachta indica A. Juss.",
        description: "Leaves and seeds used for powders, oil extraction, and traditional formulations.",
        typicalUses: "Herbal formulations, cosmetics, agricultural applications.",
        image: {
            src: "/images/products/4. Neem.jpg",
            alt: "Neem leaf powder in a wooden bowl with neem leaves around it",
        },
        specifications: [
            { attribute: "Packaging Size", details: "25 kg bulk bags; 25-50 kg oil drums" },
            { attribute: "Part Used", details: "Leaves, seeds" },
            { attribute: "Form", details: "Powder, seeds, oil" },
            { attribute: "Botanical Name", details: "Azadirachta indica A. Juss." },
            { attribute: "Processing Type", details: "Shade-dried, pulverised, cold-pressed" },
            { attribute: "Packaging Type", details: "HDPE / PP bags; drums" },
            { attribute: "Color", details: "Green powder; golden to dark oil" },
            { attribute: "Is It Organic", details: "Available in organic and conventional grades" },
            { attribute: "Is It Dried", details: "Yes (powder/seeds)" },
            { attribute: "Product Type", details: "Herbal powder, oil" },
            { attribute: "Shelf Life", details: "Powder/seeds 1-2 years; oil about 2 years" },
            { attribute: "Usage/Application", details: "Cosmetics, blends, bio-pesticides" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 8,
        name: "Shatavari",
        botanicalName: "Asparagus racemosus Willd.",
        description: "Dried roots used for powders, extracts, and formulations.",
        typicalUses: "Capsules, powders, syrups.",
        image: {
            src: "/images/products/6. Shatavari.jpg",
            alt: "Shatavari powder in a wooden bowl with roots beside it",
        },
        specifications: [
            { attribute: "Packaging Size", details: "25-50 kg bulk; retail pouches" },
            { attribute: "Part Used", details: "Tubero-fibrous roots" },
            { attribute: "Form", details: "Whole roots, slices, powder" },
            { attribute: "Botanical Name", details: "Asparagus racemosus Willd." },
            { attribute: "Processing Type", details: "Shade-dried, cut, milled" },
            { attribute: "Packaging Type", details: "HDPE / PP bags with liner" },
            { attribute: "Color", details: "Cream to pale brown" },
            { attribute: "Is It Organic", details: "Available" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Herbal raw material" },
            { attribute: "Shelf Life", details: "2-3 years" },
            { attribute: "Usage/Application", details: "Capsules, powders, syrups" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 9,
        name: "Turmeric",
        botanicalName: "Curcuma longa L.",
        description: "Dried rhizomes processed into powder for culinary and wellness applications.",
        typicalUses: "Spices, supplements, cosmetics.",
        image: {
            src: "/images/products/8. Turmeric.jpg",
            alt: "Bright yellow turmeric powder in a bowl with turmeric slices",
        },
        specifications: [
            { attribute: "Packaging Size", details: "20-25 kg bulk; retail pouches" },
            { attribute: "Part Used", details: "Rhizome" },
            { attribute: "Form", details: "Fine powder" },
            { attribute: "Botanical Name", details: "Curcuma longa L." },
            { attribute: "Processing Type", details: "Boiled, dried, milled" },
            { attribute: "Packaging Type", details: "Laminated moisture-proof bags" },
            { attribute: "Color", details: "Bright yellow to orange" },
            { attribute: "Is It Organic", details: "Available" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Culinary and nutraceutical ingredient" },
            { attribute: "Shelf Life", details: "12-24 months" },
            { attribute: "Usage/Application", details: "Spices, supplements, cosmetics" },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 10,
        name: "Brahmi",
        botanicalName: "Bacopa monnieri (L.) Wettst.",
        description: "Dried aerial parts used for powders, extracts, and traditional formulations.",
        typicalUses: "Capsules, teas, tonics.",
        image: {
            src: "/images/products/10. Bhrami.jpg",
            alt: "Brahmi powder in a light bowl with fresh brahmi sprigs",
        },
        specifications: [
            { attribute: "Packaging Size", details: "20-25 kg bulk; retail pouches" },
            { attribute: "Part Used", details: "Whole aerial parts" },
            { attribute: "Form", details: "Cut herb or powder" },
            { attribute: "Botanical Name", details: "Bacopa monnieri (L.) Wettst." },
            { attribute: "Processing Type", details: "Shade-dried, milled" },
            { attribute: "Packaging Type", details: "HDPE / PP bags" },
            { attribute: "Color", details: "Greenish-brown" },
            { attribute: "Is It Organic", details: "Available" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Cognitive-support herb" },
            { attribute: "Shelf Life", details: "Typically 2 years" },
            { attribute: "Usage/Application", details: "Capsules, teas, tonics" },
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
            data-testid={`product-card-${product.id}`}
        >
            <div className="p-6 md:p-8">
                {product.image && (
                    <div className="mb-6 overflow-hidden rounded-xl bg-muted h-48 md:h-56">
                        <img
                            src={product.image.src}
                            alt={product.image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                )}
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
                            data-testid={`expand-specs-${product.id}`}
                        >
                            <span className="font-medium">
                                {isExpanded ? "Hide Specifications" : "View Specifications"}
                            </span>
                            {isExpanded ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                        </Button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="rounded-lg border overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-muted/50">
                                            <TableHead className="font-semibold text-foreground w-1/3">
                                                Attribute
                                            </TableHead>
                                            <TableHead className="font-semibold text-foreground">
                                                Details
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {product.specifications.map((spec, specIndex) => (
                                            <TableRow
                                                key={specIndex}
                                                className="hover:bg-muted/30 transition-colors"
                                            >
                                                <TableCell className="font-medium text-foreground">
                                                    {spec.attribute}
                                                </TableCell>
                                                <TableCell className="text-muted-foreground">
                                                    {spec.details}
                                                </TableCell>
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
    const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: qualityRef, isIntersecting: qualityVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: packagingRef, isIntersecting: packagingVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: additionalRef, isIntersecting: additionalVisible } = useIntersectionObserver({
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
                        <Leaf className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Our Products
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Export-Grade Ayurvedic
                        <span className="block text-primary">Herbs & Botanicals</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Unity Commerce supplies export-grade Ayurvedic herbs and botanical powders
                        processed under documented, hygienic, and moisture-controlled conditions.
                        Each product is sourced from registered farms or verified processors in India,
                        cleaned and graded according to export requirements, and packed in food-grade
                        material suitable for bulk shipments.
                    </p>
                    <p className="text-base text-muted-foreground/80 mt-4 italic">
                        All specifications remain consistent across repeated orders unless a buyer
                        requests a customised grade.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-20">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* Additional Products Section */}
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                    Additional Products
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Unity Commerce can supply multiple other herbal powders and plant-based
                                    raw materials on request. Availability depends on crop cycles,
                                    processing schedules, and export feasibility for the destination country.
                                </p>
                                <Button
                                    className="mt-6"
                                    onClick={() => (window.location.href = "/enquiry")}
                                >
                                    Request Custom Products
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Quality & Processing Standards */}
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
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Quality & Processing Standards
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {qualityStandards.map((standard, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
                                >
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                    Export Packaging
                                </h2>
                                <p className="text-muted-foreground">
                                    Packaging is selected based on:
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {packagingFactors.map((factor, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-foreground">{factor}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-primary/10 rounded-lg">
                            <p className="text-foreground font-medium">
                                Standard pack sizes range from{" "}
                                <span className="text-primary font-bold">1 kg retail packs</span> to{" "}
                                <span className="text-primary font-bold">25-50 kg bulk bags</span>,
                                as per buyer requirements.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
