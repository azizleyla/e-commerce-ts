import React from "react";
import styled from "styled-components";
import { useGetProductsQuery } from "../../services/ProductsApi";
import Product from "./Product";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const rowSkeletons = 20;

  if (isLoading) {
    let rows = [];
    for (let i = 0; i < rowSkeletons; i++) {
      rows.push(
        <div className="single-product">
          <div className="img-container">
            <Skeleton width={200} height={200} />
          </div>
          <div className="skeleton product-details">
            <h4>
              <Skeleton count={4} />
            </h4>
            <p>
              <Skeleton height={30} />
            </p>
            <div>
              <Skeleton height={30} width={140} />
            </div>
          </div>
        </div>,
      );
    }
    return (
      <Wrapper className="container">
        <SkeletonTheme highlightColor="#ffffff">
          <div className="products-container">{rows}</div>
        </SkeletonTheme>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="products-container">
        {!isLoading &&
          products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
