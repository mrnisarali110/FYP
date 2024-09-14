import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FileUpload from "./components/FileUpload";
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
        </Routes>
      </div>
    </Router>
  );
}
export default App;
