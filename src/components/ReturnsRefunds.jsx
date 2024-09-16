import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReturnsRefunds = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Return & Refund Policy</h1>
      <p className="text-muted mb-4">Last updated: [Insert Date]</p>

      <div className="alert alert-info" role="alert">
        Thank you for choosing [ELMS] for your logistics needs. If you're not completely satisfied with the service or delivery, we're here to assist you.
      </div>

      <h2 className="mt-4 mb-3">Returns</h2>
      <p>
        You have <strong>7 calendar days</strong> from the date of delivery to request a return for any issues related to our delivery services.
      </p>
      <p>
        To be eligible for a return or complaint regarding our services, please ensure that:
        <ul className="list-unstyled">
          <li><i className="bi bi-check-circle text-success"></i> The issue is reported within the 7-day period.</li>
          <li><i className="bi bi-check-circle text-success"></i> You provide a clear description of the issue, including relevant documentation (e.g., delivery receipt, photos of damaged goods).</li>
        </ul>
      </p>
      <p>
        If you need to return an item or request a refund due to issues with delivery, please contact our customer service team to initiate the process. We may require you to fill out a return request form or provide additional details.
      </p>

      <h2 className="mt-4 mb-3">Refunds</h2>
      <p>
        Once we receive and review your return request, we will notify you about the status of your refund. The review process includes:
        <ul className="list-unstyled">
          <li><i className="bi bi-check-circle text-success"></i> Inspection of the reported issue or returned item.</li>
          <li><i className="bi bi-check-circle text-success"></i> Confirmation of eligibility for a refund based on our policies.</li>
        </ul>
      </p>
      <p>
        If your request is approved, we will initiate a refund to the original method of payment. Refunds typically take <strong>5-10 business days</strong> to process, depending on your payment provider’s policies.
      </p>
      <p>
        Please note that shipping fees and service charges may not be refundable.
      </p>

      <h2 className="mt-4 mb-3">Contact Us</h2>
      <p>
        For any questions or to initiate a return request, please contact our customer service team:
      </p>
      <div className="mb-4">
        <p>
          <strong>Email:</strong> <a href="mailto:support@elms.com" className="text-primary">support@elms.com</a><br />
          <strong>Phone:</strong> +92-310-2108779<br />
          <strong>Address:</strong> [Your Office Address Here]
        </p>
      </div>

      <h2 className="mt-4 mb-3">Additional Information</h2>
      <p>
        <strong>Damaged or Incorrect Deliveries:</strong> If you receive a damaged or incorrect delivery, please contact us immediately with details of the issue and relevant documentation.
      </p>
      <p>
        <strong>International Returns:</strong> For international returns, please be aware that additional shipping costs and customs duties may apply. Contact our customer service team for more details on international return procedures.
      </p>
    </div>
  );
};

export default ReturnsRefunds;
