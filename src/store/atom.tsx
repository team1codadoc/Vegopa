import { atom } from "recoil";

export const LogInToken = atom({
  key: "LogInToken",
  default: "",
});

class TokenStorage {
  private authToken = "";

  setAuthToken = (token: string) => {
    this.authToken = token;
  };
  getAuthToken = () => this.authToken;
}

export const tokenStorage = new TokenStorage();
