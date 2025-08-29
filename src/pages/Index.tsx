
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Navigation3D from "@/components/Navigation3D";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DanceClassesSection from "@/components/DanceClassesSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Scene3D from "@/components/3d/Scene3D";

const Index = () => {
  const [is3DMode, setIs3DMode] = useState(true);

  const scrollToSection = (sectionId: string) => {
    if (is3DMode) {
      // In 3D mode, the sections are interactive 3D objects
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggle3D = () => {
    setIs3DMode(!is3DMode);
  };

  if (is3DMode) {
    return (
      <div className="min-h-screen bg-black overflow-hidden">
        <Navigation3D 
          onToggle3D={toggle3D} 
          is3DMode={is3DMode} 
          scrollToSection={scrollToSection}
        />
        <Scene3D scrollToSection={scrollToSection} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Navigation scrollToSection={scrollToSection} />
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={toggle3D}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
        >
          🌟 Enter 3D Mode
        </button>
      </div>
      <HeroSection scrollToSection={scrollToSection} />
      <StatsSection />
      <DanceClassesSection scrollToSection={scrollToSection} />
      <TeamSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
