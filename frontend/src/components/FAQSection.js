import React, { useState } from "react";
import styled from "styled-components";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the visibility of FAQ answer
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQHeader>
        <HeaderSubtitle>FREQUENTLY ASKED QUESTIONS</HeaderSubtitle>
        <HeaderTitle>
          All you need to know about <span>FEASTO</span>
        </HeaderTitle>
      </FAQHeader>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              {faq.question}
              <FAQToggle>{activeIndex === index ? "−" : "+"}</FAQToggle>
            </FAQQuestion>
            {activeIndex === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

const faqs = [
  {
    question: "How can FEASTO help me get my shop online?",
    answer:
      "If you’re thinking about selling a product online, all you’ll need to do is visit our website, sign up, and follow our easy step-by-step guide. Once you’ve done these steps, your shop is ready to go online! You can edit your products anytime, add new ones, or update details, then publish your changes instantly.",
  },
  {
    question: "How secure is the FEASTO Ecommerce Website Builder?",
    answer:
      "We implement industry-standard security measures, including SSL encryption, secure payment gateways, and regular system updates, to ensure the protection of your online store and customer data.",
  },
  {
    question: "Can I connect FEASTO with other tools and services?",
    answer:
      "Yes, FEASTO allows you to integrate with popular tools and services to enhance your online store. Connect seamlessly with email marketing platforms, analytics tools, and more to optimize your e-commerce experience.",
  },
  {
    question: "To what extent can I customize the pre-designed template?",
    answer:
      "You can personalize the pre-designed template by adjusting the theme colors and layouts to match your store’s branding and style preferences.",
  },
  {
    question: "What kind of payment methods does Feasto support?",
    answer:
      "Currently, FEASTO supports cash payments and bank deposits only. However, if you need other payment methods, we’ll add them at minimal cost based on what you prefer.",
  },
  {
    question: "Do you offer a free trial for FEASTO?",
    answer:
      "Feasto simplifies creating a stunning, professional web store with its user-friendly templates and quick setup. Our powerful features ensure a seamless experience.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely! You can cancel your subscription at any time directly from your account settings. If you need assistance, please contact our customer support team at Hai@feasto.io.",
  },
];

// Styled components
const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const FAQHeader = styled.div`
  margin-bottom: 30px;
`;

const HeaderSubtitle = styled.h4`
  color: #e63946;
  font-weight: bold;
  font-size: 14px;
`;

const HeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;

  span {
    color: #e63946;
  }
`;

const FAQList = styled.div`
  margin-bottom: 40px;
`;

const FAQItem = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`;

const FAQToggle = styled.span`
  font-size: 24px;
`;

const FAQAnswer = styled.div`
  margin-top: 10px;
  color: #666;
  text-align: left;
`;

export default FAQ;
