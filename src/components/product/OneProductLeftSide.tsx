import styled from "styled-components";

import product from "../../images/product1.jpg";
import { Product1 } from "../../models/products.model";

import React from "react";

const OneProductLeftSide: React.FC<{ selectedProduct: Product1 }> = ({
  selectedProduct: { image },
}) => {
  return (
    <LeftSideContainer>
      <img src={image} />
    </LeftSideContainer>
  );
};

export default OneProductLeftSide;

const LeftSideContainer = styled.div`
  margin-right: 150px;
  display: flex;

  img {
    width: 300px;
  }

  @media (max-width: 1050px) {
    margin-right: 100px;
  }
  @media (max-width: 950px) {
    img {
      width: 250px;
    }
  }
  @media (max-width: 840px) {
    margin-right: 50px;
  }
  @media (max-width: 500px) {
    img {
      width: 150px;
    }
  }
`;
