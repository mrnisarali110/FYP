import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Card } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaTruck, FaCheckCircle, FaBox, FaClock } from 'react-icons/fa';
import './TrackingPage.css';

const TrackingPage = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTrackOrder = async () => {
        if (trackingNumber.trim() === '') {
            setErrorMessage('Please enter a tracking number.');
            setOrderDetails(null);
            return;
        }

        setErrorMessage('');
        setLoading(true);

        try {
            const response = await simulateApiCall(trackingNumber);
            setOrderDetails(response);
            console.log('Order Details:', response); // Debugging line
        } catch (error) {
            setErrorMessage('Failed to retrieve order details.');
            setOrderDetails(null);
        } finally {
            setLoading(false);
        }
    };

    const simulateApiCall = (trackingNumber) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let dummyOrderDetails;

                switch (trackingNumber) {
                    case '12345':
                        dummyOrderDetails = {
                            status: 'Delivered',
                            description: 'Your order has been delivered.',
                            estimatedDelivery: 'Delivered on August 30, 2024',
                            location: [33.6844, 73.0479], // Islamabad
                            timeline: [
                                { event: 'Order Placed', timestamp: 'August 25, 2024', icon: <FaBox /> },
                                { event: 'Dispatched', timestamp: 'August 27, 2024', icon: <FaTruck /> },
                                { event: 'In Transit', timestamp: 'August 29, 2024', icon: <FaClock /> },
                                { event: 'Delivered', timestamp: 'August 30, 2024', icon: <FaCheckCircle /> }
                            ]
                        };
                        break;
                    case '67890':
                        dummyOrderDetails = {
                            status: 'In Transit',
                            description: 'Your order is currently being shipped.',
                            estimatedDelivery: '3-5 business days',
                            location: [33.6844, 73.0479], // Islamabad
                            timeline: [
                                { event: 'Order Placed', timestamp: 'August 26, 2024', icon: <FaBox /> },
                                { event: 'Dispatched', timestamp: 'August 28, 2024', icon: <FaTruck /> },
                                { event: 'In Transit', timestamp: 'August 30, 2024', icon: <FaClock /> }
                            ]
                        };
                        break;
                    case '11111':
                        dummyOrderDetails = {
                            status: 'Pending',
                            description: 'Your order is being processed.',
                            estimatedDelivery: '7-10 business days',
                            location: [33.6844, 73.0479], // Islamabad
                            timeline: [
                                { event: 'Order Placed', timestamp: 'August 27, 2024', icon: <FaBox /> }
                            ]
                        };
                        break;
                    default:
                        dummyOrderDetails = {
                            status: 'Not Found',
                            description: 'Tracking number not recognized. Please check your tracking number.',
                            estimatedDelivery: 'N/A',
                            location: [33.6844, 73.0479], // Islamabad
                            timeline: []
                        };
                        break;
                }

                resolve(dummyOrderDetails);
            }, 1000); // Simulate network delay
        });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="text-center mb-4">Track Your Order</h1>
                    <div className="d-flex justify-content-center mb-4">
                        <input
                            type="text"
                            className="form-control mr-2"
                            placeholder="Enter your tracking number"
                            value={trackingNumber}
                            onChange={(e) => setTrackingNumber(e.target.value)}
                        />
                        <Button onClick={handleTrackOrder} variant="primary">
                            Track
                        </Button>
                    </div>
                    {loading && (
                        <Alert variant="info">Loading...</Alert>
                    )}
                    {errorMessage && (
                        <Alert variant="danger">{errorMessage}</Alert>
                    )}
                    {orderDetails && (
                        <Card>
                            <Card.Body>
                                <Card.Title>Status: {orderDetails.status}</Card.Title>
                                <Card.Text>{orderDetails.description}</Card.Text>
                                <Card.Text><strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}</Card.Text>
                                <Card.Text><strong>Current Location:</strong></Card.Text>
                                <div style={{ height: '300px', width: '100%' }}>
                                    <MapContainer center={orderDetails.location} zoom={13} style={{ height: '100%', width: '100%' }}>
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        />
                                        <Marker position={orderDetails.location}>
                                            <Popup>
                                                Parcel is at this location.
                                            </Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>
                                <h5 className="mt-4">Timeline</h5>
                                <div className="timeline">
                                    {orderDetails.timeline.map((event, index) => (
                                        <div key={index} className="timeline-item">
                                            <div className="timeline-icon">{event.icon}</div>
                                            <div className="timeline-content">
                                                <div className="timeline-date">{event.timestamp}</div>
                                                <div>{event.event}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default TrackingPage;
