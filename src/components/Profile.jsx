import React, { useState } from 'react';
import '../App.css';
import { Modal, Button, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const defaultProfilePicture = 'path_to_default_image.jpg'; // Replace with actual default image path

const Profile = () => {
    const [show, setShow] = useState(false); // Modal state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cnic: '',
        storeName: '',
        email: '',
        city: '',
        profilePicture: ''
    });

    // Open/Close Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageUpload = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: URL.createObjectURL(files[0])
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submission logic
        handleClose(); // Close modal after submission
    };

    return (
        <div className="profile-container">
            <h2 className="profile-title">Your Profile</h2>
            <div className="profile-overview">
                <h3>{formData.firstName} {formData.lastName}</h3>
                <p>{formData.email}</p>
                
               
                <Button variant="primary" onClick={handleShow}>Edit Profile</Button>
            </div>

            {/* Profile Edit Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="profile-form">
                        <Row>
                            <Col md={6}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your first name"
                                        className="floating-input"
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your last name"
                                        className="floating-input"
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <div className="form-group">
                                    <label>CNIC</label>
                                    <input
                                        type="text"
                                        name="cnic"
                                        value={formData.cnic}
                                        onChange={handleInputChange}
                                        placeholder="Enter your CNIC"
                                        className="floating-input"
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group">
                                    <label>Store Name</label>
                                    <input
                                        type="text"
                                        name="storeName"
                                        value={formData.storeName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your store name"
                                        className="floating-input"
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="floating-input"
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="Enter your city"
                                        className="floating-input"
                                    />
                                </div>
                            </Col>
                        </Row>

                        {/* Profile Picture Upload */}
                        <div className="form-group">
                            <label>Profile Picture</label>
                            <input
                                type="file"
                                name="profilePicture"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="floating-input"
                            />
                            {formData.profilePicture && (
                                <img
                                    src={formData.profilePicture}
                                    alt="Profile"
                                    className="image-preview"
                                />
                            )}
                        </div>

                        <button type="submit" className="btn-submit">Save Changes</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Profile;
