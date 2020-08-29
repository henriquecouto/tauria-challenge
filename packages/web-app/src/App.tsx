import React from "react";

import GlobalStyle from "./styles/global";
import "./assets/fonts/BebasNeue/stylesheet.css";
import "./assets/fonts/Roboto/stylesheet.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      Hello Web App!
    </div>
  );
};

export default App;
