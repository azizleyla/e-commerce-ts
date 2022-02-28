import React from "react";
import styled from "styled-components";
import { useGetProductsQuery } from "../../services/ProductsApi";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <Wrapper>
      <h1>Products</h1>
      <div className="products-container">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  h1 {
    padding: 10px 0;
  }
  .products-container {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
export default Products;
