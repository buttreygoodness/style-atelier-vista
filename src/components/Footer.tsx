
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-600 hover:text-black text-sm">About Us</Link></li>
              <li><Link to="/stores" className="text-neutral-600 hover:text-black text-sm">Our Stores</Link></li>
              <li><Link to="/sustainability" className="text-neutral-600 hover:text-black text-sm">Sustainability</Link></li>
              <li><Link to="/careers" className="text-neutral-600 hover:text-black text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-neutral-600 hover:text-black text-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/customer-service" className="text-neutral-600 hover:text-black text-sm">Customer Service</Link></li>
              <li><Link to="/shipping" className="text-neutral-600 hover:text-black text-sm">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="text-neutral-600 hover:text-black text-sm">Size Guide</Link></li>
              <li><Link to="/faq" className="text-neutral-600 hover:text-black text-sm">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-neutral-600 hover:text-black text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-neutral-600 hover:text-black text-sm">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="text-neutral-600 hover:text-black text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-neutral-700 hover:text-black" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-neutral-700 hover:text-black" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-neutral-700 hover:text-black" />
              </a>
            </div>
            <p className="text-neutral-600 text-sm">
              Country/region: <button className="underline">United States</button>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs">
            © 2025 Atelier. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-xs mt-4 md:mt-0 text-neutral-500 hover:text-black"
          >
            Back to top <ChevronUp className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
