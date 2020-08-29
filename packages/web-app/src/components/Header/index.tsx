import React from "react";
import { IoMdPizza as Pizza } from "react-icons/io";
import { Container, Title, Subtitle } from "./styles";


const Header: React.FC = () => {
  return (
    <Container>
      <Pizza size={100} />
      <Title>Pizza Customizer</Title>
      <Subtitle>Select size, crust and ingredients and get ready!</Subtitle>
    </Container>
  );
};

export default Header;
