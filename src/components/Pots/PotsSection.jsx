import { useState } from "react";
import "./PotsSection.css";
import VideoBanner1 from "../Aranya/VideoBanner1";

const PotsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ceramic Pots");
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState("Featured");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = [
    { name: "Ceramic Pots", icon: "fas fa-circle", count: 24, active: true },
    {
      name: "Terracotta Pots",
      icon: "fas fa-square",
      count: 18,
      active: false,
    },
    { name: "Plastic Pots", icon: "fas fa-diamond", count: 32, active: false },
    { name: "Metal Pots", icon: "fas fa-cube", count: 12, active: false },
    { name: "Hanging Pots", icon: "fas fa-leaf", count: 15, active: false },
    {
      name: "Frp",
      icon: "fas fa-seedling",
      count: 32,
      active: false,
    },
    { name: "Outdoor Planters", icon: "fas fa-tree", count: 12, active: false },
    { name: "3D Planters", icon: "fas fa-cubes", count: 15, active: false },
  ];

  const products = [
    {
      id: 1,
      name: "Classic White Ceramic Pot",
      description: "Perfect for indoor plants with excellent",
      price: 1332.99,
      dateAdded: "2024-01-15",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5735ef5c55-42f7207907fd84c30add.png",
      alt: "elegant white ceramic pot with drainage holes, minimalist design, studio lighting",
    },
    {
      id: 2,
      name: "Rustic Terracotta Pot",
      description: "Handcrafted with natural clay finish",
      price: 828.5,
      dateAdded: "2024-02-10",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5f2ab1d5c6-c8a3ed6266bacaffe3e1.png",
      alt: "rustic terracotta ceramic pot with textured surface, earthy brown color, natural lighting",
    },
    {
      id: 3,
      name: "Modern Geometric Pot",
      description: "Contemporary design with unique",
      price: 1045.0,
      dateAdded: "2024-03-05",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/39dbfae96b-cc2f9b7972cc862d2ec8.png",
      alt: "modern black ceramic pot with geometric pattern, contemporary design, clean background",
    },
    {
      id: 4,
      name: "Ocean Blue Glazed Pot",
      description: "Stunning blue glaze with smooth finish",
      price: 639.99,
      dateAdded: "2024-01-28",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/c00adfbdd4-a036817657d4b47fb334.png",
      alt: "blue glazed ceramic pot with smooth finish, medium size, professional product photography",
    },
    {
      id: 5,
      name: "Pastel Mini Pot Set",
      description: "Set of 3 small pots in soft colors",
      price: 1224.99,
      dateAdded: "2024-02-20",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5415b9cf73-17bf24be5361feb14a96.png",
      alt: "small ceramic pot set with pastel colors, cute miniature pots, soft lighting",
    },
    {
      id: 6,
      name: "Artisan Speckled Pot",
      description: "Large pot with unique speckled finish",
      price: 552.0,
      dateAdded: "2024-03-12",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/02d23904b7-8d5c9887abacbd20103d.png",
      alt: "large ceramic pot with speckled glaze, artisan crafted, natural texture",
    },
    {
      id: 7,
      name: "Pastel Mini Pot Set",
      description: "Set of 3 small pots in soft colors",
      price: 1224.99,
      dateAdded: "2024-01-08",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5415b9cf73-17bf24be5361feb14a96.png",
      alt: "small ceramic pot set with pastel colors, cute miniature pots, soft lighting",
    },
    {
      id: 8,
      name: "Artisan Speckled Pot",
      description: "Large pot with unique speckled finish",
      price: 552.0,
      dateAdded: "2024-02-25",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/02d23904b7-8d5c9887abacbd20103d.png",
      alt: "large ceramic pot with speckled glaze, artisan crafted, natural texture",
    },
    {
      id: 9,
      name: "Pastel Mini Pot Set",
      description: "Set of 3 small pots in soft colors",
      price: 1224.99,
      dateAdded: "2024-03-18",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5415b9cf73-17bf24be5361feb14a96.png",
      alt: "small ceramic pot set with pastel colors, cute miniature pots, soft lighting",
    },
    {
      id: 10,
      name: "Artisan Speckled Pot",
      description: "Large pot with unique speckled finish",
      price: 552.0,
      dateAdded: "2024-01-22",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/02d23904b7-8d5c9887abacbd20103d.png",
      alt: "large ceramic pot with speckled glaze, artisan crafted, natural texture",
    },
    {
      id: 11,
      name: "Artisan Speckled Pot",
      description: "Large pot with unique speckled finish",
      price: 552.0,
      dateAdded: "2024-02-14",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/02d23904b7-8d5c9887abacbd20103d.png",
      alt: "large ceramic pot with speckled glaze, artisan crafted, natural texture",
    },
    {
      id: 12,
      name: "Pastel Mini Pot Set",
      description: "Set of 3 small pots in soft colors",
      price: 1224.99,
      dateAdded: "2024-03-08",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/5415b9cf73-17bf24be5361feb14a96.png",
      alt: "small ceramic pot set with pastel colors, cute miniature pots, soft lighting",
    },
    {
      id: 13,
      name: "Artisan Speckled Pot",
      description: "Large pot with unique speckled finish",
      price: 552.0,
      dateAdded: "2024-03-25",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/02d23904b7-8d5c9887abacbd20103d.png",
      alt: "large ceramic pot with speckled glaze, artisan crafted, natural texture",
    },
  ];

  // Sort products based on selected sort option
  const getSortedProducts = () => {
    let sortedProducts = [...products];

    switch (sortBy) {
      case "Price: Low to High":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "Newest First":
        sortedProducts.sort(
          (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
        );
        break;
      case "Featured":
      default:
        // Keep original order for featured products
        break;
    }

    return sortedProducts;
  };

  // Get sorted products
  const sortedProducts = getSortedProducts();

  // Pagination logic with sorted products
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Reset to first page when sort changes
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const toggleFavorite = (e, productId) => {
    // Prevent event bubbling and default behavior
    e.preventDefault();
    e.stopPropagation();

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
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
  };

  // Grid View Component
  const GridView = () => (
    <div className="row g-4">
      {paginatedProducts.map((product) => (
        <div key={product.id} className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm border-0 p-3">
            <div className="position-relative mb-3">
              <img
                className="card-img-top object-fit-cover rounded"
                style={{ height: "12rem" }}
                src={product.image}
                alt={product.alt}
                onError={handleImageError}
              />
              <button
                onClick={(e) => toggleFavorite(e, product.id)}
                className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"
                type="button"
                aria-label={
                  favorites.has(product.id)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  fontSize: "1.1rem",
                }}
              >
                {favorites.has(product.id) ? (
                  <span style={{ color: "#dc3545" }}>♥</span>
                ) : (
                  <span style={{ color: "#6c757d" }}>♡</span>
                )}
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
  );

  // List View Component
  const ListView = () => (
    <div className="d-flex flex-column gap-3">
      {paginatedProducts.map((product) => (
        <div key={product.id} className="card shadow-sm border-0 p-3">
          <div className="row g-3 align-items-center">
            <div className="col-md-3 col-lg-2">
              <div className="position-relative">
                <img
                  className="img-fluid rounded object-fit-cover"
                  style={{ height: "8rem", width: "100%" }}
                  src={product.image}
                  alt={product.alt}
                  onError={handleImageError}
                />
                <button
                  onClick={(e) => toggleFavorite(e, product.id)}
                  className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"
                  type="button"
                  aria-label={
                    favorites.has(product.id)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                  style={{
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  {favorites.has(product.id) ? (
                    <span style={{ color: "#dc3545" }}>♥</span>
                  ) : (
                    <span style={{ color: "#6c757d" }}>♡</span>
                  )}
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-7">
              <h3 className="h5 fw-semibold text-dark mb-2">{product.name}</h3>
              <p className="text-secondary mb-2">{product.description}</p>
              <div className="text-muted small">
                Added: {new Date(product.dateAdded).toLocaleDateString()}
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-md-end">
              <div className="mb-3">
                <span className="fw-bold text-success fs-5">{`₹${product.price}`}</span>
              </div>
              <button className="btn btn-success">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pots-section bg-light min-vh-100">
      <VideoBanner1 />
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
                    className={`d-flex align-items-center justify-content-between p-2 rounded cursor-pointer ${
                      selectedCategory === category.name
                        ? "bg-success text-white"
                        : "bg-light text-dark"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <i className={`${category.icon} small`}></i>
                      <span className="fw-medium">{category.name}</span>
                    </div>
                    <span
                      className={`badge rounded-pill ${
                        selectedCategory === category.name
                          ? "bg-white bg-opacity-25 text-white"
                          : "bg-white bg-opacity-10 text-white"
                      }`}
                    >
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          {/* Main Content */}

          <section className="col-lg-9">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
              <div>
                <h1 className="h4 fw-bold text-dark mb-1">
                  {selectedCategory} Collection
                </h1>
                <p className="text-secondary small mb-0">
                  Discover our premium selection of handcrafted{" "}
                  {selectedCategory.toLowerCase()}
                </p>
              </div>
              <div className="sort-controls d-flex align-items-center gap-2">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="form-select form-select-sm"
                >
                  <option value="Featured">Sort by: Featured</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Newest First">Newest First</option>
                </select>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`btn btn-outline-secondary btn-sm${
                      viewMode === "grid" ? "active" : ""
                    }`}
                  >
                    <i className="fas fa-th"></i>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`btn btn-outline-secondary btn-sm ${
                      viewMode === "list" ? "active" : ""
                    }`}
                  >
                    <i className="fas fa-list"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Display - Grid or List */}
            {viewMode === "grid" ? <GridView /> : <ListView />}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                className="d-flex justify-content-center mt-4"
                aria-label="Pots pagination"
              >
                <ul className="pagination pots-pagination">
                  <li
                    className={`page-item${
                      currentPage === 1 ? " disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      tabIndex={currentPage === 1 ? -1 : 0}
                      aria-label="Previous"
                    >
                      &laquo;
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, idx) => (
                    <li
                      key={idx + 1}
                      className={`page-item${
                        currentPage === idx + 1 ? " active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(idx + 1)}
                      >
                        {idx + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item${
                      currentPage === totalPages ? " disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      tabIndex={currentPage === totalPages ? -1 : 0}
                      aria-label="Next"
                    >
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
};

export default PotsSection;
