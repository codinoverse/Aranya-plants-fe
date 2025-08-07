import { useState, useEffect } from 'react';
import Header from '../HeaderSection/Header.jsx';
import Footer from '../FooterSection/Footer.jsx';
import PlantAboutPage from './About.jsx';
import Chatbot from '../Chatbot/Chatbot.jsx';

function AboutMe() {
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
        <div className="leaf-bg" style={{background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)'}}>
            <Header toggleVrMode={toggleVrMode} />
            <div className='mt-5' style={{ marginTop: '66px' }}>
                <PlantAboutPage/>
            </div>
            <Chatbot/>
            <Footer />
        </div>
    );
}

export default AboutMe;