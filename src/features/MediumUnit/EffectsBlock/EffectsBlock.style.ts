import React from 'react';
import styled from 'styled-components';

export const StyledEffectsBlock = styled.div`
position: absolute;
display: flex;
flex-direction: column;
/* justify-content: center; */
/* padding: 5rem; */
/* border-bottom: 1px solid ${ props => props.theme.paletteFour }; */
/* background: red; */
width: 100%;
height: 100%;
top: -100px;
left: -400px;
z-index: 1;
/* overflow: hidden; */
gap: 1rem;
transform: rotate(-25deg);
/* filter: blur(2px); */

& > div {
  width: max-content;
  font-size: 3rem;
  color: ${ props => props.theme.paletteTwo };
  opacity: .3;
  
}

& .effect-block-left {
    padding-right: 4rem;
  }

`;