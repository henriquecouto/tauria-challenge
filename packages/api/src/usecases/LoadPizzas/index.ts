import { MongoPizzasRepository } from "../../repositories/implementations/MongoPizzasRepository";
import { LoadPizzasUseCase } from "./LoadPizzasUseCase";
import { LoadPizzasController } from "./LoadPizzasController";

const mongoPizzasRepository = new MongoPizzasRepository();

const loadPizzasUseCase = new LoadPizzasUseCase(mongoPizzasRepository);

const loadPizzasController = new LoadPizzasController(loadPizzasUseCase);

export { loadPizzasUseCase, loadPizzasController };
