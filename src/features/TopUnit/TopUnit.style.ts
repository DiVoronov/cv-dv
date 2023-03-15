import React from 'react';
import styled from 'styled-components';

export const StyledTopUnit = styled.div`
display: flex;
justify-content: center;
border-bottom: 1px solid ${ props => props.theme.paletteFour };
background: ${ props => props.theme.paletteFive };
color: ${ props => props.theme.paletteOne };
width: 100%;

& .top-unit {
  display: flex;
  justify-content: center;
  padding: 5rem;
  border-bottom: 1px solid ${ props => props.theme.paletteFour };
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

      & .top-unit-photo {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        /* border: 1px solid ${ props => props.theme.paletteFour }; */

      }
    }

  }
}
`;