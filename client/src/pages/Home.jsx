// src/pages/Home.jsx
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/heartbeat2.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-white to-rose-100 min-h-screen text-gray-800 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-28 gap-10">
        {/* Text Content */}
        <div className="z-10 flex-1">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-red-700 leading-tight drop-shadow-md">
            Predict Heart Disease Risk <br />
            <span className="text-red-500">with ML Power</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl leading-relaxed">
            Welcome to <strong>Vaidya Healthcare</strong> — your AI-powered health companion.
            Get accurate heart disease predictions instantly with our smart tool.
          </p>
          <div className="mt-8">
            <a href="/form">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-red-700 transition duration-300">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Animation */}
        <div className="flex-1 flex justify-center items-center z-0">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '420px', width: '420px' }}
            className="pointer-events-none opacity-90"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 lg:px-20 rounded-t-3xl shadow-inner">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-700 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to give you quick, secure, and medically-informed results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-red-50 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-red-600 mb-2">⚡ Fast & Reliable</h3>
            <p className="text-gray-600">
              Get predictions in seconds using a trusted ML model trained on real medical data.
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-red-600 mb-2">🔒 Private & Secure</h3>
            <p className="text-gray-600">
              We don’t store any personal information. Your health data stays with you.
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-red-600 mb-2">🧠 Expert Insights</h3>
            <p className="text-gray-600">
              Built with guidance from healthcare professionals and AI experts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 px-6 lg:px-20 text-center bg-rose-100">
        <h3 className="text-3xl lg:text-4xl font-bold text-red-700 mb-4">
          Ready to know your heart health status?
        </h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Take our quick and easy ML-based test to get personalized insights.
        </p>
        <a href="/form">
          <button className="mt-2 px-8 py-3 bg-red-600 text-white rounded-full text-lg hover:bg-red-700 shadow-md transition">
            Take the Test Now
          </button>
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
