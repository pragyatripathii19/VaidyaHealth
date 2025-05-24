// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, ShieldCheck, Cpu, UserCheck, AlertTriangle } from "lucide-react";

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
            About HeartCheck
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            HeartCheck is an intelligent, machine learning–based tool that predicts the risk of <strong>hospital readmission</strong>. It helps both patients and healthcare providers make proactive, data-driven decisions to improve recovery outcomes.
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
              To reduce avoidable hospital readmissions through early detection, empowering healthcare systems and individuals with actionable insights and better post-discharge care.
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
            <p className="text-gray-700 mb-3">Our ML model analyzes key features such as:</p>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Age & Length of Stay</li>
              <li>Diagnosis & Procedure Codes</li>
              <li>Number of Prior Visits</li>
              <li>Medication & Treatment History</li>
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
              HeartCheck processes your inputs only during prediction. No data is stored or shared. Your privacy and safety are always prioritized.
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
              Created by <strong>Nakul Jain</strong>, a passionate web developer and ML enthusiast who believes in using technology to solve real-world healthcare problems.
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
            This tool is meant for educational and preliminary screening purposes only.
            It is <strong>not a substitute for professional medical advice</strong>. Always consult qualified healthcare professionals for any health-related concerns.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
