import React, { useState } from 'react';

const TrackingPage = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleTrackOrder = () => {
        if (trackingNumber.trim() === '') {
            setErrorMessage('Please enter a tracking number.');
            setOrderDetails(null);
            return;
        }

        setErrorMessage('');

        let dummyOrderDetails;

        // Simulate different responses based on the tracking number
        switch (trackingNumber) {
            case '12345':
                dummyOrderDetails = {
                    status: 'Delivered',
                    description: 'Your order has been delivered.',
                    estimatedDelivery: 'Delivered on August 30, 2024'
                };
                break;
            case '67890':
                dummyOrderDetails = {
                    status: 'In Transit',
                    description: 'Your order is currently being shipped.',
                    estimatedDelivery: '3-5 business days'
                };
                break;
            case '11111':
                dummyOrderDetails = {
                    status: 'Pending',
                    description: 'Your order is being processed.',
                    estimatedDelivery: '7-10 business days'
                };
                break;
            default:
                dummyOrderDetails = {
                    status: 'Not Found',
                    description: 'Tracking number not recognized. Please check your tracking number.',
                    estimatedDelivery: 'N/A'
                };
                break;
        }

        setOrderDetails(dummyOrderDetails);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Track Your Order</h1>
            <input
                type="text"
                placeholder="Enter your tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                style={{ padding: '10px', width: '300px', fontSize: '16px' }}
            />
            <button onClick={handleTrackOrder} style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}>
                Track
            </button>
            {errorMessage && (
                <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</p>
            )}
            {orderDetails && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Status: {orderDetails.status}</h2>
                    <p>{orderDetails.description}</p>
                    <p>Estimated Delivery: {orderDetails.estimatedDelivery}</p>
                </div>
            )}
        </div>
    );
};

export default TrackingPage;
