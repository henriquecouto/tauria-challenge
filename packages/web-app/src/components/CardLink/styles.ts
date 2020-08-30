import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  box-shadow: 1px 1px 11px -5px ${(props) => props.theme.palette.primary};
  background-color: ${(props) => props.theme.palette.primary};
  width: 270px;
  padding: 20px;
  margin: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 30pt;
  font-family: "Bebas Neue";
  color: ${(props) => props.theme.palette.white}
`;
