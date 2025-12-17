import {
    Box,
    Button,
    Checkbox,
    Group,
    Radio,
    TextInput,
    Title,
    Textarea
} from "@mantine/core";
import { useState } from "react";

export default function EnquiryForm() {
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [area, setArea] = useState<string>("");
    const [products, setProducts] = useState<Array<string>>([]);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const formData = new FormData(form);

        const data = {
            name: formData.get("entry.207062940"),
            email: formData.get("entry.1389094561"),
            phone: formData.get("entry.1007918197"),
            company: formData.get("entry.1010406001"),
            country: formData.get("entry.402125416"),
            products: products.join(", "),
            form: formData.get("entry.566987055_sentinel"),
            query: area,
        };

        try {
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbxReJpy--fh7GjsfY5v95gjFlkjMarcRIvLpCmTNW-kBLRLOAFRMlsz59AydkxVvpsJ/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    mode: "no-cors",
                    body: JSON.stringify(data),
                }
            );
            console.log(res);
            console.log(await res.text());
            setIsSubmitted(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full grid grid-flow-row">
            {isSubmitted ? (
                <div className="text-center py-12">
                    <Title order={2} mb="md">
                        Thank You!
                    </Title>
                    <p className="text-lg text-gray-600 mb-6">
                        Your enquiry has been submitted successfully. We'll
                        respond within 24 hours with comprehensive information.
                    </p>
                    <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="light"
                    >
                        Submit Another Enquiry
                    </Button>
                </div>
            ) : (
                <>
                    <Title order={2} mb="lg">
                        Enquiry Form
                    </Title>

                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <TextInput
                            name="entry.207062940"
                            label="Full name"
                            placeholder="Enter your full name"
                            required
                            mb="md"
                        />

                        {/* Email */}
                        <TextInput
                            name="entry.1389094561"
                            type="email"
                            label="Email"
                            placeholder="Enter your e-mail"
                            required
                            mb="md"
                        />

                        {/* Mobile Number */}
                        <TextInput
                            name="entry.1007918197"
                            label="Mobile number"
                            placeholder="Enter mobile number"
                            required
                            mb="md"
                        />

                        {/* Company */}
                        <TextInput
                            name="entry.1010406001"
                            label="Company / Organisation"
                            placeholder="Enter company name"
                            required
                            mb="md"
                        />

                        {/* Country */}
                        <TextInput
                            name="entry.402125416"
                            label="Country"
                            placeholder="Enter your country"
                            required
                            mb="md"
                        />
                        <Checkbox.Group
                            onChange={(value) => {
                                setProducts(value);
                            }}
                            value={products}
                            // name="entry.697430584_sentinel"
                            label="Product of Interest"
                            description="Select all applicable products"
                            withAsterisk
                        >
                            <Group mt="xs" mb="md">
                                <div className="grid grid-cols-2 gap-2 ">
                                    <Checkbox
                                        value="Ashwagandha (Roots / Powder)"
                                        label="Ashwagandha (Roots / Powder)"
                                    />
                                    <Checkbox
                                        value="Aloe Vera (Powder / Flakes)"
                                        label="Aloe Vera (Powder / Flakes)"
                                    />
                                    <Checkbox
                                        value="Giloy (Stem powder / Cut Pieces)"
                                        label="Giloy (Stem powder / Cut Pieces)"
                                    />
                                    <Checkbox
                                        value="Neem (Leaf Powder, Seeds, Oil)"
                                        label="Neem (Leaf Powder, Seeds, Oil)"
                                    />
                                    <Checkbox
                                        value="Moringa (Leaf Powder)"
                                        label="Moringa (Leaf Powder)"
                                    />
                                    <Checkbox
                                        value="Shatavari (Dried / Powder)"
                                        label="Shatavari (Dried / Powder)"
                                    />
                                    <Checkbox
                                        value="Triphala (Dried / Powder)"
                                        label="Triphala (Dried / Powder)"
                                    />
                                    <Checkbox
                                        value="Turmeric (Dried / Powder)"
                                        label="Turmeric (Dried / Powder)"
                                    />
                                    <Checkbox
                                        value="Tulsi- Holy Basil (Shade Dried / Powder)"
                                        label="Tulsi- Holy Basil (Shade Dried / Powder)"
                                    />
                                    <Checkbox
                                        value="Brahmi (Shade Dried / Powder)"
                                        label="Brahmi (Shade Dried / Powder)"
                                    />
                                </div>
                            </Group>
                        </Checkbox.Group>
                        {/* Form */}
                        <Box mb="md">
                            <Radio.Group
                                name="entry.566987055_sentinel"
                                label="Form"
                            >
                                <div className="grid grid-flow-col gap-2 justify-start">
                                    <Radio value="Raw" label="Raw" />
                                    <Radio
                                        value="Powder (Grinded/Processed)"
                                        label="Powder (Grinded/Processed)"
                                    />
                                </div>
                            </Radio.Group>
                        </Box>
                        {/* Message */}
                        <Textarea
                            label="Additional Query"
                            className="mb-2"
                            onChange={(e) => setArea(e.target.value)}
                            value={area}
                            size="sm"
                        />
                        <Button type="submit" loading={loading}>
                            Submit
                        </Button>
                    </form>
                </>
            )}
        </div>
    );
}
