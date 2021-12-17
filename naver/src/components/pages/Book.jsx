import React from "react";
import styled from "styled-components";
import { BookList } from "../organisms/";
import { useState, useEffect } from "react";
import { getBookList } from "../../apis/book";
import qs from "qs";
import { useNavigate, useLocation } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    // search = '?query=책'
    const { query } = qs.parse(search.slice[1]);
    setQuery(query);
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = { query: query };
    const result = await getBookList(params);
    setBookList(result.items);

    const search = qs.stringify({ query });
    console.log(search);
    navigate({ search });
  };

  return (
    <div>
      <h2>책 검색</h2>
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
