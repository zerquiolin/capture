import React from "react";
//Meta
import home1 from "../Images/home1.png";
//Styles
import {
  StyledAboutSection,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../Styles/Styles";
//Animation
import { motion } from "framer-motion";
import {
  titleAnimation,
  fadeAnimation,
  imageAnimation,
} from "../Animation/Animation";
import Wave from "./Wave";

const AboutSection = () => {
  //Variants

  return (
    <StyledAboutSection>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
          <motion.p variants={fadeAnimation}>
            Contact us for any photofraphy or videography ideas that you have.
            we are professionals with amazing skills
          </motion.p>
          <motion.button variants={fadeAnimation}>Contact Us</motion.button>
        </motion.div>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={imageAnimation} src={home1} alt="home1" />
      </StyledImage>
      <Wave />
    </StyledAboutSection>
  );
};

export default AboutSection;
