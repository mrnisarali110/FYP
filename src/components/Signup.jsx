import React, { useState } from 'react';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cnic: '',
        storeName: '',
        storeUrl: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        cnic: '',
        storeName: '',
        storeUrl: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        let error = '';
        switch (fieldName) {
            case 'name':
                if (value.length < 3) {
                    error = 'Name must be at least 3 characters long';
                }
                break;
            case 'email':
                if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                    error = 'Invalid email address';
                }
                break;
            case 'phone':
                if (!/^\d{11}$/.test(value)) {
                    error = 'Invalid phone number';
                }
                break;
            case 'cnic':
                if (!/^\d{13}$/.test(value)) {
                    error = 'Invalid CNIC number';
                }
                break;
            case 'storeName':
                if (value.length < 3) {
                    error = 'Store name must be at least 3 characters long';
                }
                break;
            case 'storeUrl':
                if (!/^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                    error = 'Invalid store URL';
                }
                break;
            case 'password':
                if (value.length < 8) {
                    error = 'Password must be at least 8 characters long';
                }
                break;
            case 'confirmPassword':
                if (value !== formData.password) {
                    error = 'Passwords do not match';
                }
                break;
            default:
                break;
        }
        setErrors({
            ...errors,
            [fieldName]: error
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(errors).some(error => error !== '')) {
            alert('Please fix all errors before submitting');
            return;
        }
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    {errors.phone && <span>{errors.phone}</span>}
                </div>
                <div>
                    <label>CNIC No:</label>
                    <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} required />
                    {errors.cnic && <span>{errors.cnic}</span>}
                </div>
                <div>
                    <label>Store Name:</label>
                    <input type="text" name="storeName" value={formData.storeName} onChange={handleChange} required />
                    {errors.storeName && <span>{errors.storeName}</span>}
                </div>
                <div>
                    <label>Store URL:</label>
                    <input type="url" name="storeUrl" value={formData.storeUrl} onChange={handleChange} required />
                    {errors.storeUrl && <span>{errors.storeUrl}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
