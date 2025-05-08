
import { Link } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
};

type FeaturedCollectionProps = {
  title: string;
  subtitle?: string;
  products: Product[];
  link: string;
};

const FeaturedCollection = ({ title, subtitle, products, link }: FeaturedCollectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-medium mb-3">{title}</h2>
          {subtitle && <p className="text-neutral-600 max-w-lg">{subtitle}</p>}
        </div>
        
        <div className="product-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/products/${product.id}`} className="block group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-img"
                  />
                  {product.hoverImage && (
                    <img 
                      src={product.hoverImage}
                      alt={`${product.name} alternate view`}
                      className="product-card-img absolute inset-0 opacity-0 group-hover:opacity-100"
                    />
                  )}
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm">{product.name}</h3>
                  <p className="text-sm text-neutral-600">{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to={link} 
            className="btn-primary inline-block"
          >
            View Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
