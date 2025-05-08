
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'women',
    title: 'Women',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e',
    link: '/collections/women'
  },
  {
    id: 'men',
    title: 'Men',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2',
    link: '/collections/men'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401',
    link: '/collections/accessories'
  }
];

const CollectionGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className="relative overflow-hidden animate-fade-up opacity-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={collection.link}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-medium tracking-wider">
                    {collection.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
