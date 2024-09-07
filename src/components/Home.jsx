import React from 'react';
import { Typography, Card, CardMedia, Grid, Paper } from '@mui/material';
import '../App.css';
import courierImage from '../assets/image/courier.png';
import deliveryImage from '../assets/image/delivery.png';
import bulkImage from '../assets/image/bulk.jpg';
import loginAccessImage from '../assets/image/loginAccess.jpg'; // Add your image for login access
import labelGenerationImage from '../assets/image/labelGeneration.jpg'; // Add your image for label generation

const Home = () => {
  return (
    <div className="home-container">
      <div className="about-background">
        <div className="about-content">
          <Typography variant="h3" className="about-title">
            COMPASSIONATE
          </Typography>
          <Typography variant="body1" className="about-description">
            Welcome to our logistics company! We specialize in providing top-notch logistics solutions to ensure your goods are transported safely and efficiently. With years of experience and a dedicated team, we aim to deliver excellence in every aspect of our service.
          </Typography>

          <div className="about-grid">
            <div className="about-box">
              <Typography variant="h5" className="about-subtitle">
                Our Vision
              </Typography>
              <Typography variant="body2" className="about-text">
                To be the leading provider of innovative logistics solutions, recognized for our commitment to quality, reliability, and customer satisfaction.
              </Typography>
            </div>
            <div className="about-box">
              <Typography variant="h5" className="about-subtitle">
                Experience in Industry
              </Typography>
              <Typography variant="body2" className="about-text">
                To deliver exceptional logistics services by leveraging technology, expertise, and a customer-centric approach, ensuring timely and secure transportation of goods.
              </Typography>
            </div>
          </div>

          <Typography variant="h4" className="about-title">
            Our Aim
          </Typography>
          <div className="about-box">
            <Typography variant="body1" className="about-description">
              In logistics, the aim is to create an efficient and reliable supply chain that minimizes costs and maximizes customer satisfaction. This involves optimizing processes and routes to streamline operations, ensuring timely and accurate delivery of goods, and maintaining high standards of safety and compliance.
            </Typography>
          </div>

          <div className="about-grid">
            <Card className="about-card">
              <CardMedia
                component="img"
                alt="Service 1"
                height="140"
                image={courierImage}
                title="Service 1"
              />
              <Typography variant="body2" className="about-text">
                Commitment with Courier Companies
              </Typography>
            </Card>
            <Card className="about-card">
              <CardMedia
                component="img"
                alt="Service 2"
                height="140"
                image={deliveryImage}
                title="Service 2"
              />
              <Typography variant="body2" className="about-text">
                Real-time Tracking
              </Typography>
            </Card>
            <Card className="about-card">
              <CardMedia
                component="img"
                alt="Service 3"
                height="140"
                image={bulkImage}
                title="Service 3"
              />
              <Typography variant="body2" className="about-text">
                Secure Packaging
              </Typography>
            </Card>
          </div>

          {/* New Section for Website Access and Label Generation */}
          <Typography variant="h4" className="about-title">
            Access Our Website & Parcel Labeling
          </Typography>

          <Grid container spacing={4} className="website-access-grid">
            <Grid item xs={12} md={6}>
              <Paper className="website-access-paper" elevation={3}>
                <Typography variant="h5" className="about-subtitle">
                  How to Access the Website
                </Typography>
                <Typography variant="body1" className="about-description">
                  To access our platform, you will need a specific ID provided by our team. Use this ID to log in and track your shipments, manage orders, and review detailed logistics reports.
                </Typography>
                <CardMedia
                  component="img"
                  alt="Login Access"
                  height="140"
                  image={loginAccessImage}
                  title="Login Access"
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper className="website-access-paper" elevation={3}>
                <Typography variant="h5" className="about-subtitle">
                  Label Generation for Parcels
                </Typography>
                <Typography variant="body1" className="about-description">
                  You can generate labels for your parcels by accessing the label generation feature on your dashboard. Simply enter the parcel details, and download or print the label for quick and secure dispatch.
                </Typography>
                <CardMedia
                  component="img"
                  alt="Label Generation"
                  height="140"
                  image={labelGenerationImage}
                  title="Label Generation"
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
