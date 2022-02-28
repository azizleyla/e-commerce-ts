import React from "react";
import styled from "styled-components";
import product1 from "../../images/product1.jpg";
import { AddButton } from "../common/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import { Product1 } from "../../models/products.model";

const Product: React.FC<{
  product: Product1;
}> = ({ product }) => {
  return (
    <SingleProduct>
      <div className="like-icon-container">
        <IoIosHeartEmpty />
      </div>

      <div className="img-container">
        <img src={product.image} alt="" />
      </div>
      <div className="product-details">
        <h4>{product.title}</h4>
        <p>{product.desc}</p>
        <AddButton>Add to cart</AddButton>
      </div>
    </SingleProduct>
  );
};
const SingleProduct = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  height: 400px;
  position: relative;
  .like-icon-container {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  .img-container {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product-details {
    h4 {
      min-height: 60px;
      font-size: 15px;
      margin-top: 20px;
    }
    p {
      margin-bottom: 10px;
    }
  }
`;

export default Product;
