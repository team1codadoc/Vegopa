import { tokenStorage } from "../store/token";

export function setInterceptors(axiosInstance) {
  axiosInstance.interceptors.request.use(
    function (config) {
      // 요청을 보내기 전에 어떤 처리를 할 수 있다.
      const token = tokenStorage.getAuthToken();
      config.headers.Authorization = `Bearer${token}`;
      return config;
    },
    function (error) {
      // 요청이 잘못되었을 때 에러가 컴포넌트 단으로 오기 전에 어떤 처리를 할 수 있다.
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      // 서버에 요청을 보내고 나서 응답을 받기 전에 어떤 처리를 할 수 있다.
      return response;
    },
    function (error) {
      // 응답이 에러인 경우에 미리 전처리할 수 있다.
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
