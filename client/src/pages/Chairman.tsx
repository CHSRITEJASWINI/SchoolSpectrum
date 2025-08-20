import { useState } from "react";

export default function Chairman() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Gradient blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-30 animate-blob"></div>

      <div className="relative max-w-5xl w-full flex flex-col items-center text-center space-y-10">
        
        {/* Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 tracking-wide">
            PROFILE
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Leadership ● Vision ● Integrity
          </p>
        </div>

        {/* Image + Info */}
        <div
          className="flex flex-col items-center space-y-4 relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className="rounded-full p-1 bg-yellow-400 animate-pulse">
            <img
              src="https://via.placeholder.com/400x400.png?text=Chairman+Image"
              alt="Chairman"
              className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-yellow-400 shadow-2xl"
            />
          </div>

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute top-0 -right-72 w-64 p-4 bg-gray-900 rounded-xl border border-yellow-400 shadow-lg text-left text-sm z-20">
              <p>🎓 PhD in Education</p>
              <p>🏫 20+ years of leadership</p>
              <p>🏆 Recipient of Excellence Award 2022</p>
            </div>
          )}

          <h2 className="text-2xl md:text-3xl font-semibold">Dr. Rakesh Sharma</h2>
          <p className="text-yellow-400 font-medium">
            Chairman, Krysalis International School
          </p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Dr. Rakesh Sharma is a visionary educator with over 20 years of
            experience in empowering young minds. His passion for holistic
            education and value-based learning has helped shape the identity
            of Krysalis International School as a centre of excellence.
          </p>
        </div>

        {/* Chairman Message + Read more toggle */}
        <div className="pt-8 w-full max-w-4xl space-y-6">
          <h3 className="text-3xl font-bold text-yellow-400 animate-fadeIn">
            Chairman’s Message
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed animate-fadeIn delay-200">
            Welcome to <span className="text-yellow-400">Krysalis International School</span>.
            Our primary mission is to foster a love for learning while encouraging moral
            values, creativity and critical thinking in every student.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed animate-fadeIn delay-400">
            Education is not just the pursuit of academic excellence. It is also about
            building character, resilience and empathy.
          </p>

          {showMore && (
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                We work hard to create an environment where every student feels inspired,
                supported and confident to explore their unique potential.
              </p>
              <p>
                Our goal is to develop responsible, emotionally intelligent and socially
                committed future leaders who make a positive impact in the world.
              </p>
            </div>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-6 py-2 rounded-full bg-yellow-400 text-black font-medium transition duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,255,0,0.5)]"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: scale(1) translate(0,0); }
          33% { transform: scale(1.2) translate(20px, -10px); }
          66% { transform: scale(0.9) translate(-20px, 10px); }
        }
        .animate-blob { animation: blob 8s infinite; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s forwards; }
        .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
        .animate-fadeIn.delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}
