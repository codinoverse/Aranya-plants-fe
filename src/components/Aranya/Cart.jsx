import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fiddle Leaf Fig',
      size: 'Large',
      price: 89.99,
      quantity: 1,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b3bd8b359e-f2e0e924f4da238e6070.png'
    },
    {
      id: 2,
      name: 'Snake Plant',
      size: 'Medium',
      price: 34.99,
      quantity: 2,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/a9749355c5-8b44a0d366d332d493e6.png'
    }
  ]);

  const [favorites, setFavorites] = useState([3]);

  const products = [
    {
      id: 1,
      name: 'Fiddle Leaf Fig',
      description: 'Perfect for bright, indirect light',
      price: 89.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/58af74c31a-66ceb2b1720d799b8107.png'
    },
    {
      id: 2,
      name: 'Snake Plant',
      description: 'Low maintenance, air purifying',
      price: 34.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/119df5b87f-83937302dc6fa5d5f987.png'
    },
    {
      id: 3,
      name: 'Golden Pothos',
      description: 'Trailing vine, easy care',
      price: 22.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/98aef5111d-09c3de986fd709d7dc04.png'
    },
    {
      id: 4,
      name: 'Peace Lily',
      description: 'Beautiful white blooms',
      price: 42.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/88fca39958-86bff131562716e24534.png'
    },
    {
      id: 5,
      name: 'Rubber Tree',
      description: 'Glossy leaves, statement plant',
      price: 67.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/221d598d6e-701f204568b4018870bb.png'
    },
    {
      id: 6,
      name: 'Succulent Mix',
      description: 'Variety pack, drought tolerant',
      price: 29.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/2cadbb3e97-5c9628578f3d4012c689.png'
    }
  ];

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== itemId));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          size: 'Medium',
          price: product.price,
          quantity: 1,
          image: product.image
        }];
      }
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 12.00;
  const tax = subtotal * 0.086;
  const total = subtotal + shipping + tax;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f8f9fa' }}>
      <style>
        {`
          ::-webkit-scrollbar { display: none; }
          body { -ms-overflow-style: none; scrollbar-width: none; font-family: 'Inter', sans-serif; }
          
          /* Bootstrap 5 Grid System */
          .container-fluid { width: 100%; padding-right: 0.75rem; padding-left: 0.75rem; margin-right: auto; margin-left: auto; }
          .row { display: flex; flex-wrap: wrap; margin-right: -0.75rem; margin-left: -0.75rem; }
          .col-lg-3 { flex: 0 0 auto; width: 25%; }
          .col-lg-6 { flex: 0 0 auto; width: 50%; }
          .col-md-6 { flex: 0 0 auto; width: 50%; }
          .g-4 > * { padding-right: 0.75rem; padding-left: 0.75rem; margin-bottom: 1.5rem; }
          
          @media (max-width: 991.98px) {
            .col-lg-3, .col-lg-6 { width: 100%; }
            .d-none.d-md-flex { display: none !important; }
          }
          
          @media (max-width: 767.98px) {
            .col-md-6 { width: 100%; }
          }
          
          /* Bootstrap 5 Utilities */
          .d-flex { display: flex !important; }
          .align-items-center { align-items: center !important; }
          .justify-content-between { justify-content: space-between !important; }
          .justify-content-end { justify-content: flex-end !important; }
          .justify-content-center { justify-content: center !important; }
          .flex-grow-1 { flex-grow: 1 !important; }
          .me-2 { margin-right: 0.5rem !important; }
          .me-3 { margin-right: 1rem !important; }
          .me-4 { margin-right: 1.5rem !important; }
          .ms-2 { margin-left: 0.5rem !important; }
          .mb-0 { margin-bottom: 0 !important; }
          .mb-1 { margin-bottom: 0.25rem !important; }
          .mb-2 { margin-bottom: 0.5rem !important; }
          .mb-3 { margin-bottom: 1rem !important; }
          .mb-4 { margin-bottom: 1.5rem !important; }
          .mt-1 { margin-top: 0.25rem !important; }
          .py-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
          .py-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
          .pb-3 { padding-bottom: 1rem !important; }
          .m-3 { margin: 1rem !important; }
          .p-2 { padding: 0.5rem !important; }
          .w-100 { width: 100% !important; }
          .h-100 { height: 100% !important; }
          
          /* Typography */
          .fs-2 { font-size: 2rem !important; }
          .fs-5 { font-size: 1.25rem !important; }
          .fw-bold { font-weight: 700 !important; }
          .fw-medium { font-weight: 500 !important; }
          .text-dark { color: #212529 !important; }
          .text-muted { color: #6c757d !important; }
          .text-danger { color: #dc3545 !important; }
          .text-info { color: #0dcaf0 !important; }
          .text-warning { color: #ffc107 !important; }
          .text-success { color: #198754 !important; }
          .small { font-size: 0.875em !important; }
          
          /* Background Colors */
          .bg-white { background-color: #fff !important; }
          .bg-light { background-color: #f8f9fa !important; }
          .bg-danger { background-color: #dc3545 !important; }
          
          /* Borders */
          .border-bottom { border-bottom: 1px solid #dee2e6 !important; }
          .rounded { border-radius: 0.375rem !important; }
          .rounded-circle { border-radius: 50% !important; }
          .rounded-pill { border-radius: 50rem !important; }
          
          /* Shadows */
          .shadow-sm { box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }
          
          /* Position */
          .position-relative { position: relative !important; }
          .position-absolute { position: absolute !important; }
          .top-0 { top: 0 !important; }
          .start-100 { left: 100% !important; }
          .end-0 { right: 0 !important; }
          .translate-middle { transform: translate(-50%, -50%) !important; }
          
          /* Cards */
          .card { position: relative; display: flex; flex-direction: column; min-width: 0; word-wrap: break-word; background-color: #fff; background-clip: border-box; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.375rem; }
          .card-body { flex: 1 1 auto; padding: 1rem; }
          .card-title { margin-bottom: 0.5rem; }
          .card-text { margin-bottom: 1rem; }
          .card-img-top { width: 100%; border-top-left-radius: calc(0.375rem - 1px); border-top-right-radius: calc(0.375rem - 1px); }
          
          /* Buttons */
          .btn { display: inline-block; font-weight: 400; line-height: 1.5; color: #212529; text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; user-select: none; background-color: transparent; border: 1px solid transparent; padding: 0.375rem 0.75rem; font-size: 1rem; border-radius: 0.375rem; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
          .btn:hover { color: #212529; }
          .btn-sm { padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: 0.25rem; }
          .btn-light { color: #000; background-color: #f8f9fa; border-color: #f8f9fa; }
          .btn-light:hover { color: #000; background-color: #d3d4d5; border-color: #c6c7c8; }
          .btn-outline-secondary { color: #6c757d; border-color: #6c757d; }
          .btn-outline-secondary:hover { color: #fff; background-color: #6c757d; border-color: #6c757d; }
          
          /* Forms */
          .form-check { position: relative; display: block; padding-left: 1.25em; }
          .form-check-input { position: absolute; margin-top: 0.25em; margin-left: -1.25em; }
          .form-check-label { margin-bottom: 0; }
          .form-select { display: block; width: 100%; padding: 0.375rem 2.25rem 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529; background-color: #fff; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 16px 12px; border: 1px solid #ced4da; border-radius: 0.375rem; }
          .form-select-sm { padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.5rem; font-size: 0.875rem; }
          
          /* Badges */
          .badge { display: inline-block; padding: 0.35em 0.65em; font-size: 0.75em; font-weight: 700; line-height: 1; color: #fff; text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: 0.375rem; }
          
          /* Pagination */
          .pagination { display: flex; padding-left: 0; list-style: none; }
          .page-item { position: relative; display: block; }
          .page-item.active .page-link { z-index: 3; color: #fff; background-color: #0d6efd; border-color: #0d6efd; }
          .page-link { position: relative; display: block; color: #0d6efd; text-decoration: none; background-color: #fff; border: 1px solid #dee2e6; padding: 0.375rem 0.75rem; }
          .page-link:hover { z-index: 2; color: #0a58ca; background-color: #e9ecef; border-color: #dee2e6; }
          
          /* Custom Styles */
          .product-card { transition: all 0.3s ease; }
          .product-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
          .heart-btn { transition: all 0.2s ease; }
          .heart-btn:hover { background-color: #f8f9fa; }
          .primary-color { color: #22c55e; }
          .secondary-color { color: #16a34a; }
          .bg-primary-custom { background-color: #22c55e; }
          .bg-secondary-custom { background-color: #16a34a; }
          .btn-primary-custom {
            background-color: #22c55e;
            border-color: #22c55e;
            color: white;
          }
          .btn-primary-custom:hover {
            background-color: #16a34a;
            border-color: #16a34a;
            color: white;
          }
          .btn-outline-primary-custom {
            color: #22c55e;
            border-color: #22c55e;
            background-color: transparent;
          }
          .btn-outline-primary-custom:hover {
            background-color: #dcfce7;
            border-color: #22c55e;
            color: #22c55e;
          }
        `}
      </style>

      {/* Header */}
      <header className="bg-white shadow-sm border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center py-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <i className="fas fa-leaf primary-color fs-2 me-2"></i>
                <span className="fs-2 fw-bold text-dark">PlantShop</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-end">
                <nav className="d-none d-md-flex me-4">
                  <span className="text-muted me-4" style={{ cursor: 'pointer' }}>Home</span>
                  <span className="text-muted me-4" style={{ cursor: 'pointer' }}>Plants</span>
                  <span className="text-muted me-4" style={{ cursor: 'pointer' }}>Care</span>
                  <span className="text-muted me-4" style={{ cursor: 'pointer' }}>About</span>
                </nav>
                <div className="d-flex align-items-center">
                  <i className="fas fa-search text-muted me-3" style={{ cursor: 'pointer' }}></i>
                  <div className="position-relative">
                    <i className="fas fa-shopping-cart primary-color fs-5" style={{ cursor: 'pointer' }}></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-fluid py-4">
        <div className="row">
          {/* Left Sidebar - Filters */}
          <aside className="col-lg-3 mb-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title mb-4">Filter Plants</h5>
                
                <div className="mb-4">
                  <h6 className="text-muted mb-3">Categories</h6>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label small">Indoor Plants</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label small">Outdoor Plants</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label small">Succulents</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label small">Flowering</label>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-muted mb-3">Price Range</h6>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="price" />
                    <label className="form-check-label small">$0 - $25</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="price" />
                    <label className="form-check-label small">$25 - $50</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="price" />
                    <label className="form-check-label small">$50 - $100</label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="price" />
                    <label className="form-check-label small">$100+</label>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-muted mb-3">Size</h6>
                  <select className="form-select form-select-sm">
                    <option>All Sizes</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>

                <button className="btn btn-primary-custom w-100">Apply Filters</button>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Recently Viewed</h5>
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e17c7684e7-3c0306fc26430b4a96d7.png" 
                    alt="Jade Plant" 
                    className="rounded me-3"
                    style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                  />
                  <div>
                    <p className="mb-0 fw-medium small">Jade Plant</p>
                    <p className="mb-0 text-muted small">$24.99</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img 
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3336f71d68-e7ce48076324941b34a9.png" 
                    alt="Monstera" 
                    className="rounded me-3"
                    style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                  />
                  <div>
                    <p className="mb-0 fw-medium small">Monstera</p>
                    <p className="mb-0 text-muted small">$45.99</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="col-lg-6 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold">Plant Collection</h2>
              <div className="d-flex align-items-center">
                <span className="text-muted small me-3">24 products</span>
                <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                </select>
              </div>
            </div>

            <div className="row g-4 mb-4">
              {products.map(product => (
                <div key={product.id} className="col-md-6">
                  <div className="card product-card shadow-sm h-100">
                    <div className="position-relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <button 
                        className="btn btn-light heart-btn position-absolute top-0 end-0 m-3 rounded-circle p-2"
                        onClick={() => toggleFavorite(product.id)}
                        style={{ width: '40px', height: '40px' }}
                      >
                        <i className={`${favorites.includes(product.id) ? 'fas text-danger' : 'far'} fa-heart`}></i>
                      </button>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-muted small mb-3">{product.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fs-5 fw-bold primary-color">${product.price}</span>
                        <button 
                          className="btn btn-primary-custom btn-sm"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="d-flex justify-content-center">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item active">
                  <a className="page-link bg-primary-custom border-0" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Right Sidebar - Cart */}
          <aside className="col-lg-3">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title mb-4">Shopping Cart</h5>
                
                {cartItems.map(item => (
                  <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="rounded me-3"
                      style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="mb-2 text-muted small">{item.size}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <button 
                            className="btn btn-outline-secondary btn-sm me-2"
                            style={{ width: '24px', height: '24px', fontSize: '12px', padding: '0' }}
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="small">{item.quantity}</span>
                          <button 
                            className="btn btn-outline-secondary btn-sm ms-2"
                            style={{ width: '24px', height: '24px', fontSize: '12px', padding: '0' }}
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <span className="fw-medium primary-color small">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mb-4">
                  <div className="d-flex justify-content-between small mb-2">
                    <span className="text-muted">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between small mb-2">
                    <span className="text-muted">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between small mb-3">
                    <span className="text-muted">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span className="primary-color">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="btn btn-primary-custom w-100 mb-3">Checkout</button>
                <button className="btn btn-outline-primary-custom w-100">View Cart</button>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Plant Care Tips</h5>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-droplet text-info fs-5 me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Watering</h6>
                      <p className="mb-0 small text-muted">Check soil moisture before watering</p>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-sun text-warning fs-5 me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Light</h6>
                      <p className="mb-0 small text-muted">Most plants prefer bright, indirect light</p>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-temperature-half text-success fs-5 me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1">Temperature</h6>
                      <p className="mb-0 small text-muted">Keep between 65-75°F for optimal growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Cart;