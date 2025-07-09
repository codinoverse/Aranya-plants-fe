import { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import AIFeatures from './AIFeatures';
import FeaturedProducts from './FeaturedProducts';
import Chatbot from './Chatbot';
import Footer from './Footer';
import Category from './Category';
import Trending from './Trending';
import Choose from './Choose';
import OfferBanner from './OfferBanner';
import DownBanner from './DownBanner';

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
            <div className="leaf-bg" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)' }}>
                <Header toggleVrMode={toggleVrMode} />
                <div style={{ "marginTop": "128px"}}>
                    <OfferBanner/>
                    <DownBanner/>
                    <Hero vrMode={vrMode} />
                </div>
                
                <AIFeatures vrMode={vrMode} />
                <FeaturedProducts vrMode={vrMode} />
                <Category />
                <Trending />
                <Choose />
                <Chatbot />
                <Footer />
            </div>
        </>
    );
}

export default Dashboard;