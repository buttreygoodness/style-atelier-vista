
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EditorialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="relative overflow-hidden animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <img 
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3" 
              alt="Behind the design" 
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors duration-300 flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-medium mb-2">Behind the Design</h3>
                <p className="mb-4 text-white/80">Explore the craftsmanship and philosophy that drives our collections.</p>
                <Link to="/journal/behind-the-design" className="inline-flex items-center text-white group">
                  <span className="border-b border-white/40 group-hover:border-white transition-colors duration-300">Read Article</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985" 
              alt="Our commitment to sustainability" 
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors duration-300 flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-medium mb-2">Our Sustainability Commitment</h3>
                <p className="mb-4 text-white/80">Learn about our initiatives for a more sustainable fashion future.</p>
                <Link to="/sustainability" className="inline-flex items-center text-white group">
                  <span className="border-b border-white/40 group-hover:border-white transition-colors duration-300">Discover More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
