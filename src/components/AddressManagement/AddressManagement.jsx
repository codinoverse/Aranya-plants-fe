import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddressManagement.css';

const AddressManagement = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    recipientName: '',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    phone: '',
    isDefault: false,
    addressType: 'home'
  });

  const BaseURL = import.meta.env.VITE_API_BASE_URL

  const axiosConfig = {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Content-Type': 'application/json',
      Origin: 'http://localhost:5173',
    },
  };

  const getUserId = () => {
    try {
    
      let userIdStr = localStorage.getItem('userId') || 
                     localStorage.getItem('user_id') || 
                     localStorage.getItem('id');
      
      if (!userIdStr) {
        const possibleKeys = ['userInfo', 'user', 'currentUser', 'userData'];
        
        for (const key of possibleKeys) {
          const userStr = localStorage.getItem(key);
          if (userStr) {
            try {
              const userObj = JSON.parse(userStr);
              console.log(`User object from localStorage (${key}):`, userObj);
              
              // Extract userId from user object
              userIdStr = userObj.userId || userObj.user_id || userObj.id;
              if (userIdStr) {
                console.log(`Found userId in ${key}:`, userIdStr);
                break;
              }
            } catch (parseError) {
              console.error(`Error parsing ${key} from localStorage:`, parseError);
            }
          }
        }
      }
      
      console.log('Raw userId from localStorage:', userIdStr);
      
      if (!userIdStr) {
        console.error('No userId found in localStorage. Available keys:', Object.keys(localStorage));
        throw new Error('User not logged in. No userId found in localStorage.');
      }

      const userIdNum = Number(userIdStr);
      
      if (isNaN(userIdNum) || userIdNum <= 0) {
        console.error('Invalid userId format:', userIdStr);
        throw new Error(`Invalid userId format: ${userIdStr}`);
      }

      console.log('Using userId:', userIdNum);
      return userIdNum;
    } catch (error) {
      console.error('Error getting userId:', error);
      // Redirect to login or show error message
      alert('Please log in again. User session not found.');
      throw error;
    }
  };

  // Debug function to check localStorage contents
  const debugLocalStorage = () => {
    console.log('All localStorage contents:');
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`${key}: ${value}`);
    }
  };

  // Fetch addresses with better error handling
  const fetchAddresses = async () => {
    try {
      setLoading(true);
      
      // Debug localStorage contents
      debugLocalStorage();
      
      const userId = getUserId();
      console.log('Fetching addresses for userId:', userId);
      
      const response = await axios.get(`${BaseURL}/users/${userId}/addresses`, axiosConfig);
      
      console.log('Addresses response:', response.data);
      setAddresses(response.data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
      
      if (error.response?.status === 401) {
        alert('Session expired. Please log in again.');
        // Redirect to login page or clear localStorage
        localStorage.clear();
        window.location.href = '/login'; // Adjust path as needed
      } else {
        alert(`Failed to load addresses: ${error.response?.data?.message || error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if user is logged in before fetching addresses
    try {
      getUserId(); // This will throw if no valid userId
      fetchAddresses();
    } catch (error) {
      setLoading(false);
      console.error('User not logged in:', error);
    }
  }, []);

  // Handle form input changes (both text and checkbox)
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Reset form and editing address state
  const resetForm = () => {
    setFormData({
      recipientName: '',
      addressLine1: '',
      addressLine2: '',
      landmark: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'India',
      phone: '',
      isDefault: false,
      addressType: 'home',
    });
    setEditingAddress(null);
  };

  // Save address with enhanced error handling
  const handleSaveAddress = async () => {
    try {
      const userId = getUserId();
      console.log('Saving address for userId:', userId);

      // Validate required fields
      if (!formData.recipientName || !formData.addressLine1 || !formData.city || 
          !formData.state || !formData.postalCode || !formData.phone) {
        alert('Please fill in all required fields.');
        return;
      }

      const addressData = {
        userId: userId,
        recipientName: formData.recipientName,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2 || null,
        landmark: formData.landmark || null,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
        phone: formData.phone,
        isDefault: formData.isDefault,
        addressType: formData.addressType.toLowerCase(),
      };

      console.log('Address data being sent:', addressData);

      if (editingAddress != null) {
        const id = editingAddress.addressId;
        await axios.put(`${BaseURL}/addresses/${userId}/${id}`, addressData, axiosConfig);
        alert('Address updated successfully');
      } else {
        await axios.post(`${BaseURL}/users/${userId}/addresses`, addressData, axiosConfig);
        alert('Address added successfully');
      }

      setShowForm(false);
      resetForm();
      fetchAddresses();
    } catch (error) {
      console.error('Error saving address:', error);
      alert(`Failed to save address: ${error.response?.data?.message || error.message}`);
    }
  };

  // Populate form with address data for editing
  const handleEditAddress = (address) => {
    setFormData({
      recipientName: address.recipientName,
      addressLine1: address.addressLine1,
      addressLine2: address.addressLine2 || '',
      landmark: address.landmark || '',
      city: address.city,
      state: address.state,
      postalCode: address.postalCode,
      country: address.country,
      phone: address.phone,
      isDefault: address.isDefault,
      addressType: address.addressType,
    });
    setEditingAddress(address);
    setShowForm(true);
  };

  // Delete address by ID
  const handleDeleteAddress = async (addressId) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      try {
        const userId = getUserId();
        await axios.delete(`${BaseURL}/addresses/${userId}/${addressId}`, axiosConfig);
        alert('Address deleted successfully');
        fetchAddresses();
      } catch (error) {
        console.error('Error deleting address:', error);
        alert(`Failed to delete address: ${error.response?.data?.message || error.message}`);
      }
    }
  };

  // Set an address as default
  const handleSetDefault = async (addressId) => {
    try {
      const userId = getUserId();
      const addressToUpdate = addresses.find((addr) => addr.addressId === addressId);
      if (!addressToUpdate) return;

      const updateData = {
        ...addressToUpdate,
        isDefault: true,
        addressType: addressToUpdate.addressType.toLowerCase(),
        userId: userId,
      };

      await axios.put(`${BaseURL}/addresses/${userId}/${addressId}`, updateData, axiosConfig);
      alert('Default address updated successfully');
      fetchAddresses();
    } catch (error) {
      console.error('Error setting default address:', error);
      alert(`Failed to set default address: ${error.response?.data?.message || error.message}`);
    }
  };

  // Cancel editing/adding
  const handleCancel = () => {
    setShowForm(false);
    resetForm();
  };

  // Show blank form for adding new address
  const handleAddNew = () => {
    resetForm();
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border" role="status" />
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="address-management-card">
        <div className="card-header">
          <h5 className="mb-0">Address Management</h5>
          <small className="text-muted">Manage your shipping addresses</small>
        </div>
        <div className="card-body">
          <div className="address-section">
            <div className="section-header d-flex justify-content-between align-items-center mb-3">
              <h6>Your Addresses</h6>
              <button className="btn btn-dark btn-sm" onClick={handleAddNew}>
                <i className="bi bi-plus"></i> Add New Address
              </button>
            </div>
            {addresses.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-muted">No addresses found. Add your first address!</p>
              </div>
            ) : (
              addresses.map((address) => (
                <div key={address.addressId} className="address-display shipping-address mb-3 p-3 border rounded">
                  <div className="address-info">
                    <div className="name fw-bold">
                      {address.recipientName}{' '}
                      {address.isDefault && <span className="badge bg-secondary ms-2">Default</span>}{' '}
                      <span className="badge bg-info ms-2 text-capitalize">{address.addressType}</span>
                    </div>
                    <div>{address.addressLine1}</div>
                    {address.addressLine2 && <div>{address.addressLine2}</div>}
                    {address.landmark && <div>Landmark: {address.landmark}</div>}
                    <div>
                      {address.city}, {address.state} - {address.postalCode}
                    </div>
                    <div>{address.country}</div>
                    <div className="phone">Phone: {address.phone}</div>
                  </div>
                  <div className="address-actions mt-2">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => handleEditAddress(address)}
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </button>
                    {!address.isDefault && (
                      <button
                        className="btn btn-outline-primary btn-sm me-2"
                        onClick={() => handleSetDefault(address.addressId)}
                      >
                        Set as Default
                      </button>
                    )}
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDeleteAddress(address.addressId)}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {showForm && (
            <div className="address-form-section mt-4 p-3 border rounded bg-light">
              <h6>{editingAddress ? 'Edit Address' : 'Add New Address'}</h6>

              <div className="mb-3">
                <label className="form-label">Recipient Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address Line 1 *</label>
                <input
                  type="text"
                  className="form-control"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address Line 2 (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Landmark (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleInputChange}
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">City *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">State *</label>
                  <select
                    className="form-select"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Assam">Assam</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Postal Code *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
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
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Address Type</label>
                  <select
                    className="form-select"
                    name="addressType"
                    value={formData.addressType}
                    onChange={handleInputChange}
                  >
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3 d-flex align-items-end">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="isDefault"
                      id="isDefault"
                      checked={formData.isDefault}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="isDefault">
                      Set as default address
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button className="btn btn-dark me-2" onClick={handleSaveAddress}>
                  {editingAddress ? 'Update Address' : 'Save Address'}
                </button>
                <button className="btn btn-outline-secondary" onClick={handleCancel}>
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