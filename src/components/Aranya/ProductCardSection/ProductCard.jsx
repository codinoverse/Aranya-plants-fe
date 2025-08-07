import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductCard.css';
import { products } from '../Featured/productsData';
import Header from '../HeaderSection/Header';
import Footer from '../FooterSection/Footer';

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
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // Auto-scroll galleries
    const interval = setInterval(() => {
      const gallery = document.getElementById('gallery-' + productId);
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
    const gallery = document.getElementById('gallery-' + productId);
    if (gallery) gallery.scrollLeft += direction * gallery.clientWidth;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Enhanced product data with detailed descriptions
  const getProductDetails = (product) => {
    const productDetails = {
      1: {
        detailedDescription: "The Monstera Deliciosa, commonly known as the Swiss Cheese Plant, is a stunning tropical houseplant that brings a touch of the jungle to your home. With its iconic split leaves and impressive size, this plant is perfect for creating a bold statement in any room. Native to the rainforests of Central America, this climbing plant is beloved by plant enthusiasts for its unique fenestrated leaves that develop beautiful holes as the plant matures.",
        careInstructions: {
          light: "Bright, indirect light",
          water: "Water when top inch of soil is dry",
          humidity: "50-60% humidity preferred",
          temperature: "65-80°F (18-27°C)",
          fertilizer: "Monthly during growing season"
        },
        specifications: {
          size: "2-3 feet tall, can grow up to 10 feet",
          potSize: "6-8 inch diameter",
          growth: "Moderate to fast",
          toxicity: "Toxic to pets and children",
          origin: "Central America",
          botanical: "Monstera deliciosa"
        },
        benefits: [
          "Air purifying qualities",
          "Low maintenance once established",
          "Dramatic architectural presence",
          "Can be trained to climb",
          "Long-lasting with proper care"
        ],
        careLevel: "Beginner friendly"
      },
      2: {
        detailedDescription: "The Fiddle Leaf Fig is the ultimate statement plant for modern homes. With its large, violin-shaped leaves and tree-like structure, this plant instantly transforms any space into a sophisticated sanctuary. Native to western Africa, this dramatic houseplant has become a favorite among interior designers and plant lovers alike for its sculptural beauty and ability to serve as living artwork.",
        careInstructions: {
          light: "Bright, indirect light",
          water: "Water when top 2 inches of soil are dry",
          humidity: "30-50% humidity",
          temperature: "65-75°F (18-24°C)",
          fertilizer: "Bi-weekly during spring and summer"
        },
        specifications: {
          size: "3-4 feet tall, can grow up to 8 feet indoors",
          potSize: "10-12 inch diameter",
          growth: "Moderate",
          toxicity: "Toxic to pets and children",
          origin: "Western Africa",
          botanical: "Ficus lyrata"
        },
        benefits: [
          "Dramatic architectural statement",
          "Air purifying properties",
          "Long-lived with proper care",
          "Can be shaped with pruning",
          "Adds height and drama to spaces"
        ],
        careLevel: "Intermediate"
      },
      3: {
        detailedDescription: "The Snake Plant, also known as Mother-in-Law's Tongue, is the perfect plant for busy lifestyles and low-light conditions. With its striking upright leaves featuring beautiful variegated patterns, this plant combines aesthetic appeal with incredible resilience. Native to West Africa, this plant is renowned for its air-purifying abilities and its capacity to thrive with minimal care.",
        careInstructions: {
          light: "Low to bright indirect light",
          water: "Water every 2-3 weeks",
          humidity: "Any humidity level",
          temperature: "60-85°F (15-29°C)",
          fertilizer: "2-3 times per year"
        },
        specifications: {
          size: "2-3 feet tall",
          potSize: "6-8 inch diameter",
          growth: "Slow to moderate",
          toxicity: "Toxic to pets and children",
          origin: "West Africa",
          botanical: "Sansevieria trifasciata"
        },
        benefits: [
          "Excellent air purifier",
          "Releases oxygen at night",
          "Extremely low maintenance",
          "Tolerates neglect",
          "Beautiful architectural form"
        ],
        careLevel: "Beginner friendly"
      },
      4: {
        detailedDescription: "The Golden Pothos is a versatile and stunning trailing plant that brings natural beauty to any space. With its heart-shaped leaves adorned with golden variegation, this plant can cascade beautifully from shelves, hang gracefully from baskets, or climb up moss poles. Native to the Solomon Islands, this adaptable plant is perfect for both beginners and experienced plant parents.",
        careInstructions: {
          light: "Low to bright indirect light",
          water: "Water when top inch of soil is dry",
          humidity: "40-50% humidity preferred",
          temperature: "65-85°F (18-29°C)",
          fertilizer: "Monthly during growing season"
        },
        specifications: {
          size: "Trailing vines up to 6 feet",
          potSize: "4-6 inch diameter",
          growth: "Fast",
          toxicity: "Toxic to pets and children",
          origin: "Solomon Islands",
          botanical: "Epipremnum aureum"
        },
        benefits: [
          "Excellent air purifier",
          "Fast-growing and trailing",
          "Tolerates low light",
          "Easy to propagate",
          "Versatile styling options"
        ],
        careLevel: "Beginner friendly"
      }
    };

    return productDetails[product.id] || productDetails[1];
  };

  if (!product) {
    return (
      <div className="planthub-container">
        <div className="container py-5">Product not found</div>
      </div>
    );
  }

  const productDetails = getProductDetails(product);

  return (
    <div className="planthub-container">
      {/* Header */}
      <Header />

      <div className="container py-4" style={{ marginTop: '80px' }}>
        <div className="row g-4">
          {/* Main Content */}
          <main className="col-lg-8">
            <section className="product-card mb-4">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="gallery-container">
                    <div className="gallery-wrapper">
                      <div className="gallery-scroll " id={`gallery-${productId}`}>
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

                    {/* Care Level Badge */}
                    <div className="care-level-badge mb-3">
                      <i className="fas fa-award text-success me-2"></i>
                      <span className="badge bg-success">{productDetails.careLevel}</span>
                    </div>

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

            {/* Product Description Tabs Section */}
            <section className="product-description-section mb-4">
              <div className="card shadow-sm">
                <div className="card-header bg-white">
                  <ul className="nav nav-tabs card-header-tabs" role="tablist">
                    <li className="nav-item">
                      <button 
                        className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                      >
                        <i className="fas fa-info-circle me-2"></i>Description
                      </button>
                    </li>
                    <li className="nav-item">
                      <button 
                        className={`nav-link ${activeTab === 'care' ? 'active' : ''}`}
                        onClick={() => setActiveTab('care')}
                      >
                        <i className="fas fa-seedling me-2"></i>Care Instructions
                      </button>
                    </li>
                    <li className="nav-item">
                      <button 
                        className={`nav-link ${activeTab === 'specifications' ? 'active' : ''}`}
                        onClick={() => setActiveTab('specifications')}
                      >
                        <i className="fas fa-clipboard-list me-2"></i>Specifications
                      </button>
                    </li>
                    <li className="nav-item">
                      <button 
                        className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`}
                        onClick={() => setActiveTab('benefits')}
                      >
                        <i className="fas fa-star me-2"></i>Benefits
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  {activeTab === 'description' && (
                    <div className="tab-content-description">
                      <h5 className="mb-3">About {product.name}</h5>
                      <p className="text-muted lead">{productDetails.detailedDescription}</p>
                    </div>
                  )}

                  {activeTab === 'care' && (
                    <div className="tab-content-care">
                      <h5 className="mb-3">Care Instructions</h5>
                      <div className="row g-3">
                        {Object.entries(productDetails.careInstructions).map(([key, value]) => (
                          <div key={key} className="col-md-6">
                            <div className="care-instruction-item">
                              <div className="care-icon">
                                {key === 'light' && <i className="fas fa-sun text-warning"></i>}
                                {key === 'water' && <i className="fas fa-tint text-primary"></i>}
                                {key === 'humidity' && <i className="fas fa-cloud text-info"></i>}
                                {key === 'temperature' && <i className="fas fa-thermometer-half text-danger"></i>}
                                {key === 'fertilizer' && <i className="fas fa-flask text-success"></i>}
                              </div>
                              <div className="care-content">
                                <h6 className="care-title">{key.charAt(0).toUpperCase() + key.slice(1)}</h6>
                                <p className="care-description">{value}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'specifications' && (
                    <div className="tab-content-specifications">
                      <h5 className="mb-3">Plant Specifications</h5>
                      <div className="specifications-list">
                        {Object.entries(productDetails.specifications).map(([key, value]) => (
                          <div key={key} className="specification-item">
                            <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                            <span className="spec-value">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'benefits' && (
                    <div className="tab-content-benefits">
                      <h5 className="mb-3">Key Benefits</h5>
                      <div className="benefits-list">
                        {productDetails.benefits.map((benefit, index) => (
                          <div key={index} className="benefit-item">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Address Section */}
            <section className="address-section mb-4">
              <h2 className="section-title">Delivery Address</h2>
              <div className="row g-3">
                {['fullName', 'phoneNumber', 'streetAddress', 'city', 'zipCode'].map(key => (
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
                ].map((m, i) => (
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
      <Footer />
    </div>
  );
};

export default ProductCard;