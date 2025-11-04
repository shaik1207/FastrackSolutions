import React from "react";

const features = [
  { title: "Precision Matching", desc: "AI algorithms ensure culture-fit hiring." },
  { title: "Lightning Fast", desc: "Reduce time-to-hire by 60% with automation." },
  { title: "Trusted Process", desc: "Verified background checks for reliability." },
  { title: "Industry Expertise", desc: "Teams specialized across multiple sectors." },
];

const AboutSection = () => (
  <section
    id="about"
    className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
  >
    {/* Subtle background blur circles */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

    <div className="relative max-w-6xl mx-auto px-6 text-center">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 animate-fade-up">
        Why Choose Us
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg animate-fade-up delay-200">
        We bridge the gap between exceptional talent and forward-thinking companies,
        powered by cutting-edge AI and human expertise.
      </p>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((f, i) => (
          <div
            key={i}
            className="feature-card bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-up"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
              {i + 1}
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
