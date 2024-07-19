import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <Subtitle>Seamless Setup, Quick, Easy and No-Code</Subtitle>
        <Title>
          Build Website for your Business within{" "}
          <Highlight>3 Minutes</Highlight>
        </Title>
        <ButtonContainer>
          <Button primary>Build your website now</Button>
          <Button>Get a demo</Button>
        </ButtonContainer>
      </TextContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 10px;
  background: #f7f7f7;
  text-align: center;
`;

const TextContainer = styled.div`
  max-width: 800px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #333;
`;

const Highlight = styled.span`
  color: #e63946;
  text-decoration: underline;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #e63946;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 15px 15px;
  border: ${(props) => (props.primary ? "none" : "2px solid #e63946")};
  background: ${(props) => (props.primary ? "#e63946" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#e63946")};
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.primary ? "#d62839" : "#f1f1f1")};
  }
`;

export default HeroSection;
