import { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Header.css';
import TopBanner from './TopBanner';
import Logo from "/src/assets/Website-Logo.svg";

function Header({ toggleVrMode }) {
  const [navOpen, setNavOpen] = useState(false);
  const [showPlantIdentifier, setShowPlantIdentifier] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFileChange = (e) => {
    setResult(null);
    setError("");
    setImageFile(e.target.files[0]);
  };

  const handleIdentify = async () => {
    if (!imageFile) {
      setError("Please select an image.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1];
      setLoading(true);
      setError("");

      try {
        const res = await axios.post(
          "https://api.plant.id/v2/identify",
          {
            images: [base64Image],
            plant_language: "en",
            plant_details: ["common_names", "url", "wiki_description"],
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Api-Key": "YOUR_API_KEY_HERE",
            },
          }
        );

        setResult(res.data);
      } catch (err) {
        setError("❌ Failed to identify plant. Check API key or try again.");
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(imageFile);
  };

  const handleImageSearchClick = () => {
    setShowPlantIdentifier(true);
  };

  const closePlantIdentifier = () => {
    setShowPlantIdentifier(false);
    setImageFile(null);
    setResult(null);
    setError("");
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const fullText = "Search plants.....";
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(fullText.slice(0, index + 1));
      setIndex((prevIndex) =>
        prevIndex + 1 < fullText.length ? prevIndex + 1 : 0
      );
    }, 150);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <header id="header" className={`header fixed-top w-100 shadow-sm ${showPlantIdentifier ? 'd-none' : ''}`}>

        <TopBanner />
        <nav className="navbar navbar-expand-lg navbar-light container py-1">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            <div className='logo-container'>
              <img src={Logo} className='main-logo' width={"205px"} />
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-between${navOpen ? ' show' : ''}`}>
            <ul className="navbar-nav mx-auto gap-md-1 gap-2 align-items-center">
              {['/', '/plants', '/pots', '/care', '/aboutme'].map((path, i) => (
                <li className="nav-item" key={path}>
                  <NavLink to={path} className="nav-link">
                    {['Home', 'Plants', 'Pots', 'Care', 'About'][i]}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-3 mt-5 pt-3 mt-md-0 align-items-center">
              <div className="position-relative">
                <input
                  type="text"
                  placeholder={placeholder}
                  className="form-control form-control-sm rounded-pill pe-5 search-input"
                />
                <i className="search-icon fas fa-search position-absolute end-0 top-50 translate-middle-y me-3"></i>
              </div>
              <button className="icon-btns btn-sm rounded-circle" title="Image Search" onClick={handleImageSearchClick}>
                <i className="fas fa-camera"></i>
              </button>
              <button className="icon-btns btn-sm rounded-circle" title="Live Camera" onClick={() => alert('Camera access requested!')}>
                <i className="fas fa-video"></i>
              </button>
              <button className="icon-btns btn-sm rounded-circle" title="VR Mode" onClick={toggleVrMode}>
                <i className="fas fa-vr-cardboard"></i>
              </button>
              <Link to="/cart">
                <div className='icon-btns btn-sm rounded-circle'>
                  <i className="fas fa-shopping-cart text-white"></i>
                </div>
              </Link>
              <div
                className='icon-btns btn-sm rounded-circle profile-icon position-relative'
                onClick={toggleProfileDropdown}
                ref={profileDropdownRef}
              >
                <i className="fa-solid fa-user"></i>
                {showProfileDropdown && (
                  <div className="profile-dropdown-menu shadow-sm">
                    <div className="dropdown-header">
                      <div className="user-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div className="user-info">
                        <p className="username">Welcome, User</p>
                        <p className="email">user@example.com</p>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Link to="/account" className="dropdown-item">
                      <i className="fas fa-user me-2"></i> My Account
                    </Link>
                    <Link to="/orders" className="dropdown-item">
                      <i className="fas fa-box me-2"></i> My Orders
                    </Link>
                    <Link to="/wishlist" className="dropdown-item">
                      <i className="fas fa-heart me-2"></i> Wishlist
                    </Link>
                    <Link to="/address" className="dropdown-item">
                      <i className="fas fa-map-marker-alt me-2"></i> Saved Addresses
                    </Link>
                    <Link to="/checkout" className="dropdown-item">
                      <i className="fas fa-credit-card me-2"></i> Payment Methods
                    </Link>
                    <Link to="/CustomerSupport" className="dropdown-item">
                      <i className="fas fa-credit-card me-2"></i> Customer Support
                    </Link>
                    
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item logout-btn">
                      <i className="fas fa-sign-out-alt me-2"></i> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {showPlantIdentifier && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
          <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: '500px', width: '90%' }}>
            <button className="btn-close position-absolute" style={{ top: '15px', right: '15px' }} onClick={closePlantIdentifier}></button>
            <h2 className="text-success fw-bold mb-4">🌿 Identify Your Plant</h2>

            {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Preview" className="img-fluid rounded mb-3" />}

            <input type="file" className="form-control mb-3" onChange={handleFileChange} />
            <button className="btn btn-success w-100 mb-3" onClick={handleIdentify} disabled={loading || !imageFile}>
              {loading ? <><span className="spinner-border spinner-border-sm me-2"></span>Identifying...</> : "Identify Plant"}
            </button>

            {error && <div className="alert alert-danger">{error}</div>}

            {result?.suggestions?.length > 0 && result.suggestions.map((plant, i) => (
              <div key={i} className="border p-3 mb-2 rounded bg-light">
                <p><strong>Name:</strong> {plant.plant_name}</p>
                <p><strong>Confidence:</strong> {(plant.probability * 100).toFixed(2)}%</p>
                <p><strong>Common:</strong> {plant.plant_details.common_names?.join(", ")}</p>
                <p><strong>About:</strong> {plant.plant_details.wiki_description?.value || 'No info'}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;