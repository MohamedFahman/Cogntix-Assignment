import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <ContactContainer>
      <SectionTitle>Still have some questions?</SectionTitle>
      <SectionSubtitle>
        Can’t find the answer that you’re looking for? Feel free to reach out to
        our team for more info.
      </SectionSubtitle>
      <ContactInfo>
        <ContactItem>
          <IconContainer className="email">
            <IconEnvelope />
          </IconContainer>
          <ContactText>
            <ContactTitle>Email address</ContactTitle>
            <ContactDetail>hello@feasto.io</ContactDetail>
          </ContactText>
        </ContactItem>
        <ContactItem>
          <IconContainer className="phone">
            <IconPhone />
          </IconContainer>
          <ContactText>
            <ContactTitle>Get in touch</ContactTitle>
            <ContactDetail>+94 77 604 4021</ContactDetail>
          </ContactText>
        </ContactItem>
        <ContactItem>
          <IconContainer className="location">
            <IconLocation />
          </IconContainer>
          <ContactText>
            <ContactTitle>Location</ContactTitle>
            <ContactDetail>Jaffna, Sri Lanka</ContactDetail>
          </ContactText>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
};

// Container for the entire contact section
const ContactContainer = styled.section`
  padding: 50px 20px;
  background: #f7f7f7;
  text-align: center;
  border-radius: 10px;
  margin-left: 300px;
  margin-right: 300px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px 10px;
  }
`;

// Title of the contact section
const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// Subtitle of the contact section
const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

// Container for contact information items
const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

// Individual contact item container
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: 6px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

// Container for icons in contact items
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #e52d3c;
  border-radius: 6px;
  color: #fff;
  font-size: 28px;
  position: relative;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

// Icon for email
const IconEnvelope = styled.div`
  width: 28px;
  height: 28px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23fff" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>')
    no-repeat center;
  position: absolute;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

// Icon for phone
const IconPhone = styled.div`
  width: 28px;
  height: 28px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23fff" viewBox="0 0 24 24"><path d="M6.62 10.79a15.093 15.093 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.01-.26 1.12.35 2.33.54 3.58.54.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1H5c.55 0 1 .45 1 1 0 1.25.19 2.46.54 3.58.1.34.01.74-.26 1.01l-2.2 2.2z"/></svg>')
    no-repeat center;
  position: absolute;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

// Icon for location
const IconLocation = styled.div`
  width: 28px;
  height: 28px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23fff" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>')
    no-repeat center;
  position: absolute;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

// Container for the text within contact items
const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

// Title for each contact item
const ContactTitle = styled.span`
  font-size: 14px;
  color: #e52d3c;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

// Detail text for each contact item
const ContactDetail = styled.span`
  font-size: 14px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export default ContactSection;
