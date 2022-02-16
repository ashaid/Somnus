import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

// @ts-ignore
import Home from "./pages/index";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* // <Route index element={<Home />}></Route> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
