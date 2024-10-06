import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import '../App.css'; // Make sure to include your CSS here

// Importing images
import cityImage from '../assets/image/city.png';
import shippingProcedureImage from '../assets/image/shippingProcedure.jpg';
import paymentImage from '../assets/image/payment.png';
import customerImage from '../assets/image/customer.png';
import globalImage from '../assets/image/global.jpg'; // New image for logistics info
import warehouseImage from '../assets/image/warehouse.jpg'; // New image for logistics info
import workWithUsImage from '../assets/image/workWithUs.jpg'; // Add your "Work with Us" banner image

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
              Intercity delivery involves transporting goods between different cities and is crucial for businesses with multi-location operations.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="services-paper" elevation={3}>
            <img src={paymentImage} alt="Fast Payment Processing" className="business-image" />
            <Typography variant="h5" className="business-subtitle">
              FAST PAYMENT PROCESSING
            </Typography>
            <Typography variant="body1" className="business-description">
              Fast payment processing in logistics is essential for streamlining financial transactions between clients, suppliers, and service providers. By enabling real-time or near-instantaneous payment settlements.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="services-paper" elevation={3}>
            <img src={customerImage} alt="Customer Support" className="business-image" />
            <Typography variant="h5" className="business-subtitle">
              CUSTOMER SUPPORT
            </Typography>
            <Typography variant="body1" className="business-description">
              Secure delivery focuses on ensuring safe and reliable transportation of goods from sender to recipient.
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
              INTEGRATION WITH E-COMMERCE PLATFORM
            </Typography>
            <Typography variant="body1" className="logistics-description">
              Our global logistics network allows us to deliver goods worldwide with efficiency and reliability.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="logistics-paper" elevation={3}>
            <img src={warehouseImage} alt="Warehouse Management" className="logistics-image" />
            <Typography variant="h5" className="logistics-subtitle">
              BULK ORDERING
            </Typography>
            <Typography variant="body1" className="logistics-description">
              Our warehouse facilities store your products securely and efficiently with optimized storage solutions.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
      {/* Work with Us Banner Section */}
<div className="work-with-us-banner">
  <Container>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" className="work-with-us-title">
          Work With Us
        </Typography>
        <Typography variant="body1" className="work-with-us-description">
          Join us to experience the best logistics services in the industry...
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={workWithUsImage} alt="Work with Us" className="work-with-us-image" />
      </Grid>
    </Grid>
  </Container>
</div>

{/* Shipping Procedure Section */}
<Container className="shipping-procedure-container">
  <Typography variant="h4" className="shipping-procedure-title">
    Shipping Procedure
  </Typography>
  <Grid container spacing={4} className="shipping-procedure-grid">
    <Grid item xs={12} md={6}>
      <Typography variant="body1" className="shipping-procedure-description">
      Our shipping procedure is simple and efficient, designed to ensure a seamless experience for both businesses and customers. Start by logging into your account or creating one if you're new to the platform. Once logged in, your store can quickly submit order details, including delivery information and product specifics. Our system will then generate a shipping label with all necessary details, such as the courier company selected to handle the delivery. This label ensures your package is processed and delivered securely. The assigned courier will handle the shipment, and you can track the package in real-time as it moves through the logistics chain. This streamlined process makes managing deliveries hassle-free, ensuring timely and reliable shipping for all your orders.      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <img src={shippingProcedureImage} alt="Shipping Procedure" className="shipping-procedure-image" />
    </Grid>
  </Grid>
</Container>


      
      </div>
  );
};

export default Business;
