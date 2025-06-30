import "./Care.css"
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Premium Organic Fertilizer",
    description: "All-natural plant food for healthy growth",
    price: "$24.99",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4a8dc79cda-a2682455c4fff265657a.png",
    badge: "Organic",
    badgeColor: "success",
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    name: "Ceramic Drainage Planter",
    description: "Modern design with perfect drainage system",
    price: "$18.50",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/326a70af76-edf2e58d6708f3b73555.png",
    badge: "Best Seller",
    badgeColor: "primary",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Professional Tool Set",
    description: "Complete gardening toolkit for plant care",
    price: "$45.99",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/cf28ecad9d-42b45e57c5c30522a14d.png",
    badge: null,
    badgeColor: null,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 4,
    name: "Premium Potting Mix",
    description: "Nutrient-rich soil blend for all plants",
    price: "$16.99",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4a8dc79cda-2b8dc79cda.png",
    badge: null,
    badgeColor: null,
    rating: 4.7,
    reviews: 76
  },
  {
    id: 5,
    name: "LED Growth Light",
    description: "Full spectrum lighting for indoor plants",
    price: "$89.99",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/led-growth-light.png",
    badge: null,
    badgeColor: null,
    rating: 4.8,
    reviews: 154
  },
  {
    id: 6,
    name: "Plant Misting Bottle",
    description: "Fine mist sprayer for humidity control",
    price: "$12.99",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/misting-bottle.png",
    badge: null,
    badgeColor: null,
    rating: 4.6,
    reviews: 92
  }
];

const tips = [
  { label: "Watering Schedule", text: "Most houseplants need watering when the top inch of soil feels dry." },
  { label: "Light Requirements", text: "Place plants near windows but avoid direct sunlight for most varieties." },
  { label: "Fertilizing", text: "Feed plants monthly during growing season (spring/summer)." }
];

const featuredProducts = [
  {
    name: "Mini Succulent Set",
    price: "$29.99",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/mini-succulent.png",
    desc: "Perfect for beginners"
  },
  {
    name: "Soil Moisture Meter",
    price: "$15.99",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/moisture-meter.png",
    desc: "Monitor soil conditions"
  }
];

