import { useState } from 'react';
import './PotsSection.css'
import VideoBanner1 from '../Aranya/VideoBanner1';

const PotsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ceramic Pots');
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = [
    { name: 'Ceramic Pots', icon: 'fas fa-circle', count: 24, active: true },
    { name: 'Terracotta Pots', icon: 'fas fa-square', count: 18, active: false },
    { name: 'Plastic Pots', icon: 'fas fa-diamond', count: 32, active: false },
    { name: 'Metal Pots', icon: 'fas fa-cube', count: 12, active: false },
    { name: 'Hanging Pots', icon: 'fas fa-leaf', count: 15, active: false },
  ];

  const products = [
    {
      id: 1,
      name: 'Classic White Ceramic Pot',
      description: 'Perfect for indoor plants with excellent',
      price: 1332.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5735ef5c55-42f7207907fd84c30add.png',
      alt: 'elegant white ceramic pot with drainage holes, minimalist design, studio lighting'
    },
    {
      id: 2,
      name: 'Rustic Terracotta Pot',
      description: 'Handcrafted with natural clay finish',
      price: 828.50,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5f2ab1d5c6-c8a3ed6266bacaffe3e1.png',
      alt: 'rustic terracotta ceramic pot with textured surface, earthy brown color, natural lighting'
    },
    {
      id: 3,
      name: 'Modern Geometric Pot',
      description: 'Contemporary design with unique',
      price: 1045.00,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/39dbfae96b-cc2f9b7972cc862d2ec8.png',
      alt: 'modern black ceramic pot with geometric pattern, contemporary design, clean background'
    },
    {
      id: 4,
      name: 'Ocean Blue Glazed Pot',
      description: 'Stunning blue glaze with smooth finish',
      price: 639.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c00adfbdd4-a036817657d4b47fb334.png',
      alt: 'blue glazed ceramic pot with smooth finish, medium size, professional product photography'
    },
    {
      id: 5,
      name: 'Pastel Mini Pot Set',
      description: 'Set of 3 small pots in soft colors',
      price: 1224.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5415b9cf73-17bf24be5361feb14a96.png',
      alt: 'small ceramic pot set with pastel colors, cute miniature pots, soft lighting'
    },
    {
      id: 6,
      name: 'Artisan Speckled Pot',
      description: 'Large pot with unique speckled finish',
      price: 552.00,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/02d23904b7-8d5c9887abacbd20103d.png',
      alt: 'large ceramic pot with speckled glaze, artisan crafted, natural texture'
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginatedProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
  };

  return (
    <div className="pots-section bg-light min-vh-100">
      <VideoBanner1/>
      <main className="container py-4">
        <div className="row g-4">
          {/* Sidebar */}
          <aside className="col-lg-3">
            <div className="bg-white rounded shadow-sm p-4 mb-4">
              <h2 className="h6 fw-bold text-dark mb-3">Browse Categories</h2>
              <div className="vstack gap-2 mb-4">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    onClick={() => handleCategoryClick(category.name)}
                    className={`d-flex align-items-center justify-content-between p-2 rounded cursor-pointer ${selectedCategory === category.name ? 'bg-success text-white' : 'bg-light text-dark'}`}
                    style={{cursor:'pointer'}}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <i className={`${category.icon} small`}></i>
                      <span className="fw-medium">{category.name}</span>
                    </div>
                    <span className={`badge rounded-pill ${selectedCategory === category.name ? 'bg-white bg-opacity-25 text-white' : 'bg-secondary bg-opacity-10 text-secondary'}`}>{category.count}</span>
                  </div>
                ))}
              </div>
              <h3 className="h6 fw-bold text-dark mb-2">Filters</h3>
              <div className="mb-3">
                <h4 className="small fw-semibold text-secondary mb-1">Size</h4>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="size-small" />
                  <label className="form-check-label small text-secondary" htmlFor="size-small">Small (4-6 inches)</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="size-medium" defaultChecked />
                  <label className="form-check-label small text-secondary" htmlFor="size-medium">Medium (7-10 inches)</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="size-large" />
                  <label className="form-check-label small text-secondary" htmlFor="size-large">Large (11+ inches)</label>
                </div>
              </div>
              <div className="mb-3">
                <h4 className="small fw-semibold text-secondary mb-1">Price Range</h4>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="price-0-25" />
                  <label className="form-check-label small text-secondary" htmlFor="price-0-25">$0 - $25</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="price-25-50" defaultChecked />
                  <label className="form-check-label small text-secondary" htmlFor="price-25-50">$25 - $50</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="price-50plus" />
                  <label className="form-check-label small text-secondary" htmlFor="price-50plus">$50+</label>
                </div>
              </div>
              <div>
                <h4 className="small fw-semibold text-secondary mb-1">Features</h4>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="drainage" />
                  <label className="form-check-label small text-secondary" htmlFor="drainage">Drainage Holes</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="saucer" />
                  <label className="form-check-label small text-secondary" htmlFor="saucer">Saucer Included</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="weather" />
                  <label className="form-check-label small text-secondary" htmlFor="weather">Weather Resistant</label>
                </div>
              </div>
            </div>
          </aside>
          {/* Main Content */}

            
          

          <section className="col-lg-9">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
              <div>
                <h1 className="h4 fw-bold text-dark mb-1">{selectedCategory} Collection</h1>
                <p className="text-secondary small mb-0">Discover our premium selection of handcrafted {selectedCategory.toLowerCase()}</p>
              </div>
              <div className="sort-controls d-flex align-items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-select form-select-sm"
                >
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                <div className="btn-group ms-2" role="group">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`btn btn-outline-secondary btn-sm ${viewMode === 'grid' ? 'active' : ''}`}
                  >
                    <i className="fas fa-th"></i>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`btn btn-outline-secondary btn-sm ${viewMode === 'list' ? 'active' : ''}`}
                  >
                    <i className="fas fa-list"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Products Grid */}
            <div className="row g-4">
              {paginatedProducts.map((product) => (
                <div key={product.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm border-0 p-3">
                    <div className="position-relative mb-3">
                      <img
                        className="card-img-top object-fit-cover rounded"
                        style={{height:'12rem'}}
                        src={product.image}
                        alt={product.alt}
                        onError={handleImageError}
                      />
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"
                      >
                        <i
                          className={`fa-heart ${favorites.has(product.id) ? 'fa-solid text-danger' : 'fa-regular text-secondary'}`}
                        />
                      </button>
                    </div>
                    <h3 className="h6 fw-semibold text-dark mb-1">{product.name}</h3>
                    <p className="small text-secondary mb-2">{product.description}</p>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold text-success">{`₹${product.price}`}</span>
                      <button className="btn btn-success btn-sm">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="d-flex justify-content-center mt-4" aria-label="Pots pagination">
                <ul className="pagination pots-pagination">
                  <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} tabIndex={currentPage === 1 ? -1 : 0} aria-label="Previous">
                      &laquo;
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, idx) => (
                    <li key={idx + 1} className={`page-item${currentPage === idx + 1 ? ' active' : ''}`}>
                      <button className="page-link" onClick={() => handlePageChange(idx + 1)}>{idx + 1}</button>
                    </li>
                  ))}
                  <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} tabIndex={currentPage === totalPages ? -1 : 0} aria-label="Next">
                      &raquo;
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default PotsSection;