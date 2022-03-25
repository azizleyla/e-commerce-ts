import React, { useEffect } from "react";
import styled from "styled-components";
import { AddButton } from "../common/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import { Product1 } from "../../models/products.model";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/products/ProductSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product: React.FC<{
  product: Product1;
}> = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product);
  const handleClick = (product: Product1) => {
    dispatch(addToCart(product));
    // toast.success("Added to cart succesfully");
    toast("Added to cart succesfully", {
      position: "bottom-left",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: 1,
    });
  };

  // useEffect(() => {
  //   toast.success("Added to cart succesfully");
  // }, []);

  return (
    <StyledLink to={`product/${product.id}`}>
      <SingleProduct>
        <div className="like-icon-container">
          <IoIosHeartEmpty />
        </div>

        <div className="img-container">
          <img src={product.image} alt="" />
        </div>
        <div className="product-details">
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          {/* <p>{product.description}</p> */}
          <Link to="/">
            <div>
              <ToastContainer />
              <AddButton onClick={() => handleClick(product)}>
                Add to cart
              </AddButton>
            </div>
          </Link>
        </div>
      </SingleProduct>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;
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
