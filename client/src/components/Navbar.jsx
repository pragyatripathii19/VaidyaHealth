// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-rose-50 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo with Icon */}
        <Link to="/" className="flex items-center space-x-2">
          <HeartPulse className="text-rose-600 h-8 w-8" />
          <span className="text-3xl font-bold text-rose-600 tracking-wide">VaidyaHealth</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="text-gray-800 hover:text-rose-600 transition duration-200">Home</Link>
          <Link to="/form" className="text-gray-800 hover:text-rose-600 transition duration-200">Check Now</Link>
          <Link to="/about" className="text-gray-800 hover:text-rose-600 transition duration-200">About</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-7 w-7 text-rose-600" /> : <Menu className="h-7 w-7 text-rose-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-rose-50 px-6 pb-4 space-y-4 text-base font-medium shadow">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-rose-600">Home</Link>
          <Link to="/form" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-rose-600">Check Now</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-rose-600">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
