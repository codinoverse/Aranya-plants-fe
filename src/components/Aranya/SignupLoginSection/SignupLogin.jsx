import React, { useState, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlantAuth.css';
import Logo from "/src/assets/Website-Logo.svg";
import { AuthContext } from '../AuthContextSection/AuthContext';
import { useNavigate } from 'react-router-dom';

const baseURL = import.meta.env.VITE_API_BASE_URL;
const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

const PlantAuth = ({ onClose }) => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('login'); // 'login', 'signup', 'otp'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    otp: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const sendOTP = async (phone) => {
    try {
      const response = await api.post('/users/send-otp', { phone });
      setOtpSent(true);
      return true;
    } catch (err) {
      console.error('Send OTP Error:', err);
      setError('Failed to send OTP. Please try again.');
      return false;
    }
  };

  const verifyOTP = async (phone, otp) => {
    try {
      const response = await api.post('/users/verify-otp', { phone, otp });
      return response.data;
    } catch (err) {
      console.error('Verify OTP Error:', err);
      setError('Invalid OTP. Please try again.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (currentView === 'login') {
        // Mobile Login with Password or OTP
        if (!formData.phone) {
          setError('Please enter mobile number');
          setLoading(false);
          return;
        }

        if (formData.password) {
          // Mobile + Password login
          const loginData = {
            phone: formData.phone,
            password: formData.password,
          };

          const response = await api.post('/users/login-mobile', loginData);
          login({
            name: response.data.firstName || 'User',
            email: response.data.email,
            phone: formData.phone,
            userId: response.data.userId,
          });
          onClose && onClose();
          navigate('/');
        } else {
          // Send OTP for mobile login
          const otpSentSuccess = await sendOTP(formData.phone);
          if (otpSentSuccess) {
            setCurrentView('otp');
          }
        }

      } else if (currentView === 'signup') {
        // Signup
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.password) {
          setError('Please fill in all required fields');
          setLoading(false);
          return;
        }

        // Send OTP for signup
        const otpSentSuccess = await sendOTP(formData.phone);
        if (otpSentSuccess) {
          setCurrentView('otp');
        }

      } else if (currentView === 'otp') {
        // OTP Verification
        if (!formData.otp) {
          setError('Please enter OTP');
          setLoading(false);
          return;
        }

        const otpVerified = await verifyOTP(formData.phone, formData.otp);
        if (otpVerified) {
          if (formData.firstName && formData.lastName) {
            // Complete signup
            const signupData = {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email || null,
              password: formData.password,
              phone: formData.phone,
            };

            const response = await api.post('/users/register', signupData);
            login({
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
              phone: formData.phone,
              userId: response.data.userId,
            });
          } else {
            // Mobile login with OTP
            const response = await api.post('/users/login-otp', {
              phone: formData.phone,
              otp: formData.otp
            });
            login({
              name: response.data.firstName || 'User',
              email: response.data.email,
              phone: formData.phone,
              userId: response.data.userId,
            });
          }
          onClose && onClose();
          navigate('/');
        }
      }
    } catch (err) {
      console.error('API Error:', err);
      let errorMessage = 'An error occurred. Please try again.';
      if (err.response) {
        errorMessage = err.response.data?.message || `Request failed with status ${err.response.status}`;
      } else if (err.request) {
        errorMessage = 'Network error. Please check your connection.';
      } else {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      otp: '',
      rememberMe: false,
    });
    setError('');
    setOtpSent(false);
  };

  const switchView = (view) => {
    resetForm();
    setCurrentView(view);
  };

  return (
    <div className="plant-auth-modal-overlay">
      <div className="plant-auth-modal">
        <button className="close-btn" onClick={onClose} disabled={loading}>
          ×
        </button>
        <div className="auth-header">
          <img src={Logo} className="main-logo" width="205px" alt="Logo" />
          <p className="auth-subtitle">
            {currentView === 'login' && 'Sign in to Aranya Plants and Pots'}
            {currentView === 'signup' && 'Create Account'}
            {currentView === 'otp' && 'Verify Mobile Number'}
          </p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {currentView === 'login' && (
            <>
              <div className="form-group">
                <label htmlFor="loginPhone">Mobile Number</label>
                <input
                  type="tel"
                  id="loginPhone"
                  name="phone"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">
                  Password <span>(or leave empty for OTP)</span>
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  placeholder="Enter password or leave empty for OTP"
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={loading}
                />
              </div>
              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Processing...' : (formData.password ? 'Sign In' : 'Send OTP')}
              </button>
              <div className="auth-switch">
                Don't have an account? <a onClick={(e) => { e.preventDefault(); switchView('signup'); }}>Sign up here</a>
              </div>
            </>
          )}

          {currentView === 'signup' && (
            <>
              <div className="name-group">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={loading}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={loading}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="signupEmail">Email Address <span>(Optional)</span></label>
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Mobile Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signupPassword">Password *</label>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={loading}
                  required
                />
              </div>
              <button type="submit" className="btn-success" disabled={loading}>
                {loading ? 'Sending OTP...' : 'Create Account'}
              </button>
              <div className="auth-switch">
                Already have an account? <a onClick={(e) => { e.preventDefault(); switchView('login'); }}>Sign in here</a>
              </div>
            </>
          )}

          {currentView === 'otp' && (
            <>
              <div className="otp-info">
                We've sent a verification code to <strong>{formData.phone}</strong>
              </div>
              <div className="form-group otp-group">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  value={formData.otp}
                  onChange={handleInputChange}
                  disabled={loading}
                  maxLength="6"
                  required
                />
              </div>
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <button type="button" className="resend-btn" onClick={() => sendOTP(formData.phone)} disabled={loading}>
                Resend OTP
              </button>
              <button
                type="button"
                className="back-btn"
                onClick={() => switchView(formData.firstName ? 'signup' : 'login')}
                disabled={loading}
              >
                Back
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default PlantAuth;