import { motion } from "framer-motion";

export default function WhyKrysalis() {
  const values = [
    {
      icon: "🎨",
      title: "Creative Learning",
      description: "Innovative teaching methods that spark creativity and critical thinking through hands-on projects and interactive learning experiences.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: "🔒",
      title: "Digital Safety",
      description: "Comprehensive digital literacy programs with cybersecurity awareness and responsible technology usage education.",
      gradient: "from-accent to-primary",
    },
    {
      icon: "💝",
      title: "Emotional Support",
      description: "Dedicated counselors and mentors providing emotional guidance and support for holistic personality development.",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-gradient">Krysalis?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for modern education
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-3xl p-8 text-center hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-24 h-24 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white text-4xl">{value.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
