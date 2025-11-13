import { Mail, Clock, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-contact-title">
            Start Your Export Partnership
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body" data-testid="text-contact-description">
            We're ready to support your next trade requirement — whether you're a herbal product
            manufacturer, wholesale buyer, or private-label business.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Card className="p-8 md:p-10 h-full">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Get in Touch</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-body">
                    Fill out the form with your requirements and we'll provide you with a tailored quotation
                    and documentation list.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quick Response</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-body">
                    We'll respond within 24 hours with comprehensive information about pricing,
                    specifications, and shipping options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Direct Communication</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-body">
                    Our export specialists will work with you to understand your specific needs and
                    provide personalized support throughout the partnership.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-2 overflow-hidden" data-testid="card-google-form">
            <div className="bg-card rounded-lg">
              <div className="aspect-[4/5] w-full">
                <div className="w-full h-full flex items-center justify-center bg-muted/50 rounded-lg border-2 border-dashed border-border overflow-auto">
                  {/* <div className="text-center p-8">
                    <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Google Form Integration</h3>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed font-body">
                      Replace this placeholder with your Google Form embed code.
                    </p>
                    <div className="bg-card border border-card-border rounded-lg p-4 text-left">
                      <p className="text-sm text-muted-foreground font-mono mb-2">
                        To add your form:
                      </p>
                      <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                        <li>Create a Google Form</li>
                        <li>Click "Send" → Embed code</li>
                        <li>Copy the iframe code</li>
                        <li>Replace this placeholder</li>
                      </ol>
                    </div>
                  </div> */}
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfA7NUWMy6-eaZXjz6u-fD7kUGQDyNrWCiLvEzTPsauNsL5hQ/viewform?embedded=true" width="700" height="700">Loading…</iframe>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic" data-testid="text-contact-tagline">
            We'll respond within 24 hours with a tailored quotation and documentation list.
          </p>
        </div>
      </div>
    </section>
  );
}
