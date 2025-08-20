import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setIsAboutDropdownOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const aboutLinks = [
    "Chairman",
    "Managing director",
    "principal",
    "Mission",
    "Vision",
    "contact",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-[Poppins] overflow-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-gray-700 shadow-lg"
            : "bg-black/60"
        }`}
      >
        {/* === main navbar === */}
        <div className="container mx-auto px-4 py-5 relative z-10 flex justify-between items-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Krysalis International School
          </h1>

          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <button onClick={() => scrollToSection("home")} className="hover:text-yellow-400 hover:scale-110 hover:drop-shadow-lg transition-all capitalize">Home</button>

            <div className="relative">
              <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} className="hover:text-yellow-400 hover:scale-110 hover:drop-shadow-lg flex items-center gap-1 transition-all capitalize">
                About <ChevronDown className="w-4 h-4" />
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute mt-2 bg-black/70 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl py-2 w-60 z-50 animate-fade-in">
                  <a href="/chairman" className="block px-4 py-2 hover:bg-gray-800/60 hover:text-yellow-400 capitalize">Chairman</a>
                  <a href="/managing-director" className="block px-4 py-2 hover:bg-gray-800/60 hover:text-yellow-400 capitalize">Managing Director</a>
                  <a href="/principal" className="block px-4 py-2 hover:bg-gray-800/60 hover:text-yellow-400 capitalize">Principal</a>
                  <a href="/mission" className="block px-4 py-2 hover:bg-gray-800/60 hover:text-yellow-400 capitalize">Mission</a>
                  <a href="/vision" className="block px-4 py-2 hover:bg-gray-800/60 hover:text-yellow-400 capitalize">Vision</a>
                  <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 hover:bg-gray-800/60 hover:text-yellow-400 capitalize">contact</button>
                </div>
              )}
            </div>

            {["academics", "facilities", "gallery"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="hover:text-yellow-400 hover:scale-110 hover:drop-shadow-lg transition-all capitalize">
                {item}
              </button>
            ))}
          </div>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsAboutDropdownOpen(false); }}>
            {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-3 text-white text-lg animate-fade-in">
            {["home", "academics", "facilities", "gallery", "contact","About"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left font-medium hover:text-yellow-400 transition capitalize">
                {item}
              </button>
            ))}

            <div className="space-y-1">
              <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} className="block w-full text-left font-medium hover:text-yellow-400 transition capitalize">
                About <ChevronDown className="inline w-4 h-4" />
              </button>
              {isAboutDropdownOpen && (
                <div className="pl-4 space-y-1 animate-fade-in">
                  {aboutLinks.map((subItem) => (
                    <button key={subItem} onClick={() => scrollToSection(subItem)} className="block w-full text-left text-sm hover:text-yellow-400 capitalize">
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ----- Hero Section with Transparent Video Background (Full height) ----- */}
      <section className="relative min-h-screen flex items-center">
        <video
          src="/kid-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-xl space-y-8 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              Your Kids Deserve <br />
              <span className="text-yellow-400">The Best Education</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 font-medium">
              Active Learning, Expert Teachers & Safe Environment
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-yellow-400 text-black text-lg px-8 py-4 font-bold rounded-full hover:scale-110 hover:shadow-yellow-400/50 hover:shadow-lg transition-all"
            >
              Admission Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
