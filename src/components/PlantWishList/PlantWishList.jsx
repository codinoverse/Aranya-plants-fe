import React, { useState } from 'react';
import { Heart, Share, FileDown } from 'lucide-react';
import './PlantWishlist.css';

const PlantWishlist = () => {
  const [selectedSort, setSelectedSort] = useState('Recent');
  
  const plants = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      care: 'Easy care',
      light: 'Bright light',
      price: 45.99,
      image: '/api/placeholder/200/200',
      liked: true
    },
    {
      id: 2,
      name: 'Snake Plant',
      care: 'Very easy',
      light: 'Low light',
      price: 28.99,
      image: '/api/placeholder/200/200',
      liked: true
    },
    {
      id: 3,
      name: 'Fiddle Leaf Fig',
      care: 'Medium care',
      light: 'Bright light',
      price: 89.99,
      image: '/api/placeholder/200/200',
      liked: true
    },
    {
      id: 4,
      name: 'Peace Lily',
      care: 'Easy care',
      light: 'Low to medium light',
      price: 32.99,
      image: '/api/placeholder/200/200',
      liked: true
    },
    {
      id: 5,
      name: 'Rubber Plant',
      care: 'Easy care',
      light: 'Bright indirect light',
      price: 39.99,
      image: '/api/placeholder/200/200',
      liked: true
    },
    {
      id: 6,
      name: 'Golden Pothos',
      care: 'Very easy',
      light: 'Low to bright light',
      price: 24.99,
      image: '/api/placeholder/200/200',
      liked: true
    }
  ];

  const recentlyViewed = [
    { name: 'ZZ Plant', price: 34.99, image: '/api/placeholder/50/50' },
    { name: 'White Ceramic', price: 18.99, image: '/api/placeholder/50/50' }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3 bg-light p-4">
          {/* Plant Categories */}
          <div className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Plant Categories</h6>
            <div className="category-item d-flex justify-content-between align-items-center mb-2">
              <span className="text-primary">🏠 Indoor Plants</span>
              <span className="badge bg-light text-dark">24</span>
            </div>
            <div className="category-item d-flex justify-content-between align-items-center mb-2">
              <span>🌳 Outdoor Plants</span>
              <span className="badge bg-light text-dark">18</span>
            </div>
            <div className="category-item d-flex justify-content-between align-items-center mb-3">
              <span>🌵 Succulents</span>
              <span className="badge bg-light text-dark">12</span>
            </div>
          </div>

          {/* Care Level */}
          <div className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Care Level</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="easy" />
              <label className="form-check-label" htmlFor="easy">Easy</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="medium" />
              <label className="form-check-label" htmlFor="medium">Medium</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="expert" />
              <label className="form-check-label" htmlFor="expert">Expert</label>
            </div>
          </div>

          {/* Light Requirements */}
          <div className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Light Requirements</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="lowLight" />
              <label className="form-check-label" htmlFor="lowLight">Low Light</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="brightIndirect" />
              <label className="form-check-label" htmlFor="brightIndirect">Bright Indirect</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="directSun" />
              <label className="form-check-label" htmlFor="directSun">Direct Sun</label>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-6 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">My Wishlist</h2>
              <p className="text-muted mb-0">54 items in your wishlist</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary btn-sm active">Plants</button>
                <button className="btn btn-outline-secondary btn-sm">Pots</button>
              </div>
              <select 
                className="form-select form-select-sm" 
                style={{width: 'auto'}}
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="Recent">Sort by: Recent</option>
                <option value="Price">Sort by: Price</option>
                <option value="Name">Sort by: Name</option>
              </select>
            </div>
          </div>

          {/* Plant Grid */}
          <div className="row g-3">
            {plants.map((plant) => (
              <div key={plant.id} className="col-md-4">
                <div className="card plant-card h-100">
                  <div className="position-relative">
                    <div className="plant-image-placeholder">
                      <span className="text-white">{plant.name}</span>
                    </div>
                    <button className="btn btn-link position-absolute top-0 end-0 p-2">
                      <Heart className={`heart-icon ${plant.liked ? 'liked' : ''}`} size={20} />
                    </button>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-bold mb-2">{plant.name}</h6>
                    <p className="card-text small text-muted mb-2">
                      {plant.care} • {plant.light}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary">${plant.price}</span>
                      <button className="btn Atc btn-sm">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-md-3 bg-light p-4">
          {/* Pot Categories */}
          <div className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Pot Categories</h6>
            <div className="category-item d-flex justify-content-between align-items-center mb-2">
              <span>🏺 Ceramic Pots</span>
              <span className="badge bg-light text-dark">16</span>
            </div>
            <div className="category-item d-flex justify-content-between align-items-center mb-2">
              <span>🟤 Terracotta</span>
              <span className="badge bg-light text-dark">12</span>
            </div>
            <div className="category-item d-flex justify-content-between align-items-center mb-3">
              <span>✨ Decorative</span>
              <span className="badge bg-light text-dark">8</span>
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Size</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="small" />
              <label className="form-check-label" htmlFor="small">Small (4-6")</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="mediumSize" />
              <label className="form-check-label" htmlFor="mediumSize">Medium (8-10")</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="large" />
              <label className="form-check-label" htmlFor="large">Large (12"+)</label>
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Recently Viewed</h6>
            {recentlyViewed.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-3">
                <div className="recently-viewed-image me-3"></div>
                <div>
                  <div className="fw-medium small">{item.name}</div>
                  <div className="text-muted small">${item.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h6 className="fw-bold text-dark mb-3">Quick Actions</h6>
            <button className="btn btn-outline-primary btn-sm d-flex align-items-center mb-2 w-100">
              <Share size={16} className="me-2" />
              Share Wishlist
            </button>
            <button className="btn btn-outline-secondary btn-sm d-flex align-items-center w-100">
              <FileDown size={16} className="me-2" />
              Export List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantWishlist;