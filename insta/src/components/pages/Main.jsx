import React from "react";
import styled from "styled-components";
import { TopNav } from "../organisms";
import { PostList } from "../organisms/";

const Main = () => {
  return (
    <>
      <TopNav />
      <PageWrapper>
        <Left>
          <PostList />
        </Left>
        <Right></Right>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  padding-top: 90px;
  max-width: 975px;
  margin: 0 auto;
`;

const Left = styled.div``;
const Right = styled.div``;

export default Main;
