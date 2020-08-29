import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import defaultTheme from "./styles/themes/default";
import "./assets/fonts/BebasNeue/stylesheet.css";
import "./assets/fonts/Roboto/stylesheet.css";

import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyle />
      Hello Web App!
    </ThemeProvider>
  );
};

export default App;
