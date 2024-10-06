import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login';
import FileUpload from './FileUpload';
import TrackingPage from './components/TrackingPage';
import Faq from './components/Faq';
import PrivacySecurity from './components/PrivacySecurity';
import Footer from './components/Footer';  // Footer is already imported
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ShippingPolicy from './components/ShippingPolicy';
// import Profile from './components/Profile';
import Business from './components/Business';
import UserOrders from "./components/UserOrders";
import AdminDashboard from "./components/AdminDashboard";
import OrdersDashboard from  "./components/OrdersDashboard";
import Home from './components/Home';
import ManualForm from './components/ManualForm';


import './App.css';
import logisticsLogo from './assets/image/logisticsLogo.png';  // Add your logo here

function App() {
    // useEffect(() => {
    //     const tawkScript = document.createElement('script');
    //     tawkScript.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
    //     tawkScript.async = true;
    //     tawkScript.charset = 'UTF-8';
    //     tawkScript.setAttribute('crossorigin', '*');
    //     document.body.appendChild(tawkScript);
    //   }, []);
    
    return (
        
        <Router>
            <div>
                {/* Header 1: Website Name and Logo */}
                <header className="header-1">
                    <div className="logo-container">
                        <img src={logisticsLogo} alt="Logistics Logo" className="logo" />
                        <h1 className="website-name">E-COMMERCE LOGISTICS MANAGEMENT SYSTEM</h1>
                    </div>
                </header>

                {/* Header 2: Navigation Bar */}
                <header className="header-2">
                    <nav>
                        <ul className="nav-list">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/business">Business</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/ManualForm">ManualForm</Link></li>
                            {/* <li><Link to="/profile">Profile</Link></li> */}
                            <li><Link to="/tracking">Track Your Order</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li>  <Link to="/UserOrders">Fetch Order</Link></li>
                            <li>
              <Link to="/AdminDashboard">AdminDashboard</Link>
              
            </li>
            <li>
              <Link to="/OrdersDashboard">OrdersDashboard</Link>
              
            </li>
                        </ul>
                    </nav>
                </header>

                {/* Main content */}
                <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/business" element={<Business />} />
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/ManualForm" element={<ManualForm />} />
                    <Route path="/tracking" element={<TrackingPage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/ReturnRefund" element={<ShippingPolicy />} />
                    <Route path="/privacy-security" element={<PrivacySecurity />} />
                    <Route path="/UserOrders" element={<UserOrders />} />
                    <Route path="/AdminDashboard" element={<AdminDashboard />} />
                    <Route path="/OrdersDashboard" element={<OrdersDashboard />} />
                </Routes>

                
                <Footer />
            </div>
        </Router>
        
    );
}

export default App;
