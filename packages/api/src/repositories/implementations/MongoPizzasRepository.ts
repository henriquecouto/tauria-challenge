import { MongoClient, Db } from "mongodb";

import { IPizzasRepository } from "../IPizzasRepository";
import { Pizza } from "../../entities/Pizza";

export class MongoPizzasRepository implements IPizzasRepository {
  private url = "mongodb://localhost:27018/pizza-creator";
  private db: Db;

  constructor() {
    MongoClient.connect(this.url, (err, client) => {
      this.db = client.db();
    });
  }

  async findByName(name: string): Promise<Pizza> {
    return await this.db.collection("pizzas").findOne({ name });
  }

  async create(data: Pizza): Promise<void> {
    await this.db.collection("pizzas").insertOne(data);
  }

  async loadAll(): Promise<Pizza[]> {
    const pizzas = await this.db.collection("pizzas").find().toArray();
    return pizzas;
  }
}
