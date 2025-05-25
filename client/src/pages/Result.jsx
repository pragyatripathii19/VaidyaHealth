import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Result = () => {
  const location = useLocation();
  const prediction = location.state?.prediction;
  const prob0 = location.state?.probability_class_0;
  const prob1 = location.state?.probability_class_1;

  const isLowRisk = prediction === 0;
  const riskLabel = isLowRisk ? 'Low Risk' : 'High Risk';
  const riskColor = isLowRisk ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
  const riskBorder = isLowRisk ? 'border-green-300' : 'border-red-300';

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-rose-100 p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`bg-white rounded-3xl shadow-2xl border-2 ${riskBorder} p-8 max-w-xl w-full text-center`}>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">🩺 Prediction Result</h1>

        {prediction !== undefined ? (
          <>
            <div className={`inline-block px-6 py-2 rounded-full text-lg font-semibold mb-4 ${riskColor}`}>
              {riskLabel}
            </div>

            <div className="mt-4 space-y-2 text-lg text-gray-700">
              <p>
                <span className="font-medium">Probability of Low Risk (Class 0):</span>{' '}
                {(prob0 * 100).toFixed(2)}%
              </p>
              <p>
                <span className="font-medium">Probability of High Risk (Class 1):</span>{' '}
                {(prob1 * 100).toFixed(2)}%
              </p>
            </div>
          </>
        ) : (
          <p className="text-xl text-gray-600 mt-4">No prediction available.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Result;
