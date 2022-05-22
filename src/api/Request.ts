import Request from "./api";

const url = import.meta.env.VITE_API;

if (!url) throw new Error("env 에서 API 를 확인해주세요");

export const requestAPI = new Request(url);
