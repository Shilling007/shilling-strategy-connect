
import { UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const FounderSection = () => {
  return (
    <section className="section-padding bg-lightblue/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <UserRound className="text-navy" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-navy mb-2">Meet Our Founder</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative">
                <div className="absolute inset-0 bg-navy/10 rounded-full transform translate-x-2 translate-y-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Keerthivasan - Founder" 
                  className="w-full h-auto rounded-full border-4 border-white shadow-lg relative z-10"
                />
              </div>
            </div>
            
            <div className="md:col-span-8 animate-fade-up">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-navy mb-2">Keerthivasan</h3>
                <p className="text-gray-600 mb-4 italic">Founder & Chief Strategist</p>
                
                <p className="text-gray-700 mb-4">
                  With over a decade of experience in business development and digital marketing, 
                  Keerthivasan founded Shilling Strategy Consulting to bridge the gap between 
                  high-quality business services and affordability for startups in Chennai.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Having worked with over 50+ startups across various industries, Keerthivasan 
                  brings practical insights, technical expertise, and a result-oriented approach 
                  to every client engagement. His specialization in AI integration for small 
                  businesses has helped numerous companies optimize operations and scale effectively.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="outline" 
                    className="border-navy text-navy hover:bg-navy/5"
                    onClick={() => window.open('https://www.linkedin.com/in/keerthivasan', '_blank')}
                  >
                    Connect on LinkedIn
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy/5"
                    onClick={() => window.location.href = 'mailto:keerthivasan@shillingstrategyconsulting.com'}
                  >
                    Email Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
