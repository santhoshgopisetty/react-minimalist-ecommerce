import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItemCount, toggleCart } from '../features/cart/cartSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectItemCount);

  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          SG
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
          <NavLink to="/categories" className="nav-link">Categories</NavLink>
        </nav>

        <div className="nav-actions">
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