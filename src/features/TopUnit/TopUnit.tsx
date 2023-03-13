import React, { useContext } from 'react';
import { StyledTopUnit } from './TopUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';

export const TopUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  return (
    <StyledTopUnit theme={currentPalette}>
      <Box component='div' className='top-unit-holder'>
        <Box component='div' className='top-unit-photo-holder'>
          <Box component='div' className='top-unit-photo'>photo</Box>
        </Box>
        <Box component='div' className='top-unit-name'>Name</Box>
        <Box component='div' className='top-unit-description'>description</Box>
        <Box component='div' className='top-unit-links'>links</Box>
        <Box component='div' className='top-unit-cv'>cv</Box>
      </Box>
    </StyledTopUnit>
  );
};