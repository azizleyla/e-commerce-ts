import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";

import logo from "../../assets/logo.svg";
import { navbarLinks } from "../../constant";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <NavbarStyled className={navbar ? "active" : ""}>
      <NavbarContentContainer>
        <img src={logo} alt="" />
        <NavbarItems>
          {navbarLinks.map((link) => (
            <NavLink key={link.id} to={link.path}>
              <li>{link.label}</li>
            </NavLink>
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
  padding: 20px 20px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 1230px) {
    padding: 0 1.4rem;
  }
`;

const NavbarContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 202px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
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

const NavbarItems = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
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
