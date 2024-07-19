import React from "react";
import styled from "styled-components";

const LogosSection = () => {
  return (
    <LogosContainer>
      <Image src="/mobile/01.png" alt="01" />
      <Image src="/mobile/02.png" alt="02" />
      <Image src="/mobile/03.png" alt="03" />
      <Image src="/mobile/04.png" alt="04" />
    </LogosContainer>
  );
};

const LogosContainer = styled.section`
  display: flex;
  justify-content: space-around; /* Distribute the logos evenly */
  align-items: center;
  padding: 50px 0;
  background: #fff;
  gap: 20px; /* Optional: Add some gap between images */
`;

const Image = styled.img`
  width: 311px; /* Adjust the width as per your design */
  height: 610; /* Maintain aspect ratio */
`;

export default LogosSection;
