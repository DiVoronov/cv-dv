import React from 'react';
import styled from 'styled-components';

export const StyledSharedButton = styled.a`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;

& .styled-button {
  /* width: 130px; */
  /* height: 40px; */
  font-size: 1rem;
  cursor: pointer;
  background-color: #171717;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all .4s;
  padding: .4rem;
  width: max-content;
  font-weight: 900;
  letter-spacing: .2rem;
  border: 1px solid ${ props => props.theme.paletteFive };

  &:hover {
    border-radius: 5px;
    transform: translateY(-10px);
    box-shadow: 0 7px 0 -2px ${ props => props.theme.paletteFour },
    0 15px 0 -4px ${ props => props.theme.paletteTwo },
    0 16px 10px -3px ${ props => props.theme.paletteTwo };
  }

  &:active {
    transition: all 0.2s;
    transform: translateY(-5px);
    box-shadow: 0 2px 0 -2px ${ props => props.theme.paletteFour },
    0 8px 0 -4px ${ props => props.theme.paletteTwo },
    0 12px 10px -3px ${ props => props.theme.paletteTwo };
  }
}



`;