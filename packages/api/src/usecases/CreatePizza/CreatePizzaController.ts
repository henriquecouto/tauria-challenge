import { Request, Response } from "express";
import { CreatePizzaUseCase } from "./CreatePizzaUseCase";

export class CreatePizzaController {
  constructor(private createPizzaUseCase: CreatePizzaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, size, crustType, toppings } = request.body;

    try {
      const pizza = await this.createPizzaUseCase.run({ name, size, crustType, toppings });
      return response.status(201).json({ message: "Pizza created.", pizza });
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
