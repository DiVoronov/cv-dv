import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavList = () => {

  const linksList = [
    {id: 1, link: '/', value: 'Home'},
    {id: 2, link: '/', value: 'Skills'},
    {id: 3, link: '/', value: 'Portfolio'},
  ];

  return (
    <Box>
      {
        linksList.map( link => <NavLink key={link.id} to={link.link}>{link.value}</NavLink>)
      }
    </Box>
  );
};