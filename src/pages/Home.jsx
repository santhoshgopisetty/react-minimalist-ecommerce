import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts, selectProductsLoading } from '../features/products/productSlice';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductsLoading);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="home animate-fade-in">
      <section className="hero">
        <div className="hero-content container">
          <span className="hero-badge">New Collection</span>
          <h1 className="hero-title">Discover the Future of Tech & Lifestyle</h1>
          <p className="hero-subtitle">
            Elevate your everyday with our curated selection of premium gadgets, accessories, and modern essentials designed for the visionary.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary btn-lg">
              Shop Now <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              Explore Story
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80" 
            alt="Premium workspace setup" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
      </section>

      <section className="featured-section container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/shop" className="view-all-link">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div className="loading-grid">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="skeleton-card"></div>
            ))}
          </div>
        ) : (
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="categories-section container">
        <div className="category-card audio">
          <div className="category-content">
            <h3>Premium Audio</h3>
            <Link to="/shop" className="btn btn-secondary btn-sm">Shop Audio</Link>
          </div>
        </div>
        <div className="category-card wearables">
          <div className="category-content">
            <h3>Smart Wearables</h3>
            <Link to="/shop" className="btn btn-secondary btn-sm">Shop Wearables</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
