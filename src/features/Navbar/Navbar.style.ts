import React from 'react';
import styled from 'styled-components';

export const StyledNavbar = styled.div`
display: flex;
justify-content: space-between;
padding: .5rem;
/* border-bottom: 1px solid ${ props => props.theme.paletteFour }; */
background: ${ props => props.theme.currentPalette.paletteFive };
color: ${ props => props.theme.currentPalette.paletteOne };
min-width: max-content;
position: ${ props => props.theme.position };
width: 100%;
margin: auto;
top: 0px;
left: 0px;
/* transition: appear 1s linear ease-in-out; */
animation: appear 0.4s ease-in;
z-index: 1000;

& .box-disappear {
  animation: disappear 0.4s ease-out;
}

& .box-link a {
  color: ${ props => props.theme.currentPalette.paletteOne };
  text-decoration: none;
  font-weight: 900;
  letter-spacing: .2rem;
  margin: 0px 1rem;
  transition: background .4s;
  background: ${ props => props.theme.currentPalette.paletteFive };
  padding: .3rem;
  border-radius: 5px;

  &:hover {
    background: ${ props => props.theme.currentPalette.paletteOne };
    color: ${ props => props.theme.currentPalette.paletteFive };
  }
}

& .box-buttons-holder {
  display: flex;
  justify-content: space-between;
}

& .box-link, .box-logo, .box-buttons-holder {
  display: flex;
  align-items: center;

}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}


@keyframes disappear {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-40px);
  }
}

`;