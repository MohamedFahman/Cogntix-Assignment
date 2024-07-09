import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>FEASTO</Logo>
        <NavMenu>
          <NavItem>Features</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>Templates</NavItem>
          <NavItem>Resources</NavItem>
        </NavMenu>
        <Buttons>
          <Button>Get a demo</Button>
          <Button primary>Sign up for free</Button>
        </Buttons>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #e63946;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  font-size: 16px;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  background: ${(props) => (props.primary ? "#E63946" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#E63946")};
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.primary ? "#d62839" : "#f1f1f1")};
  }
`;

export default Header;
