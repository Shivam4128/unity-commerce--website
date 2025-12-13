import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Globe, MapPin, Clock } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Get in touch with Unity Commerce. We respond to enquiries within 24 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Unity Commerce</h4>
                                        <p className="text-muted-foreground">Shree Ram Bazar, Shimla Bahadur</p>
                                        <p className="text-muted-foreground">Rudrapur (U.S. Nagar), Uttarakhand – 263153, India</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                    <div>
                                        <h4 className="font-semibold">Phone / WhatsApp</h4>
                                        <p className="text-muted-foreground hover:text-primary transition-colors">
                                            <a href="https://wa.me/917424904388">+91 74249 04388</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-muted-foreground hover:text-primary transition-colors">
                                            <a href="mailto:unitycommerceindia@gmail.com">unitycommerceindia@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <div>
                                        <h4 className="font-semibold">Website</h4>
                                        <p className="text-muted-foreground hover:text-primary transition-colors">
                                            <a href="http://www.unitycommerce.in" target="_blank" rel="noreferrer">www.unitycommerce.in</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8 bg-muted/10">
                            <h3 className="text-2xl font-bold mb-6">Enquiry Promise</h3>
                            <div className="flex items-start gap-4">
                                <Clock className="w-8 h-8 text-primary" />
                                <div>
                                    <p className="text-lg font-medium mb-2">24 Hour Turnaround</p>
                                    <p className="text-muted-foreground">
                                        Responses to enquiries are provided within 24 hours with pricing, specifications, and shipping options.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
