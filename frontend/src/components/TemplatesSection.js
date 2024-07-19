import React from "react";
import styled from "styled-components";

const templates = [
  {
    image: "./templates/template1.png",
    title: "Restaurants & Food Businesses",
    description:
      "Build an online store showcasing dishes with eye-catching images & easily update prices with our templates.",
  },
  {
    image: "./templates/template2.png",
    title: "Grocery Store",
    description:
      "Get your grocery store online with a user-friendly design that enhances your customers' shopping experience.",
  },
  {
    image: "./templates/template3.png",
    title: "Retail Store",
    description:
      "Create a stunning showcase for your latest collections with our stylish templates and user-friendly interface.",
  },
];

const TemplatesSection = () => {
  return (
    <TemplatesContainer>
      <SectionSubTitle>STARTER TEMPLATES</SectionSubTitle>
      <SectionTitle>
        Kickstart your online stores with amazing templates
      </SectionTitle>
      <TemplatesList>
        {templates.map((template, index) => (
          <Template key={index}>
            <TemplateImage src={template.image} alt={template.title} />
            <TemplateTitle>{template.title}</TemplateTitle>
            <TemplateDescription>{template.description}</TemplateDescription>
            <StartNowText>Get started now</StartNowText>
          </Template>
        ))}
      </TemplatesList>
    </TemplatesContainer>
  );
};

const TemplatesContainer = styled.section`
  padding: 50px 20px;
  background: #fff;
  text-align: center;
`;

const SectionSubTitle = styled.p`
  font-size: 16px;
  color: #e63946;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;
`;

const TemplatesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Template = styled.div`
  max-width: 300px;
  text-align: center;
  background: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TemplateImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 8px;
`;

const TemplateTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 2px;
  text-align: left;
`;

const TemplateDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
`;

const StartNowText = styled.p`
  color: #e63946;
  margin-top: auto;
  font-weight: bold;
  text-align: left;
`;

export default TemplatesSection;
