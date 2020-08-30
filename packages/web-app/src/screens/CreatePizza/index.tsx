import React, { useState } from "react";
import {
  Container,
  Form,
  Label,
  Input,
  Select,
  Checkbox,
  CheckboxLabel,
  CheckboxItens,
} from "./styles";
import { usePizzas } from "../../contexts/pizza";

const CreatePizza: React.FC = () => {
  const { options } = usePizzas();

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState(Array<string>());

  console.log({ name, size, crust, toppings });

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
            value={crust}
            onChange={(event) => setCrust(event.target.value)}
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
