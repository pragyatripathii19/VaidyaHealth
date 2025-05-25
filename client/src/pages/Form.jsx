import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const top_features = [
  'RDW_BLOOD',
  'Chloride_BLOOD',
  'White_Blood_Cells_BLOOD',
  'Red_Blood_Cells_BLOOD',
  'num_diagnoses',
  'Cortisol_BLOOD',
  'Bicarbonate_BLOOD',
  'Hemoglobin_BLOOD',
  'MCH_BLOOD',
  'NTproBNP_BLOOD',
  'hematocrit',
  'Neutrophils_BLOOD',
  'platelet_count',
  'Troponin_I_BLOOD',
  'Creatinine_BLOOD',
  'chloride',
  'Asparate_Aminotransferase_AST__BLOOD',
  'Digoxin_BLOOD',
  'Urea_Nitrogen_BLOOD',
  'MCHC_BLOOD'
];

const Form = () => {
  // Initialize formData with all top features set to empty string
  const [formData, setFormData] = useState(
    top_features.reduce((acc, feat) => ({ ...acc, [feat]: '' }), {})
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/predict/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to get prediction');

      const data = await response.json();
      navigate('/result', { state: { ...data } });
    } catch (error) {
      console.error('Prediction error:', error);
      alert('Something went wrong while getting prediction.');
    }
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
          className="w-full max-w-5xl bg-white p-8 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {top_features.map((feature) => (
            <motion.input
              key={feature}
              type="number"
              step="any"
              name={feature}
              placeholder={feature.replace(/_/g, ' ')}
              value={formData[feature]}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg"
              variants={inputVariants}
              required
            />
          ))}

          <motion.div className="col-span-1 md:col-span-2 flex justify-center" variants={inputVariants}>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition duration-300"
            >
              Submit
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Form;