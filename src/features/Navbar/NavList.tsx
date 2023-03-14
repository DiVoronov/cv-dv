import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export const NavList = () => {

  const linksList = [
    {id: 1, link: 'top-unit-holder', value: 'Home'},
    {id: 2, link: 'medium-unit-holder', value: 'Skills'},
    {id: 3, link: 'lower-unit-holder', value: 'Portfolio'},
  ];

  return (
    <Box sx={{cursor: 'pointer'}}>
      {
        linksList.map( link => <Link key={link.id} to={link.link} spy smooth duration={800}>{link.value}</Link>)
      }
    </Box>
  );
};