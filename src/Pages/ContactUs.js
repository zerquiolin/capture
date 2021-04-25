import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../Animation/Animation";
import styled from "styled-components";
//Scroll
import ScrollTop from "../Components/ScrollTop";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="before"
      exit="exit"
      animate="after"
    >
      <ScrollTop />
      <StyledTitle>
        <StyledHidden>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </StyledHidden>
      </StyledTitle>
      <div>
        <StyledHidden>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Send us a message</h2>
          </StyledSocial>
        </StyledHidden>
        <StyledHidden>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Send an email</h2>
          </StyledSocial>
        </StyledHidden>
        <StyledHidden>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Social media</h2>
          </StyledSocial>
        </StyledHidden>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 15rem;
  color: #353535;
  min-height: 90vh;
  background: white;
  transition: all 1s ease;

  @media (max-width: 1300px) {
    padding: 4rem 3.5rem;
  }
`;

const StyledTitle = styled(motion.div)`
  margin-bottom: 5rem;
  color: black;
  font-weight: bold;
`;

const StyledHidden = styled.div`
  overflow: hidden;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-family: italic;
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default ContactUs;
