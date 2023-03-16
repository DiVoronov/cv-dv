import { Box } from '@mui/material';
import React from 'react';
import { TopUnit } from '../features/TopUnit/TopUnit';
import { MediumUnit } from '../features/MediumUnit/MediumUnit';
import { LowerUnit } from '../features/LowerUnit/LowerUnit';
import { BottomUnit } from '../features/BottomUnit/BottomUnit';
import { useAppDispatch } from '../app/hooks';
import { closeMobileMenu } from '../app/slices/mobileMenuOpenClose';

export const MainPage = () => {

  const dispatch = useAppDispatch();
  const mobileMenuClose = () => {dispatch(closeMobileMenu())};
  
  return (
    <Box 
    component='div'
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center',
        width: '100vw'
      }}
      onClick={mobileMenuClose}
    >
      <TopUnit/>
      <MediumUnit/>
      <LowerUnit/>
      <BottomUnit/>
    </Box>
  );
};