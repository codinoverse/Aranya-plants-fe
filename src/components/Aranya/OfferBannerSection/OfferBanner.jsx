import React, { useState, useEffect } from 'react';
import './OfferBanner.css';

const OfferBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const offers = [
        {
            id: 1,
            discount: "₹200 OFF",
            subtitle: "on all orders above ₹999",
            code: "MONSOON200",
            gradientClass: "monstera-bg",
            plantType: "monstera",
        },
        {
            id: 2,
            discount: "₹300 OFF",
            subtitle: "on orders above ₹1499",
            code: "SUMMER300",
            gradientClass: "cactus-bg",
            plantType: "cactus",
        },
        {
            id: 3,
            discount: "₹150 OFF",
            subtitle: "on first time orders",
            code: "WELCOME150",
            gradientClass: "succulent-bg",
            plantType: "succulent",
        }
    ];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % offers.length);
                setIsAnimating(false);
            }, 300);
        }, 4000);

        return () => clearInterval(interval);
    }, [offers.length]);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % offers.length);
                setIsAnimating(false);
            }, 300);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
                setIsAnimating(false);
            }, 300);
        }
    };

    const goToSlide = (index) => {
        if (!isAnimating && index !== currentSlide) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide(index);
                setIsAnimating(false);
            }, 300);
        }
    };

    // Plant SVG Components
    const PlantImage = ({ type }) => {
        switch(type) {
            case 'monstera':
                return (
                    <svg viewBox="0 0 200 200" className="plant-svg">
                        {/* Pot */}
                        <path d="M60 140 L140 140 L135 180 L65 180 Z" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
                        <ellipse cx="100" cy="140" rx="40" ry="8" fill="#A0522D"/>
                        <ellipse cx="100" cy="180" rx="35" ry="6" fill="#654321"/>
                        
                        {/* Soil */}
                        <ellipse cx="100" cy="135" rx="35" ry="6" fill="#4A4A4A"/>
                        
                        {/* Stem */}
                        <rect x="95" y="80" width="10" height="60" fill="#228B22"/>
                        
                        {/* Monstera Leaves */}
                        <g className="monstera-leaves">
                            <path d="M70 100 Q50 80 60 60 Q80 50 100 70 Q85 85 70 100" fill="#32CD32" stroke="#228B22" strokeWidth="2"/>
                            <path d="M130 100 Q150 80 140 60 Q120 50 100 70 Q115 85 130 100" fill="#32CD32" stroke="#228B22" strokeWidth="2"/>
                            <path d="M100 70 Q85 45 105 30 Q125 45 100 70" fill="#228B22" stroke="#006400" strokeWidth="2"/>
                        </g>
                        
                        {/* Holes in leaves */}
                        <ellipse cx="80" cy="75" rx="4" ry="6" fill="rgba(255,255,255,0.1)"/>
                        <ellipse cx="120" cy="75" rx="4" ry="6" fill="rgba(255,255,255,0.1)"/>
                    </svg>
                );
            
            case 'cactus':
                return (
                    <svg viewBox="0 0 200 200" className="plant-svg">
                        {/* Pot */}
                        <path d="M50 150 L150 150 L145 190 L55 190 Z" fill="#D2691E" stroke="#8B4513" strokeWidth="2"/>
                        <ellipse cx="100" cy="150" rx="50" ry="10" fill="#F4A460"/>
                        <ellipse cx="100" cy="190" rx="45" ry="8" fill="#8B4513"/>
                        
                        {/* Sand */}
                        <ellipse cx="100" cy="145" rx="45" ry="8" fill="#F5DEB3"/>
                        
                        {/* Main Cactus Body */}
                        <rect x="85" y="80" width="30" height="70" rx="15" fill="#228B22" stroke="#006400" strokeWidth="2" className="cactus-body"/>
                        
                        {/* Side Arms */}
                        <rect x="60" y="100" width="25" height="20" rx="12" fill="#228B22" stroke="#006400" strokeWidth="2" className="cactus-arms"/>
                        <rect x="115" y="110" width="25" height="15" rx="8" fill="#228B22" stroke="#006400" strokeWidth="2" className="cactus-arms"/>
                        
                        {/* Spines */}
                        <g stroke="#654321" strokeWidth="1">
                            <line x1="90" y1="90" x2="88" y2="85"/>
                            <line x1="100" y1="85" x2="98" y2="80"/>
                            <line x1="110" y1="90" x2="112" y2="85"/>
                            <line x1="95" y1="120" x2="93" y2="115"/>
                            <line x1="105" y1="125" x2="107" y2="120"/>
                        </g>
                        
                        {/* Flower on top */}
                        <circle cx="100" cy="75" r="8" fill="#FF69B4" className="cactus-flower"/>
                        <circle cx="100" cy="75" r="5" fill="#FF1493"/>
                    </svg>
                );
            
            case 'succulent':
                return (
                    <svg viewBox="0 0 200 200" className="plant-svg">
                        {/* Decorative Pot */}
                        <path d="M55 145 L145 145 L140 185 L60 185 Z" fill="#4169E1" stroke="#191970" strokeWidth="2"/>
                        <rect x="55" y="140" width="90" height="10" fill="#6495ED"/>
                        <ellipse cx="100" cy="145" rx="45" ry="8" fill="#87CEEB"/>
                        <ellipse cx="100" cy="185" rx="40" ry="6" fill="#191970"/>
                        
                        {/* Soil */}
                        <ellipse cx="100" cy="140" rx="40" ry="6" fill="#654321"/>
                        
                        {/* Succulent Layers */}
                        <g className="succulent-layers">
                            {/* Bottom layer */}
                            <g transform="translate(100,130)">
                                <path d="M-25 0 Q-20 -15 0 -10 Q20 -15 25 0 Q20 15 0 10 Q-20 15 -25 0" fill="#9ACD32" stroke="#7CFC00" strokeWidth="1"/>
                            </g>
                            
                            {/* Middle layer */}
                            <g transform="translate(100,120) scale(0.7)">
                                <path d="M-25 0 Q-20 -15 0 -10 Q20 -15 25 0 Q20 15 0 10 Q-20 15 -25 0" fill="#ADFF2F" stroke="#9ACD32" strokeWidth="1"/>
                            </g>
                            
                            {/* Top layer */}
                            <g transform="translate(100,110) scale(0.5)">
                                <path d="M-25 0 Q-20 -15 0 -10 Q20 -15 25 0 Q20 15 0 10 Q-20 15 -25 0" fill="#7CFC00" stroke="#32CD32" strokeWidth="1"/>
                            </g>
                            
                            {/* Center */}
                            <circle cx="100" cy="105" r="6" fill="#FFD700" className="succulent-center"/>
                            <circle cx="100" cy="105" r="3" fill="#FFA500"/>
                        </g>
                        
                        {/* Decorative dots on pot */}
                        <circle cx="70" cy="165" r="3" fill="#87CEEB"/>
                        <circle cx="100" cy="170" r="3" fill="#87CEEB"/>
                        <circle cx="130" cy="165" r="3" fill="#87CEEB"/>
                    </svg>
                );
            
            default:
                return null;
        }
    };

    const currentOffer = offers[currentSlide];

    return (
        <div className="offer-banner-container">
            {/* Main Banner Container */}
            <div className={`banner-slide ${currentOffer.gradientClass}`}>
                
                {/* Background Pattern */}
                <div className="banner-background-pattern"></div>

                {/* Content Container */}
                <div className="banner-content">
                    
                    {/* Text Section */}
                    <div className={`text-section ${isAnimating ? 'animating' : 'normal'}`}>
                        <h2 className="discount-title">
                            <span className="flat-text">Flat</span>
                            <span className="discount-amount">
                                {currentOffer.discount}
                            </span>
                        </h2>
                        
                        <p className="discount-subtitle">
                            {currentOffer.subtitle}
                        </p>
                        
                        <div className="code-section">
                            <p className="code-text">Use Code:</p>
                            <div className="code-container">
                                <strong className="code-value">
                                    {currentOffer.code}
                                </strong>
                                <span className="code-icon">📋</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className={`image-section ${isAnimating ? 'animating' : 'normal'}`}>
                        <div className="plant-container">
                            <PlantImage type={currentOffer.plantType} />
                            
                            {/* Floating Elements */}
                            <div className="floating-element-1"></div>
                            <div className="floating-element-2"></div>
                            <div className="floating-element-3"></div>
                            
                            {/* Sparkle Effects */}
                            <div className="sparkle-container">
                                <div className="sparkle-1">✨</div>
                                <div className="sparkle-2">🍃</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button onClick={prevSlide} className="nav-button prev">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button onClick={nextSlide} className="nav-button next">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
                {offers.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`indicator ${index === currentSlide ? 'active' : 'inactive'}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
                <div 
                    className="progress-fill"
                    style={{
                        width: `${((currentSlide + 1) / offers.length) * 100}%`
                    }}
                />
            </div>

            {/* Shine Effect */}
            <div className="shine-effect" />
        </div>
    );
};

export default OfferBanner;