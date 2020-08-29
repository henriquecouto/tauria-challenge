import { IPizzasRepository } from "../../repositories/IPizzasRepository";

export class SearchPizzaUseCase {
  constructor(private pizzasRepository: IPizzasRepository) {}

  async run(name: string) {
    return await this.pizzasRepository.findByName(name);
  }
}
