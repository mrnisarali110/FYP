import React from 'react';
import './AboutUs.css'; // Ensure this path is correct

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-description">
                <h1>About Us</h1>
                <p>
                    Welcome to the E-commerce Logistic Management System (ELMS). Our mission is to streamline and optimize logistics for e-commerce businesses.
                </p>
                <p>
                    At ELMS, we integrate multiple courier services, automate order processing, and offer cost-effective delivery solutions, including intercity bike delivery. Our goal is to reduce shipping costs, improve delivery speed, and enhance overall customer satisfaction.
                </p>
                <p>
                    We are also committed to providing high-quality packaging materials at discounted rates, ensuring that businesses can manage their logistics efficiently and economically.
                </p>
                <p>
                    Our team is dedicated to innovation and customer service, continually improving our platform to meet the needs of the evolving e-commerce landscape.
                </p>
                <p>
                    Thank you for choosing ELMS to be a part of your business success.
                </p>
            </div>
            <div className="about-us-image">
                <img src="/path/to/your/image.jpg" alt="About Us" /> {/* Replace with your image path */}
            </div>
        </div>
    );
};

export default AboutUs;
