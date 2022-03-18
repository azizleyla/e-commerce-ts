import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Product1 } from "../../models/products.model";
import { addToCart } from "../../redux/features/products/ProductSlice";

const OneProductRightSide: React.FC<{
  selectedProduct: Product1;
}> = ({ selectedProduct }) => {
  const dispatch = useDispatch();

  return (
    <RightSideContainer>
      <h1>{selectedProduct.title}</h1>
      <p>{selectedProduct.description}</p>
      <h3>
        <span>$</span>
        {selectedProduct.price}
      </h3>
      <ButtonContainer>
        <ToCart onClick={() => dispatch(addToCart(selectedProduct))}>
          Add To Cart
        </ToCart>
        <ToCart>Go To Cart</ToCart>
      </ButtonContainer>
    </RightSideContainer>
  );
};

export default OneProductRightSide;

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 776px) {
    margin-top: 50px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: 1.42857px;
    text-transform: uppercase;

    @media (max-width: 840px) {
      font-size: 20px;
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: rgb(0, 0, 0, 0.5);
    @media (max-width: 840px) {
      font-size: 15px;
    }

    margin: 32px 0px;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #000000;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const ToCart = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  background: rgb(231, 129, 107);

  padding: 10px 20px;
  margin-top: 40px;

  cursor: pointer;
  border: none;

  @media (max-width: 840px) {
    font-size: 10px;
    padding: 7.5px 15px;
  }
`;
