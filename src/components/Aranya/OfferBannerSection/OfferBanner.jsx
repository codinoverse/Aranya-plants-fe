
import './OfferBanner.css';
// import './src/assets';
// import offerImg from './Aranya_v1/Aranya1/src/assets/offerimage1.png';
// import offerImg1 from '/Aranya_v1/Aranya1/src/assets/offerbanner2.png';
// import offerImg2 from "./Aranya_v1/Aranya1/src/assets/plantsandpots.png";

const OfferBanner = () => {
    return (
        <div className="offer-banner container-fluid d-flex align-items-center justify-content-between  py-3 rounded shadow-sm">
            <div className="text-section">
                <h2 className="discount-title">Flat <span>₹200 OFF</span></h2>
                <p className="discount-subtitle">on all orders above ₹999</p>
                <p className="code-text mb-0">Use Code: <strong className="text-success">MONSOON200</strong></p>
            </div>
            <div className="img-section">
                <img src="./Aranya_v1/Aranya1/src/assets/offerimage1.png" alt="Plants Offer" className="img-fluid banner-img" />
                <img src="./Aranya_v1/Aranya1/src/assets/offerimage2.png" alt="Plants Offer" className="img-fluid banner-img" />
                <img src="./Aranya_v1/Aranya1/src/assets/offerimage3.png" alt="Plants Offer" className="img-fluid banner-img" />
            </div>
        </div>
    );
};

export default OfferBanner;
