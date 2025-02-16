import { Box, Button, Container, createTheme, CssBaseline, GlobalStyles, Typography } from '@mui/material';
import { useState } from 'react'
import { ThemeProvider } from '@emotion/react';
import { green, yellow } from '@mui/material/colors';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import NavBar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import Jumbotron from './pages/Jumbotron.jsx';
import About from './pages/About.jsx';
import Prices from './pages/Prices.jsx';
import Footer from './pages/Footer.jsx';

function App() {
  const [count, setCount] = useState(0);
  let darkMode = createTheme({
    palette:{
      mode:"dark",
      primary:green,
      secondary:yellow
    }
  })

  return (
    <>
      <ThemeProvider theme={darkMode}>
        <GlobalStyles />
          <CssBaseline />
            <NavBar />
            <Home />
            <Jumbotron />
            <About />
            <Prices />
            <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
