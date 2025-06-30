import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({ toggleVrMode }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header id="header" className="header fixed-top w-100 bg-white bg-opacity-90 shadow-lg">
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
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = () => alert('AI analyzing your image... Plant identified as Monstera Deliciosa!');
                input.click();
              }}
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
            <i className="fas fa-shopping-cart fa-lg text-secondary ms-2 cursor-pointer" title="Cart"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;