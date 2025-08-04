import Footer from "../Aranya/Footer"
import Header from "../Aranya/Header"
import OrderDetails from "./OrderDetails"



const OrderDashboard = () => {


    return (
        <>
             <div className="mb-5"><Header /> </div>
            <div style={{marginTop:"75px"}}>
                <OrderDetails />
            </div>
            <Footer />
        </>
    )
}


export default OrderDashboard