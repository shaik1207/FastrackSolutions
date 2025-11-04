import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Hosted logo URL
  const logoUrl =
    "https://github.com/shaik1207/images/blob/main/WhatsApp%20Image%202025-11-03%20at%2019.19.49_6414f01b.jpg?raw=true";

  // ✅ Smooth Scroll Function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* ✅ Logo + Text */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <img
            src={logoUrl}
            alt="Fastrack Solutions Logo"
            className="w-12 h-12 object-contain rounded"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg md:text-xl font-extrabold text-blue-950">
              FASTRACK SOLUTIONS
            </h1>
            <p className="text-xs text-gray-700">
              Zen Solutions for Business Chaos
            </p>
          </div>
        </div>

        {/* ✅ Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-blue-600 transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-blue-600 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("services")}
              className="hover:text-blue-600 transition"
            >
              Our Services
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-600 transition"
            >
              
            </button>
          </li>
        </ul>

        {/* ✅ Contact Button */}
        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Contact us
        </button>

        {/* ✅ Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 px-6 py-4 space-y-4">
          <button
            onClick={() => handleScroll("home")}
            className="block text-blue-600 font-semibold w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="block text-gray-700 w-full text-left"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="block text-gray-700 w-full text-left"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
          >
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
