import React, { useState } from "react";
import styled from "styled-components";
import { useGetProductsQuery } from "../../services/ProductsApi";

const FilterButtons = ({ productItems, setProductItems }) => {
  const { data: products, isLoading } = useGetProductsQuery();
  const [activeBtn, setActiveBtn] = useState("All");
  console.log(productItems);
  const categories = [
    "All",
    ...new Set(products?.map((item) => item.category)),
  ];

  const handleClick = (category) => {
    setActiveBtn(category);
    if (category !== "All") {
      const filteredProducts = products.filter(
        (item) => item.category === category,
      );
      setProductItems(filteredProducts);
    } else {
      setProductItems(products);
    }
  };
  return (
    <Wrapper>
      <div className="buttons">
        {categories.map((category, index) => (
          <button
            onClick={() => {
              handleClick(category);
            }}
            className={activeBtn === category ? "btn active" : "btn"}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem 0;
    margin: 30px 0;
    button {
      color: #888;
      font-size: 15px;
      line-height: 1.2;
      border: none;
      border-color: #797979;
      border-bottom: 1px solid transparent;
      background-color: transparent;
      margin-right: 1.2rem;
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      text-transform: capitalize;
      padding: 0.4rem 1rem;
      border-radius: 20px;
      &.active {
        color: #fff;
        background-color: #e7816b;
      }
    }
  }
`;

export default FilterButtons;
