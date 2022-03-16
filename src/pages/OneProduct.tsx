import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import OneProductLeftSide from "../components/product/OneProductLeftSide";
import OneProductRightSide from "../components/product/ProductRightSide";
import ScroolToTop from "../components/ui/ScroolToTop";
import { Container } from "../components/ui/style";
import { useGetProductsQuery } from "../services/ProductsApi";

type ProductId = {
  productId: string;
};

const OneProduct = () => {
  const { productId } = useParams<ProductId>();

  const { data: products } = useGetProductsQuery();

  const selectedProduct = products?.find(
    (product) => product.id === Number(productId),
  );

  return (
    <Layout>
      <ScroolToTop />
      <Container>
        <OneProductStyled>
          {selectedProduct && (
            <>
              <OneProductLeftSide selectedProduct={selectedProduct} />
              <OneProductRightSide selectedProduct={selectedProduct} />
            </>
          )}
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
