import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlantAuth.css';
import Logo from "/src/assets/Website-Logo.svg";
import { AuthContext } from '../AuthContextSection/AuthContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"; // ✅ fixed import for v4

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
  const [currentView, setCurrentView] = useState('login'); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    rememberMe: false,
    googleToken: null,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Load Google script
  useEffect(() => {
    const loadGoogleAPI = () => {
      if (window.google) return;
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };
    loadGoogleAPI();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  // Google Sign-In/Sign-Up Handler
  const handleGoogleAuth = async (credential) => {
    setGoogleLoading(true);
    try {
      const decoded = jwtDecode(credential);

      if (currentView === "signup") {
        // Prefill signup form with Google data
        setFormData((prev) => ({
          ...prev,
          firstName: decoded.given_name || "",
          lastName: decoded.family_name || "",
          email: decoded.email || "",
          googleToken: credential,
        }));
        setGoogleLoading(false);
        return;
      }

      // LOGIN flow
      const response = await api.post("/users/google-signin", {
        googleToken: credential,
      });

      login({
        name: response.data.name || response.data.firstName || "User",
        email: response.data.email,
        phone: response.data.phone,
        userId: response.data.userId,
        googleId: response.data.googleId,
      });

      onClose && onClose();
      navigate("/");
    } catch (err) {
      console.error("Google Auth Error:", err);
      let errorMessage = "Google authentication failed. Please try again.";
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }
      setError(errorMessage);
    } finally {
      setGoogleLoading(false);
    }
  };

  const initializeGoogleSignIn = (elementId, text) => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: (response) => handleGoogleAuth(response.credential),
      });

      window.google.accounts.id.renderButton(
        document.getElementById(elementId),
        {
          theme: 'outline',
          size: 'large',
          text: text,
          width: '100%',
          logo_alignment: 'left',
        }
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentView === 'login') {
        initializeGoogleSignIn('google-signin-btn', 'signin_with');
      } else if (currentView === 'signup') {
        initializeGoogleSignIn('google-signup-btn', 'signup_with');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (currentView === 'login') {
        if (!formData.phone || !formData.password) {
          setError('Please enter both mobile number and password');
          setLoading(false);
          return;
        }

        const response = await api.post('/users/login-mobile', {
          phone: formData.phone,
          password: formData.password,
        });

        login({
          name: response.data.firstName || 'User',
          email: response.data.email,
          phone: formData.phone,
          userId: response.data.userId,
        });
        onClose && onClose();
        navigate('/');

      } else if (currentView === 'signup') {
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.password) {
          setError('Please fill in all required fields');
          setLoading(false);
          return;
        }

        const signupData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email || null,
          password: formData.password,
          phone: formData.phone,
          googleToken: formData.googleToken || null,
        };

        // ✅ Fixed endpoint
        const endpoint = formData.googleToken ? '/users/google' : '/users/register';
        const response = await api.post(endpoint, signupData);

        login({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          userId: response.data.userId,
        });
        onClose && onClose();
        navigate('/');
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
      rememberMe: false,
      googleToken: null,
    });
    setError('');
  };

  const switchView = (view) => {
    resetForm();
    setCurrentView(view);
  };

  return (
    <div className="plant-auth-fullscreen">
      <div className="plant-auth-container">
        <button className="close-btn" onClick={onClose} disabled={loading || googleLoading}>
          ×
        </button>
        
        <div className="auth-content">
          <div className="auth-header">
            <img src={Logo} className="main-logo" alt="Logo" />
            <h2 className="auth-title">
              {currentView === 'login' ? 'Login' : 'Join Us Today'}
            </h2>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            {currentView === 'login' && (
              <div className="form-content">
                <div className="google-section">
                  <div id="google-signin-btn" className="google-btn"></div>
                  {googleLoading && <div className="google-loading">Signing in...</div>}
                </div>
                
                <div className="divider"><span>or</span></div>

                <div className="input-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={loading || googleLoading}
                    className="form-input"
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={loading || googleLoading}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      disabled={loading || googleLoading}
                    />
                    Remember me
                  </label>
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>

                <button type="submit" className="submit-btn" disabled={loading || googleLoading}>
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>

                <div className="switch-auth">
                  New here? <button type="button" onClick={() => switchView('signup')} className="link-btn">Create Account</button>
                </div>
              </div>
            )}

            {currentView === 'signup' && (
              <div className="form-content">
                <div className="google-section">
                  <div id="google-signup-btn" className="google-btn"></div>
                  {googleLoading && <div className="google-loading">Creating account...</div>}
                </div>
                
                <div className="divider"><span>or</span></div>

                <div className="name-row">
                  <div className="input-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={loading || googleLoading}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={loading || googleLoading}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (Optional)"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading || googleLoading}
                    className="form-input"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={loading || googleLoading}
                    className="form-input"
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={loading || googleLoading}
                    className="form-input"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={loading || googleLoading}>
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>

                <div className="switch-auth">
                  Already registered? <button type="button" onClick={() => switchView('login')} className="link-btn">Sign In</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantAuth;
