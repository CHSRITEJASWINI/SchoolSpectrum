import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Facebook, Instagram, Youtube, Send } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl">🦋</span>
              <span className="text-2xl font-bold">Krysalis</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming education through innovation, creativity, and holistic development.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 bg-primary/20 rounded-full hover:bg-primary/30"
              >
                <Facebook className="text-primary" size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 bg-primary/20 rounded-full hover:bg-primary/30"
              >
                <Instagram className="text-primary" size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 bg-primary/20 rounded-full hover:bg-primary/30"
              >
                <Youtube className="text-primary" size={16} />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("academics")} className="hover:text-white transition-colors">
                  Academics
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("facilities")} className="hover:text-white transition-colors">
                  Facilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("gallery")} className="hover:text-white transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Admissions</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/enrollment" className="hover:text-white transition-colors">Enrollment Process</a></li>

              <li><a href="/fee-structure" className="hover:text-white transition-colors">Fee Structure</a></li>
              <li><a href="/application-form" className="hover:text-white transition-colors">Application Form</a></li>
              <li><a href="/scholarships" className="hover:text-white transition-colors">Scholarships</a></li>
    
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and events</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email"
                className="flex-1 rounded-l-xl bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-r-xl">
                <Send size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Krysalis International School. All rights reserved. <br />
            Developed by{" "}
            <a 
              href="https://your-link-here.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              Tejuuu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
