import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          {/* Follow Us Section */}
          <div className="col-md-4 text-left">
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
          <div className="col-md-4 text-center">
            <h5>Office Location</h5>
            <p>
              123 Business Road,<br />
              City Name, State, ZIP Code<br />
              Country
            </p>
          </div>

          {/* Our Services Section */}
          <div className="col-md-4 text-right">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
            <li>Express service </li>
              <li>Intercity delivery</li>
              <li>Dynamic rate calculation</li>
              <li>Discounted rate</li>
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
