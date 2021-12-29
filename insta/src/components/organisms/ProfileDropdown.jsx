import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgProfile, ImgSaved, ImgSetting, ImgChangeAccount } from "../../assets/images";

const ProfileDropdown = () => {
  const itemList = [
    { link: "/profile", image: <ImgProfile />, name: "프로필" },
    { link: "/profile/saved", image: <ImgSaved />, name: "저장됨" },
    { link: "/accounts/edit", image: <ImgSetting />, name: "설정" },
    { link: "/", image: <ImgChangeAccount />, name: "계정 전환" },
  ];

  return (
    <ProfileWrapper>
      <DropdownMenu>
        {itemList.map((e) => (
          <Link to={e.link}>
            <Item>
              {e.image}
              <ItemName>{e.name}</ItemName>
            </Item>
          </Link>
        ))}
        <HR />
        <Link to="/login">
          <Item>로그아웃</Item>
        </Link>
      </DropdownMenu>
      <LittleThis />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  position: absolute;
  top: 40px;
  right: -8px;
  z-index: 0;
`;

const DropdownMenu = styled.ul`
  width: 230px;
  border-radius: 2%;
  background: #fff;
  position: relative;
  z-index: 1;
`;

const LittleThis = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  top: -8px;
  right: 33px;
  background: #fff;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  height: 37px;

  &:hover {
    background: #dddddd;
    border-radius: 2%;
  }
`;

const HR = styled.hr`
  background: #dbdbdb;
  border: 0;
  height: 1px;
  margin: 0;
`;

const ItemName = styled.li`
  padding-left: 10px;
  font-size: 14px;
`;

export default ProfileDropdown;
