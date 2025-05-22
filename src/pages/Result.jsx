const Result = () => {
  // you can pass the result via props, state, or API call
  const riskLevel = "Low Risk"; // mock result

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <h2 className="text-3xl font-bold mb-4">Prediction Result</h2>
      <p className="text-xl text-green-700">Your heart risk is: <strong>{riskLevel}</strong></p>
    </div>
  );
};

export default Result;
