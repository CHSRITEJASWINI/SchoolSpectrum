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
    "about krysalis",
    "chairman",
    "managing director",
    "principal",
    "our mission",
    "our vision",
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
        {/* Emoji Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="absolute text-xl sm:text-2xl md:text-3xl animate-fly-up"
              style={{
                left: `${10 + i * 15}%`,
                bottom: `${Math.random() * 60 + 10}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              🦋
            </span>
          ))}
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-4 py-5 relative z-10 flex justify-between items-center">
          {/* Logo */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Krysalis International School
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-yellow-400 hover:scale-110 hover:drop-shadow-lg transition-all capitalize"
            >
              Home
            </button>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="hover:text-yellow-400 hover:scale-110 hover:drop-shadow-lg flex items-center gap-1 transition-all capitalize"
              >
                About <ChevronDown className="w-4 h-4" />
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute mt-2 bg-black/70 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl py-2 w-60 z-50 animate-fade-in">
                  {aboutLinks.map((subItem) => (
                    <button
                      key={subItem}
                      onClick={() => scrollToSection(subItem)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-800/60 hover:text-yellow-400 capitalize"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {["academics", "facilities", "gallery"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-yellow-400 hover:scale-110 hover:drop-shadow-lg transition-all capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsAboutDropdownOpen(false);
            }}
          >
            {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-3 text-white text-lg animate-fade-in">
            {["home", "academics", "facilities", "gallery", "contact","About"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left font-medium hover:text-yellow-400 transition capitalize"
              >
                {item}
              </button>
            ))}

            {/* Mobile About Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="block w-full text-left font-medium hover:text-yellow-400 transition capitalize"
              >
                About <ChevronDown className="inline w-4 h-4" />
              </button>
              {isAboutDropdownOpen && (
                <div className="pl-4 space-y-1 animate-fade-in">
                  {aboutLinks.map((subItem) => (
                    <button
                      key={subItem}
                      onClick={() => scrollToSection(subItem)}
                      className="block w-full text-left text-sm hover:text-yellow-400 capitalize"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="max-w-xl space-y-8 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Your Kids Deserve <br />
            <span className="text-yellow-400 drop-shadow-lg">The Best Education</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-medium">
            Active Learning, Expert Teachers & Safe Environment
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-yellow-400 text-black text-lg px-8 py-4 font-bold rounded-full hover:scale-110 hover:shadow-yellow-400/50 hover:shadow-lg transition-all"
          >
            Admission Now
          </Button>
        </div>

        {/* Hero Video */}
        <div className="relative">
          <div className="w-full max-w-[1000px] h-[600px] rounded-2xl shadow-2xl overflow-hidden">
            <video
              src="/kid-video.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      {/* Decorative Blobs */}
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-yellow-400 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-400 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* Animations */}
      <style>{`
        @keyframes fly-up {
          0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(-20vh) scale(1.2); opacity: 0; }
        }
        .animate-fly-up {
          animation: fly-up 10s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
