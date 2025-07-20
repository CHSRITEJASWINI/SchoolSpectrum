import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl p-12 text-white bg-gradient-to-br from-[#020617] to-[#0f172a] shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-[Poppins]">
              Ready to Transform Your Child's Future?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-light">
              Join thousands of families who have chosen Krysalis for their children's educational journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#020617] hover:bg-gray-100 rounded-2xl font-bold px-8 py-4"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule a Visit
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#020617] rounded-2xl font-bold px-8 py-4"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
