import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <Title>
          Build Website for your Business within{" "}
          <Highlight>3 Minutes</Highlight>
        </Title>
        <Subtitle>Superfast Setup, Quick, Easy and No-Code</Subtitle>
        <Button>Build your website now</Button>
      </TextContainer>
      {/* <ImageContainer>
        <img src="hero-image.png" alt="Hero" />
      </ImageContainer> */}
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column; /* Change from row to column */
  align-items: center; /* Center-align items horizontally */
  justify-content: center; /* Center-align items vertically */
  padding: 50px 20px;
  background: #f7f7f7;
  text-align: center; /* Center-align text */
`;

const TextContainer = styled.div`
  max-width: 600px;
  margin-bottom: 30px; /* Add margin-bottom to separate text from the image */
`;

const Title = styled.h1`
  font-size: 48px;
  color: #333;
`;

const Highlight = styled.span`
  color: #e63946;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #666;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 15px 30px;
  border: none;
  background: #e63946;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #d62839;
  }
`;

// const ImageContainer = styled.div`
//   img {
//     max-width: 100%;
//     height: auto;
//   }
// `;

export default HeroSection;
