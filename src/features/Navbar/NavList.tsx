import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useAppDispatch } from '../../app/hooks';
import { closeMobileMenu } from '../../app/slices/mobileMenuOpenClose';
import { LanguageContext } from '../../app/context/languageContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const NavList = () => {

  const currentLanguage = useSelector((state: RootState) => state.language);
  const languageContextValue = useContext(LanguageContext).navList;

  const linksList = [
    {id: 1, link: 'top-unit-holder', value: languageContextValue.navAbout[currentLanguage]},
    {id: 2, link: 'medium-unit-holder', value: languageContextValue.navSkills[currentLanguage]},
    {id: 3, link: 'lower-unit-holder', value: languageContextValue.navPortfolio[currentLanguage]},
  ];

  const dispatch = useAppDispatch();
  const mobileMenuClose = () => {dispatch(closeMobileMenu())};

  return (
    <Box sx={{cursor: 'pointer'}}>
      {
        linksList.map( link => <Link onClick={mobileMenuClose} key={link.id} to={link.link} spy smooth duration={800}>{link.value}</Link>)
      }
    </Box>
  );
};