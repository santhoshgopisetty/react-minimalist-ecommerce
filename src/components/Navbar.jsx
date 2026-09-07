import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItemCount, toggleCart } from '../features/cart/cartSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectItemCount);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          SG
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/shop" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/categories" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Categories</NavLink>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn cart-btn" onClick={() => dispatch(toggleCart())} aria-label="Cart">
            <ShoppingBag size={20} />
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
          <button
            className="icon-btn mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
