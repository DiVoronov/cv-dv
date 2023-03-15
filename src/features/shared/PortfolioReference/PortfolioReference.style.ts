import React from 'react';
import styled from 'styled-components';

export const StyledPortfolioReference = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 400px;
border-radius: 0px 0px 10px 10px;

border: 1px solid ${ props => props.theme.paletteFive };

& .portfolio-reference-title {
  margin: 1rem;
}

& .portfolio-reference-for-position {
  position: relative;

  & .portfolio-reference-cover {
    background: ${ props => props.theme.paletteFive };
    color: ${ props => props.theme.paletteOne };
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;

    font-size: 3rem;
    font-weight: 900;
    letter-spacing: .3rem;

    transition: opacity .5s;
    cursor: pointer;

    & > div {

      &::before {
        content: '';
        width: 200px;
        height: 30px;
        background: ${ props => props.theme.paletteFive };
        display: flex;
        position: absolute;
        transform: rotate(-45deg);
        top: 80px;
        left: 0px;
        animation: puls 5s infinite ease-in-out;
        filter: blur(.8rem);

      }
    }

    &:hover {
      opacity: 0;
    }
  }

  & .portfolio-reference-photo {
    width: 100%;
    max-width: 400px;
    height: 220px;
  }

  & .reference-linkGH-and-linkWebsite-holder {
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 5px;
    gap: .5rem;

    & > div {
      background: ${ props => props.theme.paletteOne };
      /* border: 1px solid ${ props => props.theme.paletteOne }; */
      border-radius: 5px;
      padding: .2rem;
      opacity: .5;
      transition: opacity .4s, transform .4s;

      &:hover {
        opacity: 1;
        transform: scale(1.05);
      }
    }

    & a {
      text-decoration: none;
      color: ${ props => props.theme.paletteFive };
    }
  }
}


& .portfolio-reference-description {
  margin: 1rem;
}

@keyframes puls {
  0% {
    opacity: 1;
    left: -10px;
  }
  /* 25% {
    opacity: .6;
    left: 50px;
  } */
  50% {
    opacity: .6;
    left: 200px;
  }
  /* 75% {
    opacity: .6;
  } */
  100% {
    opacity: 1;
    left: 0px;
  }
}
`;