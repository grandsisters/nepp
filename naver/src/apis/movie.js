import axios from "axios";

export const getMovieList = async (params) => {
  const result = await axios.get("v1/search/movie.json", {
    headers: { "X-Naver-Client-Id": "6YAG7XSslp4VZ4yRmaIA", "X-Naver-Client-Secret": "6WIqDiVobU" },
    params,
  });

  return result.data;
};
