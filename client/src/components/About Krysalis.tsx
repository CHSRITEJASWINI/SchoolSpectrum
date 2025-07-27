import { motion } from "framer-motion";
import { Eye, Target, School, Cpu, Trophy } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-[#020617] to-[#0f172a] font-[Poppins] text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-yellow-400">Krysalis</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nurturing young minds through innovative education and holistic
            development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="glassmorphism bg-white/5 border border-white/10 rounded-3xl p-8 hover-lift backdrop-blur-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mr-4">
                <Eye className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To be a globally recognized institution that transforms
              traditional education through innovative methodologies, technology
              integration, and character development, creating future leaders
              who are academically excellent, emotionally intelligent, and
              socially responsible.
            </p>
          </motion.div>

          <motion.div
            className="glassmorphism bg-white/5 border border-white/10 rounded-3xl p-8 hover-lift backdrop-blur-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              To provide world-class CBSE education that combines academic
              excellence with creative thinking, emotional intelligence, and
              practical life skills. We nurture each child's unique potential
              through personalized learning, modern technology, and a supportive
              environment.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Our Journey</h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-cyan-400 rounded-full"></div>

            <div className="space-y-12">
              {/* 2018 */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                      2018
                    </h4>
                    <p className="text-gray-300">
                      Foundation established with focus on innovative education
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center relative z-10">
                  <School className="text-white" size={20} />
                </div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2020 */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 pr-8"></div>
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center relative z-10">
                  <Cpu className="text-white" size={20} />
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                      2020
                    </h4>
                    <p className="text-gray-300">
                      Digital transformation with AI-powered classrooms
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2025 */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                      2025
                    </h4>
                    <p className="text-gray-300">
                      Awarded "Best Innovation in Education" recognition
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center relative z-10">
                  <Trophy className="text-white" size={20} />
                </div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