const CareSection = () => {
  const [sortBy, setSortBy] = useState('Price: Low to High');
  const [category, setCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = 3;

  return (
    <main className="care-section container-fluid py-4" style={{background:'#e9fdf3'}}>
      <div className="container">
        <div className="row g-4">
          {/* Main Content */}
          <section className="col-lg-8">
            <nav className="mb-2" aria-label="breadcrumb">
              <ol className="breadcrumb small">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item">Plant Care</li>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
              </ol>
            </nav>
            <h1 className="h3 fw-bold text-dark mb-1">Plant Care Products</h1>
            <p className="text-secondary mb-4">Everything you need to keep your plants healthy and thriving</p>
            <div className="d-flex flex-wrap gap-2 mb-4 align-items-center">
              <select className="form-select form-select-sm care-select" value={category} onChange={e => setCategory(e.target.value)} style={{maxWidth:'180px'}}>
                <option>All Categories</option>
                <option>Fertilizers</option>
                <option>Pots & Planters</option>
                <option>Tools</option>
                <option>Soil & Mixes</option>
                <option>Lights</option>
              </select>
              <select className="form-select form-select-sm care-select" value={sortBy} onChange={e => setSortBy(e.target.value)} style={{maxWidth:'180px'}}>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Seller</option>
                <option>Newest</option>
              </select>
              <div className="btn-group ms-auto" role="group">
                <button className="btn btn-outline-secondary btn-sm active"><i className="fas fa-th"></i></button>
                <button className="btn btn-outline-secondary btn-sm"><i className="fas fa-list"></i></button>
              </div>
            </div>
            <div className="row g-4">
              {products.map(product => (
                <div className="col-md-6 col-lg-4" key={product.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="position-relative">
                      <img className="card-img-top object-fit-cover" style={{height:'180px'}} src={product.image} alt={product.name} />
                      {product.badge && (
                        <span className={`badge bg-${product.badgeColor} position-absolute top-0 end-0 m-2`}>{product.badge}</span>
                      )}
                    </div>
                    <div className="card-body">
                      <h3 className="h6 fw-semibold text-dark mb-1">{product.name}</h3>
                      <p className="small text-secondary mb-2">{product.description}</p>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="fw-bold text-success">{product.price}</span>
                        <button className="btn btn-success btn-sm rounded-pill">Add to Cart</button>
                      </div>
                      <div className="d-flex align-items-center gap-1 small text-warning">
                        <i className="fa fa-star"></i>
                        <span>{product.rating}</span>
                        <span className="text-secondary">({product.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <nav className="d-flex justify-content-center mt-4" aria-label="Care pagination">
              <ul className="pagination care-pagination">
                <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} tabIndex={currentPage === 1 ? -1 : 0} aria-label="Previous">&laquo;</button>
                </li>
                {[1,2,3].map(page => (
                  <li key={page} className={`page-item${currentPage === page ? ' active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                  </li>
                ))}
                <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} tabIndex={currentPage === totalPages ? -1 : 0} aria-label="Next">&raquo;</button>
                </li>
              </ul>
            </nav>
          </section>
          {/* Sidebar */}
          <aside className="col-lg-4 mt-5">
            <div className="care-sidebar mb-4">
              <h3 className="h6 fw-bold text-dark mb-3 d-flex align-items-center">
                <i className="fa-solid fa-shopping-cart text-success me-2"></i>
                Cart Summary
              </h3>
              <div className="mb-2 d-flex justify-content-between small">
                <span>Items (3)</span>
                <span className="fw-medium">$67.48</span>
              </div>
              <div className="mb-2 d-flex justify-content-between small">
                <span>Shipping</span>
                <span className="fw-medium text-success">Free</span>
              </div>
              <hr />
              <div className="mb-2 d-flex justify-content-between">
                <span className="fw-semibold">Total</span>
                <span className="fw-bold text-success">$67.48</span>
              </div>
              <button className="btn btn-success w-100 mt-3">Proceed to Checkout</button>
            </div>
            <div className="care-sidebar mb-4">
              <h3 className="h6 fw-bold text-dark mb-3 d-flex align-items-center">
                <i className="fa-solid fa-lightbulb text-warning me-2"></i>
                Care Tips
              </h3>
              {tips.map((tip, idx) => (
                <div className="tips mb-2" key={idx}><b>{tip.label}:</b> {tip.text}</div>
              ))}
            </div>
            <div className="care-sidebar mb-4">
              <h3 className="h6 fw-bold text-dark mb-3 d-flex align-items-center">
                <i className="fa-solid fa-star text-warning me-2"></i>
                Featured Products
              </h3>
              {featuredProducts.map((fp, idx) => (
                <div className="d-flex align-items-center mb-3" key={idx}>
                  <img src={fp.image} alt={fp.name} style={{width:'40px',height:'40px',borderRadius:'0.5rem',objectFit:'cover'}} className="me-3" />
                  <div>
                    <div className="fw-semibold small text-dark">{fp.name}</div>
                    <div className="text-success small">{fp.price}</div>
                    <div className="text-secondary small">{fp.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="care-sidebar bg-success bg-gradient text-white p-4 rounded-4 shadow-lg border-0">
              <h3 className="h6 fw-bold mb-3 d-flex align-items-center">
                <i className="fa-solid fa-envelope me-2"></i>
                Plant Care Newsletter
              </h3>
              <div className="mb-2 small">Get weekly tips and exclusive offers</div>
              <div className="input-group">
                <input type="email" className="form-control form-control-sm rounded-start" placeholder="Enter your email" />
                <button className="btn btn-dark btn-sm rounded-end">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default CareSection;