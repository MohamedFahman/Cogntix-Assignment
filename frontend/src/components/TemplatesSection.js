import React from "react";
import styled from "styled-components";

const templates = [
  {
    image: "template1.png",
    title: "Restaurants & Food Businesses",
    description: "Build an online store showcasing dishes...",
  },
  {
    image: "template2.png",
    title: "Grocery Store",
    description: "Get your grocery store online with a user-friendly design...",
  },
  {
    image: "template3.png",
    title: "Retail Store",
    description: "Create a stunning showcase for your latest collections...",
  },
];

const TemplatesSection = () => {
  return (
    <TemplatesContainer>
      <SectionTitle>
        Kickstart your online stores with amazing templates
      </SectionTitle>
      <TemplatesList>
        {templates.map((template, index) => (
          <Template key={index}>
            <TemplateImage src={template.image} alt={template.title} />
            <TemplateTitle>{template.title}</TemplateTitle>
            <TemplateDescription>{template.description}</TemplateDescription>
            <Button>Get started now</Button>
          </Template>
        ))}
      </TemplatesList>
    </TemplatesContainer>
  );
};

const TemplatesContainer = styled.section`
  padding: 50px 20px;
  background: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const TemplatesList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Template = styled.div`
  max-width: 300px;
  text-align: center;
  margin: 20px;
`;

const TemplateImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const TemplateTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin: 20px 0;
`;

const TemplateDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background: #e63946;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #d62839;
  }
`;

export default TemplatesSection;
