import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { TopNav } from "../organisms";
import { ImgProfileLogo, ImgSetting } from "../../assets/images";
import { useState } from "react";
import { FooterNav } from "../organisms";

const Profile = () => {
  const [activePost, setactivePost] = useState(true);
  const [activeSaved, setactiveSaved] = useState(false);
  const [activeTaged, setactiveTaged] = useState(false);

  const handleActivePost = () => {
    setactivePost(true);
    setactiveSaved(false);
    setactiveTaged(false);
  };

  const handleActiveSaved = () => {
    setactivePost(false);
    setactiveSaved(true);
    setactiveTaged(false);
  };

  const handleActiveTaged = () => {
    setactivePost(false);
    setactiveSaved(false);
    setactiveTaged(true);
  };

  return (
    <>
      <TopNav />
      <Wrapper>
        <MyProfile>
          <ProfileLogo src={ImgProfileLogo} />
          <ProfileDiv>
            <IdSetting>
              <MyId>grandsisters</MyId>
              <ProfileSetting>프로필 편집</ProfileSetting>
              <ImgSetting style={{ width: "24px", height: "24px" }} />
            </IdSetting>
            <MyActivity>
              <NumberOfPost>
                게시물 <span>0</span>
              </NumberOfPost>
              <NumberOfFollower>
                팔로워 <span>20</span>
              </NumberOfFollower>
              <NumberOfFollow>
                팔로우 <span>10</span>
              </NumberOfFollow>
            </MyActivity>
            <MyName>김동현</MyName>
          </ProfileDiv>
          <BinDiv></BinDiv>
        </MyProfile>
        <Others>
          <OtherMenus>
            <Links to="/profile" onClick={handleActivePost} active={activePost}>
              <Posts>게시물</Posts>
            </Links>
            <Links to="/profile" onClick={handleActiveSaved} active={activeSaved}>
              <SavedPost>저장됨</SavedPost>
            </Links>
            <Links to="/profile" onClick={handleActiveTaged} active={activeTaged}>
              <Taged>태그됨</Taged>
            </Links>
          </OtherMenus>
          <OtherDiv></OtherDiv>
        </Others>
      </Wrapper>
      <FooterNav />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 90px;
  max-width: 975px;
  margin: 0 auto;
`;

const MyProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const ProfileLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const IdSetting = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MyId = styled.span`
  font-size: 28px;
  font-weight: 32px;
`;

const ProfileSetting = styled.button`
  margin: 0 20px;
  width: 90px;
  height: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-weight: bold;
  background: #fff;
`;

const MyActivity = styled.div``;

const spans = styled.span`
  & + & {
    margin-left: 50px;
  }

  & > span {
    font-weight: bold;
  }
`;

const NumberOfPost = styled(spans)``;
const NumberOfFollower = styled(spans)``;
const NumberOfFollow = styled(spans)``;

const MyName = styled.span`
  font-weight: bold;
`;

const BinDiv = styled.div``;

const Others = styled.div`
  border-top: 1px solid #dbdbdb;
  padding-top: 0;
`;

const OtherMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled(Link)`
  display: flex;
  align-items: center;
  color: #999999;
  font-size: 13px;
  padding: 20px 0;
  font-weight: bold;

  & + & {
    margin-left: 60px;
  }

  &:active {
    color: #dbdbdb;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: bold;
      color: black;
      border-top: 1px solid black;
      padding: 20px 0;
    `}
`;

const spansInOthers = styled.span``;

const Posts = styled(spansInOthers)``;
const SavedPost = styled(spansInOthers)``;
const Taged = styled(spansInOthers)``;
const OtherDiv = styled.div``;

export default Profile;
