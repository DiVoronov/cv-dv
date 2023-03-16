import React, { useState, useContext } from 'react';
import { StyledMediumUnit } from './MediumUnit.style';
import { Box } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../app/context/themeContext/themeContext';
import { IndividualSkill } from './IndividualSkill';

export interface IIndividualSkill {
  id: number
  title: string
  value: string[]
  className: string
};

export const MediumUnit = () => {

  const currentTheme = useAppSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  const skillset: IIndividualSkill[] = [
    { id: 1, title: 'Programming languages', value: ['TypeScript', 'JavaScript (ES6+)'], className: 'medium-unit-programming-languages' },
    { id: 2, title: 'Stack', value: [
      'React and React Hooks',
      'Redux (Redux Toolkit, RTK Query)',
      'HTML5, CSS, SCSS',
      'NextJS',
      'Node.js, Express.js',
      'REST API, WebSocket',
      'Git and Github',
      'React Router',
    ], className: 'medium-unit-stack' },
    { id: 3, title: 'UI libraries', value: [
      'Styled Components',
      'Material UI',
      'Bootstrap',
      'Tailwind CSS',
      'Materialize CSS',
    ], className: 'medium-unit-ui' },
    { id: 4, title: 'Language', value: ['English - B2', 'Українська - рідна'], className: 'medium-unit-language' },

  ];

  return (
    <StyledMediumUnit theme={currentPalette}>
      <Box component='div' className='medium-unit-holder'>
        <Box component='div' className='medium-unit-title'>My skills</Box>
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
    </StyledMediumUnit>
  );
};