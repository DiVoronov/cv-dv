import React from 'react';
import { Box } from '@mui/material';
import cirOne from './cirOne.png';
import cirTwo from './cirTwo.png';
import cirThree from './cirThree.png';
import cirFourWhite from './cirFourWhite.png';
import cirTwoWhite from './cirTwoWhite.png';
import cirThreeWhite from './cirThreeWhite.png';

interface IHoverSpinnerProps {
  displayHover: boolean
  currentTheme: string
}

export const HoverSpinner: React.FC<IHoverSpinnerProps> = ({ displayHover, currentTheme }) => {
  return (
    <Box component='div' className='top-unit-hover-circle' style={{opacity: displayHover ? '1' : '0', transition: 'opacity .3s'}}>
      {
        currentTheme === 'light'
        ? 
        <>
          <Box component='img' className='top-unit-cirOne' src={cirOne} alt='' />
          <Box component='img' className='top-unit-cirTwo' src={cirTwo} alt='' />
          <Box component='img' className='top-unit-cirThree' src={cirThree} alt='' />
        </>
        :
        <>
          <Box component='img' className='top-unit-cirOne' src={cirFourWhite} alt='' />
          <Box component='img' className='top-unit-cirTwo' src={cirTwoWhite} alt='' />
          <Box component='img' className='top-unit-cirThree' src={cirThreeWhite} alt='' />
        </>
      }
    </Box>
  );
};