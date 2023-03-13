import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import { Navbar } from './features/Navbar/Navbar';
import { MainPage } from './pages/MainPage';

export const App = () => {
  return (
    <Box className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/contacts" element={<></>} />
          <Route path="*" element={<></>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};
