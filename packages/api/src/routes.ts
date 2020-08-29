import { Router } from "express";
import { createPizzaController } from "./usecases/CreatePizza";

const router = Router();

router.post("/pizzas", (request, response) => {
  return createPizzaController.handle(request, response);
});

export { router };
