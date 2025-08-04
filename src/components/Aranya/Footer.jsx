import './Footer.css';
import Logo from "/src/assets/Website-Logo.svg";

function Footer() {
  return (
    <footer id="footer" className="footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className='logo-container'>
                <img src={Logo} className="footer-logo white-logo" width="205px" />

              </div>
            </div>
            <p className="text-secondary mb-0">Your ultimate destination for plants, pots, and AI-powered plant care.</p>
          </div>
          <div className="col-md-3">
            <div className="footer-title fw-bold mb-3">Shop</div>
            <ul className="list-unstyled">
              <li><span className="nav-link p-0">Indoor Plants</span></li>
              <li><span className="nav-link p-0">Outdoor Plants</span></li>
              <li><span className="nav-link p-0">Pots & Planters</span></li>
              <li><span className="nav-link p-0">Plant Care</span></li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="footer-title fw-bold mb-3">AI Features</div>
            <ul className="list-unstyled">
              <li><span className="nav-link p-0">Image Search</span></li>
              <li><span className="nav-link p-0">Live Camera</span></li>
              <li><span className="nav-link p-0">VR Preview</span></li>
              <li><span className="nav-link p-0">Plant Assistant</span></li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="footer-title fw-bold mb-3">Connect</div>
            <div className="d-flex align-items-center">
              <i className="fab fa-facebook footer-icon"></i>
              <i className="fab fa-instagram footer-icon"></i>
              <i className="fab fa-twitter footer-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;