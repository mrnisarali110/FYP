import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure icons are available
import './AboutUs.css'; // Custom CSS for additional styles

const AboutUs = () => {
    return (
        <div className="container-fluid">
            {/* Hero Section */}
            <section className="hero-section text-center text-white">
    <img src="\src\assets\logo.PNG" alt="ELMS Team" className="img-fluid" />
    <div className="hero-text position-absolute top-50 start-50 translate-middle bg-dark p-5 rounded shadow-lg">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead">Empowering E-commerce Logistics with Innovation and Excellence</p>
    </div>
</section>

            
            {/* Content Section */}
            <section className="row my-5">
                <div className="col-md-6">
                    <h2 className="fw-bold mb-4">Our Mission</h2>
                    <p className="text-muted">
                        At E-commerce Logistic Management System (ELMS), our mission is to revolutionize logistics for e-commerce businesses through seamless integration, automation, and cost-effective solutions.
                    </p>
                    <h2 className="fw-bold mb-4">Our Story</h2>
                    <p className="text-muted">
                        Established in [Year], ELMS was founded with the goal of streamlining logistics for online retailers. We are committed to continuous improvement and innovation to meet the evolving needs of the e-commerce sector.
                    </p>
                    <h2 className="fw-bold mb-4">What We Do</h2>
                    <p className="text-muted">
                        ELMS offers a comprehensive suite of tools designed to simplify the complexities of e-commerce logistics. Our platform integrates multiple courier services, automates order processing, and provides real-time tracking, ensuring a seamless experience from order placement to delivery.
                    </p>
                    <h2 className="fw-bold mb-4">Intercity Bike Delivery</h2>
                    <p className="text-muted">
                        Our intercity bike delivery service is designed to offer fast and efficient delivery for your e-commerce shipments. Ideal for urgent deliveries and reducing last-mile logistics costs, our bike delivery service ensures timely and reliable transportation across cities.
                    </p>
                    <div className="text-center my-4">
                        <img src="/src/assets/bike.jpg" alt="Intercity Bike Delivery" className="img-fluid rounded shadow-lg" />
                    </div>
                    <h2 className="fw-bold mb-4">Why Choose Us?</h2>
                    <ul className="list-unstyled text-muted">
                        <li><i className="bi bi-check-circle me-2"></i> Efficient Logistics Integration</li>
                        <li><i className="bi bi-check-circle me-2"></i> Automated Order Processing</li>
                        <li><i className="bi bi-check-circle me-2"></i> Cost-Effective Delivery Solutions</li>
                        <li><i className="bi bi-check-circle me-2"></i> High-Quality Packaging Materials</li>
                        <li><i className="bi bi-check-circle me-2"></i> Real-Time Tracking and Updates</li>
                        <li><i className="bi bi-check-circle me-2"></i> Intercity Bike Delivery</li>
                    </ul>
                    <h2 className="fw-bold mb-4">Meet the Team</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card text-center shadow border-light">
                                <img src="/src/assets/sir.jpg" alt="Sharaf Hussain" className="card-img-top rounded-circle" />
                                <div className="card-body">
                                    <h5 className="card-title">Sharaf Hussain</h5>
                                    <p className="card-text">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card text-center shadow border-light">
                                <img src="/src/assets/head.jpg" alt="Nisar Ali" className="card-img-top rounded-circle" />
                                <div className="card-body">
                                    <h5 className="card-title">Nisar Ali</h5>
                                    <p className="card-text">CTO</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card text-center shadow border-light">
                                <img src="/src/assets/SABS.jpg" alt="Sabeerah khurram" className="card-img-top rounded-circle" />
                                <div className="card-body">
                                    <h5 className="card-title">Sabeerah Khurram</h5>
                                    <p className="card-text">SMM</p>
                                </div>
                            </div>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    <img src="/src/assets/courier.jpg" alt="Our Workspace" className="img-fluid rounded shadow-lg" />
                    <div className="overlay-text position-absolute top-50 start-50 translate-middle text-center text-white">
                        <h3 className="fw-bold">Transforming E-commerce Logistics</h3>
                        <p className="lead">Innovative Solutions for Your Delivery Needs</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
