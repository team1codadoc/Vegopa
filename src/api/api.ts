/* eslint-disable indent */
import axios, { AxiosInstance } from "axios";
import { tokenStorage } from "../store/token";
import { setInterceptors } from "./interceptors";

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
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  }

  getUserAuthHeader = () => {
    const userAuthToken = tokenStorage.getAuthToken();

    return userAuthToken
      ? {
          Authorization: "Bearer" + userAuthToken,
        }
      : {};
  };

  reqFoodAPI = () => this.req.get<{ foods: FoodType[] }>("/api/food");
  reqLogIn = (body) => this.req.post<userType>("/api/user/login", body);
  reqSignUp = (body: signUpBodyType) => this.req.post("/api/user/signup", body);
  reqEmailValid = (body) => this.req.post("/api/user/emailValid", body);
  reqUserNameValid = (body) => this.req.post("/api/user/accountValid", body);
  reqUserInfo = () =>
    this.req.get(`/api/user/profile/${tokenStorage.getUserName()}`, { headers: this.getUserAuthHeader() });
  reqCreatePartyAPI = (body) => setInterceptors(this.req).post("/api/party", body);
}
