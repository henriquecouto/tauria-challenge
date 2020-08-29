import { MongoPizzasRepository } from "../../repositories/implementations/MongoPizzasRepository";
import { CreatePizzaUseCase } from "./CreatePizzaUseCase";
import { CreatePizzaController } from "./CreatePizzaController";

const mongoPizzasRepository = new MongoPizzasRepository();

const createPizzaUseCase = new CreatePizzaUseCase(mongoPizzasRepository);

const createPizzaController = new CreatePizzaController(createPizzaUseCase);

export { createPizzaUseCase, createPizzaController };
