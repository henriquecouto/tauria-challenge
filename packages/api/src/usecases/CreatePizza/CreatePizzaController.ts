import { Request, Response } from "express";
import { CreatePizzaUseCase } from "./CreatePizzaUseCase";

export class CreatePizzaController {
  constructor(private createPizzaUseCase: CreatePizzaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, size, crustType, topping } = request.body;

    try {
      await this.createPizzaUseCase.run({ name, size, crustType, topping });
      return response.status(201).json({ message: "Pizza created." });
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
