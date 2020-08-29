import styled from "styled-components";

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
