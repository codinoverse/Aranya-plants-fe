import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OffersCarousel.css";

const offers = [
  {
    id: 1,
    image: "https://via.placeholder.com/200x200.png?text=50%+OFF",
    alt: "50% off offer"
  },
  {
    id: 2,
    image: "https://via.placeholder.com/200x200.png?text=Buy+1+Get+1",
    alt: "Buy 1 Get 1 Free"
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200x200.png?text=Flash+Sale",
    alt: "Flash Sale"
  },
  {
    id: 4,
    image: "https://via.placeholder.com/200x200.png?text=New+Arrival",
    alt: "New Arrival"
  }
];

const OffersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-wrapper py-4">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="offer-circle">
            <img src={offer.image} alt={offer.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersCarousel;
