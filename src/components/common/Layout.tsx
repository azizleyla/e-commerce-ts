import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const LayoutStyled = styled.div`
  position: relative;
`;

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <LayoutStyled>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
