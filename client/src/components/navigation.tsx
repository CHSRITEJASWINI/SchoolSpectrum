import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Search,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Search handler
  const handleSearch = () => {
    const keywordMap: { [key: string]: string } = {
      fees: "/fee-structure",
      "fee structure": "/fee-structure",
      admission: "/application-form",
      scholarship: "/scholarships",
      application: "/application-form",
      contact: "/contact",
      "about us": "/about",
      principal: "/principal",
      mission: "/mission",
      vision: "/vision",
      chairman: "/chairman",
      "managing director": "/managing-director",
    };

    const key = searchQuery.trim().toLowerCase();

    if (keywordMap[key]) {
      window.location.href = keywordMap[key]; // redirect
    } else {
      alert("No internal page found for this keyword.");
    }

    setSearchQuery("");
    setIsSearchOpen(false);
  };

  // About links with paths
  const aboutLinks = [
    { name: "Chairman", path: "/chairman" },
    { name: "Managing Director", path: "/managing-director" },
    { name: "Principal", path: "/principal" },
    { name: "Mission", path: "/mission" },
    { name: "Vision", path: "/vision" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-[Poppins] overflow-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-700 shadow-lg"
            : "bg-black/70"
        }`}
      >
        {/* Top Info Bar */}
        <div className="hidden md:flex justify-between items-center bg-black/50 px-6 py-3 text-gray-300 text-base">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Mail size={18} />{" "}
              <span>krysalisinternationalschool@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} /> <span>+91 8639309447</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-yellow-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Youtube size={20} />
            </a>

            {/* Search Icon */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:text-yellow-400"
              >
                <Search size={20} />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl p-2 flex">
                  <input
                    type="text"
                    placeholder="Search internal pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                    }}
                    className="flex-1 bg-transparent border-none outline-none text-white px-2 py-1"
                  />
                  <button
                    onClick={handleSearch}
                    className="text-yellow-400 px-2"
                  >
                    Go
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-4 py-4 relative z-10 flex justify-between items-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Krysalis International School
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-yellow-400 hover:scale-110 hover:drop-shadow-lg transition-all capitalize"
            >
              Home
            </button>

            <div className="relative">
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="hover:text-yellow-400 hover:scale-110 hover:drop-shadow-lg flex items-center gap-1 transition-all capitalize"
              >
                About <ChevronDown className="w-4 h-4" />
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute mt-2 bg-black/80 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl py-2 w-60 z-50 animate-fade-in">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.path}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-800/60 hover:text-yellow-400 capitalize"
                    >
                      {link.name}
                    </a>
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsAboutDropdownOpen(false);
            }}
          >
            {isMobileMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-3 text-white text-lg animate-fade-in">
            {["home", "academics", "facilities", "gallery", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left font-medium hover:text-yellow-400 transition capitalize"
                >
                  {item}
                </button>
              )
            )}

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
                    <a
                      key={subItem.name}
                      href={subItem.path}
                      className="block w-full text-left text-sm hover:text-yellow-400 capitalize"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
