import { Pizza } from "../entities/Pizza";

export interface IPizzasRepository {
  findByName(name: string): Promise<Pizza[]>;
  create(pizza: Pizza): Promise<void>;
  loadAll(): Promise<Pizza[]>;
}
