import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Academics() {
  const [activeTab, setActiveTab] = useState("pre-primary");

  const tabs = [
    { id: "pre-primary", label: "Pre-Primary" },
    { id: "primary", label: "Primary" },
    { id: "middle", label: "Middle" },
    { id: "senior", label: "Senior" },
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
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    "primary": {
      title: "Primary (Grades 1-5)",
      description: "Building strong foundations in core subjects while developing critical thinking and creativity through project-based learning.",
      features: [
        "CBSE curriculum with modern methods",
        "Digital literacy programs",
        "Science experiments and discovery",
        "Language development",
      ],
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    "middle": {
      title: "Middle School (Grades 6-8)",
      description: "Comprehensive subject mastery with focus on analytical thinking, research skills, and preparation for higher education.",
      features: [
        "Advanced CBSE curriculum",
        "STEM programs and robotics",
        "Research projects and presentations",
        "Competitive exam preparation",
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    "senior": {
      title: "Senior School (Grades 9-12)",
      description: "Specialized streams and career guidance with focus on board exam excellence and college preparation.",
      features: [
        "Science, Commerce, and Arts streams",
        "Career counseling and guidance",
        "Board exam preparation",
        "College admission support",
      ],
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
  };

  return (
    <section id="academics" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Academic <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
          <div className="glassmorphism rounded-2xl p-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id 
                    ? "bg-primary text-white" 
                    : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </motion.div>
        
        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glassmorphism rounded-3xl p-8"
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
                <ul className="space-y-3 text-gray-600">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-accent mr-3" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img 
                  src={tabContent[activeTab].image} 
                  alt={tabContent[activeTab].title}
                  className="rounded-2xl shadow-lg w-full h-80 object-cover" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
