import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Gradient background applied here */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] to-[#0f172a] opacity-90 z-0"></div>

      {/* Animated butterflies */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-4xl opacity-30 z-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🦋
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/3 text-3xl opacity-20 z-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🦋
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 text-2xl opacity-25 z-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        🦋
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center z-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
              alt="Children learning joyfully in modern classroom"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover mx-auto mb-8"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif">
            Transforming Learning into{" "}
            <span className="text-pink-400">Joyful Discovery</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Where young minds flourish through innovative CBSE education,
            cutting-edge technology, and holistic development in a nurturing
            environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-pink-500 text-white hover:bg-pink-600 rounded-2xl font-semibold px-8 py-4"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schedule a Campus Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-2xl font-semibold px-8 py-4"
            >
              Watch Virtual Tour
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
