import React, { useState } from "react";

const AboutFastrack = () => {
  const [showMore, setShowMore] = useState(false);

  const aboutImg =
    "https://github.com/shaik1207/images/blob/main/WhatsApp%20Image%202025-11-03%20at%2019.19.48_7016634b.jpg?raw=true";

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-12">
        {/* LEFT SIDE - IMAGE */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="About Fastrack Solutions"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            About Fastrack Solutions
          </h2>

          {/* Always show the first paragraph */}
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With over a decade of experience in the recruitment industry,
            Fastrack Solutions has established itself as a leading HR services
            provider, specializing in comprehensive talent acquisition and
            workforce solutions.
          </p>

          {/* Collapsible section (shows on Learn More click) */}
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our mission is to bridge the gap between exceptional talent and
              forward-thinking organizations. We understand that every business
              has unique requirements, and we tailor our services to meet your
              specific needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              From startups to Fortune 500 companies, we’ve helped organizations
              across various industries build their dream teams through our
              innovative approach to recruitment and human resources.
            </p>
          </div>

          {/* Learn More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-md mt-4"
          >
            {showMore ? "Show Less ▲" : "Learn More ▼"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutFastrack;
