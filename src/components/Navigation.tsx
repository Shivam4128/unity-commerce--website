import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Certifications", href: "#certifications" },
  { name: "Reach", href: "#reach" },
  { name: "Why Us", href: "#why" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
            data-testid="link-logo"
          >
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`${"text-xl font-bold text-foreground" + isScrolled ? "": "!text-white"}`}>Unity Commerce</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => scrollToSection(link.href)}
                data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="default"
              onClick={() => scrollToSection("#products")}
              data-testid="button-explore-products"
            >
              Explore Products
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-partner"
            >
              Partner With Us
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection(link.href)}
                data-testid={`link-mobile-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Button>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <Button
                variant="default"
                className="w-full"
                onClick={() => scrollToSection("#products")}
                data-testid="button-mobile-explore"
              >
                Explore Products
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-mobile-partner"
              >
                Partner With Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
