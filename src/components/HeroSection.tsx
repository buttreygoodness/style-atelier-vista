
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const heroImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    alt: "Minimal fashion look",
    title: "New Autumn Collection",
    subtitle: "Elevate your wardrobe with our latest seasonal essentials."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    alt: "Elegant minimal style",
    title: "Timeless Essentials",
    subtitle: "Discover pieces designed to transcend seasons."
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div 
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="h-full w-full object-cover object-center"
          />
          
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16 text-white">
            <div className="container-custom">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-4 max-w-md">
                {image.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-lg">
                {image.subtitle}
              </p>
              <Link 
                to="/collections/new" 
                className="inline-flex items-center bg-white text-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-neutral-100 transition-colors"
              >
                Shop Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-8 right-8">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
