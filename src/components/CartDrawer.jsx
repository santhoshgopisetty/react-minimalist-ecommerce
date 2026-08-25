import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectIsCartOpen, selectCartTotal, toggleCart, removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import './CartDrawer.css';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartTotal = useSelector(selectCartTotal);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay animate-fade-in" onClick={() => dispatch(toggleCart())}></div>
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="icon-btn" onClick={() => dispatch(toggleCart())}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <button className="btn btn-primary" onClick={() => dispatch(toggleCart())}>Continue Shopping</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">₹{item.price}</p>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}><Plus size={14} /></button>
                    </div>
                    <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <button className="btn btn-primary checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
