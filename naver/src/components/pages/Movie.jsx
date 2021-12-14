import React from "react";
import styled from "styled-components";
import { MovieList } from "../organisms";
import { useState } from "react";
import { getMovieList } from "../../apis/movie";

const Movie = () => {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = { query: query };
    const result = await getMovieList(params);
    setMovieList(result.items);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputQuery onChange={(e) => setQuery(e.target.value)} placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </Form>
      <MovieList data={movieList} />
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
