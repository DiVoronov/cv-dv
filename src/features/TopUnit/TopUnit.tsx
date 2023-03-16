import React, { useState, useContext } from 'react';
import { StyledTopUnit } from './TopUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';
import avatar from '../../avatar.png';
import { Links } from '../shared/Links/Links';
import { SharedButton } from '../shared/SharedButton/SharedButton';
import { HoverSpinner } from './HoverSpinner/HoverSpinner';
import { useSelector } from 'react-redux';
import { LanguageContext } from '../../app/context/languageContext';

export const TopUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  const [ displayHover, setDisplayHover ] = useState(false);
  const handleDisplayHoverTrue = () => { setDisplayHover(true) };
  const handleDisplayHoverFalse = () => { setDisplayHover(false) };

  const currentLanguage = useSelector((state: RootState) => state.language);
  const languageContextValue = useContext(LanguageContext).topUnit;
  
  return (
    <StyledTopUnit theme={currentPalette}>
      <Box component='div' className='top-unit'>
        <Box component='div' className='top-unit-holder'>
          <Box component='div' className='top-unit-photo-holder' onMouseEnter={handleDisplayHoverTrue} onMouseLeave={handleDisplayHoverFalse}>
            <Box component='img' className='top-unit-photo' src={avatar} />
            <HoverSpinner displayHover={displayHover} currentTheme={currentTheme}/>
          </Box>
          <Box component='div' className='top-unit-welcome'>{languageContextValue.welcome[currentLanguage]}</Box>
          <Box component='div' className='top-unit-name'>{languageContextValue.name[currentLanguage]}</Box>
          <Box component='div' className='top-unit-description'>{languageContextValue.occupation[currentLanguage]}</Box>
          <Box component='div' className='top-unit-links'>
            <Links/>
          </Box>
          <SharedButton text={languageContextValue.resume[currentLanguage]} link={process.env.REACT_APP_LINK_RESUME}/>
        </Box>
      </Box>
    </StyledTopUnit>
  );
};