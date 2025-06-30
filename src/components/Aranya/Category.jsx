import './Category.css';
const Category = () => {
    return <>
        <section id="categories-section" className="category-section py-5 bg-white">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="h3 fw-bold text-success mb-2">Shop by Category</h2>
                    <p className="text-secondary mx-auto" style={{maxWidth: '600px'}}>From air-purifying houseplants to statement planters, find everything you need to create your perfect green space.</p>
                </div>
                <div className="row g-4">
                    <div id="indoor-plants-card" className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm position-relative cursor-pointer">
                            <img className="card-img-top object-fit-cover" style={{height:'16rem'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c625c89c00-d43446846b00988d3259.png" alt="beautiful indoor houseplants collection, monstera and fiddle leaf fig"/>
                            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50 text-white rounded-bottom">
                                <h3 className="h6 fw-semibold mb-1">Indoor Plants</h3>
                                <p className="small mb-0">150+ varieties</p>
                            </div>
                        </div>
                    </div>
                    <div id="outdoor-plants-card" className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm position-relative cursor-pointer">
                            <img className="card-img-top object-fit-cover" style={{height:'16rem'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b9715cf4f9-be1d273a041a99f24d7d.png" alt="outdoor garden plants and flowers in terracotta pots"/>
                            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50 text-white rounded-bottom">
                                <h3 className="h6 fw-semibold mb-1">Outdoor Plants</h3>
                                <p className="small mb-0">80+ varieties</p>
                            </div>
                        </div>
                    </div>
                    <div id="ceramic-pots-card" className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm position-relative cursor-pointer">
                            <img className="card-img-top object-fit-cover" style={{height:'16rem'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0ca56ca5de-15f5a4b8cd26956765e7.png" alt="modern ceramic pots collection, minimalist design, white and terracotta colors"/>
                            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50 text-white rounded-bottom">
                                <h3 className="h6 fw-semibold mb-1">Ceramic Pots</h3>
                                <p className="small mb-0">Premium quality</p>
                            </div>
                        </div>
                    </div>
                    <div id="care-accessories-card" className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm position-relative cursor-pointer">
                            <img className="card-img-top object-fit-cover" style={{height:'16rem'}} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/65051d97b2-8177fc26f2ce94e4f5cf.png" alt="plant care accessories, watering can, pruning tools, fertilizer"/>
                            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50 text-white rounded-bottom">
                                <h3 className="h6 fw-semibold mb-1">Care &amp; Tools</h3>
                                <p className="small mb-0">Everything you need</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Category;