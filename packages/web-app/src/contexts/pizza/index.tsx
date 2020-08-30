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

export interface IOptions {
  pizzaCrustTypePrice: any;
  pizzaSizesPrice: any;
  pizzaToppingLimit: any;
  pizzaToppings: any;
}

interface IPizzaContext {
  pizzas: IPizza[];
  options: IOptions;
}

const PizzasContext = createContext({} as IPizzaContext);

export function usePizzas(): IPizzaContext {
  return useContext(PizzasContext);
}

export const PizzasProvider: React.FC = ({ children }) => {
  const [pizzas, setPizzas] = useState([] as IPizza[]);
  const [options, setOptions] = useState({} as IOptions);

  const loadPizzas = useCallback(async () => {
    try {
      const { data } = await PizzaAPI.get("/pizzas");
      setPizzas(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadOptions = useCallback(async () => {
    try {
      const { data } = await PizzaAPI.get("/config");
      setOptions(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadPizzas();
  }, [loadPizzas]);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  if (!options.pizzaSizesPrice) {
    return <div />;
  }

  return (
    <PizzasContext.Provider value={{ pizzas, options }}>
      {children}
    </PizzasContext.Provider>
  );
};
