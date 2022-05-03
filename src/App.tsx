import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

// @ts-ignore
import Home from "./pages/index";

function App() {
  let darkTheme = createTheme({
    palette: {
      mode: "dark",
      // @ts-ignore
      neutral: {
        main: "red",
        contrastText: "black",
      },
    },
  });
  darkTheme = responsiveFontSizes(darkTheme);
  return (
    <HashRouter>
      <ParallaxProvider>
        <ThemeProvider theme={darkTheme}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </ThemeProvider>
      </ParallaxProvider>
    </HashRouter>
  );
}

export default App;
