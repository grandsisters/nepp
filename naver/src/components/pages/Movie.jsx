import React from "react";
import styled from "styled-components";
import { MovieList } from "../organisms";
import { useState } from "react";

const Movie = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputValue);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputQuery onChange={(e) => setInputValue(e.target.value)} placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </Form>
      <MovieList />
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
