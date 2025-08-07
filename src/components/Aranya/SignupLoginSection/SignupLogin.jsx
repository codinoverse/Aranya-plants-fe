import React, { useState, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlantAuth.css';
import Logo from "/src/assets/Website-Logo.svg";
import { AuthContext } from '../AuthContextSection/AuthContext'; // Import AuthContext
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
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword: '',
    rememberMe: false,
    agreeToTerms: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        if (!formData.email || !formData.password) {
          setError('Please enter email and password');
          setLoading(false);
          return;
        }

        const loginData = {
          email: formData.email,
          password: formData.password,
        };

        const response = await api.post('/users/login', loginData);
        login({
          name: response.data.firstName || response.data.email?.split('@')[0] || 'User',
          email: formData.email,
          userId: response.data.userId, // Store user ID in context
        });
        onClose(); // Close the modal
        navigate('/'); // Redirect to home
      } else {
        if (
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.password ||
          !formData.confirmPassword ||
          !formData.phone ||
          !formData.agreeToTerms
        ) {
          setError('Please fill in all required fields');
          setLoading(false);
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }

        const signupData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        };

        const response = await api.post('/users/register', signupData);

        login({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
        });
        onClose(); // Close the modal
        navigate('/'); // Redirect to home
      }
    } catch (err) {
      console.error('API Error:', err);
      let errorMessage = isLogin ? 'Invalid email or password' : 'Registration failed. Please try again.';
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

  return (
    <div className="plant-auth-container">
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>

      <div className="container-fluid main-container h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row">
              {isLogin ? (
                <div className="col-12 col-lg-8 py-2 mx-auto">
                  <div className="auth-card">
                    <div className="auth-header">
                      <div className="plant-icon"><img src={Logo} className='main-logo' width={"205px"} /></div>
                      <p className="auth-subtitle">Sign in to Aranya Plants and Pots</p>
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email Address</label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control custom-input"
                            id="loginEmail"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={loading}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control custom-input"
                            id="loginPassword"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={loading}
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleInputChange}
                            disabled={loading}
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="forgot-password">Forgot password?</a>
                      </div>

                      <button type="submit" className="btn btn-primary w-100 custom-btn" disabled={loading}>
                        {loading ? 'Signing In...' : 'Sign In'}
                      </button>

                      <div className="auth-footer">
                        Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Sign up here</a>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (

                //signup form
                <div className="col-12 col-lg-6 mx-auto">
                  <div className="auth-card">
                    <div className="auth-header">
                      <div className="plant-icon">💚</div>
                      <h2 className="auth-title">Join PlantPot</h2>
                      <p className="auth-subtitle">Create your green sanctuary account</p>
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-6">
                          <label htmlFor="firstName" className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            disabled={loading}
                            required
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="lastName" className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control custom-input"
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

                      <div className="mb-3">
                        <label htmlFor="signupEmail" className="form-label">Email Address</label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control custom-input"
                            id="signupEmail"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={loading}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <div className="input-group">
                          <input
                            type="tel"
                            className="form-control custom-input"
                            id="phone"
                            name="phone"
                            placeholder="89898987"
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled={loading}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="signupPassword" className="form-label">Password</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control custom-input"
                            id="signupPassword"
                            name="password"
                            placeholder="Create password"
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={loading}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control custom-input"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            disabled={loading}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          disabled={loading}
                          required
                        />
                        <label className="form-check-label" htmlFor="agreeToTerms">
                          I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                        </label>
                      </div>

                      <button type="submit" className="btn btn-success w-100 custom-btn" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Create Account'}
                      </button>

                      <div className="auth-footer">
                        Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>Sign in here</a>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantAuth;