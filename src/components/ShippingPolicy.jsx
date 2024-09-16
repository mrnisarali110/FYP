import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShippingPolicy = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Shipping Policy</h1>
      <p className="text-muted mb-4">Last updated: [Insert Date]</p>

      <div className="alert alert-info" role="alert">
        Welcome to [ELMS]! We are committed to providing efficient and reliable shipping solutions for all your logistics needs. Below is our shipping policy to help you understand our process.
      </div>

      <h2 className="mt-4 mb-3">Shipping Methods</h2>
      <p>
        We offer a variety of shipping methods to cater to different needs. Our shipping options include:
        <ul className="list-unstyled">
          <li><i className="bi bi-truck text-success"></i> <strong>Standard Shipping:</strong> Delivery within 5-7 business days.</li>
          <li><i className="bi bi-truck text-primary"></i> <strong>Expedited Shipping:</strong> Delivery within 2-3 business days.</li>
          <li><i className="bi bi-truck text-danger"></i> <strong>Same-Day Delivery:</strong> Available for select locations and orders placed before 12 PM.</li>
        </ul>
      </p>

      <h2 className="mt-4 mb-3">Shipping Rates</h2>
      <p>
        Shipping rates depend on the shipping method selected, the weight of the package, and the delivery destination. You can view estimated shipping costs during checkout. For detailed information:
        <ul className="list-unstyled">
          <li><i className="bi bi-info-circle text-info"></i> <strong>Domestic Shipping:</strong> Rates start at [insert rate] for standard shipping.</li>
          <li><i className="bi bi-info-circle text-info"></i> <strong>International Shipping:</strong> Rates vary based on destination. Additional customs duties and taxes may apply.</li>
        </ul>
      </p>

      <h2 className="mt-4 mb-3">Order Processing</h2>
      <p>
        Orders are processed within 1-2 business days. You will receive a confirmation email once your order has been processed, along with tracking information.
      </p>
      <p>
        <strong>Order Cutoff Time:</strong> Orders placed after 3 PM will be processed on the next business day.
      </p>

      <h2 className="mt-4 mb-3">Shipping Restrictions</h2>
      <p>
        Certain items may be subject to shipping restrictions based on size, weight, or destination. Please review the following:
        <ul className="list-unstyled">
          <li><i className="bi bi-exclamation-triangle text-warning"></i> <strong>Restricted Items:</strong> Items such as hazardous materials or oversized packages may have specific shipping restrictions.</li>
          <li><i className="bi bi-exclamation-triangle text-warning"></i> <strong>Delivery Areas:</strong> Some remote or international locations may have extended delivery times or may not be eligible for certain shipping methods.</li>
        </ul>
      </p>

      <h2 className="mt-4 mb-3">Delayed or Lost Shipments</h2>
      <p>
        If your shipment is delayed or lost, please contact our customer service team as soon as possible. We will assist you in tracking the package and resolving the issue.
      </p>
      <p>
        <strong>Contact Information:</strong> 
        <br />
        Email: <a href="mailto:support@elms.com" className="text-primary">support@elms.com</a>
        <br />
        Phone: +92-310-2108779
      </p>

      <h2 className="mt-4 mb-3">Changes to Shipping Policy</h2>
      <p>
        We may update our shipping policy from time to time. Please review this page periodically for any changes. Your continued use of our services constitutes your acceptance of any modifications.
      </p>
    </div>
  );
};

export default ShippingPolicy;
