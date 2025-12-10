import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp, Phone } from "lucide-react";

export default function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918639309447", "_blank");
  };

  const makeCall = () => {
    window.location.href = "tel:+918639309447";
  };

  return (
    <>
      {/* WhatsApp Float */}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col space-y-4">
        <Button
          onClick={openWhatsApp}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg animate-float"
        >
          <MessageCircle className="text-white" size={24} />
        </Button>

        {/* Call Float */}
        <Button
          onClick={makeCall}
          className="w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg animate-float"
        >
          <Phone className="text-white" size={24} />
        </Button>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <div className="fixed bottom-36 right-24 z-50">
          <Button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-full shadow-lg transition-opacity"
          >
            <ArrowUp className="text-white" size={20} />
          </Button>
        </div>
      )}
    </>
  );
}
