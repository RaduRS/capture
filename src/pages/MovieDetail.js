import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MovieState } from "./../movieState";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyleDetails>
          <StyleHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </StyleHeadline>
          <StyleAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyleAwards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </StyleDetails>
      )}
    </>
  );
};

const StyleDetails = styled.div`
  color: white;
`;
const StyleHeadline = styled.div`
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
    width: 70%;
    height: 70vh;
    object-fit: cover;
    margin: 0 auto;
    display: flex;
  }
`;

const StyleAwards = styled.div`
  min-height: 60vh;
  display: flex;
  margin: 1rem 10rem;
  align-items: center;
  justify-content: center;
`;

const Award = ({ title, description }) => {
  return (
    <StyleAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyleAward>
  );
};

const StyleAward = styled.div`
  padding: 2rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 70%;
    height: 80vh;
    object-fit: cover;
    margin: 0 auto;
    display: flex;
  }
  margin-bottom: 5rem;
`;

export default MovieDetail;
