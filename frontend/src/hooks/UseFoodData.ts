import axios, { type AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { FoodData } from "../interface/FoodData";



const API_URL = "http://localhost:8080";

// função que chama a API
const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(API_URL + "/food");
  return response;
};

// hook customizado
export function useFoodData() {
  return useQuery({
    queryKey: ["food-data"],
    queryFn: async () => {
      const response = await fetchData();
      return response.data;
    },
  });
}