import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Enrollment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Enrollment Process
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shape your child’s future with{" "}
          <span className="font-semibold">Krysalis International School</span>
        </motion.p>
        <Link href="/application-form">
          <a className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200">
            Apply Now
          </a>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Step by Step */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">How to Enroll?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Fill Application Form", desc: "Complete the online form with student & parent details." },
              { step: "2", title: "Upload Documents", desc: "Submit required documents (Birth, TC, Marksheet, ID)." },
              { step: "3", title: "Pay Registration Fee", desc: "Proceed with secure online payment for registration." },
              { step: "4", title: "Interaction", desc: "Attend interaction with the admissions team." },
              { step: "5", title: "Confirmation", desc: "Receive official confirmation via email/SMS." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  Step {item.step}: {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Important Dates */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Important Dates</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { date: "March 15, 2025", event: "Admissions Open" },
              { date: "April 30, 2025", event: "Last Date to Apply" },
              { date: "May 10, 2025", event: "Entrance Interaction" },
            ].map((item, i) => (
              <div key={i} className="bg-blue-100 rounded-lg p-6 shadow">
                <h4 className="font-semibold text-lg">{item.event}</h4>
                <p className="text-gray-700">{item.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Documents Required</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
            <li>✅ Birth Certificate</li>
            <li>✅ Transfer Certificate</li>
            <li>✅ Previous Academic Records</li>
            <li>✅ Address & ID Proof</li>
            <li>✅ Passport size Photos</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-blue-50 text-center py-10 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-3">Need Help?</h3>
          <p className="text-gray-700">
            Contact our admissions team at{" "}
            <a href="mailto:admissions@krysalis.edu" className="text-blue-600 underline">
              admissions@krysalis.edu
            </a>{" "}
            or call <span className="font-semibold">+91-9876543210</span>
          </p>
        </section>
      </div>
    </div>
  );
}
