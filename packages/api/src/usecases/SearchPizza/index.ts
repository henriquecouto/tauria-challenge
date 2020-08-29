import { MongoPizzasRepository } from "../../repositories/implementations/MongoPizzasRepository";
import { SearchPizzaUseCase } from "./SearchPizzaUseCase";
import { SearchPizzaController } from "./SearchPizzaController";

const mongoPizzasRepository = new MongoPizzasRepository();

const searchPizzaUseCase = new SearchPizzaUseCase(mongoPizzasRepository);

const searchPizzaController = new SearchPizzaController(searchPizzaUseCase);

export { searchPizzaUseCase, searchPizzaController };
