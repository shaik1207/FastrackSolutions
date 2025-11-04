import React, { useState, useEffect } from "react";

const services = [
  {
    title: "Bulk Hiring",
    desc: "Scale your team with speed and precision.",
    icon: "https://github.com/shaik1207/images/blob/main/mail.png?raw=true",
    details: [
      "High-volume recruitment campaigns",
      "Customized screening process",
      "Quick turnaround time",
      "Dedicated recruitment specialists",
    ],
  },
  {
    title: "One Time Hiring",
    desc: "Recruit efficiently for specific roles.",
    icon: "https://github.com/shaik1207/images/blob/main/calendar-date.png?raw=true",
    details: [
      "End-to-end hiring assistance",
      "Cost-effective onboarding",
      "Flexible hiring models",
      "Industry-specific recruiters",
    ],
  },
  {
    title: "Career Consulting",
    desc: "Empowering candidates for professional growth.",
    icon: "https://github.com/shaik1207/images/blob/main/user.png?raw=true",
    details: [
      "Resume optimization",
      "Mock interviews",
      "Career path planning",
      "Skill gap analysis",
    ],
  },
  {
    title: "AI Hiring Tools",
    desc: "Automated screening and analytics for smart recruitment.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712101.png",
    details: [
      "AI-powered resume parsing",
      "Skill-based ranking system",
      "Bias-free candidate shortlisting",
      "Predictive hiring insights",
    ],
  },
  {
    title: "Global Staffing",
    desc: "Expand your workforce across borders.",
    icon: "https://github.com/shaik1207/images/blob/main/management.png?raw=true",
    details: [
      "International sourcing",
      "Visa and relocation support",
      "Remote team setup",
      "Cross-cultural training",
    ],
  },
  {
    title: "Background Verification (BGV)",
    desc: "Ensuring authenticity and reliability.",
    icon: "https://github.com/shaik1207/images/blob/main/background.png?raw=true",
    details: [
      "Employment verification",
      "Education check",
      "Criminal record screening",
      "Reference verification",
    ],
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 🔥 Animate cards on scroll
    const onScroll = () => {
      const section = document.getElementById("services");
      if (section && window.scrollY + window.innerHeight > section.offsetTop + 150) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleCard = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden"
    >
      {/* 🔵 Decorative Backgrounds */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* 🔹 Section Header */}
      <div className="relative text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Our Core Services
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Empowering your business with AI-driven hiring, global staffing, and end-to-end recruitment expertise.
        </p>
      </div>

      {/* 🔸 Services Grid */}
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 items-start">
        {services.map((s, i) => (
          <div
            key={i}
            className={`relative bg-white rounded-3xl shadow-md border border-gray-100 p-8 transition-all duration-500 overflow-hidden cursor-pointer transform
              ${activeIndex === i ? "ring-2 ring-blue-500 shadow-2xl scale-105" : "hover:shadow-lg"}
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => toggleCard(i)}
          >
            {/* 🔹 Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-200 flex items-center justify-center shadow-inner transition-transform duration-300 hover:scale-110">
                <img src={s.icon} alt={s.title} className="w-8 h-8 object-contain" />
              </div>
            </div>

            {/* 🔹 Title & Description */}
            <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">{s.title}</h3>
            <p className="text-gray-600 text-sm text-center mb-4">{s.desc}</p>

            {/* 🔹 View More Button */}
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCard(i);
                }}
                className={`px-6 py-2 mt-2 text-sm font-semibold rounded-full text-white shadow-lg transition-all duration-300 
                  ${activeIndex === i
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl hover:scale-105"
                    : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-xl hover:scale-105"}
                `}
              >
                {activeIndex === i ? "View Less ▲" : "View More ▼"}
              </button>
            </div>

            {/* 🔹 Expandable Content (Animated Dropdown) */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === i
                  ? "max-h-64 opacity-100 mt-6 transform translate-y-0"
                  : "max-h-0 opacity-0 transform -translate-y-3"
              }`}
            >
              <ul className="list-disc text-left pl-5 text-gray-700 text-sm space-y-2">
                {s.details.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Bottom Divider */}
      <div className="mt-20 w-48 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
    </section>
  );
};

export default ServicesSection;
