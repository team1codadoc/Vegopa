import axios, { AxiosInstance } from "axios";
import { setInterceptors } from "./interceptors";

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
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  }

  reqFoodAPI = () => this.req.get<{ foods: FoodType[] }>("/api/food");
  reqCreatePartyAPI = (body) => setInterceptors(this.req).post("/api/party", body);
}
