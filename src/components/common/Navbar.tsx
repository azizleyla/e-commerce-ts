import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";

import logo from "../../assets/logo.svg";
import { navbarLinks } from "../../constant";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <NavbarStyled>
      <NavbarContentContainer>
        <img src={logo} alt="" />
        <NavbarItems>
          {navbarLinks.map((link) => (
            <li key={link.id}>{link.label}</li>
          ))}
        </NavbarItems>
        <NavbarIcons>
          <button>
            <AiOutlineShoppingCart size="20px" />
          </button>
          <button>
            <IoIosHeartEmpty size="20px" />
          </button>
        </NavbarIcons>
        <Hamburger
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <RiMenu2Line size="25px" />
        </Hamburger>
      </NavbarContentContainer>
      {showLinks && (
        <ShowContainer>
          <ShowContainerItems>
            {navbarLinks.map((link) => (
              <li key={link.id}>{link.label}</li>
            ))}
          </ShowContainerItems>
          <ShowContainerIcons>
            <button>
              <AiOutlineShoppingCart size="25px" />
            </button>
            <button>
              <IoIosHeartEmpty size="25px" />
            </button>
          </ShowContainerIcons>
        </ShowContainer>
      )}
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1230px) {
    padding: 0 1.4rem;
  }
`;

const NavbarContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  img {
    width: 202px;
  }
`;

const NavbarItems = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  li {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 14px;
    letter-spacing: 2px;
    color: #333136;
    cursor: pointer;

    &:hover {
      color: #e7816b;
    }

    @media (max-width: 776px) {
      display: none;
    }
  }
`;

const NavbarIcons = styled.div`
  display: flex;
  gap: 10px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      color: #e7816b;
    }

    @media (max-width: 776px) {
      display: none;
    }
  }
`;
const Hamburger = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 776px) {
    display: block;
    &:hover {
      color: #e7816b;
    }
  }
`;

const ShowContainer = styled.div`
  display: none;
  @media (max-width: 776px) {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
`;

const ShowContainerItems = styled.ul`
  list-style: none;

  li {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 25px;
    letter-spacing: 2px;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:hover {
      color: #e7816b;
    }
  }
`;

const ShowContainerIcons = styled.div`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover {
      color: #e7816b;
    }
  }
`;
