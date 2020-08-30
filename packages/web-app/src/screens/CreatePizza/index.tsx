import React from "react";
import { Container, Form, Label, Input, Select } from "./styles";
import { usePizzas } from "../../contexts/pizza";

const CreatePizza: React.FC = () => {
  const { options } = usePizzas();

  return (
    <Container>
      <Form>
        <Label>
          Name: <Input />
        </Label>
        <Label>
          Size:
          <Select>
            {Object.keys(options.pizzaSizesPrice).map((size) => (
              <option key={size}>{size}</option>
            ))}
          </Select>
        </Label>
        <Label>
          Crust:
          <Select>
            {Object.keys(options.pizzaCrustTypePrice).map((size) => (
              <option key={size}>{size}</option>
            ))}
          </Select>
        </Label>
      </Form>
    </Container>
  );
};

export default CreatePizza;
