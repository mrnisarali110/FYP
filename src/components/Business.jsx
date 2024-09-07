import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import '../App.css';

// Importing images
import cityImage from '../assets/image/city.png';
import packingImage from '../assets/image/packing.jpg';
import returnImage from '../assets/image/return.png';
import globalImage from '../assets/image/global.jpg'; // New image for logistics info
import warehouseImage from '../assets/image/warehouse.jpg'; // New image for logistics info

const Business = () => {
  return (
    <div>
      <Container className="business-container">
        <Typography variant="h3" className="business-title">
          Our Business and Services
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
            <Paper className="services-paper" elevation={3}>
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
            <Paper className="services-paper" elevation={3}>
              <img src={returnImage} alt="Return Policy" className="business-image" />
              <Typography variant="h5" className="business-subtitle">
                RETURN POLICY
              </Typography>
              <Typography variant="body1" className="business-description">
                Secure delivery in logistics focuses on ensuring the safe and reliable transportation of goods from the sender to the recipient. This involves implementing measures to prevent theft, tampering, or damage during the delivery process. Secure delivery practices include using advanced tracking systems to monitor shipments in real-time, employing secure handling procedures, and verifying recipient identities upon delivery.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* New Section for Additional Logistics Information */}
      <Container className="logistics-info-container">
        <Typography variant="h4" className="logistics-title">
          ELMS Logistics Solutions
        </Typography>
        <Grid container spacing={4} className="logistics-grid">
          <Grid item xs={12} md={6}>
            <Paper className="logistics-paper" elevation={3}>
              <img src={globalImage} alt="Global Logistics" className="logistics-image" />
              <Typography variant="h5" className="logistics-subtitle">
                GLOBAL LOGISTICS
              </Typography>
              <Typography variant="body1" className="logistics-description">
                Our global logistics network allows us to deliver goods worldwide with efficiency and reliability. We partner with international couriers to ensure that your products reach their destination safely and on time. From customs clearance to final mile delivery, we manage every aspect of the global supply chain.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className="logistics-paper" elevation={3}>
              <img src={warehouseImage} alt="Warehouse Management" className="logistics-image" />
              <Typography variant="h5" className="logistics-subtitle">
                WAREHOUSE MANAGEMENT
              </Typography>
              <Typography variant="body1" className="logistics-description">
                Our state-of-the-art warehouse facilities are designed to store your products securely and efficiently. With automated inventory systems and optimized storage solutions, we ensure quick order fulfillment and efficient stock management.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Business;
