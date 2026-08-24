import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Shield, Truck, RotateCcw } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, selectProductsLoading, fetchProducts } from '../features/products/productSlice';
import { addToCart } from '../features/cart/cartSlice';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductsLoading);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (!loading && products.length > 0) {
      const found = products.find(p => p.id === parseInt(id));
      setProduct(found);
    }
  }, [id, products, loading]);

  if (loading || !product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="skeleton-card" style={{ height: '500px' }}></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="product-details-page container animate-fade-in">
      <Link to="/shop" className="back-link">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="product-details-grid">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>

        <div className="product-info-section">
          <span className="product-category-label">{product.category}</span>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price-large">${product.price.toFixed(2)}</p>
          
          <p className="product-description">{product.description}</p>

          <div className="purchase-actions">
            <button className="btn btn-primary btn-add-cart" onClick={handleAddToCart}>
              <ShoppingCart size={20} className="mr-2" /> Add to Cart
            </button>
          </div>

          <div className="product-features">
            <div className="feature-item">
              <Shield size={24} className="feature-icon" />
              <div>
                <h4>1 Year Warranty</h4>
                <p>Full protection on defects.</p>
              </div>
            </div>
            <div className="feature-item">
              <Truck size={24} className="feature-icon" />
              <div>
                <h4>Free Shipping</h4>
                <p>On orders over $100.</p>
              </div>
            </div>
            <div className="feature-item">
              <RotateCcw size={24} className="feature-icon" />
              <div>
                <h4>30-Day Returns</h4>
                <p>No questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
