import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import courierImage from '../assets/image/courier.png';
import deliveryImage from '../assets/image/delivery.png';
import bulkImage from '../assets/image/bulk.jpg';
import loginAccessImage from '../assets/image/loginAccess.jpg';
import labelGenerationImage from '../assets/image/labelGeneration.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="about-background bg-light-blue py-5"> {/* Lighter background for text visibility */}
        <Container>
          <div className="about-content text-center">
            <h3 className="about-title mb-4 text-dark">COMPASSIONATE</h3> {/* Dark text on light background */}
            <p className="about-description lead mb-5 text-dark">
              Welcome to our logistics company! We specialize in providing top-notch logistics solutions to ensure your goods are transported safely and efficiently. With years of experience and a dedicated team, we aim to deliver excellence in every aspect of our service.
            </p>

            <Row className="about-grid">
              <Col md={6} className="mb-4">
                <h5 className="about-subtitle text-primary">Our Vision</h5>
                <p className="about-text text-dark">
                  To be the leading provider of innovative logistics solutions, recognized for our commitment to quality, reliability, and customer satisfaction.
                </p>
              </Col>
              <Col md={6} className="mb-4">
                <h5 className="about-subtitle text-primary">Experience in Industry</h5>
                <p className="about-text text-dark">
                  To deliver exceptional logistics services by leveraging technology, expertise, and a customer-centric approach, ensuring timely and secure transportation of goods.
                </p>
              </Col>
            </Row>

            <h4 className="about-title mb-4 text-dark">Our Aim</h4>
            <p className="about-description mb-5 text-dark">
              In logistics, the aim is to create an efficient and reliable supply chain that minimizes costs and maximizes customer satisfaction.
            </p>

            <Row className="about-grid text-dark mb-5">
              <Col md={4} className="mb-4">
                <Card className="shadow-sm h-100 border-primary">
                  <Card.Img variant="top" src={courierImage} alt="Service 1" />
                  <Card.Body>
                    <Card.Text className="text-dark">Commitment with Courier Companies</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="shadow-sm h-100 border-primary">
                  <Card.Img variant="top" src={deliveryImage} alt="Service 2" />
                  <Card.Body>
                    <Card.Text className="text-dark">Real-time Tracking</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="shadow-sm h-100 border-primary">
                  <Card.Img variant="top" src={bulkImage} alt="Service 3" />
                  <Card.Body>
                    <Card.Text className="text-dark">Bulk Ordering</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <h4 className="about-title mb-4 text-dark">Access Our Website & Parcel Labeling</h4>

            <Row className="website-access-grid">
              <Col md={6} className="mb-4">
                <Card className="bg-white shadow-sm h-100 border-light">
                  <Card.Body>
                    <h5 className="about-subtitle text-primary">How to Access the Website</h5>
                    <p className="about-description text-dark">
                      To access our platform, you will need a specific ID provided by our team. Use this ID to log in and track your shipments, manage orders, and review detailed logistics reports.
                    </p>
                  </Card.Body>
                  {/* Use img tag and className for size control */}
                  <img src={loginAccessImage} alt="Login Access" className="medium-image" />
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="bg-white shadow-sm h-100 border-light">
                  <Card.Body>
                    <h5 className="about-subtitle text-primary">Label Generation for Parcels</h5>
                    <p className="about-description text-dark">
                      You can generate labels for your parcels by accessing the label generation feature on your dashboard. Simply enter the parcel details, and download or print the label for quick and secure dispatch.
                    </p>
                  </Card.Body>
                  {/* Use img tag and className for size control */}
                  <img src={labelGenerationImage} alt="Label Generation" className="medium-image" />
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
