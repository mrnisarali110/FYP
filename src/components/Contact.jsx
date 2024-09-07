import React from 'react';
import { Container, Typography, Grid, Paper, Link, IconButton } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import '../App.css'; // Ensure correct path

const Contact = () => {
  return (
    <Container className="contact-container">
      <Typography variant="h3" className="contact-title">
        Contact Us
      </Typography>
      <Paper elevation={3} className="contact-paper">
        <Grid container spacing={4} className="contact-grid">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="contact-subtitle">
              Our Address
            </Typography>
            <Typography variant="body1" className="contact-description">
              <LocationOn className="contact-icon" />
              1234 Logistics Avenue, Suite 567, Transport City, PK 78901, PAKISTAN
            </Typography>
            <Typography variant="h5" className="contact-subtitle">
              Phone & Email
            </Typography>
            <Typography variant="body1" className="contact-description">
              <Phone className="contact-icon" />
              <Link href="tel:+1234567890" className="contact-link">+92 (234) 567-890</Link>
            </Typography>
            <Typography variant="body1" className="contact-description">
              <Email className="contact-icon" />
              <Link href="mailto:info@logistics.com" className="contact-link">info@logistics.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="contact-subtitle">
              Follow Us
            </Typography>
            <div className="social-icons">
              <IconButton component="a" href="https://www.facebook.com" target="_blank">
                <Facebook className="social-icon" />
              </IconButton>
              <IconButton component="a" href="https://www.twitter.com" target="_blank">
                <Twitter className="social-icon" />
              </IconButton>
              <IconButton component="a" href="https://www.linkedin.com" target="_blank">
                <LinkedIn className="social-icon" />
              </IconButton>
              <IconButton component="a" href="https://www.instagram.com" target="_blank">
                <Instagram className="social-icon" />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Contact;
