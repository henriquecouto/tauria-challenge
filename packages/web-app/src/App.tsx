import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import defaultTheme from "./styles/themes/default";
import "./assets/fonts/BebasNeue/stylesheet.css";
import "./assets/fonts/Roboto/stylesheet.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPizzas from "./screens/ListPizzas";
import CreatePizza from "./screens/CreatePizza";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <ListPizzas />
          </Route>
          <Route exact path="/create">
            <CreatePizza />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
