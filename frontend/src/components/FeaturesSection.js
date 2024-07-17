import React from "react";
import styled from "styled-components";

const features = [
  {
    image: "feature1.png",
    title: "Launch your store in 3 mins",
    description: "Easily launch your online store within minutes...",
  },
  {
    image: "feature2.png",
    title: "Faster payments",
    description: "Quickly receive customer orders and payments...",
  },
  {
    image: "feature3.png",
    title: "Increased visibility",
    description: "Boost your store’s visibility with our SEO tools...",
  },
];

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <SectionTitle>How FEASTO help your business grow?</SectionTitle>
      <FeaturesList>
        {features.map((feature, index) => (
          <Feature key={index}>
            <FeatureImage src={feature.image} alt={feature.title} />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </Feature>
        ))}
      </FeaturesList>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  padding: 50px 20px;
  background: #f7f7f7;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const FeaturesList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  max-width: 300px;
  text-align: center;
  margin: 20px;
`;

const FeatureImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin: 20px 0;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

export default FeaturesSection;
