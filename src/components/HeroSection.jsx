import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const heroMain =
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80";

  const features = [
    {
      icon: "https://github.com/shaik1207/images/blob/main/winner.png?raw=true",
      title: "10+",
      desc: "Years Experience",
    },
    {
      icon: "https://github.com/shaik1207/images/blob/main/target.png?raw=true",
      title: "5000+",
      desc: "Successful Placements",
    },
    {
      icon: "https://github.com/shaik1207/images/blob/main/costumer.png?raw=true",
      title: "500+",
      desc: "Happy Clients",
    },
    {
      icon: "https://github.com/shaik1207/images/blob/main/rating.png?raw=true",
      title: "95%",
      desc: "Success Rate",
    },
  ];

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home"className="relative w-full min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-32 pt-28 sm:pt-32 pb-12 gap-12 lg:gap-16 overflow-hidden">
      {/* 🖼️ RIGHT SIDE (Hero Image — aligned below navbar) */}
      <div className="flex-1 relative flex justify-center items-center w-full order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
        <div className="relative w-full flex justify-center">
          <img
            src={heroMain}
            alt="Marketing"
            className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[85%] max-w-[600px] rounded-3xl shadow-2xl object-cover"
          />

          {/* 🔹 Floating badge - center-right */}
          <div
            className={`absolute bottom-[10%] right-[8%] bg-blue-700 text-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg text-center z-30 transition-all duration-1000 ease-out ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-sm sm:text-base md:text-lg font-bold">5000+</p>
            <p className="text-[9px] sm:text-xs">Successful Placements</p>
          </div>

          {/* 🟦 Floating card - bottom-left */}
          <div
            className={`absolute top-[10%] left-[6%] bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-md w-[110px] sm:w-[130px] md:w-[150px] lg:w-[180px] text-center z-20 transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[10px] sm:text-sm md:text-base font-semibold text-gray-900">
              Proven Track Record
            </p>
          </div>
        </div>
      </div>

      {/* ✨ LEFT SIDE (Text & Features) */}
      <div className="flex-1 text-center lg:text-left max-w-2xl order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Your Trusted Partner In{" "}
          <br className="hidden sm:block" /> Talent Solutions
        </h1>

        <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
          Unlock performance with data-driven campaigns, creative storytelling,
          and impactful branding for modern brands.
        </p>

        <div className="mt-10">
          <button className="px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-medium text-base sm:text-lg hover:bg-blue-700 transition">
            Get Started Today →
          </button>
        </div>

        {/* ✅ FEATURE CIRCLES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-blue-100 mb-2 animate-pulse">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                {f.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
