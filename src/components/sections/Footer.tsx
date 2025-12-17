const quickLinks = [
  { name: "About", href: "/about-us" },
  { name: "Products", href: "#products" },
  { name: "Certifications", href: "/certificates" },
  { name: "Contact", href: "/enquiry" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 ">
              <img src="/footer_logo.webp" alt="logo" className="h-[120px] max-sm:h-[100px] aspect-auto -translate-y-4" />
              {/* <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Unity Commerce</span> */}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-body" data-testid="text-footer-description">
              Unity Commerce is a certified Ayurvedic and natural products exporter from India, operating
              under APEDA and FSSAI compliance. Our mission is to deliver transparency, trust, and trade
              excellence across borders.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => window.location.href = link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded px-2 py-1 -ml-2"
                    data-testid={`link-footer-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Registered Office</h3>
            <div className="text-sm text-muted-foreground space-y-2 font-body">
              <p className="font-semibold text-foreground">Unity Commerce</p>
              <p className="italic">Shree Ram Bazar, Shimla Bahadur, Rudrapur (U.S. NAGAR), PIN- 263153</p>
              <p className="mt-4">
                <span className="font-semibold text-foreground">Email :</span> unitycommerceindia@gmail.com
              </p>
              <p className="mt-4">
                <span className="font-semibold text-foreground">Phone :</span> +91 7424904388
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center" data-testid="text-footer-copyright">
            © 2025 Unity Commerce. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
