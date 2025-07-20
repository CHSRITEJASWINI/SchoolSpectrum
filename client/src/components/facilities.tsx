import { motion } from "framer-motion";
import { MonitorSpeaker, Bot, Gamepad2, Volleyball, Laptop, Shield } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: MonitorSpeaker,
      title: "Digital Classrooms",
      description: "Interactive smart boards, projectors, and digital learning tools for immersive education experience.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "primary",
    },
    {
      icon: Bot,
      title: "AI & Robotics Lab",
      description: "Cutting-edge lab with robotics kits, AI programming tools, and STEM learning modules.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "secondary",
    },
    {
      icon: Gamepad2,
      title: "Play Stations",
      description: "Dedicated recreational areas with modern play equipment and supervised activities.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "accent",
    },
    {
      icon: Volleyball,
      title: "Sports Ground",
      description: "Multi-purpose sports facilities including football field, cricket nets, and volleyball court.",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "warning",
    },
    {
      icon: Laptop,
      title: "Computer Labs",
      description: "State-of-the-art computer labs with latest software and programming environments.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Safe Transport & CCTV",
      description: "GPS-enabled school buses with trained drivers and comprehensive CCTV surveillance.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "secondary",
    },
  ];

  return (
    <section
      id="facilities"
      className="py-20 bg-gradient-to-r from-[#020617] to-[#0f172a] text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            State-of-the-art infrastructure designed for comprehensive learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-3xl p-8 text-center hover-lift bg-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-20 h-20 bg-${facility.color}/20 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <facility.icon
                  className={`text-${facility.color}`}
                  size={32}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {facility.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {facility.description}
              </p>
              <div className="mt-6">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="rounded-2xl shadow-md w-full h-40 object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
