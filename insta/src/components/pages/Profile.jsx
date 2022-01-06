import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { ImgProfileLogo, ImgSetting } from "../../assets/images";
import { FooterNav } from "../organisms";

const Profile = () => {
  return (
    <ProfileWrapper>
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
        </MyProfile>
        <Others>
          <OtherMenus>
            <Links end to="index">
              <Posts>게시물</Posts>
            </Links>
            <Links to="saved">
              <SavedPost>저장됨</SavedPost>
            </Links>
            <Links to="tagged">
              <Tagged>태그됨</Tagged>
            </Links>
          </OtherMenus>
          <Outlet />
        </Others>
      </Wrapper>
      <FooterNav />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* padding-bottom: 100px; */
  background: #fafafa;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  max-width: 975px;
  margin: 0 auto;
`;

const MyProfile = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
`;

const ProfileLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 40px 120px 40px 80px;
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

const Others = styled.div`
  border-top: 1px solid #dbdbdb;
  padding-top: 0;
`;

const OtherMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled(NavLink)`
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

  &.active {
    font-weight: bold;
    color: black;
    margin-top: -2px;
    border-top: 1px solid black;
    padding-top: 20px;
  }
`;

const spansInOthers = styled.span``;

const Posts = styled(spansInOthers)``;
const SavedPost = styled(spansInOthers)``;
const Tagged = styled(spansInOthers)``;

export default Profile;
