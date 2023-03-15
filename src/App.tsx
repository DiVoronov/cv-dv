import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
// import { Navbar } from './features/Navbar/Navbar';
import { MainPage } from './pages/MainPage';
import { ParallaxNavbar } from './features/Navbar/ParallaxNavbar/ParallaxNavbar';
import { Scroll } from './features/shared/Scroll/Scroll';

export const App = () => {
  return (
    <Box className="App" sx={{maxWidth: '100vw'}}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ParallaxNavbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/contacts" element={<></>} />
          <Route path="*" element={<></>} />
        </Routes>
        <Scroll/>
      </BrowserRouter>
    </Box>
  );
};
