import React from 'react';
import './FeaturedProducts.css';

function FeaturedProducts({ vrMode }) {
  const products = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      description: 'Perfect for beginners',
      price: '$45',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1be5079821-04be3b2dcdd0ab26d0ec.png',
      alt: 'monstera deliciosa plant in modern white ceramic pot'
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      description: 'Statement plant',
      price: '$75',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/69a5ebb377-a5f6ef2d448b8bf2407a.png',
      alt: 'fiddle leaf fig plant in terracotta pot indoor setting'
    },
    {
      id: 3,
      name: 'Snake Plant',
      description: 'Low maintenance',
      price: '$35',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8a1b6f0c3a-3194a44858aef8aa06d3.png',
      alt: 'snake plant sansevieria in modern black pot minimalist'
    },
    {
      id: 4,
      name: 'Golden Pothos',
      description: 'Air purifying',
      price: '$25',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/dbbfba87f9-958c6f5644cc0d82cb62.png',
      alt: 'pothos plant in hanging macrame planter boho style'
    }
  ];

  return (
    <section id="featured-products" className="featured-products-section py-5">
      <div className="container">
        <h3 className="display-6 fw-bold text-center text-dark mb-5">Featured Collection</h3>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <div className={`card h-100 shadow-sm border-0 ${vrMode ? 'vr-mode' : ''}`}>
                <img className="card-img-top object-fit-cover" style={{height:'12rem'}} src={product.image} alt={product.alt} />
                <div className="card-body">
                  <h4 className="h6 fw-semibold text-dark mb-2">{product.name}</h4>
                  <p className="text-secondary small mb-3">{product.description}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="h5 fw-bold text-success mb-0">{product.price}</span>
                    <button className="btn btn-success btn-sm rounded-circle"><i className="fas fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;