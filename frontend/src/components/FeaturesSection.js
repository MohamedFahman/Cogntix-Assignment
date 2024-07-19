import React from "react";
import styled from "styled-components";
import { FaRocket, FaClock, FaChartLine, FaCogs } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <SectionContainer>
      <ImageContainer>
        <ImageBox>
          <img src="./features/image-1.png" alt="Feature 1" />
          <Overlay>
            <OverlayText>Orders received</OverlayText>
            <OverlayValue>124/day</OverlayValue>
          </Overlay>
        </ImageBox>
        <ImageBox>
          <img src="./features/image-2.png" alt="Feature 2" />
          <Overlay>
            <OverlayText>Deliveries completed</OverlayText>
            <OverlayValue>85/day</OverlayValue>
          </Overlay>
        </ImageBox>
        <ImageBox>
          <img src="./features/image-3.png" alt="Feature 3" />
          {/* <Overlay>
            <OverlayText>Total customers</OverlayText>
            <OverlayValue>10,456</OverlayValue>
          </Overlay> */}
        </ImageBox>
        <ImageBox>
          <img src="./features/image-4.png" alt="Feature 4" />
          {/* <Overlay>
            <OverlayText>Total customers</OverlayText>
            <OverlayValue>10,456</OverlayValue>
          </Overlay> */}
        </ImageBox>
      </ImageContainer>
      <TextContainer>
        <Subtitle>EXPLORE FEASTO</Subtitle>
        <Title>
          How <Highlight>FEASTO</Highlight> help your business grow?
        </Title>
        <Feature>
          <FaRocket />
          <div>
            <FeatureTitle>Launch your store in 3 mins</FeatureTitle>
            <FeatureDescription>
              Easily launch your online store without coding and saving time.
              Just choose a domain, add products, and start selling. It's that
              simple!
            </FeatureDescription>
          </div>
        </Feature>
        <Feature>
          <FaClock />
          <div>
            <FeatureTitle>Faster response time</FeatureTitle>
            <FeatureDescription>
              Quickly respond to customer queries and orders through WhatsApp,
              boosting customer satisfaction and loyalty.
            </FeatureDescription>
          </div>
        </Feature>
        <Feature>
          <FaChartLine />
          <div>
            <FeatureTitle>Increased visibility</FeatureTitle>
            <FeatureDescription>
              Expand your reach beyond physical locations with an online
              storefront that’s accessible 24/7.
            </FeatureDescription>
          </div>
        </Feature>
        <Feature>
          <FaCogs />
          <div>
            <FeatureTitle>Ultimate control over your storefront</FeatureTitle>
            <FeatureDescription>
              You can set your own opening hours, define delivery zones and
              charges, select payment methods and handle offers effortlessly.
            </FeatureDescription>
          </div>
        </Feature>
      </TextContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background: #f7f7f7;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 30px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 200px;
    height: auto;
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const OverlayText = styled.span`
  font-size: 14px;
`;

const OverlayValue = styled.span`
  font-size: 18px;
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #e63946;
  margin: 10px 0;
`;

const Title = styled.h1`
  font-size: 42px;
  color: #333;
  margin-bottom: 30px;
`;

const Highlight = styled.span`
  color: #e63946;
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  svg {
    font-size: 24px;
    color: #e63946;
    margin-right: 15px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 0 0 5px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

export default FeaturesSection;
