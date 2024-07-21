import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  // State to manage the toggle status of the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the toggle action for the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        {/* Hamburger icon for mobile menu */}
        <Hamburger onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        {/* Logo image */}
        <img src="Logo_Feasto.png" alt="Feasto Logo" />
        {/* Navigation menu */}
        <NavMenu isOpen={isOpen}>
          <NavItem>Features</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>Templates</NavItem>
          <NavItem>Resources</NavItem>
        </NavMenu>
        {/* Action buttons */}
        <Buttons>
          <Button desktopOnly>Get a demo</Button>
          <Button primary>Sign up for free</Button>
        </Buttons>
      </Nav>
    </HeaderContainer>
  );
};

// Styled components for the header and its elements

// Container for the header
const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

// Container for the navigation bar
const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

// Container for the navigation menu items
const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 50px;
  flex-grow: 1;
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

// Individual navigation menu item
const NavItem = styled.li`
  margin: 0 15px;
  font-size: 16px;
  padding: 0 8px;
  color: #333;

  @media (max-width: 768px) {
    padding: 10px 20px;
    width: 100%;
    text-align: left;
    &:hover {
      background: #f8d7da;
    }
  }
`;

// Container for the action buttons
const Buttons = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Styled component for the action buttons
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${(props) => (props.primary ? "#E63946" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#E63946")};
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s;
  display: ${(props) => (props.desktopOnly ? "block" : "block")};

  &:hover {
    background: ${(props) => (props.primary ? "#d62839" : "#f1f1f1")};
  }

  @media (max-width: 768px) {
    margin: 10px auto;
    width: 90%;
    ${(props) => props.desktopOnly && `display: none;`}
  }
`;

// Hamburger icon for mobile view
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;
