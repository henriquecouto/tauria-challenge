import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: ${(props) => props.theme.palette.primary};
  @media only screen and (max-width: 700px) {
    & {
      padding: 10px 20px;
    }
  }
`;

export const Input = styled.input`
  font-family: "Roboto";
  font-size: 30pt;
  color: ${(props) => props.theme.palette.white};
  padding: 15px;
  padding-right: 0;
  height: 100%;
  width: 100%;
  background-color: #0000;
  border: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  &::placeholder {
    color: ${(props) => props.theme.palette.white}aa;
  }

  @media only screen and (max-width: 700px) {
    & {
      font-size: 16pt;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.palette.secondary};
  border: none;
  border-radius: 30px;
`;

export const Button = styled.button`
  background-color: #0000;
  border: none;
  height: 80px;
  width: 80px;
  cursor: pointer;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  color: ${(props) => props.theme.palette.white};
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
