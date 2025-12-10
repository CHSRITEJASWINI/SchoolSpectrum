import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import myPic from "@/public/teju.jpg";

export default function DeveloperProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center border border-gray-200"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto w-32 h-32"
        >
          <img
            src={myPic}                    // <-- mee image
            alt="Sritejaswini"
            className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md mx-auto object-cover"
          />
        </motion.div>

        {/* Name */}
        <h1 className="text-3xl font-bold mt-6 text-gray-800">
          Sritejaswini Ch
        </h1>
        <p className="text-gray-500 text-lg mt-1">
          Aspiring Full Stack Developer 🚀
        </p>

        {/* Bio */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          Passionate about Web Development and AI. Experienced in building
          innovative MERN stack projects & enthusiastic about creating modern
          real-time applications.
        </p>

        {/* Contact Links */}
        <div className="mt-6 flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/CHSRITEJASWINI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/sritejaswini-ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:chsritejaswini@gmail.com"
            className="text-red-500 hover:text-red-700"
          >
            <Mail size={28} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
