import styled from "styled-components";

import product from "../../images/product1.jpg";

const OneProductLeftSide = () => {
  return (
    <LeftSideContainer>
      <img src={product} alt="product-img" />
    </LeftSideContainer>
  );
};

export default OneProductLeftSide;

const LeftSideContainer = styled.div`
  margin-right: 150px;
  display: flex;

  img {
    width: 450px;
  }

  @media (max-width: 1050px) {
    margin-right: 100px;
  }
  @media (max-width: 950px) {
    img {
      width: 350px;
    }
  }
  @media (max-width: 840px) {
    margin-right: 50px;
  }
  @media (max-width: 500px) {
    img {
      width: 250px;
    }
  }
`;
