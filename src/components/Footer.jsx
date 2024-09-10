import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          {/* Signup for Updates */}
          <div className="col-md-3 text-right">
            <h5>Signup for Updates</h5>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  <i className="bi bi-envelope-fill"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-3 text-left">
            <h5>Follow Us</h5>
            <div className="footer-icons">
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/sabeerah-khurram-ab4855247/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/iqrauniversity.iugc/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@SabeerahKhurram" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Office Location Section */}
          <div className="col-md-3 text-center">
            <h5>Office Location</h5>
            <p>
              123 Business Road,<br />
              City Name, State, ZIP Code<br />
              Country
            </p>
          </div>

          {/* Our Services Section */}
          <div className="col-md-3 text-right">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li>Express service</li>
              <li>Intercity delivery</li>
              <li>Dynamic rate calculation</li>
              <li>Discounted rate</li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          {/* Return & Refund Policy */}
          <div className="col-md-3 text-left">
            <h5>Return & Refund Policy</h5>
            <p>
              <a href="/ReturnsRefunds" className="text-white">Learn about our Return & Refund Policy</a> for details on returning items.
            </p>
          </div>

          {/* Customer Support */}
          <div className="col-md-3 text-center">
            <h5>Customer Support</h5>
            <p>Need help? Contact our support team:</p>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:support@elms.com" className="text-white">support@elms.com</a></li>
              <li>Phone: +92-310-2108779</li>
              <li><a href="/contact-us" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Policies Section */}
          <div className="col-md-3 text-right">
            <h5>Our Policies</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy-security" className="text-white">Privacy and Security</a></li>
              <li><a href="/Faq" className="text-white">Terms & Conditions</a></li>
              <li><a href="/shipping-policy" className="text-white">Shipping Policy</a></li>
              <li><a href="/ReturnsRefunds" className="text-white">Return & Refund Policy</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 text-right">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/ContactUs" className="text-white">Contact Us</a></li>
              <li><a href="/faq" className="text-white">FAQ</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/tracking" className="text-white">Track Your Order</a></li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <p>© 2024 ELMS Company. All rights reserved.</p>
          <div>
            <a href="/faq" className="text-white mx-2">FAQ</a>
            <a href="/privacy-security" className="text-white mx-2">Privacy and Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
