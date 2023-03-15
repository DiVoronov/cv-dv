import React from 'react';
import { Box } from '@mui/material';
import { StyledLinks } from './Links.style';
import github from './github.png';
import gmail from './gmail.png';
import linkedin from './linkedin.png';

export const Links = () => {

  const logos = [ 
    {logo: github, link: 'https://github.com/DiVoronov'}, 
    {logo: gmail, link: 'mailto:devdivoron@gmail.com'}, 
    {logo: linkedin, link: 'https://www.linkedin.com/in/dmytro-voronov-frontend-dev/'} 
  ];
  return (
    <StyledLinks>
      <Box component='div' className='links-holder'>
        {
          logos.map( logo => {
            return (
              <Box component='a' className='link-logo-link' key={logo.link} href={logo.link} target='blank'>
                <Box component='img' className='link-logo' alt={logo.link} src={logo.logo} />
              </Box>
            )
          })
        }
      </Box>
    </StyledLinks>
  );
};