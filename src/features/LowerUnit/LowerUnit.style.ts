import React from 'react';
import styled from 'styled-components';

export const StyledLowerUnit = styled.div`

/* border-bottom: 1px solid ${ props => props.theme.paletteFour }; */
background: ${ props => props.theme.paletteFive };
width: 100%;

& .lower-unit-border-shape {
  display: flex;
  justify-content: center;
  padding: 5rem;
  /* width: 100%; */
  border-radius: 0% 0% 25% 25%;
  background: ${ props => props.theme.paletteOne };
  color: ${ props => props.theme.paletteFive };

  & .lower-unit-holder {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & .lower-unit-references-holder {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }
  }
}
`;