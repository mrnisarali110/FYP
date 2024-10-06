import React, { useEffect, useState } from 'react';

const OrdersDashboard = () => {
    const [orders, setOrders] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your actual endpoint
                const data = await response.json();
                setOrders(data); // Make sure this is an array
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <div key={order.id}>{order.description}</div> // Update with your order properties
                ))
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default OrdersDashboard;
