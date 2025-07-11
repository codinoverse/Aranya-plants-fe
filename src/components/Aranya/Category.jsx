import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Category.css';

const Category = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const categories = [
        {
            id: "indoor-plants-card",
            title: "Indoor Plants",
            subtitle: "150+ varieties",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c625c89c00-d43446846b00988d3259.png",
            alt: "beautiful indoor houseplants collection, monstera and fiddle leaf fig"
        },
        {
            id: "outdoor-plants-card",
            title: "Outdoor Plants",
            subtitle: "80+ varieties",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b9715cf4f9-be1d273a041a99f24d7d.png",
            alt: "outdoor garden plants and flowers in terracotta pots"
        },
        {
            id: "ceramic-pots-card",
            title: "Ceramic Pots",
            subtitle: "Premium quality",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/0ca56ca5de-15f5a4b8cd26956765e7.png",
            alt: "modern ceramic pots collection, minimalist design, white and terracotta colors"
        },
        {
            id: "care-accessories-card",
            title: "Care & Tools",
            subtitle: "Everything you need",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/65051d97b2-8177fc26f2ce94e4f5cf.png",
            alt: "plant care accessories, watering can, pruning tools, fertilizer"
        },
        {
            id: "succulents-card",
            title: "Succulents",
            subtitle: "Low maintenance",
            image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=300&fit=crop",
            alt: "colorful succulent plants in decorative pots"
        },
        {
            id: "herbs-card",
            title: "Herbs & Edibles",
            subtitle: "Fresh & organic",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            alt: "fresh herbs and edible plants for kitchen garden"
        },
        {
            id: "hanging-plants-card",
            title: "Hanging Plants",
            subtitle: "Space savers",
            image: "https://images.unsplash.com/photo-1558603668-6570496b66f8?w=400&h=300&fit=crop",
            alt: "beautiful hanging plants in macrame planters"
        },
        {
            id: "tropical-plants-card",
            title: "Tropical Plants",
            subtitle: "Exotic varieties",
            image: "https://images.unsplash.com/photo-1463736932348-4915535cf6f9?w=400&h=300&fit=crop",
            alt: "tropical plants with large green leaves"
        },
        {
            id: "air-purifying-card",
            title: "Air Purifying",
            subtitle: "Clean air naturally",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            alt: "air purifying plants like snake plant and peace lily"
        },
        {
            id: "plant-gifts-card",
            title: "Plant Gifts",
            subtitle: "Perfect presents",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            alt: "beautifully packaged plant gifts with ribbons"
        }
    ];

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Width of one card plus gap
            const newScrollLeft = direction === 'left' 
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;
            
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
            
            // Update button states after scroll animation
            setTimeout(checkScrollButtons, 300);
        }
    };

    React.useEffect(() => {
        checkScrollButtons();
        const handleResize = () => checkScrollButtons();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="categories-section" className="category-section py-5 bg-white">
            <div className="container-fluid px-4">
                <div className="text-center mb-4">
                    <h2 className="h3 fw-bold text-success mb-2">Shop by Category</h2>
                    <p className="text-secondary mx-auto" style={{maxWidth: '600px'}}>
                        From air-purifying houseplants to statement planters, find everything you need to create your perfect green space.
                    </p>
                </div>
                
                <div className="position-relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`scroll-arrow scroll-arrow-left ${!canScrollLeft ? 'disabled' : ''}`}
                    >
                        <ChevronLeft size={24} className="text-success" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`scroll-arrow scroll-arrow-right ${!canScrollRight ? 'disabled' : ''}`}
                    >
                        <ChevronRight size={24} className="text-success" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScrollButtons}
                        className="categories-scroll-container"
                    >
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                id={category.id}
                                className="category-item"
                            >
                                <div className="card h-100 border-0 shadow-sm position-relative cursor-pointer category-card">
                                    <img
                                        className="card-img-top object-fit-cover"
                                        style={{ height: '16rem' }}
                                        src={category.image}
                                        alt={category.alt}
                                    />
                                    <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50 text-white rounded-bottom">
                                        <h3 className="h6 fw-semibold mb-1">{category.title}</h3>
                                        <p className="small mb-0">{category.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;