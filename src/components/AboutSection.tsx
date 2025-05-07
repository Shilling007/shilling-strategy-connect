
import { BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fade-up">
              <div className="flex items-center mb-4">
                <BookOpen className="text-navy mr-2" size={24} />
                <h2 className="text-3xl font-bold text-navy">About Us</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Shilling Strategy Consulting is a premier B2B business consulting and marketing agency 
                based in Chennai. We specialize in helping startups and small businesses establish 
                their brand presence, streamline operations, and achieve sustainable growth.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mb-3">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To empower small businesses with enterprise-grade strategies, tools, and marketing 
                solutions that are accessible, affordable, and effective.
              </p>
              
              <h3 className="text-xl font-semibold text-navy mb-3">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To be the go-to partner for startups and SMEs in Chennai, creating a thriving ecosystem 
                of successful businesses that contribute to regional economic growth.
              </p>
              
              <div className="bg-lightblue p-5 rounded-lg border border-navy/10">
                <h4 className="text-lg font-semibold text-navy mb-2">What Makes Us Different</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Tailored solutions for each business, not one-size-fits-all</li>
                  <li>Holistic approach covering both business setup and marketing</li>
                  <li>Cost-effective packages designed for bootstrapped startups</li>
                  <li>Hands-on training for sustainable growth beyond our engagement</li>
                  <li>Local expertise with global best practices</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-navy/5 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" 
                alt="Business consulting team" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-navy text-white py-2 px-4 rounded-full text-sm font-medium z-20">
                Since 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
