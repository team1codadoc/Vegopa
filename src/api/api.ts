import axios, { AxiosInstance } from "axios";

export type FoodType = {
  _id: number;
  title: string;
  image: string;
};

export default class Request {
  public req: AxiosInstance;
  constructor(domain: string) {
    this.req = axios.create({
      baseURL: domain,
    });
  }

  reqFoodAPI = () => this.req.get<{ foods: FoodType[] }>("/api/food");
}
