import { Box, Button, Container, createTheme, CssBaseline, GlobalStyles, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
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
import { useTranslation } from 'react-i18next';

function App() {
  const [count, setCount] = useState(0);

  const [lang, setLang] = useState("en");
  const {t, i18n} = useTranslation("namespace");

  let darkMode = createTheme({
    palette:{
      mode:"dark",
      primary:green,
      secondary:yellow
    }
  });

  function changeLanguage() {
    i18n.changeLanguage(lang);
  }

  useEffect(()=>{
      changeLanguage();
      if (lang === "ar") {
          document.documentElement.setAttribute("dir", "rtl");
      } else {
          document.documentElement.setAttribute("dir", "ltr");
      }

  },[lang])

  return (
    <>
      <ThemeProvider theme={darkMode}>
        <GlobalStyles />
          <CssBaseline />
            <NavBar lang={lang} setLang={setLang} />
            <Home lang={lang} />
            <Jumbotron />
            <About />
            <Prices lang={lang} />
            <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
