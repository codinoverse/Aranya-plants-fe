import React from 'react';
import './Hero.css';

function Hero({ vrMode }) {
  return (
    <section id="hero" className="hero-section pt-5 pb-4 position-relative overflow-hidden container-xl px-4">
      <div className="position-absolute top-0 start-0 parallax-leaf">
        <div className="position-absolute top-0 start-0 w-20 h-20 opacity-20 floating-leaf">
          <i className="fas fa-leaf fa-4x text-success rotate-45"></i>
        </div>
        <div className="position-absolute top-25 end-0 w-16 h-16 opacity-15 floating-leaf2">
          <i className="fas fa-seedling fa-3x text-success rotate-n12"></i>
        </div>
        <div className="position-absolute bottom-0 start-50 w-24 h-24 opacity-10 floating-leaf3">
          <i className="fas fa-leaf fa-5x text-success rotate-90"></i>
        </div>
      </div>
      <div className="container position-relative z-1 pt-3">
        <div className="row align-items-center g-4 flex-column-reverse flex-md-row">
          <div className="col-md-6 text-center text-md-start">
            <h2 className="display-4 fw-bold text-dark mb-3 animate-fadein">
              Discover Your Perfect <span className="text-success">Green Companion</span>
            </h2>
            <p className="lead text-secondary mb-4 animate-fadein" style={{animationDelay:'0.2s'}}>
              Experience plants like never before with AI-powered search, VR visualization, and expert care guidance.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-4 animate-fadein" style={{animationDelay:'0.4s'}}>
              <div className="position-relative flex-grow-1v d-flex">
                <input
                  type="text"
                  placeholder="Search plants..."
                  className="form-control form-control-lg rounded-pill pe-5 search-input"
                />
                <i className="search-icon fas fa-search position-absolute end-0 top-50 translate-middle-y text-secondary me-3"></i>
              </div>
              <button className="btn btn-success btn-lg  fw-semibold exp-main-btn">
                <span> Explore </span>
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <div className={`hero-img-wrapper hero-img" bg-white bg-opacity-50 rounded-4 p-3 p-md-4 ${vrMode ? 'vr-mode' : ''}`}>
              <img
                className="hero-img animate-fadein"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c3c186f2c9-aa895749fb0959328c27.png"
                alt="beautiful indoor plants collection with monstera and fiddle leaf fig in modern pots, bright natural lighting"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;