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

      <div className="pcs-plant-care-app d-flex justify-content-center align-items-center">
        <div className="pcs-main-content shadow-lg">
          {/* Header */}
          <div className="pcs-support-header">
            <h2>🌿  Care Support</h2>
            <p>We’re here to help you grow healthy and happy plants.</p>
          </div>

          {/* Support Options */}
          <div className="row pcs-support-options mb-5">
            <div className="col-md-6 mb-3">
              <div className="pcs-support-card">
                <div className="pcs-support-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h5>Live Chat Support</h5>
                <p>Chat with our plant experts in real-time.</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="pcs-support-card">
                <div className="pcs-support-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h5>Email Support</h5>
                <p>Send us your queries and get detailed help.</p>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <div className="pcs-support-form">
            <h4>Submit a Support Ticket</h4>
            <div className="pcs-form-container">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white">Email Address</label>
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
                <label className="form-label text-white">Help Category</label>
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
                <label className="form-label text-white">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button onClick={handleSubmit} className="pcs-btn-submit">Submit Ticket</button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="pcs-faq-section mt-5">
            <h4>🌱 Frequently Asked Questions</h4>

            <div className="pcs-faq-item">
              <h6>How often should I water my plants?</h6>
              <p>Most houseplants need watering when the top inch of soil feels dry.</p>
            </div>

            <div className="pcs-faq-item">
              <h6>What size pot should I choose?</h6>
              <p>Choose a pot 1-2 inches larger in diameter with proper drainage holes.</p>
            </div>

            <div className="pcs-faq-item">
              <h6>Why are my plant's leaves turning yellow?</h6>
              <p>It may indicate overwatering, underwatering, or nutrient deficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantCareSupport;
