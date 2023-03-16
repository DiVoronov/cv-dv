import React, { useContext } from 'react';
import { StyledLowerUnit } from './LowerUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';
import { PortfolioReference } from '../shared/PortfolioReference/PortfolioReference';
import shop from './shop.png';
import wordle from './wordle.png';
import signUp from './signUp.png';
import jobs from './jobs.png';
import { useSelector } from 'react-redux';
import { LanguageContext } from '../../app/context/languageContext';

export interface IPortfolioReference {
  id: number
  linkGH: string
  linkWebsite: string
  photo: string
  title: string
  description: string
};

export const LowerUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  const currentLanguage = useSelector((state: RootState) => state.language);
  const languageContextValue = useContext(LanguageContext).lowerUnit;
  
  const referencesList: IPortfolioReference[] = [
    {id: 1, linkGH: 'https://github.com/DiVoronov/shop-dv', linkWebsite: 'https://divoronov.github.io/shop-dv/', photo: shop, title: languageContextValue.onlineStore.title[currentLanguage], description: languageContextValue.onlineStore.description[currentLanguage]},
    {id: 2, linkGH: 'https://github.com/DiVoronov/wordle-ua-dv', linkWebsite: 'https://divoronov.github.io/wordle-ua-dv/', photo: wordle, title: languageContextValue.wordle.title[currentLanguage], description: languageContextValue.wordle.description[currentLanguage]},
    {id: 3, linkGH: 'https://github.com/DiVoronov/sign-up-app', linkWebsite: 'https://divoronov.github.io/sign-up-app/', photo: signUp, title: languageContextValue.signUp.title[currentLanguage], description: languageContextValue.signUp.description[currentLanguage]},
    {id: 4, linkGH: 'https://github.com/DiVoronov/jobs', linkWebsite: 'https://divoronov.github.io/jobs/', photo: jobs, title: languageContextValue.jobs.title[currentLanguage], description: languageContextValue.jobs.description[currentLanguage]},
  ];

  return (
    <StyledLowerUnit theme={currentPalette}>
      <Box component='div' className='lower-unit-border-shape'>
        <Box component='div' className='lower-unit-holder'>
          <Box component='div' className='lower-unit-title'>{languageContextValue.title[currentLanguage]}</Box>
          <Box component='div' className='lower-unit-references-holder'>
            {
              referencesList.map( portfolioReference => {
                return (
                  <PortfolioReference key={portfolioReference.id} portfolioReference={portfolioReference}/>
                );
              })
            }
          </Box>
        </Box>
      </Box>
    </StyledLowerUnit>
  );
};