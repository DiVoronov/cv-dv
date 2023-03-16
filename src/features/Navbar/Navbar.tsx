import React, { useState, useContext } from 'react';
import { StyledNavbar} from './Navbar.style';
import { Box } from '@mui/material';
import { NavList } from './NavList';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';
import { CustomizedSwitches } from './ThemeSwitch';
import { LanguageSwitch } from './LanguageSwitch';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { closeMobileMenu, openMobileMenu, toggleMobileMenu } from '../../app/slices/mobileMenuOpenClose';

interface INavbarProps {
  position: string
};

export const Navbar: React.FC<INavbarProps> = ({ position }) => {

  const currentTheme = useSelector( (state: RootState) => state.theme );
  
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  const theme = {
    currentPalette,
    position
  };

  const mobileMenuStatus = useSelector( (state: RootState) => state.mobileMenuOpenClose );
  const dispatch = useAppDispatch();

  const handleClickOnMobileMenu = () => {dispatch(toggleMobileMenu())};
  const mobileMenuClose = () => {dispatch(closeMobileMenu())};

  return (
    <StyledNavbar theme={theme}>

      <Box component='div' className='box-link box-link-navList'>
        <NavList/>
      </Box>

      <Box component='div' className='box-link-menuIcon' onClick={handleClickOnMobileMenu}>
        <MenuIcon/>
      </Box>
      <Box component='div' className='box-link-mobileMenu' sx={{display: mobileMenuStatus ? 'flex' : 'none'}} onClick={mobileMenuClose}>
        <Box component='div'>
          <NavList/>
        </Box>
      </Box>

      
      {/* <Box component='div' className='box-logo'>
        <Box component='div' className='box-logo-item'>Resume-DV</Box>
      </Box> */}
      <Box component='div' className='box-buttons'>
        <Box component='div' className='box-buttons-holder'>
          <CustomizedSwitches/>
          <LanguageSwitch/>
        </Box>
      </Box>
    </StyledNavbar>
  );
};