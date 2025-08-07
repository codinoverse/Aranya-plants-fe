import './Trending.css';
import { useState } from 'react';

const Trending = () => {
    const [showAll, setShowAll] = useState(false);

    const initialProducts = [
        {
            id: 1,
            name: "Monstera Deliciosa",
            description: "Perfect for bright, indirect light",
            price: 45,
            originalPrice: 60,
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3336f71d68-c21d7438087152a79d68.png",
            alt: "monstera deliciosa plant in white ceramic pot, studio photography",
            badge: { text: "Bestseller", color: "bg-success" }
        },
        {
            id: 2,
            name: "Snake Plant",
            description: "Low maintenance, air purifying",
            price: 32,
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8a1b6f0c3a-6d58fcf703655b451b3b.png",
            alt: "snake plant sansevieria in modern terracotta pot, minimalist style"
        },
        {
            id: 3,
            name: "Ceramic Pot Set",
            description: "Set of 3 modern planters",
            price: 89,
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/35b32631e4-bf62fbeeb308cf6c68a7.png",
            alt: "modern ceramic pot set, white and terracotta, minimalist design",
            badge: { text: "New", color: "bg-warning" }
        },
        {
            id: 4,
            name: "Fiddle Leaf Fig",
            description: "Statement plant for bright spaces",
            price: 78,
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9f8eb880b9-c27d6f753c21973b5fd2.png",
            alt: "fiddle leaf fig plant in large white pot, bright natural lighting"
        }
    ];

    const additionalProducts = [
        {
            id: 5,
            name: "Peace Lily",
            description: "Elegant white blooms, low light tolerant",
            price: 38,
            originalPrice: 45,
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            alt: "peace lily plant with white flowers in ceramic pot",
            badge: { text: "Popular", color: "bg-info" }
        },
        {
            id: 6,
            name: "Rubber Plant",
            description: "Glossy leaves, easy care",
            price: 52,
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9f8eb880b9-c27d6f753c21973b5fd2.png",
            alt: "rubber plant with large glossy leaves in modern pot"
        },
        {
            id: 7,
            name: "Pothos Bundle",
            description: "Set of 3 trailing plants",
            price: 65,
            originalPrice: 85,
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            alt: "pothos plants in hanging planters, trailing vines",
            badge: { text: "Bundle", color: "bg-primary" }
        },
        {
            id: 8,
            name: "ZZ Plant",
            description: "Nearly indestructible, drought tolerant",
            price: 42,
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3336f71d68-c21d7438087152a79d68.png",
            alt: "zz plant with glossy dark green leaves in white pot"
        }
    ];

    const allProducts = [...initialProducts, ...additionalProducts];
    const productsToShow = showAll ? allProducts : initialProducts;

    const handleViewAll = () => {
        setShowAll(!showAll);
    };

    const renderProductCard = (product) => (
        <div key={product.id} id={`product-${product.id}`} className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
                <div className="position-relative">
                    <img
                        className="card-img-top object-fit-cover"
                        style={{ height: '16rem' }}
                        src={product.image}
                        alt={product.alt}
                    />
                    <button className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm">
                        <i className="fa-regular fa-heart text-secondary"></i>
                    </button>
                    {product.badge && (
                        <div className={`position-absolute top-0 start-0 m-2 badge ${product.badge.color} text-white`}>
                            {product.badge.text}
                        </div>
                    )}
                </div>
                <div className="card-body">
                    <h3 className="h6 fw-semibold text-dark mb-2">{product.name}</h3>
                    <p className="text-secondary small mb-3">{product.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <span className="h5 fw-bold text-success mb-0">${product.price}</span>
                            {product.originalPrice && (
                                <span className="text-muted small text-decoration-line-through">
                                    ${product.originalPrice}
                                </span>
                            )}
                        </div>
                        <button className="btn btn-success btn-sm rounded-pill">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="featured-products" className="trending-section py-5 bg-light">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                    <div>
                        <h2 className="h3 fw-bold text-success mb-1">Trending Now</h2>
                        <p className="text-secondary mb-0">Most loved by our plant parents</p>
                    </div>
                    <button
                        className="btn btn-link text-success fw-semibold"
                        onClick={handleViewAll}
                    >
                        {showAll ? 'Show Less' : 'View All'}
                    </button>
                </div>
                <div className="row g-4">
                    {productsToShow.map(renderProductCard)}
                </div>
            </div>
        </section>
    );
};

export default Trending;