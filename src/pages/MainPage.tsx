import { Box } from '@mui/material';
import React from 'react';
import { TopUnit } from '../features/TopUnit/TopUnit';
import { MediumUnit } from '../features/MediumUnit/MediumUnit';
import { LowerUnit } from '../features/LowerUnit/LowerUnit';
import { BottomUnit } from '../features/BottomUnit/BottomUnit';

export const MainPage = () => {
  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center',
        width: '100vw'
      }}
    >
      <TopUnit/>
      <MediumUnit/>
      <LowerUnit/>
      <BottomUnit/>
    </Box>
  );
};