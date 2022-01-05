import React from "react";
import styled from "styled-components";
import { ImgActivity, ImgMessage, ImgComment, ImgBookmark, ImgEmoticon } from "../../assets/images";
import { PostImageList, ModalPostList } from ".";

const PostList = ({ data }) => {
  const handleComment = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      {data.map(({ id, created_at, content, user, imageList, likes, replys }) => (
        <PostListWrapper key={id}>
          <Tag>
            <Author>
              <Img src={user.profileImage} />
              <ID>{user.name}</ID>
            </Author>
            <ETCWrapper>
              <ModalPostList />
            </ETCWrapper>
          </Tag>
          <PostImageList data={imageList} />
          <BottomWrapper>
            <Menu>
              <ACM>
                <ImgActivity style={{ cursor: "pointer" }} />
                <ImgComment style={{ cursor: "pointer" }} />
                <ImgMessage style={{ cursor: "pointer" }} />
              </ACM>
              <ImgIndexWrapper>
                <ImageIndex />
              </ImgIndexWrapper>
              <ImgBookmark style={{ cursor: "pointer" }} />
            </Menu>
            <Comments>
              <NumberOfLike>좋아요 {likes.total}개</NumberOfLike>
              <AuthorWrapper>
                <ID>{user.name}</ID>
                <AuthorComments>{content}</AuthorComments>
                <More>더 보기</More>
              </AuthorWrapper>
              <MoreComments>댓글 {replys.total}개 모두 보기</MoreComments>
              {replys.items.map((e, i) => (
                <CommentWrapper key={i}>
                  <CommentName>{e.user.name}</CommentName>
                  <CommentContent>{e.content}</CommentContent>
                </CommentWrapper>
              ))}
              <Date>{created_at}</Date>
            </Comments>
          </BottomWrapper>
          <WriteComment>
            <ImgEmoticon style={{ cursor: "pointer" }} />
            <CommentInput rows={1} placeholder="댓글 달기..." />
            <UploadComment onClick={handleComment}>게시</UploadComment>
          </WriteComment>
        </PostListWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const PostListWrapper = styled.div`
  width: 614px;
  border: 1px solid #dbdbdb;
  margin-top: 30px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 25px;
  margin-right: 12px;
`;

const ID = styled.span`
  font-weight: bold;
`;

const ETCWrapper = styled.div``;

const BottomWrapper = styled.div`
  padding: 5px;
`;

const Menu = styled.div`
  padding: 6px 10px;
  display: flex;
  justify-content: space-between;
`;

const ACM = styled.div`
  & > * {
    margin-right: 12px;
  }
`;

const ImgIndexWrapper = styled.div``;

const ImageIndex = styled.img``;

const NumberOfLike = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  & > * {
    padding-bottom: 5px;
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
`;

const AuthorComments = styled.span`
  margin: 0px 5px 0;
`;

const More = styled.span`
  cursor: pointer;
  color: rgb(167, 159, 149);
`;

const MoreComments = styled.span`
  width: 155px;
  cursor: pointer;
  color: rgb(167, 159, 149);
`;

const CommentWrapper = styled.div`
  font-size: 15px;
`;

const CommentName = styled.span`
  font-weight: bold;
`;

const CommentContent = styled.span`
  margin-left: 5px;
`;

const Date = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;

const WriteComment = styled.form`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #dbdbdb;
`;

const CommentInput = styled.textarea`
  padding-left: 10px;
  flex: 1;
  border: none;
  background: none;
  resize: none;
  overflow: hidden;
`;

const UploadComment = styled.button`
  border: none;
  color: rgb(54, 172, 250);
  font-weight: bold;
  font-size: 15px;
  background: none;
`;

export default PostList;
