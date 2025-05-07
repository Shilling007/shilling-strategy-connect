
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const consultingServices = [
  {
    title: "Company Registration Guidance",
    description: "Expert assistance with company registration process, documentation, and compliance requirements."
  },
  {
    title: "MSME & GST Registration",
    description: "Simplified registration process for MSME certification and GST compliance for your business."
  },
  {
    title: "Trademark Assistance",
    description: "Protection of your brand identity with trademark registration and intellectual property guidance."
  },
  {
    title: "SOP Development",
    description: "Creation of standard operating procedures to streamline your business operations."
  },
  {
    title: "Hiring Support",
    description: "Assistance with recruitment strategies, job descriptions, and candidate screening processes."
  },
  {
    title: "Founder/Team Training",
    description: "Specialized training programs in AI integration, sales strategies, and brand building."
  }
];

const marketingServices = [
  {
    title: "Logo Design and Brand Identity",
    description: "Professional logo creation and comprehensive brand identity development."
  },
  {
    title: "Social Media Profile Creation",
    description: "Strategic setup and optimization of your business presence across social media platforms."
  },
  {
    title: "Content Planning and Strategy",
    description: "Development of content calendars and engagement strategies for your target audience."
  },
  {
    title: "Website Development",
    description: "Custom WordPress and coded websites designed to convert visitors into customers."
  },
  {
    title: "Google My Business Setup",
    description: "Optimization of your local business profile to improve visibility in search results."
  },
  {
    title: "AI Tools for Automation",
    description: "Implementation of AI solutions to automate repetitive tasks and improve efficiency."
  },
  {
    title: "Business Collateral Design",
    description: "Creation of business cards, ID cards, and digital profiles to strengthen your brand presence."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-lightblue/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Briefcase className="text-navy" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help your business establish, grow, and excel in today's competitive market.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="consulting" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="consulting" className="text-md py-3">Business Consulting</TabsTrigger>
              <TabsTrigger value="marketing" className="text-md py-3">Marketing & Branding</TabsTrigger>
            </TabsList>
            
            <TabsContent value="consulting" className="animate-fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {consultingServices.map((service, index) => (
                  <Card key={index} className="border border-gray-200 hover:border-navy/30 transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-navy text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="marketing" className="animate-fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketingServices.map((service, index) => (
                  <Card key={index} className="border border-gray-200 hover:border-navy/30 transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-navy text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
