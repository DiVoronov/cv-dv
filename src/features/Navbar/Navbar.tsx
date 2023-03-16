import React, { useContext } from 'react';
import { StyledNavbar} from './Navbar.style';
import { Box } from '@mui/material';
import { NavList } from './NavList';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';
import { CustomizedSwitches } from './ThemeSwitch';
import { LanguageSwitch } from './LanguageSwitch';
import { useAppSelector } from '../../app/hooks';
import { useSelector } from 'react-redux';

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

  return (
    <StyledNavbar theme={theme}>
      <Box component='div' className='box-link'>
        <NavList/>
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