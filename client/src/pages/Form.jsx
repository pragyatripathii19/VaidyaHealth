import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Form = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    chestPainType: '',
    bloodPressure: '',
    cholesterol: '',
    fastingBloodSugar: '',
    restECG: '',
    maxHeartRate: '',
    exerciseInducedAngina: '',
    oldpeak: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert string options to backend values here if needed
    navigate('/result');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />

      <div className="pt-28 px-4 flex flex-col items-center">
        <motion.h2
          className="text-3xl font-extrabold text-red-700 mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Enter Your Health Details
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          />

          {/* Gender */}
          <motion.select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          >
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </motion.select>

          {/* Chest Pain Type */}
          <motion.select
            name="chestPainType"
            value={formData.chestPainType}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          >
            <option value="">Chest Pain Type</option>
            <option value="0">Typical Angina</option>
            <option value="1">Atypical Angina</option>
            <option value="2">Non-anginal Pain</option>
            <option value="3">Asymptomatic</option>
          </motion.select>

          <motion.input
            type="number"
            name="bloodPressure"
            placeholder="Resting Blood Pressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          />

          <motion.input
            type="number"
            name="cholesterol"
            placeholder="Cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          />

          {/* Fasting Blood Sugar */}
          <motion.select
            name="fastingBloodSugar"
            value={formData.fastingBloodSugar}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          >
            <option value="">Fasting Blood Sugar > 120?</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </motion.select>

          {/* Rest ECG */}
          <motion.select
            name="restECG"
            value={formData.restECG}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          >
            <option value="">Rest ECG Results</option>
            <option value="0">Normal</option>
            <option value="1">ST-T Wave Abnormality</option>
            <option value="2">Probable/Definite Left Ventricular Hypertrophy</option>
          </motion.select>

          <motion.input
            type="number"
            name="maxHeartRate"
            placeholder="Max Heart Rate Achieved"
            value={formData.maxHeartRate}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          />

          {/* Exercise Induced Angina */}
          <motion.select
            name="exerciseInducedAngina"
            value={formData.exerciseInducedAngina}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          >
            <option value="">Exercise Induced Angina?</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </motion.select>

          <motion.input
            type="number"
            name="oldpeak"
            placeholder="Oldpeak (ST Depression)"
            value={formData.oldpeak}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg"
            variants={inputVariants}
            required
          />

          {/* Submit Button */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={inputVariants}
          >
            <motion.button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-full font-bold text-lg shadow-md hover:shadow-xl transition hover:brightness-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Form;
