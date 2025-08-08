import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Aranya/Dashboard";
import Plantsection from "./components/Aranya/PlantListsSection/Plantssection"
import Potsdashboard from './components/Pots/PotsDashboard';
import CareDashboard from './components/Aranya/CareSection/CareDashboard';
import AboutMe from './components/Aranya/AboutusSection/AboutMe';
import CartDashboard from './components/Aranya/Cart/CartDashboard';
import ProductCard from './components/Aranya/ProductCardSection/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderDashboard from './components/Orders/OrderDashboard';
import AddressDashboard from './components/AddressManagement/AddressDashboard';
import CheckOutDashboard from './components/Aranya/Checkout/CheckoutDashboard';
import PlantWishListDashboard from './components/PlantWishList/PlantWishListDashboard';
import CustomerCareDashboard from './components/CustomerSupport/CustomerSupportDashboard';
import PlantAuth from './components/Aranya/SignupLoginSection/SignupLogin';
import { AuthProvider } from './components/Aranya/AuthContextSection/AuthContext';
import BlogPage from './components/Aranya/Blog/BlogMain';



function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/plants' element={<Plantsection />} />
            <Route path='/pots' element={<Potsdashboard />} />
            <Route path='/care' element={<CareDashboard />} />
            <Route path='/care/plantscare' element={<BlogPage/>} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/cart' element={<CartDashboard />} />
            <Route path="/product/:productId" element={<ProductCard />} />
            <Route path='/orders' element={<OrderDashboard />} />
            <Route path='/address' element={<AddressDashboard />} />
            <Route path='/checkout' element={<CheckOutDashboard />} />
            <Route path="/wishlist" element={<PlantWishListDashboard />} />
            <Route path='/CustomerSupport' element={<CustomerCareDashboard />} />
            <Route path='/signup' element={<PlantAuth />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;