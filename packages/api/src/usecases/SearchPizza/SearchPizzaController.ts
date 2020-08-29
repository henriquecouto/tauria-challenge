import { Request, Response } from "express";
import { SearchPizzaUseCase } from "./SearchPizzaUseCase";

export class SearchPizzaController {
  constructor(private searchPizzasUseCase: SearchPizzaUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.params;
    try {
      const pizzas = await this.searchPizzasUseCase.run(name);
      return response.status(201).json(pizzas);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
