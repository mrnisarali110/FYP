import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManualForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    city: '',
    productDetail: '',
    weight: '',
    itemPieces: '',
    paymentMethod: '',
    cardNumber: '',
    bankName: '',
    totalAmount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Logic to generate the label goes here
  };

  return (
    <div className="container mt-5">
      <h2>Receiver Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Row 1: Name and Phone Number */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input 
              type="tel" 
              className="form-control" 
              id="phoneNumber" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        {/* Row 2: Address and City */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">Address</label>
            <input 
              type="text" 
              className="form-control" 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input 
              type="text" 
              className="form-control" 
              id="city" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        {/* Row 3: Product Detail and Weight */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="productDetail" className="form-label">Product Detail</label>
            <input 
              type="text" 
              className="form-control" 
              id="productDetail" 
              name="productDetail" 
              value={formData.productDetail} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="weight" className="form-label">Weight (kg)</label>
            <input 
              type="number" 
              className="form-control" 
              id="weight" 
              name="weight" 
              value={formData.weight} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        {/* Row 4: Item Pieces */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="itemPieces" className="form-label">Item Pieces</label>
            <input 
              type="number" 
              className="form-control" 
              id="itemPieces" 
              name="itemPieces" 
              value={formData.itemPieces} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        {/* Row 5: Payment Method and Dynamic Fields */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
            <select 
              className="form-select" 
              id="paymentMethod" 
              name="paymentMethod" 
              value={formData.paymentMethod} 
              onChange={handleChange} 
              required 
            >
              <option value="" disabled>Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>
          {formData.paymentMethod === 'Credit Card' || formData.paymentMethod === 'Debit Card' ? (
            <div className="col-md-6">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input 
                type="text" 
                className="form-control" 
                id="cardNumber" 
                name="cardNumber" 
                value={formData.cardNumber} 
                onChange={handleChange} 
                required 
              />
            </div> 
          ) : null}
        </div>

        {/* Row 6: Total Amount */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="totalAmount" className="form-label">Total Amount (RS)</label>
            <input 
              type="number" 
              className="form-control" 
              id="totalAmount" 
              name="totalAmount" 
              value={formData.totalAmount} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        {/* Row 7: Generate Label Button */}
        <button type="submit" className="btn btn-primary">Generate Label</button>
      </form>
    </div>
  );
};

export default ManualForm;
