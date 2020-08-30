import { Router } from "express";
import { createPizzaController } from "./usecases/CreatePizza";
import { loadPizzasController } from "./usecases/LoadPizzas";
import { searchPizzaController } from "./usecases/SearchPizza";

import optionsPizza from "./config/options.json";

const router = Router();

router.post("/pizzas", (request, response) => {
  return createPizzaController.handle(request, response);
});

router.get("/pizzas", (request, response) => {
  return loadPizzasController.handle(request, response);
});

router.get("/pizzas/:name", (request, response) => {
  return searchPizzaController.handle(request, response);
});

router.get("/config", (request, response) => {
  return response.send(optionsPizza);
});

export { router };
