import React from 'react';
import styled from 'styled-components';

export const StyledMediumUnit = styled.div`
display: flex;
justify-content: center;
padding: 5rem;
/* border-bottom: 1px solid ${ props => props.theme.paletteFour }; */
background: ${ props => props.theme.paletteOne };
color: ${ props => props.theme.paletteFive };
width: 100%;

& .medium-unit-holder {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & .medium-unit-title {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: .2rem;
    margin-bottom: 2rem;
  }
  
  & .medium-unit-skills-holder {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;

    & > div {
      border: 1px solid ${ props => props.theme.paletteFour };
      width: 300px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      transition: transform .7s, border-radius .7s, background 1s, color .7s;
      /* background: ${ props => props.theme.paletteFive };
      color: ${ props => props.theme.paletteOne }; */

      &:hover {
        transform: scale(1.05);
        border-radius: 0% 0% 10% 10%;
        background: ${ props => props.theme.paletteFive };
        color: ${ props => props.theme.paletteOne };
        /* animation: flip .5s ease-in-out both; */
      }

      & .skill-title {
        font-size: 1.5rem;
        overflow-wrap: normal;
      }

      & .skills-options > div {
        display: flex;
      }
      
    }

    /* & .flip-hover {
      animation: flip .7s ease-in-out both;
    } */

    /* @keyframes flip {
      0% {
        transform: translateZ(0) rotateX(0);
      }
      100% {
        transform: translateZ(160px) rotateX(180deg);
        background: ${ props => props.theme.paletteFive };
        color: ${ props => props.theme.paletteOne };
      }
    } */
  }
}
`;