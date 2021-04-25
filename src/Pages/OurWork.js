import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../Images/athlete-small.png";
import theracer from "../Images/theracer-small.png";
import goodtimes from "../Images/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnimation,
  imageAnimation,
  lineAnimation,
  workSliderAnimation,
  workSliderContainerAnimation,
} from "../Animation/Animation";
import { useScroll } from "../Components/useScroll";
import { scrollAnimation } from "../Animation/Animation";
//Scroll
import ScrollTop from "../Components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <StyledWork
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="before"
      animate="after"
    >
      <ScrollTop />
      <motion.div variants={workSliderContainerAnimation}>
        <Frame1 variants={workSliderAnimation} />
        <Frame2 variants={workSliderAnimation} />
        <Frame3 variants={workSliderAnimation} />
        <Frame4 variants={workSliderAnimation} />
      </motion.div>

      <StyledMovie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHiddenDiv>
            <motion.img variants={imageAnimation} src={athlete} alt="athlete" />
          </StyledHiddenDiv>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element}
        variants={scrollAnimation}
        initial="before"
        animate={controls}
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="racer" />
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element2}
        variants={scrollAnimation}
        initial="before"
        animate={controls2}
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.3rem;
    background: #29d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHiddenDiv = styled.div`
  overflow: hidden;
`;

//Frame Animation

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
