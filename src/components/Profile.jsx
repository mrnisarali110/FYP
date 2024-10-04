import React, { useState } from 'react';
import { Modal, Button, Form, Table, Alert } from 'react-bootstrap'; // Import Bootstrap components

const Profile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cnic: '',
        storeName: '',
        email: '',
        city: '',
    });

    const [profiles, setProfiles] = useState([]); // Array to store multiple profiles
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [showAlert, setShowAlert] = useState({ show: false, message: '' }); // State to show an alert for validation

    // Open/Close Modal
    const handleClose = () => setShowModal(false);
    const handleShow = () => {
        setShowModal(true);
        setShowAlert({ show: false, message: '' }); // Hide alert if it was previously shown
    };

    // Handle form data changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission with validation
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Check if all fields are filled
        if (
            !formData.firstName.trim() ||
            !formData.lastName.trim() ||
            !formData.cnic.trim() ||
            !formData.storeName.trim() ||
            !formData.email.trim() ||
            !formData.city.trim()
        ) {
            setShowAlert({ show: true, message: 'All fields are required!' });
            return;
        }

        // CNIC validation: Check if CNIC contains only numbers
        const cnicRegex = /^\d+$/; // Regex to check if the CNIC contains only digits
        if (!cnicRegex.test(formData.cnic)) {
            setShowAlert({ show: true, message: 'CNIC should only contain numbers!' });
            return;
        }

        setProfiles([...profiles, formData]); // Add new form data to profiles array
        setFormData({ // Reset form after submission
            firstName: '',
            lastName: '',
            cnic: '',
            storeName: '',
            email: '',
            city: '',
        });
        setShowModal(false); // Close the modal after submitting the form
    };

    return (
        <div className="profile-container">
            <Button variant="primary" onClick={handleShow}>Add Profile</Button>

            {/* Profile Form in Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showAlert.show && (
                        <Alert variant="danger" onClose={() => setShowAlert({ show: false, message: '' })} dismissible>
                            {showAlert.message}
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter your first name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter your last name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>CNIC</Form.Label>
                            <Form.Control
                                type="text"
                                name="cnic"
                                value={formData.cnic}
                                onChange={handleInputChange}
                                placeholder="Enter your CNIC"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Store Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="storeName"
                                value={formData.storeName}
                                onChange={handleInputChange}
                                placeholder="Enter your store name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="Enter your city"
                            />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Display Profiles in Table */}
            {profiles.length > 0 && (
                <div className="profile-details mt-4">
                    <h2>Profiles Overview</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>CNIC</th>
                                <th>Store Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles.map((profile, index) => (
                                <tr key={index}>
                                    <td>{profile.firstName}</td>
                                    <td>{profile.lastName}</td>
                                    <td>{profile.cnic}</td>
                                    <td>{profile.storeName}</td>
                                    <td>{profile.email}</td>
                                    <td>{profile.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default Profile;
