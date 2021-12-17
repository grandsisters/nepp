import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BookList = ({ data }) => {
  console.log(data);
  return (
    <List>
      {data.map((e) => (
        <a href={e.link} target={"_blank"} rel="noreferrer" key={e.link}>
          <Item>
            <Link to={`/book/${e.isbn.split(" ")[1]}`}>
              <Image src={e.image} />
            </Link>

            {/* <Title>{e.title}</Title> */}
            {/* b태그를 없앨수있지만 해킹 위험이 있음 */}
            <Title dangerouslySetInnerHTML={{ __html: e.title }} />
          </Item>
        </a>
      ))}
    </List>
  );
};

const List = styled.div`
display: grid
grid-template-columns: 1fr 1fr;
grid-gap: 10px;
`;

const Item = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.p``;

export default BookList;
