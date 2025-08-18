import Header from "../../Aranya/HeaderSection/Header"
import KitchenTools from "./KgtoolsDb";
import Footer from "../../Aranya/FooterSection/Footer"

const KgtoolsDashboard =  () => {
    return(
        <>
        <div className="mb-5">
            <Header/>
        </div>

        <div style={{marginTop:"145px"}}>
             <KitchenTools/>   
        </div>
        

        <Footer/>
        </>
    )
}

export default KgtoolsDashboard;