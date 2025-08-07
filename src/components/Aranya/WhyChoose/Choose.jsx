import './Choose.css';
const Choose = () => {
    return <>
        <section id="benefits-section" className="choose-section py-5 bg-white bg-opacity-90">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h2 className="display-6 fw-bold text-dark mb-4">Why Choose <b>Aranya?</b></h2>
                        <div className="vstack gap-4">
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-success bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{width:'48px',height:'48px'}}>
                                    <i className="fas fa-shipping-fast text-success fs-4"></i>
                                </div>
                                <div>
                                    <h3 className="h6 fw-semibold text-dark mb-1">Free Shipping</h3>
                                    <p className="text-secondary mb-0">Free delivery on orders over $50. Fast and secure packaging.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-success bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{width:'48px',height:'48px'}}>
                                    <i className="fas fa-seedling text-success fs-4"></i>
                                </div>
                                <div>
                                    <h3 className="h6 fw-semibold text-dark mb-1">Plant Care Guide</h3>
                                    <p className="text-secondary mb-0">Detailed care instructions with every plant purchase.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-success bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{width:'48px',height:'48px'}}>
                                    <i className="fas fa-award text-success fs-4"></i>
                                </div>
                                <div>
                                    <h3 className="h6 fw-semibold text-dark mb-1">Quality Guarantee</h3>
                                    <p className="text-secondary mb-0">30-day return policy on all plants and accessories.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative">
                        <img className="img-fluid rounded-4 shadow-lg" style={{height:'24rem',objectFit:'cover',width:'100%'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/689f3a48db-a7128608b5cc2ddc1890.png" alt="beautiful plant care setup with watering can, pruning tools, and healthy green plants in modern home" />
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Choose;