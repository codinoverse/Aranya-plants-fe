import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Aranya/Dashboard";
import Plantsection from "./components/Plants/Plantssection"
import Potsdashboard from './components/Plants/PotsDashboard';
import CareDashboard from './components/Plants/CareDashboard';
import AboutMe from './components/Plants/AboutMe';
import CartDashboard from './components/Aranya/CartDashboard';
import ProductCard from './components/Aranya/ProductCard';






function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/plants' element={<Plantsection />} />
        <Route path='/pots' element={<Potsdashboard />} />
        <Route path='/care' element={<CareDashboard />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/cart' element={<CartDashboard />} />
        <Route path="/product/:productId" element={<ProductCard />} />
      </Routes>
    </Router>
  );
}

export default App;