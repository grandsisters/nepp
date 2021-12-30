import React from "react";
import styled from "styled-components";
import { TopNav } from "../organisms";
import { PostList, ShortList, MainRight } from "../organisms/";
import ShortData from "../../data/ShortData";
import PostData from "../../data/PostData";

const Main = () => {
  return (
    <Page>
      <TopNav />
      <PageWrapper>
        <Left>
          <ShortList data={ShortData} />
          <PostList data={PostData} />
        </Left>
        <Right>
          <MainRight />
        </Right>
      </PageWrapper>
    </Page>
  );
};

const Page = styled.div`
  /* background: #fafafa;
  min-height: 100vh;
  min-width: 100vw; */
`;

const PageWrapper = styled.div`
  padding-top: 90px;
  max-width: 975px;
  margin: 0 auto;
  display: flex;
`;

const Left = styled.div`
  margin-right: 28px;
  max-width: 614px;
`;
const Right = styled.div`
  flex: 1;
`;

export default Main;
