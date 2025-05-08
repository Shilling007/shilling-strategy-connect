
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/ba777cb2-8a91-47ec-b3a1-3d1e3d1889d3.png" 
                alt="Shilling Strategy Consulting Logo" 
                className="h-24 md:h-30 w-auto object-contain max-w-[360px] md:max-w-[480px]"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-6">
              <a href="#about" className="text-gray-600 hover:text-navy transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-navy transition-colors">Services</a>
              <a href="#industries" className="text-gray-600 hover:text-navy transition-colors">Industries</a>
              <a href="#offers" className="text-gray-600 hover:text-navy transition-colors">Offers</a>
              <a href="#contact" className="text-gray-600 hover:text-navy transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-navy text-white hover:bg-navy/90">
              Book a Free Consultation
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <a 
              href="#about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#industries" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </a>
            <a 
              href="#offers" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Offers
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button className="w-full bg-navy text-white hover:bg-navy/90">
                Book a Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
