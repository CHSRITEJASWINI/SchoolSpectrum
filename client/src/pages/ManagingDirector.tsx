// src/pages/ManagingDirector.tsx
import { useEffect, useState } from "react";

export default function ManagingDirector() {
  const [typedText, setTypedText] = useState("");
  const [showMore, setShowMore] = useState(false);

  const fullText =
    "Leadership is not about a title. It is about inspiring others and creating an environment where every student thrives.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left side */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-yellow-400 text-sm uppercase tracking-wider animate-fade-slide">
            “Inspired Leadership”
          </p>
          <div className="relative">
            <div className="absolute -z-10 w-96 h-96 bg-yellow-400 blur-3xl opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="https://via.placeholder.com/450x450.png?text=Managing+Director"
              alt="Managing Director"
              className="rounded-xl w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,0,0.7)]"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-4 opacity-0 translate-y-6 animate-fade-slide">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Managing Director
          </h1>
          <h2 className="text-2xl font-semibold">Mrs. Priya Nair</h2>

          <p className="text-gray-300 leading-relaxed">
            Mrs. Priya Nair is a dynamic leader with over 18 years of experience in the
            field of education management. Her forward-thinking approach focuses on
            academic excellence, innovation and student-centric growth.
          </p>

          <p className="text-yellow-400 text-lg font-medium">
            {typedText}<span className="animate-blink">|</span>
          </p>

          {/* Toggle Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-6 py-2 rounded-full bg-yellow-400 text-black font-medium transition duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,255,0,0.5)]"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>

          {/* Extra content */}
          {showMore && (
            <div className="text-gray-300 mt-4 space-y-3">
              <p>
                She believes that every learner is unique and that true education goes beyond textbooks.
                Under her leadership, our school has introduced innovative learning methodologies that
                integrate technology, creativity, and character development.
              </p>
              <p>
                Her vision is to create a nurturing environment where students become confident,
                responsible and compassionate citizens who contribute positively to society.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes fadeSlide {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide {
          animation: fadeSlide 0.8s forwards;
        }
      `}</style>
    </div>
  );
}
