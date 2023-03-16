import React, { useState, useContext } from 'react';
import { Box } from '@mui/material';
import { StyledPortfolioReference } from './PortfolioReference.style';
import { RootState } from '../../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../../app/context/themeContext/themeContext';
import { useSelector } from 'react-redux';
import { IPortfolioReference } from '../../LowerUnit/LowerUnit';
import { LanguageContext } from '../../../app/context/languageContext';

interface IStyledPortfolioReferenceProps {
  portfolioReference: IPortfolioReference
};

export const PortfolioReference: React.FC<IStyledPortfolioReferenceProps> = ({ portfolioReference }) => {

  const currentTheme = useSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  const [ renderCoverTitle, setRenderCoverTitle ] = useState(false);

  const handleRenderCoverTrue = () => {setRenderCoverTitle(true)};
  const handleRenderCoverFalse = () => {setRenderCoverTitle(false)};

  const currentLanguage = useSelector((state: RootState) => state.language);
  const languageContextValue = useContext(LanguageContext).lowerUnit;

  return (
    <StyledPortfolioReference theme={currentPalette}>
      <Box component='div' className='portfolio-reference-holder'>
        {/* <Box component='div' className='portfolio-reference-title'>
          { portfolioReference.title }
        </Box> */}
        <Box component='div' className='portfolio-reference-for-position'>
          <Box 
            component='div'
            className='portfolio-reference-photo portfolio-reference-cover' 
            sx={{ 
              opacity: !renderCoverTitle ? 1 : 0,
            }}
            onMouseEnter={handleRenderCoverTrue}
            onMouseLeave={handleRenderCoverFalse}
          >
            <Box>{ portfolioReference.title }</Box>
          </Box>
          <Box 
            component='img' alt='' 
            className='portfolio-reference-photo' 
            src={portfolioReference.photo}
          />
          <Box component='div' className='reference-linkGH-and-linkWebsite-holder'>
            <Box component='div' className='reference-linkGH-holder'>
              <Box component='a' href={portfolioReference.linkGH} target='blank'>
                {languageContextValue.onlineStore.repository[currentLanguage]}
              </Box>
            </Box>
            <Box component='div' className='reference-linkWebsite-holder'>
              <Box component='a' href={portfolioReference.linkWebsite} target='blank'>
                {languageContextValue.onlineStore.visit[currentLanguage]}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component='div' className='portfolio-reference-description'>
          { portfolioReference.description }
        </Box>
      </Box>
    </StyledPortfolioReference>
  );
};