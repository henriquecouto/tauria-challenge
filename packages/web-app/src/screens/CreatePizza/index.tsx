import React, { useState, useEffect } from "react";
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

const CreatePizza: React.FC = () => {
  const { options } = usePizzas();

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [crustType, setCrustType] = useState("");
  const [toppings, setToppings] = useState(Array<string>());

  const [price, setPrice] = useState("");

  const calculatePrice = () => {
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
  };

  useEffect(() => {
    calculatePrice();
  }, [size, crustType, toppings]);

  const onChangeToppings = ({
    target: { name, checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      setToppings((old) => [...old, name]);
    } else {
      setToppings((old) => old.filter((topping) => topping !== name));
    }
  };

  return (
    <Container>
      <Form>
        <Info>
          <span>Create your pizza!</span>
          <InfoAction>
            {price}
            <Button>Create</Button>
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
