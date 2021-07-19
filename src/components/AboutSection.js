import React from "react";
import home1 from "../img/home1.png";
//styled
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0, x: -500 },
    show: { opacity: 1, transition: { duration: 1, ease: "easeOut" }, x: 0 },
  };
  const container = {
    hidden: { x: 100, opacity: 1 },
    show: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "afterChildren",
      },
      opacity: 1,
    },
  };
  return (
    <StyleAbout>
      <StyleDescription>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
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
