import styled from "styled-components";

const ProfileTagged = () => {
  return (
    <Wrapper>
      <TaggedImg src="https://cdn1.iconfinder.com/data/icons/instagram-feature-outline/32/icon_instagram-35-512.png" />
      <TaggedText1>내가 나온 사진</TaggedText1>
      <TaggedText2>사람들이 회원님을 사진에 태그하면 태그된 사진이 여기에 표시됩니다.</TaggedText2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TaggedImg = styled.img`
  width: 62px;
  height: 62px;
  margin-top: 60px;
`;

const TaggedText1 = styled.h1``;

const TaggedText2 = styled.p`
  font-size: 14px;
`;
export default ProfileTagged;
