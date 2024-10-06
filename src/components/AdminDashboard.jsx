import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role;

      // Fetch all users
      axios.get('http://localhost:3001/auth/get-all-users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('Users Response:', response.data); // Log response
        if (response.data && Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          console.error('Error fetching users: Expected users to be an array.', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

      // Fetch all orders if user is admin
      if (userRole === 'admin') {
        axios.get('http://localhost:3001/auth/get-all-orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('Orders Response:', response.data); // Log response
          if (response.data && Array.isArray(response.data.orders)) {
            setOrders(response.data.orders);
          } else {
            console.error('Error fetching orders: Expected orders to be an array.', response.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching orders:', error);
        });
      }
    }
  }, []);

  const handleDeleteUser = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
    // Add your delete user logic here
  };

  const handleDeleteOrder = (orderId) => {
    console.log(`Delete order with ID: ${orderId}`);
    // Add your delete order logic here
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Registered Users: {users.length}</h3>
          <button onClick={() => setShowUsers(!showUsers)}>
            {showUsers ? 'Hide Users' : 'Show All Users'}
          </button>
        </div>
        <div className="summary-card">
          <h3>Total Orders: {orders.length}</h3>
          <button onClick={() => setShowOrders(!showOrders)}>
            {showOrders ? 'Hide Orders' : 'Show All Orders'}
          </button>
        </div>
      </div>

      {showUsers && (
        <div className="users-section">
          <h2>Registered Users</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showOrders && (
        <div className="orders-section">
          <h2>Orders</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Order Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.userId}</td>
                  <td>{JSON.stringify(order.orderData)}</td>
                  <td>
                    <button onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
