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
import {
    Leaf,
    X,
    Sparkles,
    Package,
    CheckCircle2,
    Box,
    Eye,
    ArrowRight,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

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
            "Whole or cut dried roots are used as raw material for powders, extracts, capsules, and traditional Ayurvedic preparations. Ashwagandha roots are valued for their natural adaptogenic properties and are widely used in wellness and nutraceutical applications. Roots are cleaned, shade-dried, and size-graded to maintain uniformity and quality, and export batches follow moisture-control, hygiene, and botanical verification standards before processing.",
        typicalUses:
            "Extraction, powder milling, herbal formulations, capsules, tablets, and nutraceutical blends.",
        image: {
            src: "/images/products/1. Ashwagandha.jpg",
            alt: "Ashwagandha powder in a dark wooden bowl with roots beside it",
        },
        specifications: [
            {
                attribute: "Botanical Name",
                details: "Withania somnifera (L.) Dunal",
            },
            { attribute: "Part Used", details: "Mature dried roots" },
            {
                attribute: "Form",
                details: "Whole / cut roots and fine powder (50-100 mesh)",
            },
            {
                attribute: "Processing Type",
                details:
                    "Shade-dried, cleaned, size-graded; powder mechanically milled & sieved",
            },
            {
                attribute: "Packaging Type",
                details:
                    "Food-grade moisture-barrier pouches; HDPE/PP bags with inner liner; drums for powder",
            },
            {
                attribute: "Packaging Size",
                details:
                    "Retail 1 kg pouches; bulk 20-25 kg bags (customizable)",
            },
            {
                attribute: "Color",
                details:
                    "Roots light beige to pale brown; powder light cream to yellowish-brown",
            },
            {
                attribute: "Is It Organic",
                details:
                    "Available in certified organic and conventional grades",
            },
            {
                attribute: "Is It Dried",
                details: "Yes (moisture typically 10-12%)",
            },
            {
                attribute: "Product Type",
                details: "Herbal raw root & nutraceutical powder ingredient",
            },
            {
                attribute: "Grade Standard",
                details:
                    "Roots: herbal/medicine grade; powder: food/supplement grade",
            },
            {
                attribute: "Shelf Life",
                details: "Typically 24+ months when stored cool and dry",
            },
            {
                attribute: "Usage/Application",
                details:
                    "Capsules, tablets, instant drinks, tinctures, herbal blends, teas, functional foods, extracts",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 2,
        name: "Giloy",
        botanicalName: "Tinospora cordifolia (Willd.) Hook. f. & Thomson",
        description:
            "Whole or cut dried stems are used as raw material for powders, extracts, capsules, and traditional herbal decoctions. Giloy has been used for centuries in Ayurvedic medicine and is widely recognized as an herb that supports immune function, digestion, and overall wellness. Stems are cleaned, shade-dried, and size-graded to maintain uniformity and quality, and export batches are prepared to meet moisture control, botanical verification, and hygiene standards before further processing.",
        typicalUses:
            "Extraction, powder milling, herbal formulations, nutraceutical blends, capsules, tablets, and decoctions.",
        image: {
            src: "/images/products/3. Giloy.jpg",
            alt: "Giloy stem powder in a bowl with fresh stems beside it",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details:
                    "1 kg, 25 kg, 50 kg bags (customizable bulk packaging)",
            },
            { attribute: "Part Used", details: "Mature stems" },
            {
                attribute: "Form",
                details:
                    "Dried cut pieces and coarse/fine powder (80-100 mesh)",
            },
            {
                attribute: "Botanical Name",
                details: "Tinospora cordifolia (Willd.) Hook. f. & Thomson",
            },
            {
                attribute: "Processing Type",
                details:
                    "Fresh stems cleaned, cut, shade-dried; pulverised and sieved for powder",
            },
            {
                attribute: "Packaging Type",
                details:
                    "HDPE / multi-layer moisture-barrier bags with inner liner; paper/PP bags for powder",
            },
            {
                attribute: "Color",
                details:
                    "Cut pieces greyish-green to brown; powder brownish to light brown",
            },
            {
                attribute: "Is It Organic",
                details:
                    "Available in conventional and certified organic grades",
            },
            { attribute: "Is It Dried", details: "Yes - shade-dried" },
            {
                attribute: "Product Type",
                details: "Herbal decoction raw material & nutraceutical powder",
            },
            {
                attribute: "Grade Standard",
                details: "Herbal / export / food grade",
            },
            { attribute: "Shelf Life", details: "Typically up to 24 months" },
            {
                attribute: "Usage/Application",
                details:
                    "Kadha, extraction for supplements, powders for tablets/capsules, teas, beverages",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 3,
        name: "Moringa",
        botanicalName: "Moringa oleifera Lam.",
        description:
            "Whole or cut dried leaves are used as raw material for powders, capsules, extracts, and functional food blends, and Moringa leaf powder is valued globally as a nutrient-rich superfood with antioxidant and wellness-supporting properties. Leaves are cleaned, shade-dried or low-temperature dried to preserve nutrients, then milled and sieved to a fine powder that meets moisture control and quality standards for export and formulation use.",
        typicalUses:
            "Smoothies, green blends, herbal teas, capsules, tablets, nutrition bars, functional foods, fortification.",
        image: {
            src: "/images/products/5. Moringa.jpg",
            alt: "Moringa leaf powder in a wooden bowl with leaves around",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details:
                    "10-25 kg bulk cartons or bags; retail pouches 100 g-1 kg",
            },
            { attribute: "Part Used", details: "Young dried leaves" },
            {
                attribute: "Form",
                details: "Fine powder or dehydrated flakes/granules",
            },
            { attribute: "Botanical Name", details: "Moringa oleifera Lam." },
            {
                attribute: "Processing Type",
                details:
                    "Shade-dried at low temperature, milled and sieved; dehydrated flakes",
            },
            {
                attribute: "Packaging Type",
                details:
                    "Oxygen-barrier, moisture-proof bags or cartons with food-grade liners",
            },
            { attribute: "Color", details: "Bright green to deep green" },
            {
                attribute: "Is It Organic",
                details:
                    "Available in certified organic and conventional grades",
            },
            { attribute: "Is It Dried", details: "Yes" },
            {
                attribute: "Product Type",
                details:
                    "Superfood / herbal powder / functional food ingredient",
            },
            {
                attribute: "Grade Standard",
                details: "Food / nutraceutical grade",
            },
            { attribute: "Shelf Life", details: "Typically 1-2 years" },
            {
                attribute: "Usage/Application",
                details:
                    "Smoothies, capsules, nutrition bars, herbal teas, functional foods",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 4,
        name: "Triphala",
        composition: "Amla, Haritaki, Bibhitaki",
        description:
            "Powder prepared from three dried fruits — amla, bibhitaki, and haritaki — is used as raw material for herbal powders, capsules, tablets, and traditional Ayurvedic blends that support digestive wellness and overall vitality. Triphala has been a cornerstone of Ayurvedic medicine for centuries, valued as a gentle tonic for digestion, detoxification, and systemic balance. Fruits are individually cleaned, dried, and milled before blending in traditional proportions to maintain consistent quality, and export batches follow established moisture control, botanical identity, and hygiene standards before further processing.",
        typicalUses:
            "Herbal formulations, powders for capsules and tablets, traditional decoctions, digestive blends.",
        image: {
            src: "/images/products/7. Triphala.jpg",
            alt: "Triphala powder in a bowl with the three fruits around it",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details: "25-50 kg bulk bags; 25 kg powder bags",
            },
            {
                attribute: "Part Used",
                details: "Dried fruits of Amalaki, Haritaki, Bibhitaki",
            },
            {
                attribute: "Form",
                details: "Whole fruit, cut pieces, or fine powder",
            },
            {
                attribute: "Botanical Name",
                details:
                    "Phyllanthus emblica, Terminalia chebula, Terminalia bellirica",
            },
            {
                attribute: "Processing Type",
                details: "Cleaned, shade-dried, pulverised",
            },
            {
                attribute: "Packaging Type",
                details: "HDPE / PP woven bags with liners",
            },
            { attribute: "Color", details: "Light brown to yellowish-brown" },
            {
                attribute: "Is It Organic",
                details:
                    "Available in certified organic and conventional grades",
            },
            { attribute: "Is It Dried", details: "Yes" },
            {
                attribute: "Product Type",
                details: "Ayurvedic Triphala ingredient",
            },
            { attribute: "Grade Standard", details: "Herbal / food grade" },
            { attribute: "Shelf Life", details: "Typically 2-3 years" },
            {
                attribute: "Usage/Application",
                details: "Triphala powder, capsules, tablets, teas",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 5,
        name: "Tulsi",
        botanicalName: "Ocimum tenuiflorum (L.)",
        description:
            "Whole or cut dried leaves are used as raw material for powders, extracts, capsules, and traditional herbal teas, and Tulsi is widely regarded as a sacred and medicinal herb in Ayurveda with a history of use for immune support, stress resilience, and respiratory wellness. Leaves are cleaned, shade-dried or low-temperature dried to retain natural aroma and phytonutrients, then milled and sieved to produce a fine powder that meets moisture control, botanical identity, and quality standards before further processing.",
        typicalUses: "Herbal teas, respiratory and immune support blends.",
        image: {
            src: "/images/products/9. Tulsi.jpg",
            alt: "Tulsi leaf powder in a wooden bowl with fresh leaves around",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details: "20-25 kg bulk bags; retail pouches 100 g-1 kg",
            },
            { attribute: "Part Used", details: "Aerial parts" },
            { attribute: "Form", details: "Cut dried herb or fine powder" },
            { attribute: "Botanical Name", details: "Ocimum tenuiflorum (L.)" },
            {
                attribute: "Processing Type",
                details: "Shade-dried or low-temperature dried",
            },
            {
                attribute: "Packaging Type",
                details: "Paper / PP / HDPE bags with liner",
            },
            { attribute: "Color", details: "Green to olive green" },
            {
                attribute: "Is It Organic",
                details:
                    "Available in certified organic and conventional grades",
            },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Herbal tea ingredient" },
            { attribute: "Grade Standard", details: "Herbal / tea grade" },
            { attribute: "Shelf Life", details: "Typically 1-2 years" },
            {
                attribute: "Usage/Application",
                details: "Teas, capsules, wellness blends",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 6,
        name: "Aloe Vera",
        botanicalName: "Aloe barbadensis Miller",
        description:
            "Whole or cut dried inner leaf gel is used as raw material for powders, extracts, capsules, cosmetics, and functional health products, and Aloe Vera gel is widely valued for its soothing, moisturizing, and antioxidant properties in food, cosmetic, and wellness applications. Leaves are harvested, filleted to separate the inner gel, then the gel is cleaned, dried (spray or freeze dried), and milled into a fine powder that meets moisture control, quality, and purity standards for export and formulation use.",
        typicalUses: "Supplements, beverages, cosmetics, topical formulations.",
        image: {
            src: "/images/products/2. Aloe Vera.jpg",
            alt: "Aloe vera powder in a bowl with aloe leaf sections beside it",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details: "100 g-1 kg retail; 20-25 kg bulk",
            },
            { attribute: "Part Used", details: "Inner leaf gel" },
            {
                attribute: "Form",
                details: "Spray-dried or freeze-dried powder; flakes",
            },
            { attribute: "Botanical Name", details: "Aloe barbadensis Miller" },
            {
                attribute: "Processing Type",
                details: "Gel extraction, drying, milling",
            },
            {
                attribute: "Packaging Type",
                details: "Moisture-proof containers",
            },
            { attribute: "Color", details: "Off-white to pale yellow" },
            {
                attribute: "Is It Organic",
                details: "Available in organic and conventional grades",
            },
            { attribute: "Is It Dried", details: "Yes" },
            {
                attribute: "Product Type",
                details: "Functional food and cosmetic ingredient",
            },
            { attribute: "Shelf Life", details: "2-3 years" },
            {
                attribute: "Usage/Application",
                details: "Supplements, skin and hair care",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 7,
        name: "Neem",
        botanicalName: "Azadirachta indica A. Juss.",
        description:
            "Whole or cut dried leaves and seeds are used as raw material for powders, oil extraction, capsules, and traditional herbal formulations, and Neem has been valued in traditional medicine and modern wellness products for its broad-spectrum botanical properties. Leaves and seeds are cleaned, shade-dried or low-temperature dried, and size-graded before milling or pressing, and export batches follow established moisture control, botanical identity, and quality standards prior to further processing.",
        typicalUses:
            "Herbal formulations, cosmetics, agricultural applications.",
        image: {
            src: "/images/products/4. Neem.jpg",
            alt: "Neem leaf powder in a wooden bowl with neem leaves around it",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details: "25 kg bulk bags; 25-50 kg oil drums",
            },
            { attribute: "Part Used", details: "Leaves, seeds" },
            { attribute: "Form", details: "Powder, seeds, oil" },
            {
                attribute: "Botanical Name",
                details: "Azadirachta indica A. Juss.",
            },
            {
                attribute: "Processing Type",
                details: "Shade-dried, pulverised, cold-pressed",
            },
            { attribute: "Packaging Type", details: "HDPE / PP bags; drums" },
            { attribute: "Color", details: "Green powder; golden to dark oil" },
            {
                attribute: "Is It Organic",
                details: "Available in organic and conventional grades",
            },
            { attribute: "Is It Dried", details: "Yes (powder/seeds)" },
            { attribute: "Product Type", details: "Herbal powder, oil" },
            {
                attribute: "Shelf Life",
                details: "Powder/seeds 1-2 years; oil about 2 years",
            },
            {
                attribute: "Usage/Application",
                details: "Cosmetics, blends, bio-pesticides",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 8,
        name: "Shatavari",
        botanicalName: "Asparagus racemosus Willd.",
        description:
            "Whole or cut dried roots are used as raw material for powders, extracts, capsules, and traditional herbal formulations, and Shatavari has been used for centuries in traditional medicine for its nourishing and adaptogenic properties that support digestive and reproductive wellness. Roots are cleaned, shade-dried or low-temperature dried, and size-graded before milling into powder or further processing, and export batches follow moisture-control, quality, and botanical verification standards prior to formulation.",
        typicalUses: "Capsules, powders, syrups.",
        image: {
            src: "/images/products/6. Shatavari.jpg",
            alt: "Shatavari powder in a wooden bowl with roots beside it",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details: "25-50 kg bulk; retail pouches",
            },
            { attribute: "Part Used", details: "Tubero-fibrous roots" },
            { attribute: "Form", details: "Whole roots, slices, powder" },
            {
                attribute: "Botanical Name",
                details: "Asparagus racemosus Willd.",
            },
            {
                attribute: "Processing Type",
                details: "Shade-dried, cut, milled",
            },
            {
                attribute: "Packaging Type",
                details: "HDPE / PP bags with liner",
            },
            { attribute: "Color", details: "Cream to pale brown" },
            { attribute: "Is It Organic", details: "Available" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Herbal raw material" },
            { attribute: "Shelf Life", details: "2-3 years" },
            {
                attribute: "Usage/Application",
                details: "Capsules, powders, syrups",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 9,
        name: "Turmeric",
        botanicalName: "Curcuma longa L.",
        description:
            "Whole or cut dried rhizomes are used as raw material for powders, spice blends, extracts, and traditional herbal formulations, and turmeric powder is widely used in culinary, cosmetic, and wellness applications for its characteristic color and flavor. The dried roots are rich in natural curcuminoids, which contribute to the bright yellow hue and functional attributes of the powder. Rhizomes are cleaned, boiled or steamed, shade-dried or sun-dried to achieve stable moisture content, and milled into fine powder that meets moisture control and quality standards for export and further processing.",
        typicalUses: "Spices, supplements, cosmetics.",
        image: {
            src: "/images/products/8. Turmeric.jpg",
            alt: "Bright yellow turmeric powder in a bowl with turmeric slices",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details: "20-25 kg bulk; retail pouches",
            },
            { attribute: "Part Used", details: "Rhizome" },
            { attribute: "Form", details: "Fine powder" },
            { attribute: "Botanical Name", details: "Curcuma longa L." },
            { attribute: "Processing Type", details: "Boiled, dried, milled" },
            {
                attribute: "Packaging Type",
                details: "Laminated moisture-proof bags",
            },
            { attribute: "Color", details: "Bright yellow to orange" },
            { attribute: "Is It Organic", details: "Available" },
            { attribute: "Is It Dried", details: "Yes" },
            {
                attribute: "Product Type",
                details: "Culinary and nutraceutical ingredient",
            },
            { attribute: "Shelf Life", details: "12-24 months" },
            {
                attribute: "Usage/Application",
                details: "Spices, supplements, cosmetics",
            },
            { attribute: "Country of Origin", details: "India" },
        ],
    },
    {
        id: 10,
        name: "Brahmi",
        botanicalName: "Bacopa monnieri (L.) Wettst.",
        description:
            "Whole or cut dried leaves are used as raw material for powders, extracts, capsules, and traditional herbal formulations, and Brahmi is a revered Ayurvedic herb long used to support memory, cognition, and nervous system balance. Brahmi contains naturally occurring bacosides and other bioactive compounds that are traditionally associated with cognitive enhancement and calming effects. Leaves are cleaned, shade-dried or low-temperature dried to retain active constituents, then milled and sieved to produce a uniform powder that meets moisture control, botanical verification, and quality standards prior to further processing.",
        typicalUses: "Capsules, teas, tonics.",
        image: {
            src: "/images/products/10. Bhrami.jpg",
            alt: "Brahmi powder in a light bowl with fresh brahmi sprigs",
        },
        specifications: [
            {
                attribute: "Packaging Size",
                details: "20-25 kg bulk; retail pouches",
            },
            { attribute: "Part Used", details: "Whole aerial parts" },
            { attribute: "Form", details: "Cut herb or powder" },
            {
                attribute: "Botanical Name",
                details: "Bacopa monnieri (L.) Wettst.",
            },
            { attribute: "Processing Type", details: "Shade-dried, milled" },
            { attribute: "Packaging Type", details: "HDPE / PP bags" },
            { attribute: "Color", details: "Greenish-brown" },
            { attribute: "Is It Organic", details: "Available" },
            { attribute: "Is It Dried", details: "Yes" },
            { attribute: "Product Type", details: "Cognitive-support herb" },
            { attribute: "Shelf Life", details: "Typically 2 years" },
            {
                attribute: "Usage/Application",
                details: "Capsules, teas, tonics",
            },
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

// Modal Component for Specifications
function SpecificationsModal({
    product,
    isOpen,
    onClose,
}: {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
}) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-3xl max-h-[85vh] bg-card rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-md border-b border-border/50 px-6 py-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                                <Leaf className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-foreground">
                                    {product.name}
                                </h2>
                                {product.botanicalName && (
                                    <p className="text-sm text-primary italic mt-0.5">
                                        {product.botanicalName}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                        >
                            <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Table Content */}
                <div className="overflow-y-auto max-h-[calc(85vh-100px)] p-6">
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-background/50">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/30 hover:bg-muted/30">
                                    <TableHead className="font-bold text-foreground w-2/5 py-4 text-sm uppercase tracking-wide">
                                        Attribute
                                    </TableHead>
                                    <TableHead className="font-bold text-foreground py-4 text-sm uppercase tracking-wide">
                                        Details
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {product.specifications?.map(
                                    (spec, specIndex) => (
                                        <TableRow
                                            key={specIndex}
                                            className="hover:bg-muted/20 transition-colors border-b border-border/30 last:border-0"
                                        >
                                            <TableCell className="font-semibold text-foreground py-4">
                                                {spec.attribute}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground py-4">
                                                {spec.details}
                                            </TableCell>
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductCard({
    product,
    index,
    onViewSpecs,
}: {
    product: Product;
    index: number;
    onViewSpecs: () => void;
}) {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const [viewMore, setViewMore] = useState<boolean>(false);
    return (
        <Card
            ref={ref}
            className={`group relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 border-border/50 hover:border-primary/30 ${
                isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            data-testid={`product-card-${product.id}`}
        >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Image Section */}
            {product.image && (
                <div className="relative h-52 md:h-60 overflow-hidden">
                    <img
                        src={product.image.src}
                        alt={product.image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute translate-y-3 inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                    {/* Floating badge */}
                    {/* <div className="absolute top-4 left-4">
                        <div className="px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-full border border-border/50 shadow-lg">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                Premium Grade
                            </span>
                        </div>
                    </div> */}
                </div>
            )}

            {/* Content Section */}
            <div className="relative p-6 md:p-7 grid grid-rows-[max-content_max-content_max-content_auto_max-content]">
                {/* Title & Scientific Name */}
                <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                            <Leaf className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {product.name}
                        </h3>
                    </div>
                    {product.botanicalName && (
                        <p className="text-sm text-primary/70 italic font-medium pl-[52px]">
                            {product.botanicalName}
                        </p>
                    )}
                    {product.composition && (
                        <p className="text-sm text-muted-foreground pl-[52px] mt-1">
                            <span className="font-medium text-foreground/80">
                                Composition:
                            </span>{" "}
                            {product.composition}
                        </p>
                    )}
                </div>
                {/* Description */}
                <div className="mb-5">
                    {" "}
                    <p
                        className={twMerge(
                            "text-muted-foreground leading-relaxed",
                            viewMore ? "" : "line-clamp-3"
                        )}
                    >
                        {product.description}
                    </p>
                    <button
                        className="text-blue-500"
                        onClick={() => {
                            setViewMore((prev) => !prev);
                        }}
                    >
                        {viewMore ? "view less" : "view more"}
                    </button>
                </div>
                {/* Typical Uses Card */}
                <div className="flex items-start gap-3 mb-6 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                            Typical Uses
                        </span>
                        <p className="text-sm text-foreground/80 mt-1 leading-relaxed">
                            {product.typicalUses}
                        </p>
                    </div>
                </div>
                <div></div>
                {/* Action Button */}
                {product.specifications &&
                    product.specifications.length > 0 && (
                        <Button
                            onClick={onViewSpecs}
                            className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                            data-testid={`expand-specs-${product.id}`}
                        >
                            <span className="flex items-center justify-center gap-2">
                                <Eye className="w-4 h-4" />
                                View Specifications
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                            </span>
                        </Button>
                    )}
            </div>
        </Card>
    );
}

export function ProductsCatalogue() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );

    const { ref: headerRef, isIntersecting: headerVisible } =
        useIntersectionObserver({
            threshold: 0.2,
        });
    const { ref: qualityRef, isIntersecting: qualityVisible } =
        useIntersectionObserver({
            threshold: 0.2,
        });
    const { ref: packagingRef, isIntersecting: packagingVisible } =
        useIntersectionObserver({
            threshold: 0.2,
        });
    const { ref: additionalRef, isIntersecting: additionalVisible } =
        useIntersectionObserver({
            threshold: 0.2,
        });

    return (
        <>
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div
                        ref={headerRef}
                        className={`text-center mb-16 transition-all duration-1000 ${
                            headerVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6 border border-primary/20">
                            <Leaf className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                Our Products
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Export-Grade Ayurvedic
                            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Herbs & Botanicals
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            Unity Commerce supplies export-grade Ayurvedic herbs
                            and botanical powders processed under documented,
                            hygienic, and moisture-controlled conditions. Each
                            product is sourced from registered farms or verified
                            processors in India, cleaned and graded according to
                            export requirements, and packed in food-grade
                            material suitable for bulk shipments.
                        </p>
                        <p className="text-base text-muted-foreground/80 mt-4 italic">
                            All specifications remain consistent across repeated
                            orders unless a buyer requests a customised grade.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:h-full md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
                        {products.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                                onViewSpecs={() => setSelectedProduct(product)}
                            />
                        ))}
                    </div>

                    {/* Additional Products Section */}
                    <div
                        ref={additionalRef}
                        className={`mb-20 transition-all duration-1000 ${
                            additionalVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20 hover:border-primary/30 transition-colors duration-300">
                            <div className="flex items-start gap-5">
                                <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                                    <Package className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                        Additional Products
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        Unity Commerce can supply multiple other
                                        herbal powders and plant-based raw
                                        materials on request. Availability
                                        depends on crop cycles, processing
                                        schedules, and export feasibility for
                                        the destination country.
                                    </p>
                                    <Button
                                        className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                                        onClick={() =>
                                            (window.location.href = "/enquiry")
                                        }
                                    >
                                        Request Custom Products
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Quality & Processing Standards */}
                    <div
                        ref={qualityRef}
                        className={`mb-16 transition-all duration-1000 ${
                            qualityVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <Card className="p-8 md:p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                            <div className="flex items-start gap-5 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                                    <CheckCircle2 className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Quality & Processing Standards
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {qualityStandards.map((standard, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 p-5 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-muted/50 transition-all duration-300 group"
                                    >
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                                        <span className="text-foreground font-medium">
                                            {standard}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Export Packaging */}
                    <div
                        ref={packagingRef}
                        className={`transition-all duration-1000 ${
                            packagingVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <Card className="p-8 md:p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                            <div className="flex items-start gap-5 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                                    <Box className="w-7 h-7 text-primary-foreground" />
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {packagingFactors.map((factor, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 p-5 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-muted/50 transition-all duration-300 group"
                                    >
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                                        <span className="text-foreground font-medium">
                                            {factor}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                                <p className="text-foreground font-medium text-center">
                                    Standard pack sizes range from{" "}
                                    <span className="text-primary font-bold">
                                        1 kg retail packs
                                    </span>{" "}
                                    to{" "}
                                    <span className="text-primary font-bold">
                                        25-50 kg bulk bags
                                    </span>
                                    , as per buyer requirements.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Specifications Modal */}
            {selectedProduct && (
                <SpecificationsModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
}
