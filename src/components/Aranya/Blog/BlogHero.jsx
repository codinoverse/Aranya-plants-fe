

import './BlogSection.css';
import blogimage from "/src/assets/plantcareblogimg.jpg";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">Plant Care & Gardening Blog</h1>
            <p className="hero-subtitle">
              Discover expert tips, care guides, and inspiration for your plant journey
            </p>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img 
                src= {blogimage} 
                alt="Indoor plants" 
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;






