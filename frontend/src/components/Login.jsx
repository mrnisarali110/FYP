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
                    console.log('Login successful:', response.data);
                    setLoginStatus('Login Successful!'); // Update login status on success
                })
                .catch(error => {
                    console.error('Login failed:', error.response.data);
                    setLoginStatus('Login Failed. Please check your details and try again.'); // Update login status on failure
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
            <div></div>
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
                {loginStatus && <div style={{ color: 'green' }}>{loginStatus}</div>} 
            </form>
        </div>
    );
}

export default Login;