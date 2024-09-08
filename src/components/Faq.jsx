import React from 'react';
import './Faq.css';

const FAQs = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>

      <h4>Q: What should I do if my order is delayed?</h4>
      <p>
        A: If your order is delayed, please check the "Track Your Order" page for the latest updates. If you still have concerns, contact our customer service team at <a href="mailto:support@elms.com">support@elms.com</a> or through the "Contact Us" page.
      </p>

      <h4>Q: Can I change my delivery address after placing an order?</h4>
      <p>
        A: Address changes can be made within a certain timeframe after placing your order. Please contact our customer service team immediately to request an address change. Note that changes may not be possible if the order is already in transit.
      </p>

      <h4>Q: What if I receive a damaged or incorrect item?</h4>
      <p>
        A: If you receive a damaged or incorrect item, please report it through our "Returns & Exchanges" page or contact customer service at <a href="mailto:support@elms.com">support@elms.com</a>. We will assist you with the return or replacement process.
      </p>

      <h4>Q: Do you offer international shipping?</h4>
      <p>
        A: Yes, we offer international shipping to a variety of countries. Please check our "Shipping Information" page for details on international shipping options and rates.
      </p>

      <h4>Q: How can I return an item?</h4>
      <p>
        A: To return an item, visit our "Returns & Exchanges" page for instructions and return labels. Ensure the item meets our return policy criteria for eligibility.
      </p>

      <h4>Q: How can I update my payment information?</h4>
      <p>
        A: You can update your payment information by logging into your account and going to the "Payment Methods" section. For assistance, contact our customer service team.
      </p>

      <h4>Q: What are the shipping costs?</h4>
      <p>
        A: Shipping costs vary based on the delivery option selected, order weight, and destination. You can view estimated shipping costs during checkout.
      </p>

      <h4>Q: Can I schedule a specific delivery time?</h4>
      <p>
        A: Scheduling a specific delivery time is not always available but can be arranged in some cases. Please contact customer service to inquire about this option.
      </p>

      <h4>Q: How do I know if my order was successfully placed?</h4>
      <p>
        A: You will receive an order confirmation email with your order details once your purchase is successfully placed. Check your inbox and spam folder for this confirmation.
      </p>

      <h4>Q: What should I do if I forget my tracking ID?</h4>
      <p>
        A: If you forget your tracking ID, you can find it in your order confirmation email or log into your account to view your order history and tracking information.
      </p>

      <h4>Q: Are there any restrictions on the items that can be shipped?</h4>
      <p>
        A: Yes, some items may have shipping restrictions based on size, weight, or destination. Check our "Shipping Policy" for details on restricted items.
      </p>
    </div>
  );
};

export default FAQs;
