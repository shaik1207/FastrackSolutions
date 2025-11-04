import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👇 Reveal footer when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden transform transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 px-6 md:px-16`}
    >
      {/* Decorative soft glow circles */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-900 mb-3">
            Fastrack Solutions
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
            Your trusted partner in talent acquisition and HR services. We help
            businesses build exceptional teams through innovative recruitment
            solutions and comprehensive workforce management.
          </p>

          <h3 className="text-lg font-semibold text-blue-700 mb-3">Services</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:text-blue-600 transition">Bulk Hiring</li>
            <li className="hover:text-blue-600 transition">One Time Hiring</li>
            <li className="hover:text-blue-600 transition">Train and Deploy</li>
            <li className="hover:text-blue-600 transition">
              Background Verification
            </li>
            <li className="hover:text-blue-600 transition">General Hiring</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-3">
              Contact Info
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.357 4.071a1 1 0 01-.272.97l-2.007 2.007a16.001 16.001 0 006.586 6.586l2.007-2.007a1 1 0 01.97-.272l4.071 1.357a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                  />
                </svg>
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                {/* ✉️ Email */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
                info@fastracksolutions.com
              </li>

              <li className="flex items-center gap-3">
                {/* 📍 Location */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c3.314 0 6 2.686 6 6 0 2.485-1.788 5.053-4.773 8.135a.75.75 0 01-1.054 0C7.788 22.053 6 19.485 6 17c0-3.314 2.686-6 6-6z"
                  />
                </svg>
                Business District, Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 mt-8">
            {/* Facebook */}
            <a
              href="#"
              className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.3c-1 0-1.2.5-1.2 1.1V12h2.5l-.4 3h-2.1v7A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9z" />
                <path d="M12 7a5 5 0 105 5 5 5 0 00-5-5zm0 2a3 3 0 11-3 3 3 3 0 013-3z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-9 h-9 bg-sky-100 rounded-full flex items-center justify-center hover:bg-sky-200 transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-sky-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.5.6-2.3.7.83-.5 1.45-1.3 1.74-2.3-.8.5-1.67.9-2.6 1.1A4.07 4.07 0 0016 4a4.1 4.1 0 00-4.1 4.1c0 .3 0 .5.1.8a11.65 11.65 0 01-8.5-4.3A4.07 4.07 0 004 9.5c-.6-.1-1.2-.3-1.7-.5v.1A4.1 4.1 0 004 13a4.1 4.1 0 01-1.9.1A4.1 4.1 0 005.8 15 8.24 8.24 0 012 17.5 11.64 11.64 0 008.3 19c7 0 10.9-5.8 10.9-10.8v-.5c.7-.5 1.4-1.2 1.9-1.9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Fastrack Solutions — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
