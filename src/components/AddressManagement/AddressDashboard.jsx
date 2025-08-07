import Footer from "../Aranya/FooterSection/Footer";
import Header from "../Aranya/HeaderSection/Header";
import AddressManagement from "./AddressManagement";


const AddressDashboard = () => {
    return(
        <>
            <div className="mb-5"><Header/></div>
            <div style={{marginTop:"130px"}}><AddressManagement/></div>
            <Footer/>
        
        </>
    )
}

export default AddressDashboard;