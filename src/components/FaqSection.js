import React from "react";
import { StyleAbout } from "../styles";
import styled from "styled-components";

const FaqSection = () => {
  return (
    <StyleFAQ>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nihil
            maiores perferendis excepturi saepe deleniti consectetur.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What Products Do We Offer?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nihil
            maiores perferendis excepturi saepe deleniti consectetur.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyleFAQ>
  );
};

const StyleFAQ = styled(StyleAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 2rem;
    margin: 2rem 0rem;
    width: 100%;
    height: 0.2rem;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
