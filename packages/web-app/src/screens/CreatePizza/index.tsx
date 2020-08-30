import React from "react";
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

  return (
    <Container>
      <Form>
        <Label>
          Name: <Input placeholder="Insert a name for your pizza!" />
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
        <Checkbox>
          Ingredients:
          <CheckboxItens>
            {Object.keys(options.pizzaToppings).map((topping) => (
              <CheckboxLabel key={topping}>
                <input type="checkbox" />
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
