import axios from "axios";

export const getBookList = async (params) => {
  const result = await axios.get("v1/search/book.json", {
    headers: { "X-Naver-Client-Id": "6YAG7XSslp4VZ4yRmaIA", "X-Naver-Client-Secret": "6WIqDiVobU" },
    params,
  });

  return result.data;
};

export const getBookInfo = async (params) => {
  const result = await axios.get("/v1/search/book_adv.json", {
    headers: { "X-Naver-Client-Id": "6YAG7XSslp4VZ4yRmaIA", "X-Naver-Client-Secret": "6WIqDiVobU" },
    params,
  });

  return result.data;
};
