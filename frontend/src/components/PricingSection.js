import React from "react";
import styled from "styled-components";

const PricingSection = () => {
  return (
    <PricingContainer>
      <Header>
        <HeaderLeft>
          <SectionMainTitle>PRICING & PLANS</SectionMainTitle>
          <SectionTitle>
            Perfect Balance of Features & Affordability
          </SectionTitle>
          <SectionSubtitle>
            Feasto simplifies creating a stunning, professional web store with
            its user-friendly templates and quick setup. Our powerful features
            ensure a seamless experience.
          </SectionSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <PricingToggle>
            <span>Monthly</span>
            <Toggle>
              <input type="checkbox" id="toggle" />
              <label htmlFor="toggle"></label>
            </Toggle>
            <span>Annually</span>
          </PricingToggle>
        </HeaderRight>
      </Header>
      <PricingPlans>
        <Plan>
          <PlanTitle>Free</PlanTitle>
          <PlanPrice>$0</PlanPrice>
          <PlanButton>Start for FREE</PlanButton>
          <PlanFeature>Unlimited orders</PlanFeature>
          <PlanFeature>Unlimited products listing</PlanFeature>
          <PlanFeature>Unlimited offer creation</PlanFeature>
          <PlanFeature disabled>Monthly 2-hrs Marketing support</PlanFeature>
          <PlanFeature disabled>Premium customer care</PlanFeature>
          <PlanFeature disabled>Custom domain</PlanFeature>
        </Plan>
        <Plan primary>
          <PlanRibbon>Save 25%</PlanRibbon>
          <PlanTitle>PRO - Annual plan</PlanTitle>
          <OldPlanPrice>$9.99</OldPlanPrice>
          <PlanPrice>$7.5</PlanPrice>
          <PlanPeriod>Monthly, Billed annually</PlanPeriod>
          <PlanButton primary>Get 14 days free trial</PlanButton>
          <PlanFeature>Unlimited orders</PlanFeature>
          <PlanFeature>Unlimited products listing</PlanFeature>
          <PlanFeature>Unlimited offer creation</PlanFeature>
          <PlanFeature>Monthly 2 hrs marketing support</PlanFeature>
          <PlanFeature>Premium customer care</PlanFeature>
          <PlanFeature>Custom domain</PlanFeature>
        </Plan>
      </PricingPlans>
    </PricingContainer>
  );
};

const PricingContainer = styled.section`
  padding: 50px 20px;
  background: #f7f7f7;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeaderLeft = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 120px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 120px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const SectionMainTitle = styled.h5`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  color: red;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  max-width: 550px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PricingToggle = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  span {
    font-size: 16px;
    margin: 0 10px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const Toggle = styled.div`
  input {
    display: none;
  }

  label {
    display: inline-block;
    width: 60px;
    height: 30px;
    background: #ccc;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s;

    &:before {
      content: "";
      display: block;
      width: 30px;
      height: 30px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      transition: left 0.3s;
    }
  }

  input:checked + label {
    background: #e63946;

    &:before {
      left: 30px;
    }
  }
`;

const PricingPlans = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Plan = styled.div`
  background: ${(props) => (props.primary ? "#E63946" : "white")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    margin: 10px;
    max-width: 100%;
  }
`;

const PlanRibbon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #e63946;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 3px;
  transform: rotate(45deg);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const PlanTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const OldPlanPrice = styled.p`
  font-size: 20px;
  text-decoration: line-through;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PlanPrice = styled.p`
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PlanPeriod = styled.p`
  font-size: 16px;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PlanButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${(props) => (props.primary ? "white" : "#E63946")};
  color: ${(props) => (props.primary ? "#E63946" : "white")};
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  font-weight: bold;
  margin-bottom: 20px;

  &:hover {
    background: ${(props) => (props.primary ? "#f1f1f1" : "#d62839")};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const PlanFeature = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: ${(props) => (props.disabled ? "#ccc" : "inherit")};
  text-decoration: ${(props) => (props.disabled ? "line-through" : "none")};
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default PricingSection;
