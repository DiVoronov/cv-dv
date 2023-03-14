import React, { useContext } from 'react';
import { StyledLowerUnit } from './LowerUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';

export const LowerUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  return (
    <StyledLowerUnit theme={currentPalette}>
      <Box component='div' className='lower-unit-border-shape'>
        <Box component='div' className='lower-unit-holder'>
          <Box component='div' className='lower-unit-title'>Portfolio</Box>
          <Box component='div' className='lower-unit-references-holder'>
            {
              [
                {id: 1, linkGH: '', linkWebsite: '', photo: ''},
                {id: 2, linkGH: '', linkWebsite: '', photo: ''},
                {id: 3, linkGH: '', linkWebsite: '', photo: ''},
                {id: 4, linkGH: '', linkWebsite: '', photo: ''},
              ].map( item => {
                return (
                  <Box key={item.id}>{item.id}</Box>
                );
              })
            }
          </Box>
        </Box>
      </Box>
    </StyledLowerUnit>
  );
};