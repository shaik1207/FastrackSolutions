import React from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "HR Director, TechCorp Global",
    text: "AI-powered matching cut our time-to-hire by 65%.",
    img: "https://github.com/shaik1207/images/blob/main/client.png?raw=true",
  },
  {
    name: "Michael Rodriguez",
    role: "VP, InnovateCo",
    text: "Their RPO team is a true partner in growth.",
    img: "https://github.com/shaik1207/images/blob/main/client.png?raw=true",
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer, CloudScale Inc",
    text: "Career consulting helped me land my dream job!",
    img: "https://github.com/shaik1207/images/blob/main/client.png?raw=true",
  },
];

const TestimonialsSection = () => (
  <section
    id="testimonials"
    className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
  >
    {/* Background blur bubbles */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

    <div className="relative text-center max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-12 animate-fade-up">
        What Our Clients Say
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-up"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="flex justify-center mb-5">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover shadow-md border-4 border-blue-100"
              />
            </div>
            <p className="text-gray-700 italic mb-4 text-[15px] leading-relaxed">
              “{t.text}”
            </p>
            <h4 className="font-semibold text-blue-700 text-lg">{t.name}</h4>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
