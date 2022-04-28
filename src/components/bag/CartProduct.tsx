import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import oneProductImage from "../../images/product1.jpg";

const CartProduct = () => {
  return (
    <>
      <CartHeader>
        <h1>Your bag</h1>
      </CartHeader>
      <CartProductStyled>
        <CartProductInfoStyled>
          <img src={oneProductImage} alt="oneProductImage" />
          <CartProductTextBox>
            <h2>
              JOHN HARDY WOMEN'S LEGENDS NAGA GOLD & SILVER DRAGON STATION
              CHAIN BRACELET
            </h2>
            <h3>$499</h3>
            <button className="delete-btn">
              <FaTrashAlt className="delete-icon" />
            </button>
          </CartProductTextBox>
        </CartProductInfoStyled>
        <QuantityContainer>
          <AiOutlineCaretUp />
          <span>1</span>
          <AiOutlineCaretDown />
        </QuantityContainer>
      </CartProductStyled>
    </>
  );
};

export default CartProduct;

const CartProductStyled = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const CartProductInfoStyled = styled.div`
  display: flex;
  img {
    width: 150px;
    height: 150px;
    margin-right: 30px;
  }

  .delete-btn {
    cursor: pointer;
    margin-left: auto;
    align-self: flex-start;
    border-radius: 50%;
    border: none;
    padding: 2px 5px;
    text-align: center;
    line-height: 2px;
    background-color: transparent;
    &:hover {
      opacity: 0.8;
    }
    .delete-icon {
      color: #e63946;
      font-size: 16px;
    }
  }
`;
const CartHeader = styled.div``;
const CartProductTextBox = styled.div`
  padding: 30px;

  h2 {
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  h3 {
    margin: 15px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: rgb(0, 0, 0, 0.5);
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
