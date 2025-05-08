
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CollectionGrid from '../components/CollectionGrid';
import FeaturedCollection from '../components/FeaturedCollection';
import EditorialSection from '../components/EditorialSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

// Sample product data for featured collection
const featuredProducts = [
  {
    id: 'p1',
    name: 'Oversized Wool Coat',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3',
    hoverImage: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8'
  },
  {
    id: 'p2',
    name: 'Structured Blazer',
    price: '$189',
    image: 'https://images.unsplash.com/photo-1548126032-079a1401ce73'
  },
  {
    id: 'p3',
    name: 'Pleated Trousers',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35'
  },
  {
    id: 'p4',
    name: 'Cashmere Sweater',
    price: '$165',
    image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68'
  },
  {
    id: 'p5',
    name: 'Silk Shirt',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1556139902-7367723b7e9e'
  },
  {
    id: 'p6',
    name: 'Leather Belt',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1575675069903-c5f12712c0f3'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CollectionGrid />
        <FeaturedCollection 
          title="New Arrivals"
          subtitle="Discover our latest pieces, thoughtfully designed for the modern wardrobe."
          products={featuredProducts}
          link="/collections/new"
        />
        <EditorialSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
