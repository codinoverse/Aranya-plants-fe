import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlantAuth.css';
import Logo from "/src/assets/Website-Logo.svg";
import { AuthContext } from '../AuthContextSection/AuthContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"; 

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
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Load Google script
  useEffect(() => {
    if (window.google) return;
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  // Google Sign-In/Sign-Up Handler (Frontend Only)
  const handleGoogleAuth = async (credential) => {
    setGoogleLoading(true);
    try {
      const decoded = jwtDecode(credential);

      const user = {
        name: `${decoded.given_name || ''} ${decoded.family_name || ''}`.trim(),
        email: decoded.email,
        googleId: decoded.sub,
        picture: decoded.picture,
      };

      // Save user in context
      login(user);

      onClose && onClose();
      navigate("/");
    } catch (err) {
      console.error("Google Auth Error:", err);
      setError("Google authentication failed. Please try again.");
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
    }, 200);
    return () => clearTimeout(timer);
  }, [currentView]);

  // Normal form submit (dummy frontend only)
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (currentView === 'login') {
        if (!formData.phone || !formData.password) {
          setError('Please enter both mobile number and password');
        } else {
          login({
            name: "Demo User",
            email: formData.email || "demo@example.com",
            phone: formData.phone,
          });
          onClose && onClose();
          navigate('/');
        }
      } else if (currentView === 'signup') {
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.password) {
          setError('Please fill in all required fields');
        } else {
          login({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email || "demo@example.com",
            phone: formData.phone,
          });
          onClose && onClose();
          navigate('/');
        }
      }
      setLoading(false);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      rememberMe: false,
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
