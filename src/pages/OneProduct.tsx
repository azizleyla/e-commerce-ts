import styled from "styled-components";
import Layout from "../components/common/Layout";
import OneProductLeftSide from "../components/product/OneProductLeftSide";
import OneProductRightSide from "../components/product/ProductRightSide";
import { Container } from "../components/ui/style";

const OneProduct = () => {
  return (
    <Layout>
      <Container>
        <OneProductStyled>
          <OneProductLeftSide />
          <OneProductRightSide />
        </OneProductStyled>
      </Container>
    </Layout>
  );
};

export default OneProduct;

const OneProductStyled = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 60px;

  @media (max-width: 1230px) {
    padding: 0 1.4rem;
  }

  @media (max-width: 776px) {
    flex-direction: column;
    align-items: center;
  }
 
`;
