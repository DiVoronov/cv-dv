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

  const referencesList: IPortfolioReference[] = [
    {id: 1, linkGH: 'https://github.com/DiVoronov/shop-dv', linkWebsite: 'https://divoronov.github.io/shop-dv/', photo: shop, title: 'Online store', description: 'Online store with authorization on Firebase, work with LocalStorage and dynamic product pages.'},
    {id: 2, linkGH: 'https://github.com/DiVoronov/wordle-ua-dv', linkWebsite: 'https://divoronov.github.io/wordle-ua-dv/', photo: wordle, title: 'Game "Wordle Ukrainian"', description: 'Wordle game - you need to solve the hidden word in six attempts'},
    {id: 3, linkGH: 'https://github.com/DiVoronov/sign-up-app', linkWebsite: 'https://divoronov.github.io/sign-up-app/', photo: signUp, title: 'Sign Up App', description: 'Application that implements the stages of authorization through Shopify and Google'},
    {id: 4, linkGH: 'https://github.com/DiVoronov/jobs', linkWebsite: 'https://divoronov.github.io/jobs/', photo: jobs, title: 'Job search website', description: 'Job search site with dynamic pagination and location display customization with Geoapify API'},
  ];

  return (
    <StyledLowerUnit theme={currentPalette}>
      <Box component='div' className='lower-unit-border-shape'>
        <Box component='div' className='lower-unit-holder'>
          <Box component='div' className='lower-unit-title'>Portfolio</Box>
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