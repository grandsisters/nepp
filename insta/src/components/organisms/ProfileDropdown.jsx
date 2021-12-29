import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgProfile, ImgSaved, ImgSetting, ImgChangeAccount } from "../../assets/images";

const ProfileDropdown = () => {
  return (
    <Container>
      <ProfileWrapper>
        <DropdownMenu>
          <MyProfileWrapper>
            <ImgProfile width="16" height="16" />
            <MyProfile>프로필</MyProfile>
            <LittleThis />
          </MyProfileWrapper>
          <SavedWrapper>
            <ImgSaved />
            <Saved>저장됨</Saved>
          </SavedWrapper>
          <SettingWrapper>
            <ImgSetting />
            <Setting>설정</Setting>
          </SettingWrapper>
          <ChangeAccountWrapper>
            <ImgChangeAccount />
            <ChangeAccount>계정 전환</ChangeAccount>
          </ChangeAccountWrapper>
          <LogoutWrapper>
            <Logout>로그아웃</Logout>
          </LogoutWrapper>
        </DropdownMenu>
      </ProfileWrapper>
    </Container>
  );
};

const Container = styled.div``;

const ProfileWrapper = styled.div``;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 40px;
  right: -8px;
  width: 230px;
  height: 190px;
  border-radius: 2%;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);

  padding: 0;
  background: white;
`;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  height: 37px;

  &:hover {
    background: #dddddd;
    border-radius: 2%;
    & > * {
      background: #dddddd;
    }
  }
`;

const MyProfileWrapper = styled(MenuDiv)``;
const SavedWrapper = styled(MenuDiv)``;
const SettingWrapper = styled(MenuDiv)``;
const ChangeAccountWrapper = styled(MenuDiv)``;
const LogoutWrapper = styled(MenuDiv)`
  border-top: 1px solid #dbdbdb;
`;

const list = styled.li`
  padding-left: 10px;
  font-size: 14px;
`;

const MyProfile = styled(list)``;
const Saved = styled(list)``;
const Setting = styled(list)``;
const ChangeAccount = styled(list)``;
const Logout = styled(list)``;

const LittleThis = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  /* border: 1px solid black; */
  transform: rotate(45deg);
  top: -10px;
  right: 30px;
  z-index: 1;
  box-shadow: -1px -1px 0 0 rgb(0 0 0 / 10%);
  background: #fff;
`;

export default ProfileDropdown;
