import React, { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

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
            console.log('Login data submitted:', formData);
            // You can add further processing here
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
            <h2></h2>
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
            </form>
        </div>
    );
}

export default Login;