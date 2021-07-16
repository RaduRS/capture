import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyleNav>
      <h1>
        <a href="#" id="logo">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>

        <li>
          <a href="#">2. Our Work</a>
        </li>

        <li>
          <a href="#">1. Contact Us</a>
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
    padding-left: 10rem;
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
