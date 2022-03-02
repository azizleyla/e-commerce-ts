import styled from "styled-components";

export const AddButton = styled.button`
  background-color: rgb(231, 129, 107);
  padding: 6px 30px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    opacity: 0.9;
  }
`;
export const SidebarCartBtn = styled.button`
  appearance: none;
  background-color: ${(props) =>
    props.title === "checkout" ? "rgb(231,129,107)" : "#333"};
  border: 2px solid
    ${(props) =>
      props.title === "checkout" ? "rgb(231,129,107)" : "#333"};
  border-radius: 20px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  outline: none;
  min-width: 145px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  text-transform: uppercase;
  margin-right: 10px;
  margin: 5px 7px 5px 0;
  @media (max-width: 576px) {
    width: 100%;
  }
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
