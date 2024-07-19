import React from "react";
import styled from "styled-components";

const IconRow = () => {
  const icons = Array.from({ length: 10 }, (_, i) => `logo/logo${i + 1}.png`);

  return (
    <IconContainer>
      {icons.map((icon, index) => (
        <IconWrapper key={index}>
          <Icon src={icon} alt={`icon${index + 1}`} />
        </IconWrapper>
      ))}
    </IconContainer>
  );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Ensure equal spacing */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: auto; /* Ensure horizontal scrolling if needed */
`;

const IconWrapper = styled.div`
  flex: 0 0 auto;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
`;

const App = () => {
  return (
    <div>
      {/* Other components can go here */}
      <IconRow />
      {/* Other components can go here */}
    </div>
  );
};

export default App;
