class TokenStorage {
  private authToken = "";

  setAuthToken = (token: string) => {
    this.authToken = token;
  };
  getAuthToken = () => this.authToken;
}

export const tokenStorage = new TokenStorage();
