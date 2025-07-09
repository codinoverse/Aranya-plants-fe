
import './OfferBanner.css';
import offerImg from "src/assets/offerbanner.png";
import offerImg1 from "src/assets/offerbanner1.png";
import offerImg2 from "src/assets/offerbanner3.png";

const OfferBanner = () => {
    return (
        <div className="offer-banner container-fluid d-flex align-items-center justify-content-between  py-3 rounded shadow-sm">
            <div className="text-section">
                <h2 className="discount-title">Flat <span>₹200 OFF</span></h2>
                <p className="discount-subtitle">on all orders above ₹999</p>
                <p className="code-text mb-0">Use Code: <strong className="text-success">MONSOON200</strong></p>
            </div>
            <div className="img-section">
                <img src={offerImg} alt="Plants Offer" className="img-fluid banner-img" />
                <img src={offerImg2} alt="Plants Offer" className="img-fluid banner-img" />
                <img src={offerImg1} alt="Plants Offer" className="img-fluid banner-img" />
            </div>
        </div>
    );
};

export default OfferBanner;
