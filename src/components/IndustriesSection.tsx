
const industriesData = [
  {
    title: "Startups",
    icon: "💡",
    description: "Early-stage companies looking to establish market presence"
  },
  {
    title: "Education & Coaching",
    icon: "🎓",
    description: "Educational institutions, coaching centers, and online learning platforms"
  },
  {
    title: "Healthcare",
    icon: "⚕️",
    description: "Clinics, healthcare providers, and wellness centers"
  },
  {
    title: "Retail & E-Commerce",
    icon: "🛍️",
    description: "Physical stores and online shopping platforms"
  },
  {
    title: "Real Estate",
    icon: "🏢",
    description: "Property developers, brokers, and rental services"
  },
  {
    title: "Tech & SaaS",
    icon: "💻",
    description: "Software companies, app developers, and tech service providers"
  },
  {
    title: "Manufacturing",
    icon: "🏭",
    description: "Small to medium manufacturing units across various sectors"
  },
  {
    title: "Agencies & Freelancers",
    icon: "👥",
    description: "Creative professionals, consultants, and service providers"
  }
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Industries We Work With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expertise spans across multiple sectors, allowing us to deliver specialized solutions
            tailored to each industry's unique challenges and opportunities.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 hover:border-navy/20"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-navy mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
