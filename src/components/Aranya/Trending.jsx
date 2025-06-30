import './Trending.css';
const Trending = () => {
    return <>
        <section id="featured-products" className="trending-section py-5 bg-light">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                    <div>
                        <h2 className="h3 fw-bold text-success mb-1">Trending Now</h2>
                        <p className="text-secondary mb-0">Most loved by our plant parents</p>
                    </div>
                    <button className="btn btn-link text-success fw-semibold">View All</button>
                </div>
                <div className="row g-4">
                    <div id="product-1" className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="position-relative">
                                <img className="card-img-top object-fit-cover" style={{height:'16rem'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3336f71d68-c21d7438087152a79d68.png" alt="monstera deliciosa plant in white ceramic pot, studio photography" />
                                <button className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"><i className="fa-regular fa-heart text-secondary"></i></button>
                                <div className="position-absolute top-0 start-0 m-2 badge bg-success text-white">Bestseller</div>
                            </div>
                            <div className="card-body">
                                <h3 className="h6 fw-semibold text-dark mb-2">Monstera Deliciosa</h3>
                                <p className="text-secondary small mb-3">Perfect for bright, indirect light</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="h5 fw-bold text-success mb-0">$45</span>
                                        <span className="text-muted small text-decoration-line-through">$60</span>
                                    </div>
                                    <button className="btn btn-success btn-sm rounded-pill">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-2" className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="position-relative">
                                <img className="card-img-top object-fit-cover" style={{height:'16rem'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8a1b6f0c3a-6d58fcf703655b451b3b.png" alt="snake plant sansevieria in modern terracotta pot, minimalist style" />
                                <button className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"><i className="fa-regular fa-heart text-secondary"></i></button>
                            </div>
                            <div className="card-body">
                                <h3 className="h6 fw-semibold text-dark mb-2">Snake Plant</h3>
                                <p className="text-secondary small mb-3">Low maintenance, air purifying</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="h5 fw-bold text-success mb-0">$32</span>
                                    <button className="btn btn-success btn-sm rounded-pill">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-3" className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="position-relative">
                                <img className="card-img-top object-fit-cover" style={{height:'16rem'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/35b32631e4-bf62fbeeb308cf6c68a7.png" alt="modern ceramic pot set, white and terracotta, minimalist design" />
                                <button className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"><i className="fa-regular fa-heart text-secondary"></i></button>
                                <div className="position-absolute top-0 start-0 m-2 badge bg-warning text-white">New</div>
                            </div>
                            <div className="card-body">
                                <h3 className="h6 fw-semibold text-dark mb-2">Ceramic Pot Set</h3>
                                <p className="text-secondary small mb-3">Set of 3 modern planters</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="h5 fw-bold text-success mb-0">$89</span>
                                    <button className="btn btn-success btn-sm rounded-pill">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-4" className="col-12 col-sm-6 col-lg-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="position-relative">
                                <img className="card-img-top object-fit-cover" style={{height:'16rem'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9f8eb880b9-c27d6f753c21973b5fd2.png" alt="fiddle leaf fig plant in large white pot, bright natural lighting" />
                                <button className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"><i className="fa-regular fa-heart text-secondary"></i></button>
                            </div>
                            <div className="card-body">
                                <h3 className="h6 fw-semibold text-dark mb-2">Fiddle Leaf Fig</h3>
                                <p className="text-secondary small mb-3">Statement plant for bright spaces</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="h5 fw-bold text-success mb-0">$78</span>
                                    <button className="btn btn-success btn-sm rounded-pill">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Trending;