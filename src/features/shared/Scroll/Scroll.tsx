import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { StyledScroll } from './Scroll.style';
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../../app/context/themeContext/themeContext';
import { useSelector } from 'react-redux';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const Scroll = () => {

  const currentTheme = useSelector( (state: RootState) => state.theme );
  const isScrollAppear = useSelector( (state: RootState) => state.isScrollAppear );

  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  const toTopPage = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return ( 
    <>
      {
        isScrollAppear
        &&
        <StyledScroll onClick={toTopPage} theme={currentPalette}>
          <Box component='div' className='scroll-btn'>
            <ArrowCircleUpIcon fontSize='large'/>
          </Box>
        </StyledScroll>
      }
    </>
  );
};