import React from 'react';
import './AIFeatures.css';

function AIFeatures({ vrMode }) {
  return (
    <section id="ai-features" className="ai-features-section py-5 bg-white rounded">
      <div className="container">
        <h3 className="display-6 fw-bold text-center text-dark mb-5">AI-Powered Plant Discovery</h3>
        <div className="row g-4 justify-content-center">
          <div id="image-search-card" className="col-12 col-md-6 col-lg-4 d-flex">
            <div className={`card h-100 shadow-sm border-0 p-4 w-100 text-center ${vrMode ? 'vr-mode' : ''}`}> 
              <div className="icon-bg icon-bg-green mb-4 mx-auto">
                <i className="fas fa-image text-white fs-3"></i>
              </div>
              <h4 className="h5 fw-bold text-dark mb-2">Image Search</h4>
              <p className="text-secondary mb-4">Upload any plant photo and our AI will identify it instantly, providing care tips and purchase options.</p>
              <button className="btn btn-success w-100 rounded-pill fw-semibold">Try Image Search</button>
            </div>
          </div>
          <div id="live-camera-card" className="col-12 col-md-6 col-lg-4 d-flex">
            <div className={`card h-100 shadow-sm border-0 p-4 w-100 text-center ${vrMode ? 'vr-mode' : ''}`}> 
              <div className="icon-bg icon-bg-blue mb-4 mx-auto">
                <i className="fas fa-camera text-white fs-3"></i>
              </div>
              <h4 className="h5 fw-bold text-dark mb-2">Live Camera</h4>
              <p className="text-secondary mb-4">Point your camera at any plant for real-time identification and instant care recommendations.</p>
              <button className="btn btn-primary w-100 rounded-pill fw-semibold">Open Camera</button>
            </div>
          </div>
          <div id="vr-view-card" className="col-12 col-md-6 col-lg-4 d-flex">
            <div className={`card h-100 shadow-sm border-0 p-4 w-100 text-center ${vrMode ? 'vr-mode' : ''}`}> 
              <div className="icon-bg icon-bg-purple mb-4 mx-auto">
                <i className="fas fa-vr-cardboard text-white fs-3"></i>
              </div>
              <h4 className="h5 fw-bold text-dark mb-2">VR Preview</h4>
              <p className="text-secondary mb-4">Visualize how plants will look in your space with our immersive VR technology.</p>
              <button className="btn btn-secondary w-100 rounded-pill fw-semibold">Enter VR Mode</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIFeatures;