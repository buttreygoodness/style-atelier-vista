
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-neutral-900" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-900" />
            )}
          </button>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <Link to="/" className="text-xl md:text-2xl font-serif font-medium">
              ATELIER
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/collections/new" className="nav-link">New</Link>
            <Link to="/collections/women" className="nav-link">Women</Link>
            <Link to="/collections/men" className="nav-link">Men</Link>
            <Link to="/collections/accessories" className="nav-link">Accessories</Link>
            <Link to="/journal" className="nav-link">Journal</Link>
          </nav>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Shopping Bag" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs bg-neutral-900 text-white rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white h-screen">
          <nav className="container-custom pt-8 pb-12 space-y-6">
            <Link to="/collections/new" className="block text-xl py-2 border-b border-neutral-200">
              New
            </Link>
            <Link to="/collections/women" className="block text-xl py-2 border-b border-neutral-200">
              Women
            </Link>
            <Link to="/collections/men" className="block text-xl py-2 border-b border-neutral-200">
              Men
            </Link>
            <Link to="/collections/accessories" className="block text-xl py-2 border-b border-neutral-200">
              Accessories
            </Link>
            <Link to="/journal" className="block text-xl py-2 border-b border-neutral-200">
              Journal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
