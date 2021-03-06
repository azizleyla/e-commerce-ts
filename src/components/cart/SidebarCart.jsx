import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarCartBtn } from "../common/Button";
import { RiCloseLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/features/products/ProductSlice";
import { formatPrice } from "../../utils/helpers";
const SidebarCart = ({ setIsShow, isShow }) => {
  // setTimeout(() => {
  //   setIsShow(false);
  // }, 8000);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isShow && ref.current && !ref.current.contains(e.target)) {
        setIsShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isShow]);
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((a, c) => a + c.price, 0);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <SidebarCartContainer ref={ref} className={isShow ? "active" : ""}>
        <div className="cart-header">
          <span>Your Cart ({cartItems.length})</span>
          <button
            className="cart-close-btn"
            onClick={() => setIsShow(false)}
          >
            <RiCloseLine />
          </button>
        </div>

        <p className="empty-cart"></p>
        {cartItems?.map(({ id, title, image, price, amount }) => (
          <div className="cart-item" key={id}>
            <div className="cart-body">
              <div className="product-img">
                <img src={image} alt="cart" />
              </div>
              <div className="product-detail">
                <span className="product-title trans-04">{title}</span>
                <p className="details">
                  <span className="quantity">Quantity: {amount}</span>
                </p>
                <p className="price-info">
                  Price:
                  <span className="price"> {formatPrice(price)}</span>
                </p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleClick(id)}
              >
                <FaTrashAlt className="delete-icon" />
              </button>
            </div>
          </div>
        ))}

        <div className="cart-footer">
          <p className="total">Total: ${Number(totalPrice).toFixed(2)}</p>
          <div className="cart-btns">
            <Link to="/bag">
              <SidebarCartBtn>Go To Bag</SidebarCartBtn>
            </Link>
            <Link to="/cart">
              <SidebarCartBtn title="checkout">Checkout</SidebarCartBtn>
            </Link>
          </div>
        </div>
      </SidebarCartContainer>
    </>
  );
};

setTimeout(() => {
  console.log("this is the first message");
}, 5000);

const SidebarCartContainer = styled.div`
  background-color: #fff;
  width: 350px;
  max-width: calc(100% - 30px);
  height: 100vh;
  position: fixed;
  right: -400px;
  top: 0;
  z-index: 10000000;
  transition: all 0.4s;
  box-shadow: 0 3px 6px 0px rgb(0 0 0 / 18%);
  -moz-box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0 3px 6px 0px rgb(0 0 0 / 18%);
  padding: 30px;
  overflow-y: auto;
  &.active {
    right: 0;
  }

  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    span {
      font-weight: 600;
      font-size: 17px;
      color: #333;
      text-transform: capitalize;
    }
    button {
      cursor: pointer;
      transition: all 0.4s;
      &:hover i {
        color: #717fe0;
      }
      i {
        font-size: 30px;
      }
    }
  }
  .cart-item {
    padding: 15px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .cart-close-btn {
    background-color: transparent;
    border: none;
    font-size: 27px;
    cursor: pointer;
  }
  .empty-cart {
    border-top: 1px solid #eee;
    color: #333;
    font-size: 13px;
    padding: 10px 0;
  }
  .cart-body {
    display: flex;
    gap: 2rem;
    .product-img {
      img {
        max-width: 52px;
        height: 82px;
        cursor: pointer;
        border: 1px solid #e2e2e2;
      }
    }
    .product-detail {
      display: flex;
      flex-direction: column;
    }
    .product-title {
      font-size: 14px;
      color: #555;
      line-height: 1.3;
      font-family: "Poppins", sans-serif;
      &:hover {
        color: #717fe0;
      }
    }
    .details {
      margin: 6px 0;
      display: flex;
      span {
        display: flex;
        color: #999;
        font-size: 12px;
        &.quantity {
          @media (max-width: 576px) {
            margin-left: 0;
          }
        }
      }
    }
    .price-info {
      span {
        color: #f27a1a;
        font-size: 14px;
      }
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
  }
  .cart-footer {
    margin-top: 20px;
    .cart-btns {
      display: flex;
      flex-direction: row;
      @media (max-width: 576px) {
        flex-direction: column;
      }
    }
    p {
      font-size: 18px;
      color: #222;
      line-height: 1.3;
      margin-bottom: 40px;
    }
  }
`;
export default SidebarCart;
