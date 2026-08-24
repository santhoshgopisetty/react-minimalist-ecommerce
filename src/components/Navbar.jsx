import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItemCount, toggleCart } from '../features/cart/cartSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectItemCount);

  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <button className="mobile-menu-btn" aria-label="Menu">
          <Menu size={24} />
        </button>

        <Link to="/" className="nav-logo">
          NEXUS
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="icon-btn cart-btn" onClick={() => dispatch(toggleCart())} aria-label="Cart">
            <ShoppingBag size={20} />
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
