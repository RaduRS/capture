import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyleAbout>
      <StyleDescription>
        <div className="title">
          <StyleHide>
            <h2>We work to make</h2>
          </StyleHide>
          <StyleHide>
            <h2>
              your <span>dreams </span>
            </h2>
          </StyleHide>
          <StyleHide>
            <h2>come true.</h2>
          </StyleHide>
        </div>
        <p>
          Contact us for any photography or videography ideas you have. We are
          professionals with amazing skills
        </p>
        <button>Contact us</button>
      </StyleDescription>
      <StyleImage>
        <img src={home1} alt="guy holding camera" />
      </StyleImage>
    </StyleAbout>
  );
};

//Styled component
const StyleAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  background-color: #121212;
`;

const StyleDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyleImage = styled.div`
  flex: 1;

  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyleHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
