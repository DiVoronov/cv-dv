import React from 'react';
import styled from 'styled-components';

export const StyledTopUnit = styled.div`
display: flex;
justify-content: center;
/* border-bottom: 1px solid ${ props => props.theme.paletteFour }; */
background: ${ props => props.theme.paletteFive };
color: ${ props => props.theme.paletteOne };
width: 100%;

& .top-unit {
  display: flex;
  justify-content: center;
  padding: 5rem 5rem 0px 5rem;
  /* border-bottom: 1px solid ${ props => props.theme.paletteFour }; */
  background: ${ props => props.theme.paletteOne };
  color: ${ props => props.theme.paletteFive };
  width: 100%;
  border-radius: 50% 50% 0% 0%;

  & .top-unit-holder {
    display: flex;
    flex-direction: column;
    /* border: 1px solid ${ props => props.theme.paletteFour }; */
    padding: 3rem;
    gap: .3rem;
    font-size: 1.2rem;

    & .top-unit-welcome {
      font-weight: 900;
      letter-spacing: .2rem;
      z-index: 500;
    }
    
    & .top-unit-name {
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: .2rem;
    }

    & .top-unit-description {
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: .2rem;
    }

    & .top-unit-photo-holder {
      height: 250px;
      margin-bottom: 2rem;
      position: relative;
      cursor: pointer;

      & .top-unit-photo {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        /* border: 1px solid ${ props => props.theme.paletteFour }; */

      }

      & .top-unit-hover-circle {
        position: absolute;
        top: 0px;
        left: 50px;
        transition: display .3s;

        & > img {
          position: absolute;
          /* border: 2px solid #fff; */
        }

        & .top-unit-cirOne {
          top: -50px;
          left: -35px;
          width: 350px;
          height: 350px;
          opacity: .9;
          animation: spinRight 50s linear infinite;
        }

        & .top-unit-cirTwo {
          top: -77px;
          left: -60px;
          opacity: .1;
          width: 400px;
          height: 400px;
          animation: spinLeft 50s linear infinite;
        }

        & .top-unit-cirThree {
          top: -25px;
          left: -10px;
          width: 300px;
          height: 300px;
          opacity: .3;
          animation: spinLeft 50s linear infinite;
        }
      }
    }

  }
}

@keyframes spinRight {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

@keyframes spinLeft {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: -360deg;
  }
}
`;