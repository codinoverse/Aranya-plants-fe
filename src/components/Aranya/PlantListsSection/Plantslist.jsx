import React, { useState, useEffect } from "react";
import "./Plantslist.css";

function Plantlist() {
  const [vrMode, setVrMode] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState(new Set([]));
  const [viewMode, setViewMode] = useState("grid"); // grid | list

  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      description: "Indoor Plant • Low Maintenance",
      price: "₹45.99",
      priceValue: 45.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/ea79bde387-8519eebca851626cb24e.png",
      alt: "beautiful monstera deliciosa houseplant in terracotta pot, bright natural lighting",
      rating: "4.8 (124)",
      ratingValue: 4.8,
    },
    {
      id: 2,
      name: "Snake Plant",
      description: "Indoor Plant • Very Low Maintenance",
      price: "₹29.99",
      priceValue: 29.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/8a1b6f0c3a-64b194b6022a440061cb.png",
      alt: "snake plant sansevieria in modern white pot, minimal style",
      rating: "4.9 (89)",
      ratingValue: 4.9,
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      description: "Indoor Plant • Medium Maintenance",
      price: "₹89.99",
      priceValue: 89.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/a888af57ab-d9b8cccd8498a78f72ec.png",
      alt: "fiddle leaf fig plant in woven basket pot, bright interior",
      rating: "4.6 (156)",
      ratingValue: 4.6,
    },
    {
      id: 4,
      name: "Peace Lily",
      description: "Indoor Plant • Low Maintenance",
      price: "₹35.99",
      priceValue: 35.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/88fca39958-65c56d28ce4cf39f5bbf.png",
      alt: "peace lily plant with white flowers in ceramic pot",
      rating: "4.7 (92)",
      ratingValue: 4.7,
    },
    {
      id: 5,
      name: "Rubber Plant",
      description: "Indoor Plant • Low Maintenance",
      price: "₹42.99",
      priceValue: 42.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/e9f9d47de9-535b587d766518250c9a.png",
      alt: "rubber plant ficus elastica in modern black pot",
      rating: "4.5 (78)",
      ratingValue: 4.5,
    },
    {
      id: 6,
      name: "Golden Pothos",
      description: "Plant • Very Low Maintenance",
      price: "₹24.99",
      priceValue: 24.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/88fca39958-65c56d28ce4cf39f5bbf.png",
      alt: "pothos golden vine plant hanging in macrame holder",
      rating: "4.8 (203)",
      ratingValue: 4.8,
    },
    {
      id: 7,
      name: "Aloe Vera",
      description: "Succulent • Very Low Maintenance",
      price: "₹18.99",
      priceValue: 18.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/067efa4f48-f97c942512821f708bb3.png",
      alt: "aloe vera succulent plant in terracotta pot, desert style",
      rating: "4.9 (167)",
      ratingValue: 4.9,
    },
    {
      id: 8,
      name: "Spider Plant",
      description: "Hanging Plant • Low Maintenance",
      price: "₹27.99",
      priceValue: 27.99,
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d5ca234a4b-faf8732ebfa76766e504.png",
      alt: "spider plant chlorophytum with baby plants in hanging basket",
      rating: "4.7 (134)",
      ratingValue: 4.7,
    },
  ];

  // Toggle favorite status for a plant
  const toggleFavorite = (plantId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(plantId)) {
        newFavorites.delete(plantId);
      } else {
        newFavorites.add(plantId);
      }
      return newFavorites;
    });
  };

  // Sort plants based on selected option
  const getSortedPlants = () => {
    const plantsCopy = [...plants];

    switch (sortBy) {
      case "price-low-high":
        return plantsCopy.sort((a, b) => a.priceValue - b.priceValue);
      case "price-high-low":
        return plantsCopy.sort((a, b) => b.priceValue - a.priceValue);
      case "name-a-z":
        return plantsCopy.sort((a, b) => a.name.localeCompare(b.name));
      case "name-z-a":
        return plantsCopy.sort((a, b) => b.name.localeCompare(a.name));
      case "rating":
        return plantsCopy.sort((a, b) => b.ratingValue - a.ratingValue);
      case "featured":
      default:
        return plantsCopy; // Keep original order for featured
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    const throttle = (func, limit) => {
      let inThrottle;
      return function (...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const handleScroll = throttle(() => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector(".parallax-leaf");
      if (parallax) {
        parallax.style.setProperty("--scroll-y", `${scrolled * 0.5}px`);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleVrMode = () => {
    setVrMode(!vrMode);
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/300x200?text=Plant+Image+Not+Found";
  };

  const sortedPlants = getSortedPlants();

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <div className="plantslist-section d-flex flex-column">
          <div className="bg-light leaf-bg flex-grow-1 d-flex">
            <aside
              id="sidebar"
              className="d-none d-lg-block bg-white shadow-sm h-100 sticky-top border-end"
              style={{ width: "300px"}}
            >
              <div className="p-4">
                <h2 className="h6 fw-bold text-dark mb-3">Categories</h2>
                <nav className="nav flex-column mb-4">
                  
                          <span className="nav-link text-secondary mb-1">
                      <i className="fa-solid fa-leaf me-2"></i>Indoor Plants
                    </span>
                    <span className="nav-link text-secondary mb-1">
                      <i className="fa-solid fa-seedling me-2"></i>Outdoor Plants
                    </span>
                    <span className="nav-link text-secondary mb-1">
                      <i className="fa-solid fa-bucket me-2"></i>Pots & Planters
                    </span>
            
                    
                  
                </nav>
                <h3 className="h6 fw-bold text-dark mb-2">Filter by Price</h3>
                <div className="mb-2">
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="under25"
                    />
                    <label
                      className="form-check-label small text-secondary"
                      htmlFor="under25"
                    >
                      Under ₹25
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="25-50"
                    />
                    <label
                      className="form-check-label small text-secondary"
                      htmlFor="25-50"
                    >
                      ₹25 - ₹50
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="50-100"
                    />
                    <label
                      className="form-check-label small text-secondary"
                      htmlFor="50-100"
                    >
                      ₹50 - ₹100
                    </label>
                  </div>
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="over100"
                    />
                    <label
                      className="form-check-label small text-secondary"
                      htmlFor="over100"
                    >
                      Over ₹100
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            <main id="main-content" className="flex-grow-1 p-4">
              <div className="parallax-container position-relative">
                <div
                  className="parallax-leaf position-absolute top-0 start-0 w-100 h-100"
                  style={{ zIndex: -1 }}
                ></div>

                <div id="page-header" className="mb-4">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <div>
                      <h1 className="h3 fw-bold text-dark mb-0">
                        Plants
                      </h1>
                      <p className="text-secondary small mb-0">
                        Discover our wide variety of indoor and outdoor plants
                      </p>
                    </div>

                    <div className="sort-controls d-flex align-items-center gap-2">
                      <select
                        className="form-select form-select-sm"
                        value={sortBy}
                        onChange={handleSortChange}
                      >
                        <option value="featured">Sort by: Featured</option>
                        <option value="price-low-high">
                          Price: Low to High
                        </option>
                        <option value="price-high-low">
                          Price: High to Low
                        </option>
                        <option value="name-a-z">Name: A to Z</option>
                        <option value="name-z-a">Name: Z to A</option>
                        <option value="rating">Rating: High to Low</option>
                      </select>

                      <div className="btn-group ms-2" role="group">
                        <button
                          className={`btn btn-outline-secondary btn-sm ${
                            viewMode === "grid" ? "active" : ""
                          }`}
                          onClick={() => setViewMode("grid")}
                          title="Grid view"
                        >
                          <i className="fa-solid fa-th-large"></i>
                        </button>
                        <button
                          className={`btn btn-outline-secondary mx-2 btn-sm ${
                            viewMode === "list" ? "active" : ""
                          }`}
                          onClick={() => setViewMode("list")}
                          title="List view"
                        >
                          <i className="fa-solid fa-list"></i>
                        </button> 
                      </div>
                    </div>
                  </div>
                </div>

                <div id="plants-grid" className="row g-4">
                  {sortedPlants.map((plant) => (
                    <div
                      key={plant.id}
                      className={`${
                        viewMode === "grid"
                          ? "col-12 col-md-6 col-lg-3"
                          : "col-12"
                      } ${vrMode ? "vr-mode" : ""}`}
                    >
                      <div
                        className={`card h-100 shadow-sm border-0 ${
                          viewMode === "list" ? "d-flex flex-row align-items-center" : ""
                        }`}
                      >
                        <div
                          className={`position-relative ${viewMode === "list" ? "me-3" : ""}`}
                        >
                          <img
                            className="card-img-top object-fit-cover"
                            style={{
                              height: viewMode === "grid" ? "12rem" : "8rem",
                              width: viewMode === "grid" ? "100%" : "150px",
                              objectFit: "cover",
                            }}
                            src={plant.image}
                            alt={plant.alt}
                            onError={handleImageError}
                          />

                          {/* Favorite Heart Button */}
                          <button
                            onClick={() => toggleFavorite(plant.id)}
                            className={`btn btn-sm position-absolute top-0 end-0 m-2 border-0 ${
                              favorites.has(plant.id)
                                ? "text-danger bg-white"
                                : "text-secondary bg-white bg-opacity-75"
                            }`}
                            style={{
                              borderRadius: "50%",
                              width: "35px",
                              height: "35px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            title={
                              favorites.has(plant.id)
                                ? "Remove from favorites"
                                : "Add to favorites"
                            }
                            type="button"
                            aria-label={
                              favorites.has(plant.id)
                                ? "Remove from favorites"
                                : "Add to favorites"
                            }
                          >
                            {favorites.has(plant.id) ? (
                              <span
                                style={{ color: "#bc303eff", fontSize: "0.8rem" }}
                              >
                                ❤️
                              </span>
                            ) : (
                              <span
                                style={{ color: "#6c757d", fontSize: "1.1rem" }}
                              >
                                ♡
                              </span>
                            )}
                          </button>
                        </div>

                        <div className={`card-body ${viewMode === "list" ? "flex-grow-1" : ""}`}>
                          <h3 className="h6 fw-semibold text-dark mb-1">
                            {plant.name}
                          </h3>
                          <p className="small text-secondary mb-2">
                            {plant.description}
                          </p>
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span className="fw-bold text-success">
                              {plant.price}
                            </span>
                            <div className="d-flex align-items-center text-warning small">
                              <i className="fa-solid fa-star me-1"></i>
                              {plant.rating}
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                            <button className="btn btn-success btn-sm cart-btn">
                              <i className="fa-solid fa-shopping-cart me-1"></i>
                              Add to Cart
                            </button>
                            <button className="btn btn-outline-success btn-sm cart-btn">
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plantlist;
