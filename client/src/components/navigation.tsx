import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200" : "bg-white/95 backdrop-blur-md"
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl butterfly-float">🦋</span>
            <span className="text-2xl font-bold text-gradient">Krysalis</span>
            <span className="text-gray-600 font-medium hidden sm:inline">International School</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("academics")} className="text-gray-700 hover:text-primary transition-colors">
              Academics
            </button>
            <button onClick={() => scrollToSection("facilities")} className="text-gray-700 hover:text-primary transition-colors">
              Facilities
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-gray-700 hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white hover:bg-primary/90 rounded-2xl"
            >
              Enroll Now
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left text-gray-700 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-gray-700 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("academics")} className="block w-full text-left text-gray-700 hover:text-primary transition-colors">
              Academics
            </button>
            <button onClick={() => scrollToSection("facilities")} className="block w-full text-left text-gray-700 hover:text-primary transition-colors">
              Facilities
            </button>
            <button onClick={() => scrollToSection("gallery")} className="block w-full text-left text-gray-700 hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-gray-700 hover:text-primary transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
