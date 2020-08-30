import React from "react";
import { Container } from "./styles";
import { usePizzas } from "../../contexts/pizza";
import CardPizza from "../../components/CardPizza";

const ListPizzas: React.FC = () => {
  const { pizzas } = usePizzas();

  return (
    <Container>
        {pizzas.map((pizza) => (
          <CardPizza value={pizza} key={pizza.id} />
        ))}
    </Container>
  );
};

export default ListPizzas;
