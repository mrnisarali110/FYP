import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import FileUpload from './FileUpload';
import Contact from './components/Contact';
import './App.css'
import Business from './components/Business';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div>
                <h1>E-commerce Logistic Management System</h1>
                <h3>ELMS</h3>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/FileUpload">FileUpload</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>

                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<div>Welcome to the E-commerce Logistic Management System.

                        The E-commerce Logistics Management System (ELMS) is a comprehensive platform designed to streamline and optimize logistics for e-commerce businesses. By integrating multiple courier services, automating order processing, and offering cost-effective delivery solutions like intercity bike delivery, ELMS aims to reduce shipping costs, improve delivery speed, and enhance overall customer satisfaction. Additionally, ELMS provides high-quality packaging materials at discounted rates, ensuring businesses can manage their logistics efficiently and economically.</div>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/FileUpload" element={<FileUpload />} />
                </Routes>
            </div>
        </Router>


    )
}
export default App;