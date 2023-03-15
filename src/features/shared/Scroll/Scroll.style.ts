import React from 'react';
import styled from 'styled-components';

export const StyledScroll = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
position: fixed;
top: 90%;
right: 5%;
opacity: 0.3;
padding: 0px;
background: ${ props => props.theme.paletteFive };
border-radius: 50%;
transition: transform .6s, opacity .6s, padding .6s;
color: ${ props => props.theme.paletteOne };

&:hover {
  opacity: 1;
  cursor: pointer;
  transform: scale(1.1);
  padding: .6rem;

}
& div {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;