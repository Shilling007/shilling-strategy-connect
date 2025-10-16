import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center pt-20 md:pt-16 bg-gradient-to-br from-white to-lightblue">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">Shilling Strategy Consulting</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-navy mt-2 block">Stand for the Growth</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto px-4">Empowering startups and small businesses with strategic consulting, branding solutions, and growth-focused marketing services.</p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Book Free Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-navy text-navy hover:bg-navy/5 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium w-full sm:w-auto" onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Explore Services
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