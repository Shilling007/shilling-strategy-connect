import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-lightblue">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Shilling Strategy Consulting</span>
              <br />
              <span className="text-3xl md:text-4xl font-semibold text-navy">Stand for the Growth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">Empowering startups and small businesses with strategic consulting, branding solutions, and growth-focused marketing services.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8 py-6 text-lg font-medium" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-navy text-navy hover:bg-navy/5 px-8 py-6 text-lg font-medium" onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-gray-500">
          <span className="mb-1">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>;
};
export default HeroSection;