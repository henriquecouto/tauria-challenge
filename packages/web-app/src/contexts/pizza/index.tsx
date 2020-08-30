import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { PizzaAPI } from "../../api";

export interface IPizza {
  id: string;
  name: string;
  size: string;
  crustType: string;
  toppings: string[];
  price: number;
}

interface IPizzaContext {
  pizzas: IPizza[];
}

const PizzasContext = createContext({} as IPizzaContext);

export function usePizzas(): IPizzaContext {
  return useContext(PizzasContext);
}

export const PizzasProvider: React.FC = ({ children }) => {
  const [pizzas, setPizzas] = useState([] as IPizza[]);

  const loadPizzas = useCallback(async () => {
    try {
      const { data } = await PizzaAPI.get("/pizzas");
      setPizzas(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadPizzas();
  }, [loadPizzas]);

  return (
    <PizzasContext.Provider value={{ pizzas }}>
      {children}
    </PizzasContext.Provider>
  );
};
