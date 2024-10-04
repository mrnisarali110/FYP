import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FileUpload from "./components/FileUpload";
import UserOrders from "./components/UserOrders";
import AdminDashboard from "./components/AdminDashboard";
import OrdersDashboard from  "./components/OrdersDashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>E-commerce Logistic Management System</h1>
        <h3>ELMS</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/FileUpload">FileUpload</Link>
            </li>
            <li>
              <Link to="/UserOrders">Fetch Order</Link>
            </li>
            <li>
              <Link to="/AdminDashboard">AdminDashboard</Link>
              
            </li>
            <li>
              <Link to="/OrdersDashboard">OrdersDashboard</Link>
              
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                Welcome to the E-commerce Logistic Management System.
              </div>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/FileUpload" element={<FileUpload />} />
          <Route path="/UserOrders" element={<UserOrders />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/OrdersDashboard" element={<OrdersDashboard />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;