import { v4 } from "uuid";
export class Pizza {
  public readonly id: string;
  public readonly name: string;

  public size: string;
  public crustType: string;
  public toppings: string[];
  public price?: number;

  constructor(props: Omit<Pizza, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}
