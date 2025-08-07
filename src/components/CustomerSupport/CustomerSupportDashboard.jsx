import Footer from "../Aranya/FooterSection/Footer";
import Header from "../Aranya/HeaderSection/Header";
import PlantCareSupport from "./PlantCareSupport";



const CustomerCareDashboard = () => {
    return(
        <>
            <div className="mb-5"><Header/></div>
            <div style={{marginTop:"135px"}}><PlantCareSupport/></div>
            <Footer/>  
        </>
    );
};


export default CustomerCareDashboard