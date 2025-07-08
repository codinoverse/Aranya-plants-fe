import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductCard.css';
import { products } from './productsData'; // Same data store you used in FeaturedProducts
import Header from './Header';

const ProductCard = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    zipCode: ''
  });
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Auto-scroll galleries
    const interval = setInterval(() => {
      const gallery = document.getElementById('gallery-'+productId);
      if (gallery) {
        if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
          gallery.scrollLeft = 0;
        } else {
          gallery.scrollLeft += gallery.clientWidth;
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [productId]);

  const scrollGallery = (direction) => {
    const gallery = document.getElementById('gallery-'+productId);
    if (gallery) gallery.scrollLeft += direction * gallery.clientWidth;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!product) {
    return (
      <div className="planthub-container">
        <div className="container py-5">Product not found</div>
      </div>
    );
  }

  return (
    <div className="planthub-container">
      {/* Header */}
      <Header/>

      <div className="container py-4" style={{ marginTop: '80px' }}>
        <div className="row g-4">
          {/* Main Content */}
          <main className="col-lg-8">
            <section className="product-card mb-4">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="gallery-container">
                    <div className="gallery-wrapper">
                      <div className="gallery-scroll" id={`gallery-${productId}`}>
                        {product.gallery.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${product.name} image ${idx + 1}`}
                            className="gallery-image"
                          />
                        ))}
                      </div>
                      <button className="gallery-btn gallery-btn-left" onClick={() => scrollGallery(-1)}>
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button className="gallery-btn gallery-btn-right" onClick={() => scrollGallery(1)}>
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product-details">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-subtitle">{product.description}</p>

                    <div className="rating-container">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => {
                          const diff = product.rating - i;
                          if (diff >= 1) return <i key={i} className="fas fa-star"></i>;
                          if (diff >= 0.5) return <i key={i} className="fas fa-star-half-alt"></i>;
                          return <i key={i} className="far fa-star"></i>;
                        })}
                      </div>
                      <span className="rating-text">({product.rating}) {product.reviews} reviews</span>
                    </div>

                    <div className="price-container">
                      <span className="price-current">{product.price}</span>
                      <span className="price-old">{product.oldPrice}</span>
                      <span className="discount-badge">{product.discount}</span>
                    </div>

                    <div className="coupon-container">
                      <i className="fas fa-ticket-alt me-2"></i>
                      <span>Use code PLANT20 for extra 20% off</span>
                    </div>

                    <div className="size-selection">
                      <h6>Size</h6>
                      <div className="size-options">
                        <button className="size-btn size-btn-active">Small</button>
                        <button className="size-btn">Medium</button>
                        <button className="size-btn">Large</button>
                      </div>
                    </div>

                    <div className="action-buttons">
                      <button className="btn btn-success btn-lg w-100 mb-2">
                        <i className="fas fa-shopping-cart me-2"></i>Add to Cart
                      </button>
                      <button className="btn btn-dark btn-lg w-100">Buy Now</button>
                    </div>

                    <div className="delivery-info">
                      <div className="delivery-item">
                        <i className="fas fa-truck text-success me-2"></i>
                        <span>Free delivery on orders over $50</span>
                      </div>
                      <div className="delivery-item">
                        <i className="fas fa-shield-alt text-success me-2"></i>
                        <span>30-day return guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Address Section */}
            <section className="address-section mb-4">
              <h2 className="section-title">Delivery Address</h2>
              <div className="row g-3">
                {['fullName','phoneNumber','streetAddress','city','zipCode'].map(key => (
                  <div key={key} className={key === 'streetAddress' ? 'col-12' : 'col-md-6'}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Membership Section */}
            <section className="membership-section">
              <h2 className="membership-title">PlantHub Premium Membership</h2>
              <div className="row g-3">
                {[
                  { title: 'Free Shipping', description: 'On all orders, no minimum' },
                  { title: 'Expert Care', description: '24/7 plant care support' },
                  { title: 'Exclusive Deals', description: 'Member-only discounts' }
                ].map((m,i) => (
                  <div key={i} className="col-md-4">
                    <div className="membership-card">
                      <h6>{m.title}</h6>
                      <p>{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-light btn-lg mt-3">Join for $9.99/month</button>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="col-lg-4">
            <div className="sidebar-content">
              <div className="care-tips-card mb-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/94fbd7b33d-a84e0f05c99bf5288393.png"
                  alt="plant care tips watering fertilizing guide"
                  className="care-tips-image"
                />
                <h6 className="care-tips-title">Free Plant Care Guide</h6>
                <p className="care-tips-text">Learn expert tips for healthy plants</p>
                <button className="btn btn-success btn-sm">Download Now</button>
              </div>

              <div className="featured-products mb-4">
                <h6 className="featured-title">You Might Like</h6>
                {products.map(p => (
                  <Link key={p.id} to={`/product/${p.id}`} className="featured-item text-decoration-none">
                    <img src={p.gallery[0]} alt={p.name} className="featured-image" />
                    <div className="featured-details">
                      <h6>{p.name}</h6>
                      <p className="featured-price">{p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="newsletter-card">
                <h6>Stay Updated</h6>
                <p>Get plant care tips and exclusive offers</p>
                <input
                  type="email"
                  className="form-control newsletter-input mb-3"
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button className="btn btn-success w-100">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
