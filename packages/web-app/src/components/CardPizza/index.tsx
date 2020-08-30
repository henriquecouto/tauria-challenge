import React from "react";

import { IPizza } from "../../contexts/pizza";
import { Container, Name, Details, Divider, Ingredients } from "./styles";

type Props = {
  value: IPizza;
};

const CardPizza: React.FC<Props> = ({ value }) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value.price);

  return (
    <Container>
      <Name>{value.name}</Name>
      <Ingredients>{value.toppings.join(", ")}</Ingredients>
      <Divider />
      <Details>
        {price} · {value.size}
      </Details>
    </Container>
  );
};

export default CardPizza;
