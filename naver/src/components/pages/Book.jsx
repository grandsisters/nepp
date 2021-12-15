import React from "react";
import styled from "styled-components";
import { BookList } from "../organisms/";
import { useState } from "react";
import { getBookList } from "../../apis/book";

const Book = () => {
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = { query: query };
    const result = await getBookList(params);
    setBookList(result.items);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputQuery onChange={(e) => setQuery(e.target.value)} placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </Form>
      <BookList data={bookList} />
    </div>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px;
`;

const InputQuery = styled.input`
  flex: 1;
  margin-right: 10px;
`;

export default Book;
