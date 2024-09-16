import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Faq.css'; // Custom CSS for professional styling

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What should I do if my order is delayed?',
      answer:
        'If your order is delayed, please check the "Track Your Order" page for the latest updates. If you still have concerns, contact our customer service team at support@elms.com or through the "Contact Us" page.',
    },
    {
      question: 'Can I change my delivery address after placing an order?',
      answer:
        'Address changes can be made within a certain timeframe after placing your order. Please contact our customer service team immediately to request an address change. Note that changes may not be possible if the order is already in transit.',
    },
    {
      question: 'What if I receive a damaged or incorrect item?',
      answer:
        'If you receive a damaged or incorrect item, please report it through our "Returns & Exchanges" page or contact customer service at support@elms.com. We will assist you with the return or replacement process.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping to a variety of countries. Please check our "Shipping Information" page for details on international shipping options and rates.',
    },
    {
      question: 'How can I return an item?',
      answer:
        'To return an item, visit our "Returns & Exchanges" page for instructions and return labels. Ensure the item meets our return policy criteria for eligibility.',
    },
    {
      question: 'How can I update my payment information?',
      answer:
        'You can update your payment information by logging into your account and going to the "Payment Methods" section. For assistance, contact our customer service team.',
    },
    {
      question: 'What are the shipping costs?',
      answer:
        'Shipping costs vary based on the delivery option selected, order weight, and destination. You can view estimated shipping costs during checkout.',
    },
    {
      question: 'Can I schedule a specific delivery time?',
      answer:
        'Scheduling a specific delivery time is not always available but can be arranged in some cases. Please contact customer service to inquire about this option.',
    },
    {
      question: 'How do I know if my order was successfully placed?',
      answer:
        'You will receive an order confirmation email with your order details once your purchase is successfully placed. Check your inbox and spam folder for this confirmation.',
    },
    {
      question: 'What should I do if I forget my tracking ID?',
      answer:
        'If you forget your tracking ID, you can find it in your order confirmation email or log into your account to view your order history and tracking information.',
    },
    {
      question: 'Are there any restrictions on the items that can be shipped?',
      answer:
        'Yes, some items may have shipping restrictions based on size, weight, or destination. Check our "Shipping Policy" for details on restricted items.',
    }
  ];

  const reviews = [
    {
      reviewer: 'John Doe',
      review: 'Excellent service! My goods arrived on time and in perfect condition. Highly recommend!',
    },
    {
      reviewer: 'Jane Smith',
      review: 'Great experience with the tracking system. It was easy to follow my shipment every step of the way.',
    },
    {
      reviewer: 'Alex Johnson',
      review: 'The secure packaging was impressive. Everything was well-protected and arrived safely.',
    },
  ];

  return (
    <div className="faq-container container mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="card mb-3 border-0" key={index}>
            <div className="card-header bg-light p-3" id={`heading${index}`}>
              <h5 className="mb-0">
                <button
                  className={`btn btn-block text-left text-dark font-weight-bold ${
                    activeIndex === index ? '' : 'collapsed'
                  }`}
                  type="button"
                  aria-expanded={activeIndex === index ? 'true' : 'false'}
                  aria-controls={`collapse${index}`}
                  onClick={() => toggleAnswer(index)}
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                  {faq.question}
                  <i
                    className={`bi ${
                      activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'
                    } ml-2`}
                  ></i>
                </button>
              </h5>
            </div>
            <div
              id={`collapse${index}`}
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="card-body bg-white text-dark p-3">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mt-5 mb-4">Customer Reviews</h2>
      <div className="row">
        {reviews.map((review, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">{review.reviewer}</h5>
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
