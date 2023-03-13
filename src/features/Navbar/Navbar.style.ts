import React from 'react';
import styled from 'styled-components';

export const StyledNavbar = styled.div`
display: flex;
justify-content: space-between;
padding: .5rem;
border-bottom: 1px solid ${ props => props.theme.paletteFour };
background: ${ props => props.theme.paletteOne };
color: ${ props => props.theme.paletteFive };
min-width: max-content;

& .box-link a {
  color: ${ props => props.theme.paletteFive };
  text-decoration: none;
  margin: 0px 1rem;
}

& .box-buttons-holder {
  display: flex;
  justify-content: space-between;
}

& .box-link, .box-logo, .box-buttons-holder {
  display: flex;
  align-items: center;

}
`;