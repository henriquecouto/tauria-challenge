import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  padding: 0 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.white};

  @media only screen and (max-width: 700px) {
    & {
      padding: 0 20px;
    }
  }
`;

export const Title = styled.span`
  font-size: 72pt;
  font-family: "Bebas Neue";
  text-align: center;

  @media only screen and (max-width: 700px) {
    & {
      font-size: 42pt;
    }
  }
`;

export const Subtitle = styled.span`
  font-size: 16pt;
  font-family: "Roboto";
`;

export const HomeButton = styled(Link)`
  box-shadow: 1px 1px 11px -5px ${(props) => props.theme.palette.primary};
  border-radius: 15px;
  background-color: #0000;
  color: ${(props) => props.theme.palette.secondary};
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`;
