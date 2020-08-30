import React from "react";
import { IoMdPizza as Pizza, IoMdHome as Home } from "react-icons/io";
import { Container, Title, Subtitle, HomeButton } from "./styles";
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <HomeButton to="/">
        <Home />
      </HomeButton>
      <Pizza size={100} />
      <Title>Pizza Customizer</Title>
      <Subtitle>Select size, crust and ingredients and get ready!</Subtitle>
    </Container>
  );
};

export default Header;
