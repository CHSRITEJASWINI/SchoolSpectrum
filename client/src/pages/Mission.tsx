// src/pages/OurMission.tsx
import { Target } from "lucide-react";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 py-20 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        {/* Page Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 tracking-wide">
            Our Mission
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Fostering excellence, creativity & holistic growth
          </p>
        </motion.div>

        {/* Mission Block */}
        <motion.div
          className="glassmorphism bg-white/5 border border-white/10 rounded-3xl p-8 hover-lift backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mr-4">
              <Target className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            To provide world-class CBSE education that combines academic excellence with
            creative thinking, emotional intelligence, and practical life skills. We nurture
            each child's unique potential through personalized learning, modern technology,
            and a supportive environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
