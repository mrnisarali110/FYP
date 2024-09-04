import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <h4>Q: How do I track my order?</h4>
        <p>A: You can track your order using the "Track Your Order" page. Simply enter your tracking ID, and you'll see the status of your delivery.</p>
      </div>
      <div className="faq-item">
        <h4>Q: What are your delivery options?</h4>
        <p>A: We offer various delivery options, including standard, express, and same-day delivery.</p>
      </div>
      <div className="faq-item">
        <h4>Q: How can I contact customer service?</h4>
        <p>A: You can contact us via the "Contact Us" page or email us at support@elms.com.</p>
      </div>
      {/* Add more FAQs as needed */}
    </div>
  );
};

export default Faq;
