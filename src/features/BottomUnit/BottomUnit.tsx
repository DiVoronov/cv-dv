import React, { useContext } from 'react';
import { StyledBottomUnit } from './BottomUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';

export const BottomUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  return (
    <StyledBottomUnit theme={currentPalette}>
      <Box component='div' className='bottom-unit-holder'>
        <Box component='div' className='bottom-unit-title'>Links</Box>
        <Box component='div' className='bottom-unit-links'>
          <Box>links</Box>
          {/* <LinksList/> */}
        </Box>
      </Box>
    </StyledBottomUnit>
  );
};