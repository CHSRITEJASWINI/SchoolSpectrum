import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Academics from "@/components/academics";
import Facilities from "@/components/facilities";
import WhyKrysalis from "@/components/why-krysalis";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";

export default function Home() {
  return (
    <div className="min-h-screen beautiful-gradient">
      <Navigation />
      <Hero />
      <About />
      <Academics />
      <Facilities />
      <WhyKrysalis />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingElements />
      
    </div>
  );
}
