import React, { useState } from 'react';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cnic: '',
        storeName: '',
        storeUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // You can add further processing here
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>CNIC No:</label>
                    <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} required />
                </div>
                <div>
                    <label>Store Name:</label>
                    <input type="text" name="storeName" value={formData.storeName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Store URL:</label>
                    <input type="url" name="storeUrl" value={formData.storeUrl} onChange={handleChange} required />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
