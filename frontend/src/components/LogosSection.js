import React from "react";
import styled from "styled-components";

const logos = [
  "logo1.png",
  "logo2.png",
  "logo3.png",
  // Add all logo images here
];

const LogosSection = () => {
  return (
    <LogosContainer>
      {logos.map((logo, index) => (
        <Logo key={index} src={logo} alt={`Logo ${index + 1}`} />
      ))}
    </LogosContainer>
  );
};

const LogosContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  background: #fff;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  max-height: 50px;
  margin: 10px;
`;

export default LogosSection;
