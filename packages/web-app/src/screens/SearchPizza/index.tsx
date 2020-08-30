import React, { useCallback, useState, useEffect } from "react";

import { Container } from "./styles";
import CardPizza from "../../components/CardPizza";
import CardLink from "../../components/CardLink";
import { useParams } from "react-router-dom";
import { PizzaAPI } from "../../api";
import { IPizza } from "../../contexts/pizza";

const SearchPizza: React.FC = () => {
  const { name }: any = useParams();

  const [pizzas, setPizzas] = useState([] as IPizza[]);

  const searchPizza = useCallback(async () => {
    try {
      const { data } = await PizzaAPI.get(`/pizzas/${name}`);
      setPizzas(data);
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  useEffect(() => {
    searchPizza();
  }, [searchPizza]);

  return (
    <Container>
      {pizzas.map((pizza) => (
        <CardPizza value={pizza} key={pizza.id} />
      ))}
    </Container>
  );
};

export default SearchPizza;
