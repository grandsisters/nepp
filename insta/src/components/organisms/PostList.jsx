import React from "react";
import styled from "styled-components";
import { Activity, Message, Comment, Bookmark, Emoticon, ETC } from "../../assets/images";

const PostList = ({ data }) => {
  return (
    <>
      <PostListWrapper>
        <Tag>
          <Author>
            <Img src="" />
            <ID></ID>
          </Author>
          <ETC />
        </Tag>
        <Post></Post>
        <Menu>
          <Activity />
          <Comment />
          <Message />
          <ImgIndexWrapper>
            <ImageIndex />
          </ImgIndexWrapper>
          <Bookmark />
        </Menu>
        <NumberOfLike></NumberOfLike>
        <AuthorComments>asdasdasdasdasd</AuthorComments>
        <More>더 보기</More>
        <MoreComments>댓글 모두 보기</MoreComments>
        <Date></Date>
        <WriteComment>
          <Emoticon />
          <CommentInput placeholder="댓글 달기..." />
          <UploadComment>게시</UploadComment>
        </WriteComment>
      </PostListWrapper>
    </>
  );
};

const PostListWrapper = styled.div`
  width: 614px;
  border: 1px solid #dbdbdb;
  margin-top: 30px;
`;

const Tag = styled.div``;

const Author = styled.div``;

const Img = styled.img``;

const ID = styled.span``;

const Post = styled.img``;

const Menu = styled.div``;

const ImgIndexWrapper = styled.div``;

const ImageIndex = styled.img``;

const NumberOfLike = styled.p``;

const AuthorComments = styled.span``;

const More = styled.span`
  cursor: pointer;
`;

const MoreComments = styled.p`
  cursor: pointer;
`;

const Date = styled.span``;

const WriteComment = styled.div``;

const CommentInput = styled.input``;

const UploadComment = styled.button``;

export default PostList;
