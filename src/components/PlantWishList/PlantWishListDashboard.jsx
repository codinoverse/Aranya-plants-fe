import Footer from "../Aranya/Footer";
import Header from "../Aranya/Header";
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