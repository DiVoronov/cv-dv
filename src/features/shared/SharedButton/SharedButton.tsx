import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { StyledSharedButton } from './SharedButton.style';
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { ICurrentThemesColor, ThemeContext } from '../../../app/context/themeContext/themeContext';
import { useSelector } from 'react-redux';

interface ISharedButtonProps {
  text: string
  link?: string
};

export const SharedButton: React.FC<ISharedButtonProps> = ({ text, link }) => {

  const currentTheme = useSelector( (state: RootState) => state.theme );
  const currentPalette: ICurrentThemesColor = useContext(ThemeContext)[currentTheme];

  return (
    <StyledSharedButton theme={currentPalette} target='blank' href={link}>
      <Box component='button' className='styled-button'>
        <Box>{ text }</Box>
      </Box>
    </StyledSharedButton>
  );
};