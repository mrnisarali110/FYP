import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../App.css'; // Ensure this CSS file contains styles for the FAQ component

const faqs = [
  {
    question: "What is the main purpose of this logistics service?",
    answer: "Our logistics service is designed to streamline the transportation of goods, providing efficient and reliable solutions for businesses and individuals."
  },
  {
    question: "How can I track my shipment?",
    answer: "You can track your shipment using our real-time tracking system available on our website. Simply enter your tracking number to get updates."
  },
  {
    question: "What are the shipping options available?",
    answer: "We offer various shipping options including standard, expedited, and same-day delivery. Choose the option that best fits your needs during checkout."
  },
  {
    question: "How do I request a return?",
    answer: "To request a return, please contact our customer service team through our website or by phone. We will guide you through the return process."
  }
];

const reviews = [
  {
    reviewer: "John Doe",
    review: "Excellent service! My goods arrived on time and in perfect condition. Highly recommend!"
  },
  {
    reviewer: "Jane Smith",
    review: "Great experience with the tracking system. It was easy to follow my shipment every step of the way."
  },
  {
    reviewer: "Alex Johnson",
    review: "The secure packaging was impressive. Everything was well-protected and arrived safely."
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="faq-container">
      <Typography variant="h3" className="faq-title">
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className="faq-accordion"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography className="faq-question">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq-answer">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Typography variant="h4" className="reviews-title">
        Customer Reviews
      </Typography>
      {reviews.map((review, index) => (
        <Card key={index} className="review-card">
          <CardContent>
            <Typography variant="h6" className="reviewer-name">
              {review.reviewer}
            </Typography>
            <Typography variant="body2" className="review-text">
              {review.review}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FAQ;
