import React from 'react';
import styled from 'styled-components';

export const StyledMediumUnit = styled.div`
display: flex;
justify-content: center;
padding: 5rem;
border-bottom: 1px solid ${ props => props.theme.paletteFour };
background: ${ props => props.theme.paletteOne };
color: ${ props => props.theme.paletteFive };
width: 100%;

& .medium-unit-holder {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & .medium-unit-skills-holder {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    & > div {
      border: 1px solid ${ props => props.theme.paletteFour };
      padding: 1rem;
    }
  }
}
`;