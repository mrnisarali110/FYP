import React, { useState } from 'react';
import axios from 'axios'; // Add Axios for making API requests

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const [loginStatus, setLoginStatus] = useState(''); // Add a new state variable for login status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            // Make API call to login endpoint
            axios.post('http://localhost:3001/auth/login', formData)
                .then(response => {
                    if (response.status === 200) {
                        // If the response status is 200 (OK), treat it as successful login
                        const token = response.data.token; // Assuming the token is returned in response.data.token
                        localStorage.setItem('token', token); // Store token in localStorage
                        console.log('Login successful:', response.data);
                        setLoginStatus('Login Successful!'); // Update login status on success

                        // Optionally redirect or perform other actions
                    } else {
                        // Handle unexpected success responses (though this should not happen)
                        setLoginStatus('Unexpected response from the server.');
                    }
                })
                .catch(error => {
                    if (error.response) {
                        // Backend returned a response with an error code
                        console.error('Login failed:', error.response.data);

                        // Check the error response and display appropriate message
                        if (error.response.status === 404) {
                            setLoginStatus('Login Failed: User not found.');
                        } else if (error.response.status === 401) {
                            setLoginStatus('Login Failed: Incorrect password.');
                        } else if (error.response.status === 400) {
                            setLoginStatus('Login Failed: Invalid email format.');
                        } else {
                            setLoginStatus(`Login Failed: ${error.response.data.message}`);
                        }
                    } else if (error.request) {
                        // No response was received from the backend
                        setLoginStatus('Login Failed: No response from the server. Please try again later.');
                    } else {
                        // Other errors (like client-side issues)
                        setLoginStatus('Login Failed: An error occurred. Please try again.');
                    }
                });
        }
    };

    const validateField = (name, value) => {
        let error = '';
        if (name === 'email') {
            if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                error = 'Invalid email address';
            }
        } else if (name === 'password') {
            if (value.length < 8) {
                error = 'Password must be at least 8 characters';
            }
        }
        setErrors({
            ...errors,
            [name]: error
        });
    };

    const validateForm = () => {
        let isValid = true;
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                setErrors({
                    ...errors,
                    [key]: 'This field is required'
                });
                isValid = false;
            }
        });
        return isValid;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>
                <button type="submit">Login</button>
                {loginStatus && <div style={{ color: loginStatus.includes('Failed') ? 'red' : 'green' }}>{loginStatus}</div>} {/* Adjust color for success/failure */}
            </form>
        </div>
    );
}

export default Login;
