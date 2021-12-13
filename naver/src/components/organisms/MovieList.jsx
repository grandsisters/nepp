import React from "react";
import styled from "styled-components";

const MovieList = () => {
  return (
    <List>
      <Item>
        <Image src="https://image.newsis.com/2019/05/21/NISI20190521_0000330654_web.jpg?rnd=20190521141743" />
        <Title>기생충</Title>
      </Item>
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

export default MovieList;
