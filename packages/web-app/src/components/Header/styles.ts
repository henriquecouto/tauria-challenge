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
`;

export const Title = styled.span`
  font-size: 72pt;
  font-family: "Bebas Neue";
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
