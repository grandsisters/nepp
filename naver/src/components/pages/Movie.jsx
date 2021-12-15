import React from "react";
import styled from "styled-components";
import { MovieList, Pagination } from "../organisms";
import { useState, useEffect } from "react";
import { getMovieList } from "../../apis/movie";

const Movie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [value, setValue] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (query) {
      searchList();
    }
  }, [page, query]);

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
    setIsLoading(true);
    const result = await getMovieList(params);
    setIsLoading(false);
    setMovieList(result.items);
    setTotal(result.total);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
