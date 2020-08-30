import { IPizzasRepository } from "../../repositories/IPizzasRepository";
import { ICreatePizzaRequestDTO } from "./CreatePizzaDTO";
import { Pizza } from "../../entities/Pizza";
import pizzaOptions from "../../config/options.json";
import { hasArrayDuplicates } from "../../helpers/hasArrayDuplicates";

export class CreatePizzaUseCase {
  constructor(private pizzasRepository: IPizzasRepository) {}

  async run(data: ICreatePizzaRequestDTO) {
    const pizzaNameAlreadyExists = await this.pizzasRepository.findByName(
      data.name
    );

    if (!data.name || !data.size || !data.toppings || !data.crustType) {
      throw new Error("All values must be filled!");
    }

    if (!pizzaOptions.pizzaSizesPrice[data.size]) {
      throw new Error("Invalid pizza size!");
    }

    if (!pizzaOptions.pizzaCrustTypePrice[data.crustType]) {
      throw new Error("Invalid pizza crust type!");
    }

    if (data.toppings.length > pizzaOptions.pizzaToppingLimit[data.size]) {
      throw new Error("Ingredients limit reached!");
    }

    for (let toppingIndex in data.toppings) {
      const topping = data.toppings[toppingIndex];
      if (!pizzaOptions.pizzaToppings[topping]) {
        throw new Error(`Invalid pizza topping ${topping}!`);
      }
    }

    if (hasArrayDuplicates(data.toppings)) {
      throw new Error("You can't repeat ingredients!");
    }

    if (pizzaNameAlreadyExists) {
      throw new Error("Pizza name already exists!");
    }

    const pizza = new Pizza(data);
    pizza.price = Pizza.calculatePrice(
      pizzaOptions.pizzaSizesPrice[data.size],
      pizzaOptions.pizzaCrustTypePrice[data.crustType],
      data.toppings.length > 3 ? data.toppings.length - 3 : 0
    );

    await this.pizzasRepository.create(pizza);
    return pizza;
  }
}
