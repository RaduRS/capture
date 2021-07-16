import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import team from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//styles
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <StyleServices>
      <StyleDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyleCards>
          <StyleCard>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={team} alt="team" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </StyleCard>
        </StyleCards>
      </StyleDescription>
      <StyleImage>
        <img src={home2} alt="camera" />
      </StyleImage>
    </StyleServices>
  );
};

const StyleServices = styled(StyleAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyleCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
