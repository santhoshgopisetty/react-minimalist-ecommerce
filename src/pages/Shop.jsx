import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts, selectProductsLoading } from '../features/products/productSlice';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';
import './Shop.css';

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductsLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearchParams(cat === 'All' ? {} : { category: cat });
  };

  const categories = ['All', 'Audio', 'Wearables', 'Accessories', 'Lifestyle', 'Home Office'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page container animate-fade-in">
      <div className="shop-header">
        <h1>All Products</h1>
        <p className="text-secondary">Discover our full collection of premium gear.</p>
      </div>

      <div className="shop-layout">
        <aside className="shop-sidebar">
          <div className="filter-group">
            <h3 className="filter-title">
              <Filter size={18} /> Categories
            </h3>
            <ul className="category-list">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="shop-content">
          {loading ? (
            <div className="product-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton-card"></div>
              ))}
            </div>
          ) : (
            <>
              <div className="results-count">
                Showing {filteredProducts.length} results
              </div>
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
