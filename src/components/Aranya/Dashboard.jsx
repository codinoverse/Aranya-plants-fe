import { useState, useEffect } from 'react';
import Header from '../Aranya/HeaderSection/Header.jsx';
import AIFeatures from './Ai features/AIFeatures';
import Chatbot from './Chatbot/Chatbot';
import FeaturedProducts from './Featured/FeaturedProducts';
import Footer from './FooterSection/Footer';
import Category from './Category/Category';
import Trending from './TrendingSection/Trending.jsx';
import Choose from './WhyChoose/Choose';
import OfferBanner from './OfferBannerSection/OfferBanner.jsx';
import DownBanner from './DownBanners/DownBanner';
import VideoBanner from './VideoBanner';


function Dashboard() {
    const [vrMode, setVrMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax-leaf');
            if (parallax) {
                parallax.style.setProperty('--scroll-y', `${scrolled * 0.5}px`);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleVrMode = () => {
        setVrMode(!vrMode);
    };

    return (
        <>
            <div className="leaf-bg" >
                <Header toggleVrMode={toggleVrMode} />
                <div style={{ "marginTop": "124px" }}>
                    <OfferBanner />
                    {/* <Hero vrMode={vrMode} /> */}
                </div>

                <div style={{marginTop:"-20px"}}>
                    <DownBanner />
                </div>

                <div style={{ marginTop: "-1px" }}>
                    <VideoBanner />
                </div>
                <FeaturedProducts vrMode={vrMode} />
                <Category />
                <Trending />
                <Choose />
                <Chatbot />
                <AIFeatures vrMode={vrMode} />
                <Footer />
            </div>
        </>
    );
}

export default Dashboard;