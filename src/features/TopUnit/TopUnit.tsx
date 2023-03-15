import React, { useContext } from 'react';
import { StyledTopUnit } from './TopUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';
import avatar from '../../avatar.png';
import { Links } from '../shared/Links/Links';
import { SharedButton } from '../shared/SharedButton/SharedButton';

export const TopUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  return (
    <StyledTopUnit theme={currentPalette}>
      <Box component='div' className='top-unit'>
        <Box component='div' className='top-unit-holder'>
          <Box component='div' className='top-unit-photo-holder'>
            <Box component='img' className='top-unit-photo' src={avatar}/>
          </Box>
          <Box component='div' className='top-unit-welcome'>Welcome!</Box>
          <Box component='div' className='top-unit-name'>My name is Dmytro Voronov</Box>
          <Box component='div' className='top-unit-description'>I'm a Frontend React Developer</Box>
          <Box component='div' className='top-unit-links'>
            <Links/>
          </Box>
          <SharedButton text='DOWNLOAD RESUME' link={process.env.REACT_APP_LINK_RESUME}/>
        </Box>
      </Box>
    </StyledTopUnit>
  );
};