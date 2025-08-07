import { useState, useEffect } from 'react';
import Header from '../HeaderSection/Header.jsx';
import Plantlist from './Plantslist.jsx';
import Chatbot from '../Chatbot/Chatbot.jsx';
import Footer from '../FooterSection/Footer.jsx';



const Plantsection = () => {
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
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 leaf-bg">
      <Header toggleVrMode={toggleVrMode} />
      <div  style={{ marginTop: '95px' }}>
        <Plantlist />
      </div>

      <Chatbot />
      <Footer />


    </div>
  );
}

export default Plantsection;