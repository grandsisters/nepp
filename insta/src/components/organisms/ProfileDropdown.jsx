import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgProfile, ImgSaved, ImgSetting, ImgChangeAccount } from "../../assets/images";

const ProfileDropdown = ({ onClose, onModal }) => {
  const itemList = [
    { link: "/profile/index", image: <ImgProfile />, name: "프로필" },
    { link: "/profile/saved", image: <ImgSaved />, name: "저장됨" },
    { link: "/setting/edit", image: <ImgSetting />, name: "설정" },
  ];

  return (
    <>
      <div onClick={onClose}>
        <Backdrop />
        <ProfileWrapper>
          <DropdownMenu>
            {itemList.map((e, i) => (
              <Link to={e.link} key={i}>
                <Item>
                  {e.image}
                  <ItemName>{e.name}</ItemName>
                </Item>
              </Link>
            ))}

            <Item onClick={onModal}>
              <ImgChangeAccount />
              <ItemName>계정 전환</ItemName>
            </Item>

            <HR />
            <Link to="/login">
              <Item>로그아웃</Item>
            </Link>
          </DropdownMenu>
          <LittleThis />
        </ProfileWrapper>
      </div>
    </>
  );
};

const ProfileWrapper = styled.div`
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  position: absolute;
  top: 40px;
  right: -8px;
  z-index: 0;
  border-radius: 10px;
`;

const DropdownMenu = styled.ul`
  width: 230px;
  border-radius: 10px;
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

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: default;
`;

export default ProfileDropdown;
