import React from 'react';
import styled from 'styled-components';

export const StyledBottomUnit = styled.div`
display: flex;
justify-content: center;
padding: 2rem;
background: ${ props => props.theme.paletteFive };
color: ${ props => props.theme.paletteOne };
width: 100vw;
`;