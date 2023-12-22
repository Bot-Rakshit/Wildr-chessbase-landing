import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Wildrs collaboration with the chess community?',
      answer: 'Wildr is partnering with the chess community, including top players like Vidit and Anish, to create a positive, troll-free space for chess enthusiasts.'
    },
    {
      question: 'What are the chess challenges on Wildr?',
      answer: "Past challenges include Chessbase challenges and Vidit’s chess challenge. We're now hosting challenges around World Rapid Blitz."
    },
    // Add more FAQs here
    {
      question: 'What are the incentives for signing up?',
      answer: "New sign-ups receive a free one-month Chessbase membership. Plus, there's a raffle for a fancy chess set"
    },
    {
      question: "I haven't recieved my free gift yet. What should I do?",
      answer: 'Make sure you have signed up for Wildr and submitted the form. If you have, please wait for a few days for your gift to arrive. If you still have not recieved your gift, please contact us at chessbaseindia@gmail.com'
    },
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
        <div className="faq-header">
            <h1>Frequently Asked Questions</h1>
        </div>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
