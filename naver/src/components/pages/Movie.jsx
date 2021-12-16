import React from "react";
import styled from "styled-components";
import { MovieList, Pagination } from "../organisms";
import { useState, useEffect } from "react";
import { getMovieList } from "../../apis/movie";

const countryList = [
  { code: "all", name: "전체" },
  { code: "KR", name: "한국" },
  { code: "US", name: "미국" },
  { code: "JP", name: "일본" },
  { code: "HK", name: "홍콩" },
  { code: "GB", name: "영국" },
  { code: "FR", name: "프랑스" },
  { code: "ETC", name: "기타" },
];

const Movie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [value, setValue] = useState("");
  const [total, setTotal] = useState(0);
  const [country, setCountry] = useState(countryList[0].code);

  useEffect(() => {
    if (query) {
      searchList();
    }
  }, [page, query, country]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(value);
  };

  const searchList = async () => {
    const start = (page - 1) * 10 + 1;
    const params = { query: query, start: start };
    if (country !== "all") {
      params.country = country;
    }

    setIsLoading(true);
    const result = await getMovieList(params);
    setIsLoading(false);
    setMovieList(result.items);
    setTotal(result.total);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
    setPage(1);
  };

  return (
    <div>
      <h2>영화검색</h2>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => handleCountry(e)}>
          {countryList.map((e) => (
            <option key={e.code} value={e.code}>
              {e.name}
            </option>
          ))}
        </select>
        <InputQuery onChange={handleChange} placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </Form>
      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        <>
          <MovieList data={movieList} />
          <Pagination currentpage={page} total={total} onChange={(page) => setPage(page)} />
        </>
      )}
    </div>
  );
};

const Form = styled.form`
  display: flex;
`;

const InputQuery = styled.input`
  flex: 1;
  margin-right: 10px;
`;

export default Movie;
