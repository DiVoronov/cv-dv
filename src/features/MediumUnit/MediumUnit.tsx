import React, { useState, useContext } from 'react';
import { StyledMediumUnit } from './MediumUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';
import { IndividualSkill } from './IndividualSkill';
import { EffectsBlock } from './EffectsBlock/EffectsBlock';
import { useSelector } from 'react-redux';
import { LanguageContext } from '../../app/context/languageContext';

export interface IIndividualSkill {
  id: number
  title: string
  value: string[]
  className: string
};

export const MediumUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  const currentLanguage = useSelector((state: RootState) => state.language);
  const languageContextValue = useContext(LanguageContext).mediumUnit;

  const skillset: IIndividualSkill[] = [
    { id: 1, title: languageContextValue.programmingLanguages[currentLanguage], value: ['TypeScript', 'JavaScript (ES6+)'], className: 'medium-unit-programming-languages' },
    { id: 2, title: languageContextValue.stack[currentLanguage], value: [
      'React and React Hooks',
      'Redux (Redux Toolkit, RTK Query)',
      'HTML5, CSS, SCSS',
      'NextJS',
      'Node.js, Express.js',
      'REST API, WebSocket',
      'Git and Github',
      'React Router',
    ], className: 'medium-unit-stack' },
    { id: 3, title: languageContextValue.librariesUI[currentLanguage], value: [
      'Styled Components',
      'Material UI',
      'Bootstrap',
      'Tailwind CSS',
      'Materialize CSS',
    ], className: 'medium-unit-ui' },
    { id: 4, title: languageContextValue.languages[currentLanguage], value: ['English - B2', 'Українська - рідна'], className: 'medium-unit-language' },
  ];

  return (
    <StyledMediumUnit theme={currentPalette}>
      <Box component='div' className='medium-unit-holder'>
        <Box component='div' className='medium-unit-title'>{languageContextValue.title[currentLanguage]}</Box>
        <Box component='div' className='medium-unit-skills-holder'>
          {
            skillset.map( skill => <IndividualSkill key={skill.className} skill={skill}/> )
          }
          {/* <Box component='div' className='medium-unit-program-language'>Program language</Box>
          <Box component='div' className='medium-unit-stack'>Stack</Box>
          <Box component='div' className='medium-unit-ui'>UI</Box>
          <Box component='div' className='medium-unit-language'>Language</Box> */}
        </Box>
      </Box>
      <EffectsBlock currentPalette={currentPalette}/>
    </StyledMediumUnit>
  );
};