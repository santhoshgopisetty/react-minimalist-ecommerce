import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllProducts, fetchProducts } from '../features/products/productSlice';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const categoriesMap = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = product.image;
    }
    return acc;
  }, {});

  const categories = Object.keys(categoriesMap).map(key => ({
    name: key,
    image: categoriesMap[key]
  }));

  return (
    <div className="categories-page container animate-fade-in">
      <div className="categories-header text-center">
        <h1 className="display-title">Categories</h1>
        <p className="text-secondary">Explore our premium collections.</p>
      </div>
      
      <div className="categories-grid">
        {categories.map((category, index) => (
          <Link 
            to={`/shop?category=${encodeURIComponent(category.name)}`} 
            key={category.name}
            className="category-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="category-image">
              <img src={category.image} alt={category.name} />
              <div className="category-overlay glass">
                <h2>{category.name}</h2>
                <span className="explore-text">Explore Collection &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
