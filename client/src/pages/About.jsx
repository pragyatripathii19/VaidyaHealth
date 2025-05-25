// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, ShieldCheck, Cpu, UserCheck, AlertTriangle } from "lucide-react";
import Navbar from "../components/Navbar"
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      ease: "easeOut",
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
  hover: { scale: 1.05 }
};

const About = () => {
  return (
    <div>
      <Navbar/>
      <motion.section
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6 md:px-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-14"
          variants={itemVariants}
        >
          <motion.div className="mb-10 text-center" variants={itemVariants}>
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4 flex items-center justify-center gap-2">
              <HeartPulse className="w-8 h-8 text-red-500" />
              About VaidyaHealth
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              "VaidyaHealth" is an intelligent, machine learning–powered tool designed to predict the risk of hospital readmission within 30 days for heart failure patients. Developed by *Team VaidyaCoders* (Pragya Tripathi, Nakul Jain, Akshit, Priyanshu), it empowers clinicians and patients to make proactive, data-driven decisions aimed at improving recovery outcomes and reducing avoidable readmissions.

            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-10" variants={containerVariants}>
            <motion.div
              className="bg-blue-50 rounded-xl p-6 shadow-sm cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
                <h2 className="text-xl font-semibold text-blue-600">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To reduce preventable hospital readmissions by enabling early risk detection, providing healthcare providers and patients with actionable insights that improve post-discharge care and patient wellbeing.
              </p>
            </motion.div>

            <motion.div
              className="bg-green-50 rounded-xl p-6 shadow-sm cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="text-green-600 w-6 h-6" />
                <h2 className="text-xl font-semibold text-green-600">How It Works</h2>
              </div>
              <p className="text-gray-700 mb-3">Our ML model analyzes key clinical and demographic features, including:
</p>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Patient age and length of hospital stay</li>
                <li>Common diagnosis codes (ICD-9) related to heart failure and comorbidities
</li>
                <li>Laboratory Results of over 50 lab values and vital signs</li>
                <li>Clinical History (length of hospital stay, number of prior diagnoses etc)</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-purple-50 rounded-xl p-6 shadow-sm cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-purple-600 w-6 h-6" />
                <h2 className="text-xl font-semibold text-purple-600">Data Privacy</h2>
              </div>
              <p className="text-gray-700">
                VaidyaHealth processes patient data only during prediction and does *not* store, share, or retain any personal information. Ensuring your privacy and data security is our utmost priority.

              </p>
            </motion.div>

            <motion.div
              className="bg-yellow-50 rounded-xl p-6 shadow-sm cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <UserCheck className="text-yellow-600 w-6 h-6" />
                <h2 className="text-xl font-semibold text-yellow-600">Built By</h2>
              </div>
              <p className="text-gray-700">
                Developed by *Team VaidyaCoders* — Pragya Tripathi, Nakul Jain, Akshit, and Priyanshu — passionate about applying technology to solve real-world healthcare challenges.

              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 bg-red-50 rounded-xl p-6 shadow-sm border border-red-200"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="text-red-600 w-5 h-5" />
              <h2 className="text-lg font-semibold text-red-600">Disclaimer</h2>
            </div>
            <p className="text-sm text-gray-700">
              This tool is intended solely for educational and preliminary screening purposes. It is *not* a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for any medical concerns.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
