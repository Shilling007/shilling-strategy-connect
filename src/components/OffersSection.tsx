
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    name: "Startup Combo",
    price: "₹9,999",
    features: [
      "Professional Logo Design",
      "Social Media Setup (3 platforms)",
      "Business Card & ID Card Design",
      "7-day Content Plan",
      "Basic AI Tools Integration",
      "1-hour Strategy Session"
    ],
    popular: false
  },
  {
    name: "Pro Launch + Website",
    price: "₹19,999",
    features: [
      "Complete Brand Identity Package",
      "WordPress Website (5 pages)",
      "Social Media Setup (5 platforms)",
      "Professional Pitch Deck",
      "Company Profile PDF",
      "Google My Business Setup",
      "15-day Content Calendar",
      "2 Revision Rounds"
    ],
    popular: true
  },
  {
    name: "Business Growth Suite",
    price: "₹29,999",
    features: [
      "Everything in Pro Launch",
      "Custom Coded Website",
      "SEO Optimization",
      "MSME & GST Registration Support",
      "SOP Development (3 processes)",
      "30-day Marketing Strategy",
      "Advanced AI Automation Setup",
      "3-month Email Support"
    ],
    popular: false
  }
];

const OffersSection = () => {
  const handleBookService = (packageName: string) => {
    // You can replace this with actual logic or link to WhatsApp/form
    const message = `I'm interested in booking the ${packageName} package. Please provide more details.`;
    const whatsappLink = `https://wa.me/+919XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="offers" className="section-padding bg-navy text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Special Service Packages</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored for different business stages and budgets, 
            designed to give you maximum value.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className={`rounded-lg p-6 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
                offer.popular 
                  ? "bg-gradient-to-br from-gold to-amber-500 text-navy shadow-xl" 
                  : "bg-white/10 backdrop-blur-lg border border-white/20"
              }`}
            >
              {offer.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-navy text-gold px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${offer.popular ? "text-navy" : "text-white"}`}>
                {offer.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-3xl font-bold ${offer.popular ? "text-navy" : "text-gold"}`}>
                  {offer.price}
                </span>
                <span className={`text-sm ${offer.popular ? "text-navy/80" : "text-gray-300"}`}>
                  {" "}/ one-time
                </span>
              </div>
              
              <ul className={`mb-8 space-y-3 ${offer.popular ? "text-navy/90" : "text-gray-300"}`}>
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 mt-0.5 ${offer.popular ? "text-navy" : "text-gold"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  offer.popular 
                    ? "bg-navy hover:bg-navy/90 text-gold" 
                    : "bg-gold hover:bg-gold/90 text-navy"
                }`}
                onClick={() => handleBookService(offer.name)}
              >
                Book This Service <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Need a customized solution? We can create a tailored package for your specific needs.
          </p>
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          >
            Request Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
