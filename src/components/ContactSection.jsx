import React from "react";

const ContactSection = () => (
  <section
    id="contact"
    className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
  >
    {/* Background glow elements */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

    <div className="relative text-center max-w-5xl mx-auto px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 animate-fade-up">
        Get in Touch
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
        Have a question or want to collaborate? Fill out the form below and our
        team will get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-5 max-w-3xl mx-auto animate-fade-up delay-400">
        <div className="grid sm:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <input
          type="text"
          placeholder="Company"
          className="w-full border border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />

        <textarea
          rows="5"
          placeholder="Your Message..."
          className="w-full border border-gray-200 p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="relative inline-block bg-blue-600 text-white px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
        >
          <span className="relative z-10 font-semibold tracking-wide">
            Send Message
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity rounded-full"></span>
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
