import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
  body {
    font-size: 30pt;
    font-family: 'Roboto';
    background-color: ${props => props.theme.palette.white}
  }
`;