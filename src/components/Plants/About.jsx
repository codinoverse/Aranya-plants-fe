import './About.css';
const PlantAboutPage = () => {
    const leafPattern = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    };

    return (
        <div className="about-section">
            {/* Hero Section */}
            <section className="position-relative py-5 overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={leafPattern}></div>
                <div className="container position-relative z-1">
                    <div className="mx-auto" style={{maxWidth:'900px'}}>
                        <div className="text-center mb-5">
                            <div className="d-inline-flex align-items-center bg-success bg-opacity-10 text-success px-4 py-2 rounded-pill small mb-3">
                                <i className="fa-solid fa-leaf me-2"></i>
                                About Our Green Journey
                            </div>
                            <h2 className="display-4 fw-bold text-dark mb-3">
                                Cultivating Life, One Plant at a Time
                            </h2>
                            <p className="lead text-secondary mx-auto" style={{maxWidth:'600px'}}>
                                From humble beginnings to becoming your trusted plant companion, discover the passion and expertise behind every leaf we nurture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-5">
                <div className="container">
                    <div className="mx-auto" style={{maxWidth:'900px'}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <h3 className="h2 fw-bold text-dark mb-3">Our Growing Story</h3>
                                <p className="lead text-secondary mb-2">
                                    What started as a small greenhouse dream in 2015 has blossomed into a thriving community of plant lovers. We began with just 50 plants and an unwavering belief that everyone deserves to experience the joy of nurturing green life.
                                </p>
                                <p className="lead text-secondary mb-4">
                                    Today, we're proud to offer over 500 varieties of plants and handcrafted pots, each carefully selected and nurtured with the same love we had for our very first seedling.
                                </p>
                                <div className="row text-center g-3">
                                    <div className="col">
                                        <div className="h3 fw-bold text-success">8+</div>
                                        <div className="small text-secondary">Years Growing</div>
                                    </div>
                                    <div className="col">
                                        <div className="h3 fw-bold text-success">500+</div>
                                        <div className="small text-secondary">Plant Varieties</div>
                                    </div>
                                    <div className="col">
                                        <div className="h3 fw-bold text-success">10K+</div>
                                        <div className="small text-secondary">Happy Customers</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 position-relative">
                                <div className="rounded-4 overflow-hidden shadow-lg position-relative">
                                    <img
                                        className="w-100 object-fit-cover"
                                        style={{height:'400px'}}
                                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3567752dae-61643d2b31b65c6886d4.png"
                                        alt="greenhouse interior with lush plants, natural lighting, botanical paradise, professional photography"
                                    />
                                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:'linear-gradient(180deg,rgba(0,0,0,0.15),transparent)'}}></div>
                                </div>
                                <div className="position-absolute bottom-0 end-0 bg-white rounded-3 p-3 shadow border" style={{transform:'translate(30px,30px)'}}>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width:'48px',height:'48px'}}>
                                            <i className="fa-solid fa-seedling text-success fs-5"></i>
                                        </div>
                                        <div>
                                            <div className="fw-semibold text-dark">Est. 2015</div>
                                            <div className="small text-secondary">Growing Since</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-5" style={{background:'linear-gradient(90deg,#059669,#047857)'}}>
                <div className="container">
                    <div className="mx-auto text-center" style={{maxWidth:'700px'}}>
                        <h3 className="h2 fw-bold text-white mb-3">Our Mission</h3>
                        <p className="lead text-light mb-4">
                            To make plant parenthood accessible, enjoyable, and rewarding for everyone. We believe that connecting with nature through plants enriches lives, purifies spaces, and creates lasting joy.
                        </p>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="bg-white bg-opacity-10 rounded-4 p-4 border border-white border-opacity-25">
                                    <div className="d-flex align-items-center justify-content-center mb-3" style={{width:'64px',height:'64px',background:'rgba(255,255,255,0.15)',borderRadius:'50%',margin:'0 auto'}}>
                                        <i className="fa-solid fa-heart text-white fs-3"></i>
                                    </div>
                                    <h4 className="h6 fw-semibold text-white mb-2">Passion-Driven</h4>
                                    <p className="text-light small">Every plant is nurtured with genuine care and expertise.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white bg-opacity-10 rounded-4 p-4 border border-white border-opacity-25">
                                    <div className="d-flex align-items-center justify-content-center mb-3" style={{width:'64px',height:'64px',background:'rgba(255,255,255,0.15)',borderRadius:'50%',margin:'0 auto'}}>
                                        <i className="fa-solid fa-leaf text-white fs-3"></i>
                                    </div>
                                    <h4 className="h6 fw-semibold text-white mb-2">Sustainable</h4>
                                    <p className="text-light small">Eco-friendly practices in everything we do.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white bg-opacity-10 rounded-4 p-4 border border-white border-opacity-25">
                                    <div className="d-flex align-items-center justify-content-center mb-3" style={{width:'64px',height:'64px',background:'rgba(255,255,255,0.15)',borderRadius:'50%',margin:'0 auto'}}>
                                        <i className="fa-solid fa-users text-white fs-3"></i>
                                    </div>
                                    <h4 className="h6 fw-semibold text-white mb-2">Community</h4>
                                    <p className="text-light small">Building a supportive network of plant enthusiasts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5">
                <div className="container">
                    <div className="mx-auto" style={{maxWidth:'900px'}}>
                        <div className="text-center mb-5">
                            <h3 className="h2 fw-bold text-dark mb-3">Meet Our Green Team</h3>
                            <p className="lead text-secondary mx-auto" style={{maxWidth:'600px'}}>
                                The passionate botanists and plant enthusiasts who make the magic happen every day.
                            </p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="bg-white rounded-4 p-4 shadow border h-100 text-center">
                                    <div className="position-relative mb-3">
                                        <img
                                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                                            alt="Sarah Green"
                                            className="rounded-circle object-fit-cover mx-auto d-block"
                                            style={{width:'96px',height:'96px'}}
                                        />
                                        <div className="position-absolute bottom-0 end-0 translate-middle bg-success rounded-circle d-flex align-items-center justify-content-center" style={{width:'32px',height:'32px'}}>
                                            <i className="fa-solid fa-leaf text-white small"></i>
                                        </div>
                                    </div>
                                    <h4 className="h6 fw-semibold text-dark mb-1">Sarah Green</h4>
                                    <p className="text-success small mb-2">Head Botanist</p>
                                    <p className="text-secondary small">15+ years of experience in plant care and cultivation. Specializes in rare tropical plants.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white rounded-4 p-4 shadow border h-100 text-center">
                                    <div className="position-relative mb-3">
                                        <img
                                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                                            alt="Mike Forest"
                                            className="rounded-circle object-fit-cover mx-auto d-block"
                                            style={{width:'96px',height:'96px'}}
                                        />
                                        <div className="position-absolute bottom-0 end-0 translate-middle bg-success rounded-circle d-flex align-items-center justify-content-center" style={{width:'32px',height:'32px'}}>
                                            <i className="fa-solid fa-hammer text-white small"></i>
                                        </div>
                                    </div>
                                    <h4 className="h6 fw-semibold text-dark mb-1">Mike Forest</h4>
                                    <p className="text-success small mb-2">Pot Craftsman</p>
                                    <p className="text-secondary small">Master ceramicist creating unique, handcrafted pots that perfectly complement our plants.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white rounded-4 p-4 shadow border h-100 text-center">
                                    <div className="position-relative mb-3">
                                        <img
                                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                                            alt="Emma Bloom"
                                            className="rounded-circle object-fit-cover mx-auto d-block"
                                            style={{width:'96px',height:'96px'}}
                                        />
                                        <div className="position-absolute bottom-0 end-0 translate-middle bg-success rounded-circle d-flex align-items-center justify-content-center" style={{width:'32px',height:'32px'}}>
                                            <i className="fa-solid fa-graduation-cap text-white small"></i>
                                        </div>
                                    </div>
                                    <h4 className="h6 fw-semibold text-dark mb-1">Emma Bloom</h4>
                                    <p className="text-success small mb-2">Plant Care Educator</p>
                                    <p className="text-secondary small">Passionate about teaching plant care. Creates guides and workshops for plant parents.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="mx-auto" style={{maxWidth:'900px'}}>
                        <div className="text-center mb-5">
                            <h3 className="h2 fw-bold text-dark mb-3">What We Stand For</h3>
                            <p className="lead text-secondary">The principles that guide everything we do.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width:'80px',height:'80px',background:'linear-gradient(135deg,#34d399,#059669)',borderRadius:'20px'}}>
                                        <i className="fa-solid fa-shield-heart text-white fs-3"></i>
                                    </div>
                                    <h4 className="h6 fw-semibold text-dark mb-2">Quality First</h4>
                                    <p className="text-secondary small">Only the healthiest plants and finest pots make it to your home.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width:'80px',height:'80px',background:'linear-gradient(135deg,#34d399,#059669)',borderRadius:'20px'}}>
                                        <i className="fa-solid fa-recycle text-white fs-3"></i>
                                    </div>
                                    <h4 className="h6 fw-semibold text-dark mb-2">Eco-Conscious</h4>
                                    <p className="text-secondary small">Sustainable practices and environmentally friendly packaging.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width:'80px',height:'80px',background:'linear-gradient(135deg,#34d399,#059669)',borderRadius:'20px'}}>
                                        <i className="fa-solid fa-handshake text-white fs-3"></i>
                                    </div>
                                    <h4 className="h6 fw-semibold text-dark mb-2">Customer Care</h4>
                                    <p className="text-secondary small">Ongoing support to ensure your plants thrive in their new home.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width:'80px',height:'80px',background:'linear-gradient(135deg,#34d399,#059669)',borderRadius:'20px'}}>
                                        <i className="fa-solid fa-lightbulb text-white fs-3"></i>
                                    </div>
                                    <h4 className="h6 fw-semibold text-dark mb-2">Innovation</h4>
                                    <p className="text-secondary small">Constantly exploring new varieties and creative pot designs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 position-relative" style={{background:'linear-gradient(135deg,#064e3b,#065f46 80%)'}}>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{opacity:0.10}}>
                    <img
                        className="w-100 h-100 object-fit-cover"
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d1e57e126a-f08de28dcadcdc4296c6.png"
                        alt="botanical pattern, leaves silhouettes, nature texture, dark green background"
                    />
                </div>
                <div className="container position-relative z-1">
                    <div className="mx-auto text-center" style={{maxWidth:'700px'}}>
                        <h3 className="display-5 fw-bold text-white mb-3">
                            Ready to Start Your Plant Journey?
                        </h3>
                        <p className="lead text-light mb-4">
                            Join thousands of happy plant parents who've transformed their spaces with our carefully curated collection.
                        </p>
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                            <button className="btn btn-light text-success px-4 py-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-seedling me-2"></i>
                                Shop Plants
                            </button>
                            <button className="btn btn-outline-light px-4 py-3 rounded-pill fw-semibold">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlantAboutPage;