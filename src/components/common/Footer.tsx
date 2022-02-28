import React from "react";
import styled from "styled-components";
// import styled from "styled-components";

import logoDark from "../../assets/logo-dark.svg";
import { Container } from "../ui/style";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterContentContainer>
          <img src={logoDark} alt="" />
          <FooterItems>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </FooterItems>
        </FooterContentContainer>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  background: #1d1c1e;
  margin-top: 160px;
  padding: 72px 0;
`;

const FooterContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1230px) {
    padding: 0 1.4rem;
  }
  @media (max-width: 630px) {
    flex-direction: column;
  }
`;
const FooterItems = styled.div`
  display: flex;
  gap: 15px;
  list-style: none;

  li {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      color: #e7816b;
    }
  }
  @media (max-width: 630px) {
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
  }
`;
