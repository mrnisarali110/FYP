import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Signup from './components/Signup';
//import Login from './components/Login';
import FileUpload from './FileUpload';
import Profile from './components/Profile';
import Business from './components/Business';
import Home from './components/Home';
import './App.css';
import logisticsLogo from './assets/image/logisticsLogo.png'; // Add your logo here

function App() {
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
                            <li><Link to="/FileUpload">FileUpload</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/FileUpload" element={<FileUpload />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
