import { motion } from "framer-motion";

export default function WhyKrysalis() {
  const values = [
    {
      icon: "🎨",
      title: "Creative Learning",
      description: "Innovative teaching methods that spark creativity and critical thinking through hands-on projects and interactive learning experiences.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: "🔒",
      title: "Digital Safety",
      description: "Comprehensive digital literacy programs with cybersecurity awareness and responsible technology usage education.",
      gradient: "from-pink-500 to-yellow-500",
    },
    {
      icon: "💝",
      title: "Emotional Support",
      description: "Dedicated counselors and mentors providing emotional guidance and support for holistic personality development.",
      gradient: "from-rose-500 to-fuchsia-600",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#020617] to-[#0f172a] text-white"
      id="why-krysalis"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">Krysalis?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Discover what makes us the preferred choice for modern education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="rounded-3xl p-8 text-center bg-white/5 backdrop-blur-md shadow-xl border border-white/10 transition-all hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-24 h-24 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}>
                <span className="text-white text-4xl">{value.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-wide">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
