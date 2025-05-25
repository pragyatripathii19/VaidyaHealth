// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-rose-500 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        

        

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Vaidya Health. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
