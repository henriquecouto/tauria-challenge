import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Form = styled.form`
  box-shadow: 1px 1px 11px -5px ${(props) => props.theme.palette.primary};
  border-radius: 30px;
  width: 100%;
  max-width: 1040px;
  font-family: "Roboto";
  font-size: 16pt;
  color: ${(props) => props.theme.palette.primary};
`;

export const Label = styled.label`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-family: "Roboto";
  font-size: 16pt;
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.white};
  margin-top: 5px;

  &::placeholder {
    color: ${(props) => props.theme.palette.white}88;
  }
`;

export const Select = styled.select`
  width: 100%;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-family: "Roboto";
  font-size: 16pt;
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.white};
  margin-top: 5px;
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

export const CheckboxLabel = styled(Label)`
  margin: 0px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  width: 30%;
`;

export const CheckboxItens = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
