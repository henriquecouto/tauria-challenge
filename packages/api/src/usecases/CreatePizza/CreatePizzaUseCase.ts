import { IPizzasRepository } from "../../repositories/IPizzasRepository";
import { ICreatePizzaRequestDTO } from "./CreatePizzaDTO";
import { Pizza } from "../../entities/Pizza";

export class CreatePizzaUseCase {
  constructor(private pizzasRepository: IPizzasRepository) {}

  async run(data: ICreatePizzaRequestDTO) {
    const pizzaNameAlreadyExists = await this.pizzasRepository.findByName(
      data.name
    );

    if(!data.name || !data.size || !data.topping || !data.crustType){
      throw new Error("All values must be filled!")
    }

    if (pizzaNameAlreadyExists) {
      throw new Error("Pizza name already exists!");
    }

    const pizza = new Pizza(data);
    await this.pizzasRepository.create(pizza);
  }
}
