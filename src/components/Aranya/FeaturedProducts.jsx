import { Link } from 'react-router-dom';
import { products } from './productsData';
import './FeaturedProducts.css';

function FeaturedProducts() {
  return (
    <section className="featured-products-section py-5">
      <div className="container">
        <h3 className="display-6 fw-bold text-center text-dark mb-5">Featured Collection</h3>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0">
                <Link to={`/product/${product.id}`}>
                  <img className="card-img-top object-fit-cover" style={{ height: '12rem' }} src={product.gallery[0]} alt={product.name} />
                </Link>
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
