import React, { useState, useEffect, FormEvent, useCallback } from "react";
import {
  Container,
  Form,
  Label,
  Input,
  Select,
  Checkbox,
  CheckboxLabel,
  CheckboxItens,
  Info,
  InfoAction,
  Button,
} from "./styles";
import { usePizzas } from "../../contexts/pizza";
import { PizzaAPI } from "../../api";

const CreatePizza: React.FC = () => {
  const { options, addPizza } = usePizzas();

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [crustType, setCrustType] = useState("");
  const [toppings, setToppings] = useState(Array<string>());

  const [price, setPrice] = useState("");

  const calculatePrice = useCallback(() => {
    const extraToppings = toppings.length > 3 ? toppings.length - 3 : 0;
    const newPrice: number =
      (options.pizzaSizesPrice[size] || 0) +
      (options.pizzaCrustTypePrice[crustType] || 0) +
      extraToppings * 0.5;

    setPrice(
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(newPrice)
    );
  }, [size, crustType, toppings, options]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  useEffect(() => {
    setToppings([]);
  }, [size]);

  const onChangeToppings = ({
    target: { name, checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (checked && toppings.length < options.pizzaToppingLimit[size]) {
      setToppings((old) => [...old, name]);
    } else {
      setToppings((old) => old.filter((topping) => topping !== name));
    }
  };

  const createPizza = async (e: FormEvent) => {
    e.preventDefault();
    if (!(size && crustType && toppings.length && name)) {
      alert("All values must be filled!");
      return;
    }

    try {
      const { data } = await PizzaAPI.post("/pizzas", {
        name,
        size,
        crustType,
        toppings,
      });

      addPizza(data.pizza);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={createPizza}>
        <Info>
          <span>Create your pizza!</span>
          <InfoAction>
            {price}
            <Button type="submit">Create</Button>
          </InfoAction>
        </Info>
        <Label>
          Name:{" "}
          <Input
            placeholder="Insert a name for your pizza!"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Label>
        <Label>
          Size:
          <Select
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="">select</option>
            {Object.keys(options.pizzaSizesPrice).map((size) => (
              <option key={size}>{size}</option>
            ))}
          </Select>
        </Label>
        <Label>
          Crust:
          <Select
            value={crustType}
            onChange={(event) => setCrustType(event.target.value)}
          >
            <option value="">select</option>
            {Object.keys(options.pizzaCrustTypePrice).map((size) => (
              <option key={size}>{size}</option>
            ))}
          </Select>
        </Label>
        <Checkbox>
          Ingredients:
          <CheckboxItens>
            {Object.keys(options.pizzaToppings).map((topping) => (
              <CheckboxLabel key={topping}>
                <input
                  type="checkbox"
                  name={topping}
                  onChange={onChangeToppings}
                  checked={toppings.includes(topping)}
                />
                <span>{topping}</span>
              </CheckboxLabel>
            ))}
          </CheckboxItens>
        </Checkbox>
      </Form>
    </Container>
  );
};

export default CreatePizza;
