import React from "react";
import styled from "styled-components";
import { PostList, ShortList, MainRight } from "../organisms/";
import ShortData from "../../data/ShortData";
import PostData from "../../data/PostData";
import ETCModal from "../organisms/PostList";

const Main = () => {
  return (
    <Page active={ETCModal}>
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
  background: #fafafa;
  height: 100%;
  width: 100%;
`;

const PageWrapper = styled.div`
  padding-top: 90px;
  max-width: 975px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  background: #fafafa;
`;

const Left = styled.div`
  margin-right: 28px;
  max-width: 614px;
`;
const Right = styled.div`
  flex: 1;
`;

export default Main;
