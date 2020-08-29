import { LoadPizzasUseCase } from "./LoadPizzasUseCase";
import { Request, Response } from "express";

export class LoadPizzasController {
  constructor(private loadPizzasUseCase: LoadPizzasUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const pizzas = await this.loadPizzasUseCase.run();
      return response.status(201).json(pizzas);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
