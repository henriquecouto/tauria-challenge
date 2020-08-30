import React from "react";
import { IoMdAdd } from "react-icons/io";

import { Container } from "./styles";
import { usePizzas } from "../../contexts/pizza";
import CardPizza from "../../components/CardPizza";
import CardLink from "../../components/CardLink";

const ListPizzas: React.FC = () => {
  const { pizzas } = usePizzas();

  return (
    <Container>
      <CardLink title="Create a new pizza!" to="/create">
        <IoMdAdd />
      </CardLink>
      {pizzas.map((pizza) => (
        <CardPizza value={pizza} key={pizza.id} />
      ))}
    </Container>
  );
};

export default ListPizzas;
