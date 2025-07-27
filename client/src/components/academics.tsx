import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Academics() {
  const [activeTab, setActiveTab] = useState("pre-primary");

  const tabs = [
    { id: "pre-primary", label: "Pre-Primary" },
    { id: "primary", label: "Primary" },
    { id: "High School", label: "High School" },
  ];

  const tabContent = {
    "pre-primary": {
      title: "Pre-Primary (Ages 3-5)",
      description: "Our foundation program focuses on play-based learning, sensory development, and social skills through interactive activities and storytelling.",
      features: [
        "Play-based learning methodology",
        "Sensory development activities",
        "Basic numeracy and literacy",
        "Art and craft sessions",
      ],
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&h=400",
    },
    "primary": {
      title: "Primary (Grades 1-5)",
      description: "Building strong foundations in core subjects while developing critical thinking and creativity through project-based learning.",
      features: [
        "CBSE curriculum with modern methods",
        "Digital literacy programs",
        "Science experiments and discovery",
        "Language development",
      ],image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&h=400",
    },
    
    "High School": {
      title: "Senior School (Grades 6-10)",
      description: "Specialized streams and career guidance with focus on board exam excellence and college preparation.",
      features: [
        "Science, Commerce, and Arts streams",
        "Career counseling and guidance",
        "Board exam preparation",
        "College admission support",
      ],
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&h=400",
    },
  };

  return (
    <section id="academics" className="py-20 px-4 bg-gradient-to-r from-[#020617] to-[#0f172a] font-sans">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Academic <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive CBSE curriculum designed for holistic development
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-2 shadow-lg">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md" 
                    : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-xl"
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-slate-200 mb-6 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
                <ul className="space-y-3 text-slate-300 text-base">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-400 mr-3 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img 
                  src={tabContent[activeTab].image} 
                  alt={tabContent[activeTab].title}
                  className="rounded-3xl shadow-2xl w-full h-[350px] object-cover border border-white/10" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
