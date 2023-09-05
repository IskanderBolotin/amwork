import axios from "axios";
import { TodosType } from "#types/task";

export type ServicesFunction<P> = (params?: P) => TodosType[];

export type MetaServisesType = {
  page: number;
  limit: number;
};

export const loadTodos = async ({ page, limit }: MetaServisesType) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
    params: {
      _page: page,
      _limit: limit
    },
  });
  return response;
};
