import React from 'react';
import styled from 'styled-components';

export const StyledLinks = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;

& .links-holder {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  & .link-logo-link {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: .2rem;
    border-radius: 50%;
    transition: opacity .4s, transform .4s, padding .4s;

    &:hover {
      opacity: 0.5;
      transform: scale(1.05);
    }

    & .link-logo {
      width: 40px;
      height: 40px;
    }
  }
}
`;