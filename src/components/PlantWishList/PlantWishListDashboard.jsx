import Footer from "../Aranya/FooterSection/Footer";
import Header from "../Aranya/HeaderSection/Header";
import PlantWishlist from "./PlantWishList";


const PlantWishListDashboard = () => {

    return (
        <>

        <div className="mb-5"><Header/></div>
        <div style={{marginTop:"135px"}}><PlantWishlist/></div>
        <Footer/>

        
        </>
    );
};


export default PlantWishListDashboard;