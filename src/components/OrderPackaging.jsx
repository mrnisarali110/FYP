import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const OrderPackaging = () => {
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Boxes', quantity: 1 },
    { id: 2, name: 'Bubble Wrap', quantity: 1 },
    { id: 3, name: 'Tape', quantity: 1 },
    { id: 4, name: 'Stickers', quantity: 1 }
  ]);
  
  const [showThanks, setShowThanks] = useState(false);

  const handleQuantityChange = (e, id) => {
    const newQuantity = e.target.value;
    setMaterials(materials.map(material => material.id === id ? { ...material, quantity: newQuantity } : material));
  };

  const handleOrderNow = () => {
    setShowThanks(true);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Order Packaging Materials</h2>
      <Form>
        {materials.map(material => (
          <Row key={material.id} className="mb-3">
            <Col md={6}>
              <Form.Label>{material.name}</Form.Label>
            </Col>
            <Col md={4}>
              <Form.Control
                type="number"
                value={material.quantity}
                onChange={(e) => handleQuantityChange(e, material.id)}
                min="1"
              />
            </Col>
          </Row>
        ))}
        <div className="text-center mt-4">
          <Button variant="primary" onClick={handleOrderNow}>
            Order Now
          </Button>
        </div>
      </Form>
      
      {showThanks && (
        <Alert variant="success" className="mt-4 text-center">
          Thanks for ordering!
        </Alert>
      )}
    </Container>
  );
};

export default OrderPackaging;
