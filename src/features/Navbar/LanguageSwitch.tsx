import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch } from '../../app/hooks';
import { changeLanguage } from '../../app/slices/languageSlice';

const languages = [ 'EN', 'UA' ];

export const LanguageSwitch = () => {

  const dispatch = useAppDispatch();
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiInputBase-root': { background: '#fff', },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-select-currency"
          select
          defaultValue="EN"
          size='small'
          color='error'
          onChange={handleLanguageChange}
        >
          {languages.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
  );
};