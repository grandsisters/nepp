import axios from "axios";

export const naverAxios = axios.create({
  baseURL: "https://openapi.naver.com",
  header: { "X-Naver-Client-Id": "6YAG7XSslp4VZ4yRmaIA", "X-Naver-Client-Secret": "6WIqDiVobU" },
});
