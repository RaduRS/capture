import React from "react";
import home1 from "../img/home1.png";
//styled
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, photoAnim, containerAnim, fade } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyleAbout>
      <StyleDescription>
        <motion.div variants={containerAnim}>
          <StyleHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams </span>
            </motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </StyleHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas you have. We are
          professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </StyleDescription>
      <StyleImage>
        <motion.img src={home1} alt="guy holding camera" variants={photoAnim} />
      </StyleImage>
      <Wave />
    </StyleAbout>
  );
};

//Styled component

export default AboutSection;
