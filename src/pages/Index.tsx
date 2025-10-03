
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import IndustriesSection from "../components/IndustriesSection";
import ServicesSection from "../components/ServicesSection";
import OffersSection from "../components/OffersSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <IndustriesSection />
      <ServicesSection />
      <OffersSection />
      <ContactSection />
    </div>
  );
};

export default Index;
