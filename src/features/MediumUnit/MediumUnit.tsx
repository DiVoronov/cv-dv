import React, { useContext } from 'react';
import { StyledMediumUnit } from './MediumUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';

export const MediumUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  return (
    <StyledMediumUnit theme={currentPalette}>
      <Box component='div' className='medium-unit-holder'>
        <Box component='div' className='medium-unit-title'>My skills</Box>
        <Box component='div' className='medium-unit-skills-holder'>
          <Box component='div' className='medium-unit-program-language'>Program language</Box>
          <Box component='div' className='medium-unit-stack'>Stack</Box>
          <Box component='div' className='medium-unit-ui'>UI</Box>
          <Box component='div' className='medium-unit-language'>Language</Box>
        </Box>
      </Box>
    </StyledMediumUnit>
  );
};