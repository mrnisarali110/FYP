// src/components/Services.jsx
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import '../App.css';

// Importing images
import cityImage from '../assets/image/city.png';
import packingImage from '../assets/image/packing.jpg';
import returnImage from '../assets/image/return.png';

const Business = () => {
  return (
    <Container className="business-container">
      <Typography variant="h3" className="business-title">
        Our Business
      </Typography>
      <Grid container spacing={4} className="business-grid">
        <Grid item xs={12} md={4}>
          <Paper className="services-paper" elevation={3}>
            <img src={cityImage} alt="Intercity Delivery" className="business-image" />
            <Typography variant="h5" className="business-subtitle">
              INTERCITY DELIVERY
            </Typography>
            <Typography variant="body1" className="business-description">
              Intercity delivery in logistics involves transporting goods between different cities and is crucial for businesses with multi-location operations. It utilizes various transportation modes such as road, rail, air, and sea, each suited to different needs based on speed, cost, and volume. Effective intercity delivery requires meticulous logistics planning, including route optimization and scheduling, to ensure timely and cost-efficient transport. Technology plays a vital role, with GPS tracking providing real-time updates.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="business-paper" elevation={3}>
            <img src={packingImage} alt="Secure Packaging" className="business-image" />
            <Typography variant="h5" className="business-subtitle">
              SECURE PACKAGING
            </Typography>
            <Typography variant="body1" className="business-description">
              Secure packaging in logistics is essential for protecting goods during transit and handling to prevent damage, theft, and contamination. It involves selecting appropriate materials and methods to ensure that products remain intact and secure from the point of origin to their final destination. This includes using durable boxes, padded cushioning, and tamper-evident seals to safeguard against physical impacts and environmental factors. Proper labeling and documentation are also critical for compliance and tracking.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="business-paper" elevation={3}>
            <img src={returnImage} alt="Return Policy" className="business-image" />
            <Typography variant="h5" className="business-subtitle">
              RETURN POLICY
            </Typography>
            <Typography variant="body1" className="business-description">
              Secure delivery in logistics focuses on ensuring the safe and reliable transportation of goods from the sender to the recipient. This involves implementing measures to prevent theft, tampering, or damage during the delivery process. Secure delivery practices include using advanced tracking systems to monitor shipments in real-time, employing secure handling procedures, and verifying recipient identities upon delivery. By leveraging technologies such as GPS tracking and electronic proof of delivery.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Business;