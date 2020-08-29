import { Router } from "express";
import { createPizzaController } from "./usecases/CreatePizza";
import { loadPizzasController } from "./usecases/LoadPizzas";

const router = Router();

router.post("/pizzas", (request, response) => {
  return createPizzaController.handle(request, response);
});

router.get("/pizzas", (request, response) => {
  return loadPizzasController.handle(request, response);
});

export { router };
