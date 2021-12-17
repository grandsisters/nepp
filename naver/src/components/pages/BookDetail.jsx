import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookInfo } from "../../apis/book";
import styled from "styled-components";

const BookDetail = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState({});

  const init = async () => {
    const params = { d_isbn: isbn };
    const result = await getBookInfo(params);
    setBook(result.items[0]);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <a href={book.link} target={"_blank"} rel="noreferrer" key={book.link}>
        <Image src={book.image} alt="js" />
        <p>{book.title}</p>
      </a>
    </>
  );
};

const Image = styled.img`
  width: 100%;
  margin-top: 5px;
`;

export default BookDetail;
