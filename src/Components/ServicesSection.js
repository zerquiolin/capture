import React from "react";
//Icon
import clock from "../Images/clock.svg";
import diaphragm from "../Images/diaphragm.svg";
import money from "../Images/money.svg";
import teamwork from "../Images/teamwork.svg";
//Image
import home2 from "../Images/home2.png";
//Style
import {
  StyledAboutSection,
  StyledDescription,
  StyledImage,
} from "../Styles/Styles";
import { scrollAnimation } from "../Animation/Animation";
import styled from "styled-components";

//Scroll Animation
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledServicesSection
      variants={scrollAnimation}
      initial="before"
      animate={controls}
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="home2" />
      </StyledImage>
    </StyledServicesSection>
  );
};

//Styles
const StyledServicesSection = styled(StyledAboutSection)`
  margin: 3rem 0rem;

  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
