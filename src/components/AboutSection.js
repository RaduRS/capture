import React from "react";
import home1 from "../img/home1.png";
//styled
import { styled } from "styled-components";
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from "../styles";

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

export default AboutSection;
