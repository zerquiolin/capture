import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../Data/MovieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation/Animation";
//Scroll
import ScrollTop from "../Components/ScrollTop";

const MovieDetails = () => {
  //History
  const history = useHistory();
  const url = history.location.pathname;
  //States
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState(null);
  //Effect
  useEffect(() => {
    const currentMovie = movies.filter((state) => state.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="before"
          exit="exit"
          animate="after"
        >
          <ScrollTop />
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    h2 {
      top: 5%;
    }
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  padding: 2rem 8rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1300px) {
    padding: 0rem 0rem;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//Awar component

const Award = ({ title, description }) => {
  return (
    <StyledAwar>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAwar>
  );
};

const StyledAwar = styled.div`
  padding: 3rem;

  h3 {
    font-size: 2rem;
    text-align: center;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.3rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
    text-align: center;
  }
`;

export default MovieDetails;
