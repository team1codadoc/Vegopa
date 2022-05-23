/* eslint-disable indent */
import axios, { AxiosInstance } from "axios";
import { tokenStorage } from "../store/atom";

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
export type signUpBodyType = {
  avatar: string;
  email: string;
  password: string;
  username: string;
};

export default class Request {
  public req: AxiosInstance;
  constructor(domain: string) {
    this.req = axios.create({
      baseURL: domain,
    });
  }

  getUserAuthHeader = () => {
    const userAuthToken = tokenStorage.getAuthToken();

    return userAuthToken
      ? {
          Authorization: "Bearer " + userAuthToken,
        }
      : {};
  };

  reqFoodAPI = () => this.req.get<{ foods: FoodType[] }>("/api/food");
  reqLogIn = (body) => this.req.post<userType>("/api/user/login", body);
  reqSignUp = (body: signUpBodyType) => this.req.post<userType>("/api/user/signup", body);
}
