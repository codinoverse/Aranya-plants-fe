import React, { useState } from 'react';
import './AddressManagement.css';

const AddressManagement = () => {
  const [addresses] = useState({
    billing: {
      name: 'John Smith',
      address1: '123 Garden Street',
      address2: 'Apartment 4B',
      city: 'New York',
      state: 'NY 10001',
      country: 'United States',
      phone: '(555) 123-4567'
    },
    shipping: [
      {
        id: 1,
        name: 'John Smith',
        address1: '123 Garden Street',
        address2: 'Apartment 4B',
        city: 'New York',
        state: 'NY 10001',
        country: 'United States',
        phone: '(555) 123-4567',
        isDefault: true
      },
      {
        id: 2,
        name: 'Office Address',
        address1: '456 Business Ave',
        address2: 'Suite 202',
        city: 'Brooklyn',
        state: 'NY 11201',
        country: 'United States',
        phone: '(555) 987-6543',
        isDefault: false
      }
    ]
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    setPrimary: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveAddress = () => {
    console.log('Saving address:', formData);
    setShowForm(false);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States',
      phone: '',
      setPrimary: false
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States',
      phone: '',
      setPrimary: false
    });
  };

  return (
    <div className="container mt-4">
      <div className="address-management-card">
        <div className="card-header">
          <h5 className="mb-0">Address Management</h5>
          <small className="text-muted">Manage your billing and shipping addresses</small>
        </div>
        
        <div className="card-body">
          {/* Billing Address Section */}
          <div className="address-section">
            <div className="section-header">
              <h6>Billing Address</h6>
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-pencil"></i> Edit
              </button>
            </div>
            
            <div className="address-display">
              <div className="address-info">
                <div className="name">{addresses.billing.name}</div>
                <div>{addresses.billing.address1}</div>
                <div>{addresses.billing.address2}</div>
                <div>{addresses.billing.city}, {addresses.billing.state}</div>
                <div>{addresses.billing.country}</div>
                <div className="phone">Phone: {addresses.billing.phone}</div>
              </div>
            </div>
          </div>

          {/* Shipping Addresses Section */}
          <div className="address-section">
            <div className="section-header">
              <h6>Shipping Addresses</h6>
              <button 
                className="btn btn-dark btn-sm"
                onClick={() => setShowForm(true)}
              >
                <i className="bi bi-plus"></i> Add New Address
              </button>
            </div>

            {addresses.shipping.map((address) => (
              <div key={address.id} className="address-display shipping-address">
                <div className="address-info">
                  <div className="name">
                    {address.name}
                    {address.isDefault && <span className="badge bg-secondary ms-2">Default</span>}
                  </div>
                  <div>{address.address1}</div>
                  <div>{address.address2}</div>
                  <div>{address.city}, {address.state}</div>
                  <div>{address.country}</div>
                  <div className="phone">Phone: {address.phone}</div>
                </div>
                <div className="address-actions">
                  <button className="btn btn-outline-secondary btn-sm me-2">
                    <i className="bi bi-pencil"></i>
                  </button>
                  {!address.isDefault && (
                    <button className="btn btn-outline-primary btn-sm me-2">
                      Set as Primary
                    </button>
                  )}
                  <button className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Address Form */}
          {showForm && (
            <div className="address-form-section">
              <h6>Add New Shipping Address</h6>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Address Line 1</label>
                <input
                  type="text"
                  className="form-control"
                  name="address1"
                  value={formData.address1}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address Line 2 (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  name="address2"
                  value={formData.address2}
                  onChange={handleInputChange}
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">State/Province</label>
                  <select
                    className="form-select"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  >
                    <option value="">Select State</option>
                    <option value="NY">New York</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">ZIP/Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="setPrimary"
                    id="setPrimary"
                    checked={formData.setPrimary}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="setPrimary">
                    Set as primary shipping address
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button 
                  className="btn btn-dark me-2"
                  onClick={handleSaveAddress}
                >
                  Save Address
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressManagement;