import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "./../animation";

const OurWork = () => {
  return (
    <StyleWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyleMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img src={athlete} alt="athlete" variants={photoAnim} />
          </Hide>
        </Link>
      </StyleMovie>

      <StyleMovie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img src={goodtimes} alt="good times" variants={photoAnim} />
          </Hide>
        </Link>
      </StyleMovie>

      <StyleMovie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img src={theracer} alt="the racer" variants={photoAnim} />
          </Hide>
        </Link>
      </StyleMovie>
    </StyleWork>
  );
};

const StyleWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyleMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.2rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
