import React from 'react';
import styled from 'styled-components';

export const StyledTopUnit = styled.div`
display: flex;
justify-content: center;
padding: 5rem;
border-bottom: 1px solid ${ props => props.theme.paletteFour };
background: ${ props => props.theme.paletteOne };
color: ${ props => props.theme.paletteFive };
width: 100%;

& .top-unit-holder {
  display: flex;
  flex-direction: column;
  border: 1px solid ${ props => props.theme.paletteFour };
  padding: 5rem;
  gap: 2rem;

}
`;