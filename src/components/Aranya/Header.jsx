import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

function Header({ toggleVrMode }) {
  const [navOpen, setNavOpen] = useState(false);
  const [showPlantIdentifier, setShowPlantIdentifier] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      const base64Image = reader.result.split(",")[1]; // get base64 without prefix
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
              "Api-Key": "vCgd15GtgWjanswpfp9xUSywGoID20ZbbWYKDODiBpzoQADzcI", // ← Replace this
            },
          }
        );

        console.log("API response:", res.data);
        setResult(res.data);
      } catch (err) {
        console.error("API error:", err);
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

  return (
    <>
      <header id="header" className={`header fixed-top w-100 bg-white bg-opacity-90 shadow-lg ${showPlantIdentifier ? 'd-none' : ''}`}>
        <nav className="navbar navbar-expand-md navbar-light container py-2">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            <i className="fas fa-leaf fa-2x text-success"></i>
            <span className="fw-bold h4 m-0">Aranya</span>
          </NavLink>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-between${navOpen ? ' show' : ''}`}> 
            <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-md-3 gap-2 align-items-center">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/plants" className="nav-link">Plants</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pots" className="nav-link">Pots</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/care" className="nav-link">Care</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutme" className="nav-link">About</NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2 ms-md-3 mt-3 mt-md-0">
              <button
                id="image-search-btn"
                className="btn btn-success btn-sm rounded-circle"
                title="Image Search"
                onClick={handleImageSearchClick}
              >
                <i className="fas fa-camera"></i>
              </button>
              <button
                id="live-camera-btn"
                className="btn btn-primary btn-sm rounded-circle"
                title="Live Camera"
                onClick={() => alert('Camera access requested. Point your camera at a plant for identification!')}
              >
                <i className="fas fa-video"></i>
              </button>
              <button
                id="vr-toggle"
                className="btn btn-secondary btn-sm rounded-circle"
                title="VR Mode"
                onClick={toggleVrMode}
              >
                <i className="fas fa-vr-cardboard"></i>
              </button>
              <Link to={"/cart"}>
                <i className="fas fa-shopping-cart fa-lg text-secondary ms-2 cursor-pointer" title="Cart"></i>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Plant Identifier Modal/Overlay */}
      {showPlantIdentifier && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
             style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
          <div className="bg-white p-4 rounded shadow-lg position-relative" style={{ maxWidth: '500px', width: '90%', maxHeight: '90vh', overflowY: 'auto' }}>
            <button 
              className="btn-close position-absolute"
              style={{ top: '15px', right: '15px', zIndex: 1051 }}
              onClick={closePlantIdentifier}
              aria-label="Close"
            ></button>
            
            <h2 className="text-success fw-bold mb-4">🌿 Identify Your Plant</h2>
            
            {imageFile && (
              <div className="mb-3">
                <img 
                  src={URL.createObjectURL(imageFile)} 
                  alt="Selected plant" 
                  className="img-fluid rounded shadow-sm"
                  style={{ maxHeight: '200px' }}
                />
              </div>
            )}

            <div className="mb-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>

            <button
              onClick={handleIdentify}
              className="btn btn-success w-100 mb-3"
              disabled={loading || !imageFile}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Identifying...
                </>
              ) : (
                "Identify Plant"
              )}
            </button>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {result && result.suggestions?.length > 0 && (
              <div className="mt-4">
                <h3 className="h5 text-success mb-3">🪴 Results:</h3>
                {result.suggestions.map((plant, index) => (
                  <div
                    key={index}
                    className="border rounded p-3 mb-3 bg-light"
                  >
                    <p className="mb-2">
                      <strong>Scientific Name:</strong> {plant.plant_name}
                    </p>
                    <p className="mb-2">
                      <strong>Confidence:</strong>{" "}
                      <span className="badge bg-success">
                        {(plant.probability * 100).toFixed(2)}%
                      </span>
                    </p>
                    <p className="mb-2">
                      <strong>Common Names:</strong>{" "}
                      {plant.plant_details.common_names?.join(", ") || "N/A"}
                    </p>
                    <p className="mb-2">
                      <strong>Description:</strong>{" "}
                      {plant.plant_details.wiki_description?.value ||
                        "No description available."}
                    </p>
                    {plant.plant_details.url && (
                      <a
                        href={plant.plant_details.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        Learn more
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;