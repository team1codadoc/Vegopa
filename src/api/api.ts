import axios, { AxiosInstance } from "axios";

export type FoodType = {
  _id: number;
  title: string;
  image: string;
};
export type userType = {
  user: {
    avatar: string;
    email: string;
    token: string;
    username: string;
  };
};

export default class Request {
  public req: AxiosInstance;
  constructor(domain: string) {
    this.req = axios.create({
      baseURL: domain,
    });
  }

  reqFoodAPI = () => this.req.get<{ foods: FoodType[] }>("/api/food");
  reqLogIn = (body) => this.req.post<userType>("/api/user/login", body);
}
