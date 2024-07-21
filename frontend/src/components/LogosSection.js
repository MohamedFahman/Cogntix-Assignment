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
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  background: #fff;
  flex-wrap: wrap; /* Wrap the images to the next line if needed */
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
    flex-direction: column;
    gap: 10px;
  }
`;

const Image = styled.img`
  width: 311px;
  height: auto; /* Maintain aspect ratio */

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

export default LogosSection;
