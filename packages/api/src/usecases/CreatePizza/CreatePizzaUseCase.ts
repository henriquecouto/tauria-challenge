import { IPizzasRepository } from "../../repositories/IPizzasRepository";
import { ICreatePizzaRequestDTO } from "./CreatePizzaDTO";
import { Pizza } from "../../entities/Pizza";
import pizzaOptions from "../../config/options.json";

export class CreatePizzaUseCase {
  constructor(private pizzasRepository: IPizzasRepository) {}

  async run(data: ICreatePizzaRequestDTO) {
    const pizzaNameAlreadyExists = await this.pizzasRepository.findByName(
      data.name
    );

    if (!data.name || !data.size || !data.toppings || !data.crustType) {
      throw new Error("All values must be filled!");
    }

    if (!pizzaOptions.pizzaSizes[data.size]) {
      throw new Error("Invalid pizza size!");
    }

    if (!pizzaOptions.pizzaCrustType[data.crustType]) {
      throw new Error("Invalid pizza crust type!");
    }

    for (let toppingIndex in data.toppings) {
      const topping = data.toppings[toppingIndex];
      if (!pizzaOptions.pizzaToppings[topping]) {
        throw new Error(`Invalid pizza topping ${topping}!`);
      }
    }

    if (pizzaNameAlreadyExists) {
      throw new Error("Pizza name already exists!");
    }

    const pizza = new Pizza(data);

    await this.pizzasRepository.create(pizza);
  }
}
