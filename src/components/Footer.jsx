import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>SG</h3>
          <p>Premium tech and lifestyle gear for the modern visionary.</p>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Audio</a></li>
            <li><a href="#">Wearables</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} SG Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;