import React, { useState } from 'react';
import './PlantCareSupport.css';

const PlantCareSupport = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: 'Plant Care Questions',
    subject: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Support ticket submitted successfully!');
  };

  const products = [
    { name: 'Organic Plant Food', price: '$12.99' },
    { name: 'Spray Bottle', price: '-' },
    { name: 'Plant Mister', price: '$8.50' },
    { name: 'Soil Mix', price: '-' },
    { name: 'Premium Potting Soil', price: '$15.99' },
    { name: 'Tool Set', price: '-' },
    { name: 'Garden Tool Kit', price: '$24.99' }
  ];

  const featuredProducts = [
    { name: 'Ceramic Pot', price: '$29.99' },
    { name: 'Modern Planter', price: '$39.99' },
    { name: 'Succulent', price: '-' },
    { name: 'Jade Plant', price: '$18.50' },
    { name: 'Pot/Tray', price: '-' },
    { name: 'Liquid Plant Food', price: '$12.99' },
    { name: 'Drainage', price: '-' },
    { name: 'Pebble Stones', price: '$8.99' }
  ];

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      <div className="container-fluid pcs-plant-care-app">
        <div className="row">
          {/* Left Sidebar - Plant Care Products */}
          <div className="col-md-3 pcs-sidebar-left">
            <div className="pcs-sidebar-header">
              <h5>Plant Care Products</h5>
            </div>
            <div className="pcs-product-grid">
              {products.map((product, index) => (
                <div key={index} className="pcs-product-card">
                  <div className="pcs-product-image"></div>
                  <div className="pcs-product-info">
                    <h6>{product.name}</h6>
                    <span className="pcs-price">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-6 pcs-main-content">
            <div className="pcs-support-header">
              <h3>Customer Care Support</h3>
              <p>Get help with your plants and pets. Our experts are here to assist you.</p>
            </div>

            {/* Support Options */}
            <div className="row pcs-support-options mb-4">
              <div className="col-md-6">
                <div className="pcs-support-card">
                  <div className="pcs-support-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h5>Live Chat Support</h5>
                  <p>Chat with our plant care experts in real-time.</p>
                  <button className="btn btn-dark pcs-btn-support">Live Chat</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pcs-support-card">
                  <div className="pcs-support-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h5>Email Support</h5>
                  <p>Send us your questions and get detailes.</p>
                  <button className="btn btn-dark pcs-btn-support">Send Email</button>
                </div>
              </div>
            </div>

            {/* Support Form */}
            <div className="pcs-support-form">
              <h4>Submit a Support Ticket</h4>
              <div className="pcs-form-container">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Help Category</label>
                  <select
                    className="form-select"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="Plant Care Questions">Plant Care Questions</option>
                    <option value="Product Support">Product Support</option>
                    <option value="Order Issues">Order Issues</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button onClick={handleSubmit} className="btn btn-dark pcs-btn-submit">Submit Ticket</button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="pcs-faq-section mt-5">
              <h4>Frequently Asked Questions</h4>
              
              <div className="pcs-faq-item">
                <h6>How often should I water my plants?</h6>
                <p>Watering frequency depends on the plant type, pot size, and environmental conditions. Most houseplants need watering when the top inch of soil feels dry.</p>
              </div>

              <div className="pcs-faq-item">
                <h6>What size pot should I choose?</h6>
                <p>Choose a pot that is 1-2 inches larger in diameter than the current pot. Ensure it has drainage holes to prevent waterlogging.</p>
              </div>

              <div className="pcs-faq-item">
                <h6>Why are my plant's leaves turning yellow?</h6>
                <p>Yellow leaves can indicate overwatering, underwatering, nutrient deficiency, or natural aging. Check soil moisture and adjust care accordingly.</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Featured Products */}
          <div className="col-md-3 pcs-sidebar-right">
            <div className="pcs-sidebar-header">
              <h5>Featured Products</h5>
            </div>
            <div className="pcs-product-grid">
              {featuredProducts.map((product, index) => (
                <div key={index} className="pcs-product-card">
                  <div className="pcs-product-image"></div>
                  <div className="pcs-product-info">
                    <h6>{product.name}</h6>
                    <span className="pcs-price">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantCareSupport;