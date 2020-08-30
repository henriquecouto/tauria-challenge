import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 1px 1px 11px -5px ${(props) => props.theme.palette.primary};
  width: 270px;
  /* height: 300px; */
  padding: 20px;
  margin: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to left,
    ${(props) => props.theme.palette.primary + ", " + props.theme.palette.white}
  );
  margin: 20px 0;
`;

export const Name = styled.span`
  font-family: "Bebas Neue";
  font-size: 30pt;
  color: ${(props) => props.theme.palette.primary};
`;

export const Details = styled.div`
  font-family: "Roboto";
  font-size: 22pt;
  color: ${(props) => props.theme.palette.primary};
`;

export const Ingredients = styled.span`
  font-family: "Roboto";
  font-size: 12pt;
  color: ${(props) => props.theme.palette.secondary};
`;
