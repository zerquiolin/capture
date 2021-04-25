import React from "react";
//Style
import styled from "styled-components";
import { StyledAboutSection } from "../Styles/Styles";
//Components
import Toggle from "./Toggle";
//Animation
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollAnimation } from "../Animation/Animation";
const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledFaqSection
      ref={element}
      variants={scrollAnimation}
      initial="before"
      animate={controls}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              minima.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily schedule.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              minima.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              minima.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              minima.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaqSection>
  );
};

//Styles

const StyledFaqSection = styled(StyledAboutSection)`
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
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
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
