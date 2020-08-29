import { IPizzasRepository } from "../../repositories/IPizzasRepository";

export class LoadPizzasUseCase {
  constructor(private pizzasRepository: IPizzasRepository) {}

  async run() {
    return await this.pizzasRepository.loadAll();
  }
}
