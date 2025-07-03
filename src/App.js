import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import ProductsSection from "./ProductsSection.jsx";
import AICompanionSection from "./components/AICompanionSection.jsx";
import CustomerStories from "./components/CustomerStories.jsx";
import Footer from "./components/Footer.jsx";
import ExploreSection from "./components/Explore.jsx";
import ContactSales from "./components/ContactSales.jsx";
import Herosection from './components/Herosection.jsx'; 
import Explore from './components/Explore.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Herosection />
              <ProductsSection />
              <AICompanionSection />
              <CustomerStories /> 
              <Footer />
            </>
          } 
        />
        <Route path="/explore"element={<Explore/>}/>
        <Route path="/contact-sales" element={<ContactSales />} />
      </Routes>
    </Router>
  );
}

export default App;
