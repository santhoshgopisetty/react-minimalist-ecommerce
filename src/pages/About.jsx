import { Shield, Truck, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="about-hero container">
        <div className="about-hero-content">
          <h1 className="display-title">The SG Story</h1>
          <p className="lead">
            We believe that technology should be an extension of yourself. Seamless, beautiful, and powerful.
          </p>
        </div>
        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&q=80" 
            alt="Workspace" 
            className="rounded-glass"
          />
        </div>
      </div>

      <div className="about-values container">
        <h2 className="text-center mb-4">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card glass">
            <div className="icon-wrapper primary-glow">
              <Zap size={28} className="text-primary" />
            </div>
            <h3>Innovation First</h3>
            <p className="text-secondary">We source the most cutting-edge products so you can stay ahead of the curve.</p>
          </div>
          <div className="value-card glass">
            <div className="icon-wrapper accent-glow">
              <Shield size={28} className="text-accent" />
            </div>
            <h3>Uncompromising Quality</h3>
            <p className="text-secondary">Every item in our store is rigorously tested for durability and performance.</p>
          </div>
          <div className="value-card glass">
            <div className="icon-wrapper success-glow">
              <Truck size={28} className="text-success" />
            </div>
            <h3>Swift Delivery</h3>
            <p className="text-secondary">Fast, reliable shipping worldwide. Because nobody likes waiting for their new tech.</p>
          </div>
        </div>
      </div>
      
      <div className="about-mission container text-center">
        <div className="glass mission-box">
          <h2>Join the Future</h2>
          <p className="text-secondary">
            Since 2026, we've been on a mission to curate the best digital lifestyle accessories. 
            Welcome to the next generation of online retail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
