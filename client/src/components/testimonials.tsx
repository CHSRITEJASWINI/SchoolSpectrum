import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Krysalis has transformed our daughter's approach to learning. The teachers are incredibly supportive, and the innovative curriculum has made her excited about school every day.",
      name: "Priya & Rajesh Sharma",
      role: "Parents of Grade 5 student",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      quote: "The AI and robotics program has sparked my son's interest in technology. He comes home excited to share what he learned and is already planning his future career in tech.",
      name: "Meera & Suresh Kumar",
      role: "Parents of Grade 8 student",
      icon: "👨‍👩‍👧",
    },
    {
      quote: "Krysalis prepared me well for board exams and helped me discover my passion for science. The teachers' guidance and support made all the difference in my academic journey.",
      name: "Aisha Patel",
      role: "Grade 12 Graduate",
      icon: "🎓",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
            What <span className="text-gradient">Parents Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied parents and students
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glassmorphism rounded-3xl p-8 text-center h-full flex flex-col justify-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-3xl">{testimonial.icon}</span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-500 fill-current" size={20} />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
