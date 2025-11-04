import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutFastrack from "./components/AboutFastrack";

const App = () => (
  <div className="text-gray-900 overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutFastrack/>
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default App;
