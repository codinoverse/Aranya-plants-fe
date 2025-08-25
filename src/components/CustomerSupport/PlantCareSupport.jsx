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

  const [activeTab, setActiveTab] = useState('support');
  const [ticketId, setTicketId] = useState('');

  // Mock ticket data - in real app, this would come from an API
  const [tickets] = useState([
    {
      id: 'TCK-001234',
      subject: 'My monstera leaves are turning yellow',
      category: 'Plant Care Questions',
      status: 'In Progress',
      priority: 'Medium',
      createdDate: '2025-08-20',
      lastUpdate: '2025-08-22',
      description: 'I noticed my monstera deliciosa leaves are turning yellow from the bottom up. I water it once a week.',
      responses: [
        {
          date: '2025-08-21',
          message: 'Thank you for contacting us. This sounds like it could be overwatering. Can you check if the soil is still moist?',
          isSupport: true
        },
        {
          date: '2025-08-22',
          message: 'Yes, the soil is quite wet even after 3 days since watering.',
          isSupport: false
        }
      ]
    },
    {
      id: 'TCK-001187',
      subject: 'Order delivery issue',
      category: 'Order Issues',
      status: 'Resolved',
      priority: 'High',
      createdDate: '2025-08-15',
      lastUpdate: '2025-08-18',
      description: 'My plant order #ORD-5567 was supposed to arrive on August 16th but I haven\'t received it yet.',
      responses: [
        {
          date: '2025-08-16',
          message: 'We apologize for the delay. Your order was held up due to weather conditions. We\'ll expedite shipping.',
          isSupport: true
        },
        {
          date: '2025-08-18',
          message: 'Your order has been delivered. Thank you for your patience!',
          isSupport: true
        }
      ]
    },
    {
      id: 'TCK-001098',
      subject: 'Fertilizer recommendations',
      category: 'Product Support',
      status: 'Closed',
      priority: 'Low',
      createdDate: '2025-08-10',
      lastUpdate: '2025-08-12',
      description: 'What fertilizer do you recommend for indoor succulents?',
      responses: [
        {
          date: '2025-08-11',
          message: 'For succulents, we recommend a balanced, diluted fertilizer (10-10-10) used sparingly during growing season.',
          isSupport: true
        },
        {
          date: '2025-08-12',
          message: 'Perfect, thank you! That answers my question.',
          isSupport: false
        }
      ]
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const newTicketId = `TCK-${Math.random().toString().substr(2, 6)}`;
    console.log('Form submitted:', formData);
    alert(`Support ticket submitted successfully! Your ticket ID is: ${newTicketId}`);
  };

  const handleTicketSearch = () => {
    if (!ticketId.trim()) {
      alert('Please enter a ticket ID');
      return;
    }

    const ticket = tickets.find(t => t.id.toLowerCase() === ticketId.toLowerCase());
    if (ticket) {
      // In a real app, you'd navigate to ticket details or show in modal
      console.log('Found ticket:', ticket);
    } else {
      alert('Ticket not found. Please check your ticket ID.');
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Open': return 'badge-open';
      case 'In Progress': return 'badge-progress';
      case 'Resolved': return 'badge-resolved';
      case 'Closed': return 'badge-closed';
      default: return 'badge-open';
    }
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'High': return 'badge-high';
      case 'Medium': return 'badge-medium';
      case 'Low': return 'badge-low';
      default: return 'badge-medium';
    }
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
            <h2>🌿 Plant Care Support</h2>
            <p>We're here to help you grow healthy and happy plants.</p>
          </div>

          {/* Navigation Tabs */}
          <div className="pcs-nav-tabs mb-4">
            <button
              className={`pcs-nav-btn ${activeTab === 'support' ? 'active' : ''}`}
              onClick={() => setActiveTab('support')}
            >
              <i className="fas fa-headset"></i> Get Support
            </button>
            <button
              className={`pcs-nav-btn ${activeTab === 'status' ? 'active' : ''}`}
              onClick={() => setActiveTab('status')}
            >
              <i className="fas fa-ticket-alt"></i> Ticket Status
            </button>
          </div>

          {/* Support Tab Content */}
          {activeTab === 'support' && (
            <>
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
                <h4>Frequently Asked Questions</h4>

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
            </>
          )}

          {/* Ticket Status Tab Content */}
          {activeTab === 'status' && (
            <>
              {/* Ticket Search */}
              <div className="pcs-ticket-search mb-4">
                <h4 className="text-white mb-3">🎫 Check Ticket Status</h4>
                <div className="pcs-search-container">
                  <div className="row">
                    <div className="col-md-8 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your ticket ID (e.g., TCK-001234)"
                        value={ticketId}
                        onChange={(e) => setTicketId(e.target.value)}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <button onClick={handleTicketSearch} className="pcs-btn-search w-100">
                        <i className="fas fa-search"></i> Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Tickets */}
              <div className="pcs-tickets-section">
                <h4 className="text-white mb-4"> Your Recent Tickets</h4>

                <div className="pcs-tickets-container">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="pcs-ticket-card mb-3">
                      <div className="pcs-ticket-header">
                        <div className="pcs-ticket-id">
                          <h6>#{ticket.id}</h6>
                          <div className="pcs-ticket-badges">
                            <span className={`pcs-badge ${getStatusBadgeClass(ticket.status)}`}>
                              {ticket.status}
                            </span>
                            <span className={`pcs-badge ${getPriorityBadgeClass(ticket.priority)}`}>
                              {ticket.priority}
                            </span>
                          </div>
                        </div>
                        <div className="pcs-ticket-date">
                          <small>Created: {ticket.createdDate}</small>
                          <small>Updated: {ticket.lastUpdate}</small>
                        </div>
                      </div>

                      <div className="pcs-ticket-body">
                        <h6>{ticket.subject}</h6>
                        <p className="pcs-ticket-category">
                          <i className="fas fa-tag"></i> {ticket.category}
                        </p>
                        <p className="pcs-ticket-description">{ticket.description}</p>

                        {ticket.responses.length > 0 && (
                          <div className="pcs-latest-response">
                            <small><strong>Latest Response:</strong></small>
                            <p className="pcs-response-text">
                              {ticket.responses[ticket.responses.length - 1].message}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="pcs-ticket-footer">
                        <button className="pcs-btn-view-details">
                          <i className="fas fa-eye"></i> View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Guide */}
              <div className="pcs-status-guide mt-5">
                <h5 className="text-white mb-3">Status Guide</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pcs-guide-item">
                      <span className="pcs-badge badge-open">Open</span>
                      <span>Your ticket has been received and is waiting for review</span>
                    </div>
                    <div className="pcs-guide-item">
                      <span className="pcs-badge badge-progress">In Progress</span>
                      <span>Our team is actively working on your request</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pcs-guide-item">
                      <span className="pcs-badge badge-resolved">Resolved</span>
                      <span>Issue has been resolved, awaiting your confirmation</span>
                    </div>
                    <div className="pcs-guide-item">
                      <span className="pcs-badge badge-closed">Closed</span>
                      <span>Ticket has been completed and closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PlantCareSupport;