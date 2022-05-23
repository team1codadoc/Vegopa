class TokenStorage {
  private authToken = localStorage.getItem("token") || "";
  private userName = localStorage.getItem("userName") || "";

  setAuthToken = (token: string) => {
    this.authToken = token;
    localStorage.setItem("token", token);
  };
  setUsername = (name: string) => {
    this.userName = name;
    localStorage.setItem("userName", name);
  };
  getAuthToken = () => this.authToken;
  getUserName = () => this.userName;
}

export const tokenStorage = new TokenStorage();
