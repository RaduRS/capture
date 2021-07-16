import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyleNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. ABOUT US</Link>
        </li>

        <li>
          <Link to="/work">2. OUR WORK</Link>
        </li>

        <li>
          <Link to="/contact">1. CONTACT US</Link>
        </li>
      </ul>
    </StyleNav>
  );
};

const StyleNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 2rem;
    letter-spacing: 1px;
    font-weight: lighter;
  }
`;

export default Nav;
