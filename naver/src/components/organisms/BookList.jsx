import React from "react";
import styled from "styled-components";

const BookList = ({ data }) => {
  console.log(data);
  return (
    <List>
      {data.map((e) => (
        <a href={e.link} target={"_blank"} rel="noreferrer" key={e.link}>
          <Item>
            <Image src={e.image} />
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
`;

const Item = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.p``;

export default BookList;
