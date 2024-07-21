import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterTop>
          <FooterLeft>
            <FooterLogo>
              <img src="./Logo_Feasto.png" alt="Feasto Logo" />
            </FooterLogo>
            <FooterDescription>
              Feasto simplifies creating a stunning, professional web store with
              its user-friendly templates and quick setup.
            </FooterDescription>
            <FooterSocials>
              <SocialIcon
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </SocialIcon>
              <SocialIcon
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/facebook.png" alt="Facebook" />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/instagram.png" alt="Instagram" />
              </SocialIcon>
              <SocialIcon
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/whatsapp.png" alt="WhatsApp" />
              </SocialIcon>
            </FooterSocials>
          </FooterLeft>
        </FooterTop>
        <FooterLinksColumn>
          <FooterLinkTitle>Company</FooterLinkTitle>
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Contact us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Privacy policy</FooterLink>
          <FooterLink href="#">Terms & service</FooterLink>
        </FooterLinksColumn>
        <FooterLinksColumn>
          <FooterLinkTitle>Templates</FooterLinkTitle>
          <FooterLink href="#">Restaurants & Food Stalls</FooterLink>
          <FooterLink href="#">Retail stores</FooterLink>
          <FooterLink href="#">Grocery stores</FooterLink>
        </FooterLinksColumn>
        <FooterLinksColumn>
          <FooterLinkTitle>Resources</FooterLinkTitle>
          <FooterLink href="#">Blogs</FooterLink>
          <FooterLink href="#">Knowledge base</FooterLink>
          <FooterLink href="#">Help center</FooterLink>
        </FooterLinksColumn>
        <FooterLinksColumn>
          <FooterLinkTitle>Features</FooterLinkTitle>
          <FooterLink href="#">WhatsApp order management</FooterLink>
          <FooterLink href="#">Digital storefront</FooterLink>
          <FooterLink href="#">Insightful analytics</FooterLink>
          <FooterLink href="#">Effortless offer management</FooterLink>
        </FooterLinksColumn>
      </FooterLinksContainer>
      <FooterBottom>
        <FooterNote>Designed & Developed with ❤️ by Cognix</FooterNote>
        <FooterCopy>&copy; 2022 Feasto. All rights reserved.</FooterCopy>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #ffffff;
  color: #333;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 25px 20px;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FooterLogo = styled.div`
  text-align: left;
`;

const FooterDescription = styled.p`
  max-width: 400px;
  margin-bottom: 20px;
  color: #666;
  text-align: left;
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 15px;
  text-align: left;
`;

const SocialIcon = styled.a`
  img {
    width: 24px;
    height: 24px;
  }
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FooterLinkTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 70px;
  background-color: #e63946;
  color: #fff;
`;

const FooterNote = styled.p`
  font-size: 14px;
  margin: 0;
`;

const FooterCopy = styled.p`
  font-size: 14px;
  margin: 0;
`;

export default Footer;
