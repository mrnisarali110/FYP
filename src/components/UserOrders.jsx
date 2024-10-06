import React, { useState } from 'react';

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch orders
  const fetchOrders = async () => {
    setLoading(true);
    setError(null); // Clear any previous errors

    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    if (!token) {
      setError('You must be logged in to view orders.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/auth/get-orders', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const data = await response.json();
      setOrders(data.orders); // Assuming backend sends back orders as 'orders'
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Your Orders</h1>
      <button onClick={fetchOrders}>Show Orders</button>
      
      {loading && <p>Loading orders...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {orders.length > 0 && (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <strong>Order {index + 1}:</strong> {JSON.stringify(order.orderData)}
            </li>
          ))}
        </ul>
      )}

      {orders.length === 0 && !loading && <p>No orders found</p>}
    </div>
  );
};

export default UserOrders;
