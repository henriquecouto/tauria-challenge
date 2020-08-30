import axios from "axios";

export const PizzaAPI = axios.create({
  baseURL: "http://localhost:3030",
});
